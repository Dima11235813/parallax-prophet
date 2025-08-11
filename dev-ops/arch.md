# Parallax Prophet — Software Architecture (arch.md)

> **Purpose:** This document defines the technical architecture to scaffold the "Parallax Prophet" codebase. It translates the PRD and /prj-mgmt plans into concrete modules, boundaries, contracts, and startup scaffolding so a new repo can be implemented consistently in strict TypeScript.

---

## 1) Architectural Goals & Non‑Goals

### Goals

- Deliver a **browser-native**, **strict TypeScript** game skeleton that cleanly separates **engine (ECS)** from **game content**.
- Make **2D↔3D interplay**, **camera alignment**, and **perspective/scale transfer** first-class systems with tunable, data-driven configs.
- Ensure **testability** (Vitest) and **playable e2e flows** (Playwright) with deterministic seeds wherever possible.
- Provide a **maintainable folder structure**, **clear dependency rules**, and **performance guardrails** (60fps target on mid-range laptops).

### Non‑Goals (Initial)

- Production CI/CD; multiplayer; photo-mode polish; advanced VFX pipelines; full physics authoring tools.

---

## 2) Architectural Style & Principles

- **Entity–Component–System (ECS)** for gameplay: data in components; logic in systems; entities as ids.
- **Clean boundaries**: engine core (render/input/ecs) isolated from game-specific content and assets.
- **Data-driven**: puzzles, perspective locks, input bindings, and tuning params in TS/JSON definitions.
- **Deterministic-by-default**: seeded RNG for gameplay-critical paths; stable simulation order.
- **Test-first contracts**: public APIs documented and covered by unit tests; critical loops smoke-tested via e2e.

---

## 3) Tech Stack (Initial)

- **Language:** TypeScript (strict mode)
- **Build:** Vite (ESM), Node ≥ 18
- **Rendering:** Three.js (3D) + lightweight 2D overlay (HTML Canvas or DOM HUD). Option: react-three-fiber for orchestration.
- **Physics (MVP):** lightweight kinematics; optional Rapier later
- **Audio:** Web Audio API wrapper
- **Tests:** Vitest (unit) + Playwright (e2e)
- **Lint/Format:** ESLint + Prettier

> If npm deps must be minimized (sandbox mode), fall back to raw WebGL + Canvas; the architecture below still applies.

---

## 4) Repository Layout & Boundaries

```
/parallax-prophet
  ├─ src/
  │   ├─ engine/                 # Generic, reusable engine code (no game assumptions)
  │   │   ├─ ecs/                # ECS core: world, entities, components, systems
  │   │   ├─ render/             # Renderers and scene orchestration
  │   │   ├─ input/              # Input map, devices, rebinding
  │   │   ├─ physics/            # Simple kinematics/grounding; adapters
  │   │   ├─ audio/              # SFX/Music wrappers
  │   │   ├─ time/               # Clock, fixed/variable steps
  │   │   ├─ events/             # Event bus (typed)
  │   │   ├─ persistence/        # Save/Load, serialization
  │   │   └─ util/               # Math, rng, types, diagnostics
  │   ├─ game/                   # Game-specific code
  │   │   ├─ systems/            # Camera, Alignment, DimensionToggle, RPG, HUD, etc.
  │   │   ├─ components/         # Data for game entities (tags + data)
  │   │   ├─ scenes/             # Scene loaders, hubs, arenas, boss
  │   │   ├─ content/            # TS/JSON data: levels, PerspectiveLocks, dialog, loot tables
  │   │   ├─ ui/                 # HUD widgets, menus (DOM/Canvas)
  │   │   └─ config/             # Tunables for tolerances, tiers, bindings
  │   ├─ app/                    # Entry points, composition root
  │   │   ├─ main.ts             # Boot + DI wiring
  │   │   └─ App.tsx             # (optional) React host if using R3F/HUD DOM
  │   ├─ tests/                  # Unit tests colocated or here per convention
  │   └─ shared/                 # Types shared across engine/game
  ├─ public/                     # Static assets
  ├─ prj-mgmt/                   # Epics/Features/Stories/Tasks (docs only)
  ├─ vite.config.ts
  ├─ tsconfig.json
  ├─ .eslintrc.cjs  /  .prettierrc
  └─ README.md  /  arch.md  /  prd.md
```

### Dependency Rules

- `src/engine/**` **MUST NOT** import from `src/game/**`.
- `src/game/**` **MAY** import from `src/engine/**` and `src/shared/**`.
- `src/app/**` composes/binds engine + game systems; minimal logic.
- Tests may cross layers but prefer black-box tests at public APIs.

---

## 5) ECS Core: Contracts & Flow

### Core Types

```ts
// engine/ecs/types.ts
export type Entity = number
export interface Component<T> {
  readonly name: string
  defaults(): T
}
export type ReadonlySlice<T> = ReadonlyArray<T>

export interface World {
  create(): Entity
  destroy(e: Entity): void
  add<T>(e: Entity, c: Component<T>, init?: Partial<T>): T
  get<T>(e: Entity, c: Component<T>): T | undefined
  query<Q extends Component<any>[]>(
    ...all: Q
  ): Iterable<[Entity, ...{ [K in keyof Q]: ReturnType<Q[K]['defaults']> }]>
}

export interface SystemCtx {
  world: World
  time: Time
  events: EventBus
  rng: RNG
}
export type System = (ctx: SystemCtx) => void
```

### World & Loop

- **Fixed simulation step** (e.g., 60 Hz) with accumulator; rendering interpolates.
- **System order** is explicit and stable: input → movement/physics → camera → alignment → scale commit → UI/HUD.

```ts
// engine/time/loop.ts
export function run(main: Main) {
  let acc = 0
  const dt = 1 / 60
  let last = performance.now()
  function frame(now: number) {
    const clamped = Math.min(0.25, (now - last) / 1000)
    last = now
    acc += clamped
    while (acc >= dt) {
      main.update(dt)
      acc -= dt
    }
    main.render(acc / dt)
    requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)
}
```

---

## 6) Game-Critical Systems (MVP)

### 6.1 Camera & Alignment System

**Responsibilities:**

- Maintain camera modes: `Side2D`, `OverShoulder3D`, `AlignmentView`.
- Display **reticle**; compute angle/FOV deltas to anchors; emit `AlignmentStateChanged`.
- Expose **tunable tolerances** and **steadiness window** (ms) to qualify readiness.

**Key Types**

```ts
// shared/perspective.ts
export type ScaleTier = 'S' | 'M' | 'L' | 'XL'

export interface PerspectiveAnchor {
  id: string
  position: [number, number, number]
}
export interface PerspectiveLock {
  id: string
  fromEntity: string // eid string tag
  toAnchor: string // matches anchor.id
  minFOV: number
  maxAngleDelta: number // radians
  steadinessMs: number // dwell time before ready
  scaleTier: ScaleTier
  onLock: EventSpec[] // declarative triggers
}
```

**Events**

```ts
// engine/events/events.ts
export interface Events {
  AlignmentReady: { lockId: string }
  ScaleCommitted: { fromEntity: string; toAnchor: string; tier: ScaleTier }
}
```

**System Notes**

- Use dot products / atan2 for angle checks; FOV bounds per mode.
- Provide **debug overlays** (gizmos) gated by a `DEV_MODE` flag.

### 6.2 Scale Transfer System

**Responsibilities:**

- On confirm (input), when `AlignmentReady`, quantize perceived size → `ScaleTier` and **apply transform atomically**.
- **Persist** scale state; **emit** `ScaleCommitted` with payload.

**Design Considerations:**

- Interpolate scale to reduce popping; clamp min/max.
- Idempotency: repeated commits with same tier should be no-ops.

### 6.3 Dimension Toggle System

**Responsibilities:**

- Switch between 2D and 3D modes with **momentum mapping** and **rule checks** (cooldowns, zones).

**Momentum Mapping:**

- 3D → 2D: project velocity to camera-right axis; preserve horizontal speed; discard depth.
- 2D → 3D: lift planar velocity into world-space aligned with camera facing.

**Rule Evaluation:**

- Query `NoToggleZone` component; check `cooldownUntil` timestamps; expose feedback events.

### 6.4 Input & HUD

- Input map with **rebinding**; persist bindings in localStorage.
- HUD shows **alignment readiness** and confirm prompts; accessible color states.

---

## 7) Components (Initial Set)

```
Transform { pos: vec3, rot: quat, scale: vec3 }
CameraTag { mode: 'Side2D' | 'OverShoulder3D' | 'AlignmentView' }
PlayerTag { }
Velocity { v: vec3 }
Grounding { onGround: boolean }
AlignmentProbe { currentLockId?: string, readyAt?: number }
Scalable { tier?: ScaleTier }
NoToggleZone { reason?: string }
Interactable { prompt: string }
Persisted { id: string }  // stable id for save/load
```

> **Convention:** Tags are zero-data components (or minimal flags). Data components contain state used by systems.

---

## 8) Data & Content Pipeline

- Content stored as **TS modules** (typed) or JSON with Zod validation.
- Level files bundle: spawn tables (entities with components), anchors, perspective locks, NPCs, pickups.

**Level Module Example**

```ts
// game/content/levels/tutorial.ts
import { PerspectiveLock } from '@/shared/perspective'

export const anchors = [{ id: 'door-socket', position: [10, 2, -5] }] as const

export const locks: PerspectiveLock[] = [
  {
    id: 'ladder-to-door',
    fromEntity: 'toy-ladder',
    toAnchor: 'door-socket',
    minFOV: 25,
    maxAngleDelta: 0.08,
    steadinessMs: 350,
    scaleTier: 'L',
    onLock: [{ type: 'OpenDoor', doorId: 'tutorial-door' }],
  },
]
```

**Validation**

- At load time, validate content schemas in dev builds; strip in prod.

---

## 9) Eventing & Messaging

- Typed event bus with compile-time mapping of event names → payload types.
- Systems **publish/subscribe**; avoid direct system-to-system imports.

```ts
// engine/events/bus.ts
export type EventMap = { [type: string]: object }
export interface EventBus<M extends EventMap = any> {
  on<K extends keyof M>(type: K, fn: (e: M[K]) => void): () => void
  emit<K extends keyof M>(type: K, ev: M[K]): void
}
```

---

## 10) Persistence (Save/Load)

- **LocalStorage** (MVP) with versioned snapshots.
- Serialize `Persisted` entities: component subsets only (Transform, Scalable, inventory, quest flags).
- Include **content version** and **migrations** on load.

---

## 11) Rendering Strategy

- **3D:** Three.js scene with root graph owned by engine; game systems request nodes via factory.
- **2D/HUD:** DOM or Canvas overlay decoupled from 3D; subscribe to events/state.
- **Cameras:** maintain two logical cameras; AlignmentView can reuse 3D cam with constrained FOV and post-process hinting (optional).

**Seams for 2D↔3D:**

- Side2D uses orthographic camera aligned to platform plane; 3D uses perspective camera; toggle swaps active camera and rebinds controls.

---

## 12) Physics & Motion (MVP)

- Kinematic controller for player; AABB ground checks; slope handling minimal.
- Later: adapter to Rapier if needed; retain same `Velocity/Grounding` contracts.

---

## 13) Configuration & Tuning

- Central `game/config` with typed objects and environment switches.

```ts
export const CAMERA = { fov: 60, alignFov: 30 } as const
export const ALIGNMENT = { toleranceRad: 0.08, steadinessMs: 300 } as const
export const TOGGLE = { cooldownMs: 400 } as const
```

---

## 14) Testing Strategy

- **Unit (Vitest):**
  - Math utilities (angles, projections, tier quantization)
  - Event bus contracts
  - Momentum mapping 3D↔2D (property-style checks where feasible)

- **Integration:**
  - System sequences over a fake world (headless)

- **E2E (Playwright):**
  - Boot tutorial scene → enter AlignmentView → achieve readiness → confirm scale → door opens → save → reload state

> Provide headless `World` implementation to run systems without WebGL.

---

## 15) Performance & Diagnostics

- **Targets:** 60fps; frame > 16.6ms flagged.
- **Budgets:** draw calls (≤ \~200 in MVP scenes), tris (≤ \~250k), texture memory (≤ \~256MB temporary), postFX off by default.
- **Culling:** frustum + coarse cell visibility; freeze static nodes.
- **Profiling Hooks:** simple per-system timers; dev overlay with last-frame ms per system.

---

## 16) Accessibility & UX

- Color-safe HUD states; caption support for critical audio cues.
- FOV slider; motion intensity toggle (reduce camera shake/DOF/tilt-shift in accessibility mode).
- Remappable inputs with conflict resolution.

---

## 17) Security & Safety

- No remote code execution; asset loading from `public/` or vetted URLs only.
- Clamp serialized data; validate content; avoid `eval`.

---

## 18) Boot Sequence (Composition Root)

```ts
// app/main.ts
import { createWorld } from '@/engine/ecs/world'
import { makeEventBus } from '@/engine/events/bus'
import { makeRng } from '@/engine/util/rng'
import { installSystems } from '@/game/systems/install'
import { run } from '@/engine/time/loop'

const world = createWorld()
const events = makeEventBus()
const rng = makeRng(12345) // TODO: seed from save or URL param

const main = installSystems({ world, events, rng })
run(main)
```

`installSystems` wires concrete game systems in order; returns `{ update(dt), render(alpha) }`.

---

## 19) System Wiring Order (Initial)

1. InputGather
2. Movement & Grounding
3. DimensionToggle
4. CameraController
5. AlignmentProbe
6. ScaleTransfer
7. SceneLogic (puzzle triggers)
8. UI/HUD Sync
9. Render3D → RenderHUD

> Order is part of correctness. Capture in a single file with comments and tests.

---

## 20) Scaffolding Checklist (Repo Init)

- [ ] `vite` TS template; strict TS flags; path aliases
- [ ] Engine ECS skeleton + World + typed EventBus
- [ ] Systems stubs: Camera, Alignment, ScaleTransfer, DimensionToggle, HUD
- [ ] Example level content with one `PerspectiveLock`
- [ ] HUD overlay rendering and input bindings
- [ ] Vitest config + example unit tests
- [ ] Playwright config + single happy-path test
- [ ] README.md updated with run/build/test instructions
- [ ] This `arch.md` added to root; linked from README

---

## 21) Risks & Mitigations

- **Feel tuning risk** (tolerance, steadiness): expose config + debug overlay; add telemetric counters in dev.
- **Performance risk**: start with minimal materials, no heavy postFX; budget checks in PR template.
- **Tooling risk (Windows paths)**: test scripts on Windows/macOS; avoid shell-specific syntax.

---

## 22) Roadmap Tie‑In (Sprint 1)

This architecture directly supports Sprint 1 epics:

- **01 Camera & Perspective System** → CameraController, AlignmentProbe, ScaleTransfer
- **02 Dimension Toggle System** → DimensionToggle + momentum mapping
- **03 Engine/ECS & Project Skeleton** → ECS core, loop, events, render plumbing
- **04 UI/HUD & Controls** → Input map/rebinding + readiness indicators

Each epic decomposes into features/stories/tasks under `/prj-mgmt` with links back to the relevant modules above.

---

## 24) Appendix: Minimal Public APIs to Freeze (v0)

- `engine/ecs`: `World`, `Component<T>`, `System`, `query` API
- `engine/events`: `EventBus` typed contracts
- `shared/perspective`: `PerspectiveLock`, `ScaleTier`
- `game/systems/install`: system order and DI surface

> These surfaces should be **stable and documented**; internal details can evolve without breaking tests.
