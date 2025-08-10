# Epics

This directory holds the breakdown of work for the project in a consistent, template-driven structure. Each epic owns a set of features, which contain user stories, which in turn contain tasks and bugs. Keep items small, testable, and linked.

How to create a new epic
- Copy `epics/template-epic.md` into a new folder under `epics/NN-epic-name/epic.md` (use a numeric prefix for ordering).
- Inside that epic folder, create feature folders; each gets a `feature.md` copied from `epics/template-feature/template-feature.md`.
- For each story, create a folder under `.../stories/story-slug/story.md` copied from `epics/template-feature/template-story/template-story.md`.

Conventions
- Kebab-case names; prefix folders with two-digit ordering where relevant (e.g., `01-camera-and-perspective`).
- Keep templates intact and generic; fill only the instance files with project specifics.

## List of Epics by Order Of Importance

- [01 Camera & Perspective System](epics/01-camera-and-perspective/epic.md)
- [02 Dimension Toggle System](epics/02-dimension-toggle/epic.md)
- [03 Engine/ECS & Project Skeleton](epics/03-engine-ecs-skeleton/epic.md)
- [04 UI/HUD & Controls](epics/04-ui-hud-controls/epic.md)
- [05 Save/Load & Settings](epics/05-save-load/epic.md)
- [06 RPG Core (MVP)](epics/06-rpg-core/epic.md)
- [07 Vertical Slice Content](epics/07-vertical-slice/epic.md)
- [08 Performance & QA](epics/08-performance-qa/epic.md)