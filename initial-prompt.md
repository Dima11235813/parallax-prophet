# Initial Prompt ChatGPT-5

Write a prompt for an ai agent to create a visually stunning video game that has recognizable elements from popular games that already exist as well as a innovative and novel functionality that make it feel original and new. It should have elements of interplay between 2D and 3D functionality. It should make interesting use of point of view perspective and the size of objects in the world. It should include a role playing aspect to it, and additionally it should all run in a browser using a strongly typed typescript code foundation.

## Plan Output

Here’s a copy-paste prompt you can give an AI agent. It’s tight, specific, and leaves room for creative execution while nailing your requirements.

---

# Build Brief: “Parallax Prophet” — A 2D↔3D Browser RPG With Perspective & Scale Puzzles

You are an expert game developer and technical director. Create a visually stunning, performant **browser game** with a **strongly typed TypeScript** foundation. The game must blend **2D and 3D interplay**, use **point-of-view and object size** as core mechanics, include **RPG systems**, and feel **fresh and original** while tastefully nodding to popular genres. Evoke, don’t copy—no infringing assets or names.

## Vision & Pillars

* **Interplay of Dimensions:** The world has layered “planes.” Players can **flip, fold, or align** a 2D layer with a 3D space to open paths, bridge gaps, or reveal secrets (think Fez/Paper-to-Pop-up vibes, but new).
* **Perspective as Power:** Camera POV and spatial alignment **change object size and behavior** (à la forced perspective). If the player lines up a small object with a distant socket, it **snaps to that size** and becomes usable.
* **RPG Depth:** Lightweight but meaningful **stats**, **abilities**, **quests**, **dialogue**, **inventory**, and **progression**. Choices unlock dimension-bending perks (e.g., longer “alignment lock,” time-limited “paper-tilt,” or “scale anchor”).
* **Recognizable, Not Derivative:** Borrow broad vibes (platforming clarity, puzzle readability, cozy RPG loops, boss arenas), but ensure **novel mechanics** and **original art direction**.

## Core Gameplay

* **Moment-to-Moment:** Explore semi-open levels; swap between **2D side-scroll** and **3D free-movement** modes. Puzzles require **camera alignment**, **parallax pairing**, and **scale transference** (make a toy ladder big enough to climb by aligning it with a far wall).
* **Progression Loop:** Explore → solve perspective/scale puzzles → defeat a zone guardian → unlock a dimension rune → expand move-set & narrative hubs.
* **Combat (lightweight):** Timing-based dodges, stance swaps, and “dimensional interrupts” that briefly flatten or inflate enemies to expose weak points.
* **Boss Design:** Each boss demands **one new dimension trick** (e.g., rotate the world so the boss’s shadow becomes a bridge; shrink projectiles by reframing the camera).

## Aesthetic & UX

* **Look:** Bold shapes, stylized materials, **clean silhouettes readable in both 2D and 3D**. Use depth-of-field and tilt-shift sparingly to hint at puzzle solutions.
* **Clarity:** In both modes, show **diegetic guides** (parallax glints, alignment rings, “snap” reticles) so players understand how perspective affects scale.
* **Accessibility:** Remappable controls, color-safe palette, captions, camera comfort (FOV slider, motion intensity toggle).

## Tech Stack (Browser-Native, Strongly Typed)

* **Language:** **TypeScript** end-to-end, strict mode on.
* **Rendering:** **Three.js** or **WebGPU via wgpu-web** for 3D; **PixiJS** or **HTML Canvas** layer for 2D overlays; **react-three-fiber** acceptable for scene orchestration.
* **Architecture:** **ECS** (e.g., bitecs) for gameplay; modular systems for input, camera, physics, puzzle logic, combat, UI, audio.
* **Tooling:** Vite, ESLint, Prettier, Vitest/Playwright, commit hooks. Asset pipeline for glTF + sprite atlases.
* **Performance targets:** 60fps on mid-range laptops; mobile-friendly fallback (reduced effects). Triangle/overdraw budgets; static/dynamic batching; frustum & occlusion culling.

## Must-Have Systems

* **Camera & Perspective System:**

  * Modes: side-on 2D, over-the-shoulder 3D, “alignment view.”
  * **Scale Transfer:** When alignment reticle overlaps target socket, commit a **discrete scale state** (quantized to designable tiers).
  * **Puzzle DSL:** Author puzzles declaratively:

    ```ts
    type PerspectiveLock = {
      id: string;
      fromEntity: string; // object to scale
      toAnchor: string;   // world socket
      minFOV: number;
      maxAngleDelta: number; // tolerance
      scaleTier: "S" | "M" | "L" | "XL";
      onLock: EventSpec[];
    }
    ```
* **Dimension Toggle System:** Smooth, readable transitions between 2D and 3D; preserves momentum sensibly.
* **RPG System:** Stats (Might, Finesse, Insight), equipment, skill tree for dimension abilities, quest log, dialogue trees (JSON/TS definitions).
* **Save/Load:** Local storage + export/import JSON; deterministic seeds for puzzles.
* **Content Pipeline:** Level files in JSON/TS with spawn tables, puzzle specs, NPCs, and boss scripts.

## Deliverables

1. **Playable vertical slice** (one hub + two puzzle arenas + one boss) in the browser.
2. **Source repo** with:

   * `/engine` (ECS, render, physics, input, audio, camera, puzzle)
   * `/game` (scenes, quests, entities, loot tables)
   * `/ui` (HUD, menus, inventory, dialogue)
   * `/assets` (placeholders OK; no copyrighted IP)
   * `/tests` (unit + e2e for core systems & one puzzle)
3. **Docs:** README (run/build), design overview, **Puzzle Authoring Guide**, **Camera & Scale Cookbook** (recipes), **Performance Checklist**.
4. **Automated tests:** Vitest for systems; Playwright for a full puzzle flow (align → scale → traverse → save).

## Acceptance Criteria

* Runs at `localhost:5173` (Vite). No server required.
* Toggle between 2D and 3D at will (within designer rules).
* At least **three** puzzle types leveraging **perspective/scale** (e.g., bridge misalignment, key resizing, shadow-to-solid).
* One boss that **cannot** be defeated without using a **novel camera/scale trick**.
* RPG loop present: XP, a skill unlock that extends or modifies dimension mechanics, and at least one branching dialogue.
* All code in **strict TypeScript**, documented public APIs, and passing tests.
* Meets performance targets on a typical laptop (Chrome/Edge/Firefox).

## Guardrails

* **Legal/IP:** Original names, logos, music, art. Homage by **mechanical feel**, not by copying content.
* **Scope:** Prioritize the **vertical slice** quality over raw breadth.
* **Telegraphy:** Always teach a mechanic safely before testing it under pressure.

## Stretch (If Time Allows)

* **Photo-mode puzzle hints** (freeze frame to examine parallax).
* **Light & shadow puzzles** where flattening turns shadows into walkable geometry.
* **Assist mode**: Wider alignment tolerance, slower enemies, extra UI hints.

**Produce:**

* A running demo link (local instructions), the full repo, and a short trailer (capture script + shots list) showcasing 2D↔3D swaps, perspective scaling, and the boss moment where the trick “clicks.”

---

If anything is unclear, make reasonable assumptions and proceed; favor clarity, performance, and player comprehension.

## Secondary Prompt Gemini 2.5 Flash Deep Research

I have the plan for a game called Parallax Prophet

{plan}

We need to research industry best practices and author a product requirements document that'll serve as the foundation for the project management for this game, it's vital that there is enough detail so that a PM can organize all the work into epics, features, stories, and tasks, so that later bug tracking and feature iteration can work more seamlessly, please ask any clarifying questions before we continue

## [Product Requirements Document (PRD) for "Parallax Prophet"](/prd.md)

Plan 

Research Websites
(1) Define the purpose and typical components of a Product Requirements Document (PRD) in the context of video game development.
(2) Research industry best practices and common templates for comprehensive game PRDs, focusing on how they structure information for clarity and project management.
(3) Investigate how a well-structured game PRD facilitates the breakdown of work into epics, features, stories, and tasks for project managers, including examples of detail levels required for each.
(4) Analyze the provided 'Build Brief' for 'Parallax Prophet', extracting all key information related to vision, core gameplay, aesthetic, technical requirements, systems, deliverables, and acceptance criteria.
(5) Identify any standard sections or crucial details typically found in a comprehensive game PRD that might not be explicitly detailed in the provided 'Build Brief', such as target audience, competitive analysis, or high-level risk assessment.
(6) Propose a detailed outline for the 'Parallax Prophet' PRD, integrating the information from the 'Build Brief' with the researched industry best practices for structure and content.
(7) For critical game systems like the 'Camera & Perspective System' and 'Dimension Toggle System', elaborate on how their mechanics, requirements, and interactions would be described in the PRD to enable precise task definition for development teams.
(8) Detail how the provided 'Acceptance Criteria' and 'Deliverables' for 'Parallax Prophet' would be integrated into the PRD to serve as clear success metrics and definitions of 'done' for the project and its features.