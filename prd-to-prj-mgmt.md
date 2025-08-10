# Prompt

We are going start the design of project management for this @initial-prompt.md @prd.md 

Using the proposed template structure shown in 
@prj-mgmt/ 

We must ensure high quality documentation of the requirements so it makes sense to work in steps, please ask questions or make suggestions so we can agree on next steps.

The templates should be copied to create specific organization of epics/features/stories/tasks, so then we can start a sprint.

# Output

Updates to templates but then an error, I stopped it and tried this.

# Prompt

Something went wrong, you kept telling me that "the model made no changes to the file" 

Remember what we're doing, we're designing the first sprint and ensuring all related agile entities exist in a hierarchy under prj-mgmt epics/features/stories/tasks with links to all throughout, and links to just the epics in the sprint.

# Strategy Pivot

Due to this error, I've fed the whole repo into a context and asked for a meta prompt:

```
Here’s a **Cursor-ready “super-prompt”** you can drop into your workspace that will use the PRD and your `/prj-mgmt` templates to actually scaffold all the agile entity Markdown files — epics → features → stories → tasks — and wire them together into a `sprint-1` manifest with the linked epics.

This prompt makes sure Cursor has:

1. The **source context** it needs (`@prd.md`, `/prj-mgmt` template dir, your epic list).
2. The **explicit rules** to generate **new files in the right locations** with the correct kebab-case folder naming and relative links.
3. The **instructions** to connect the sprint plan to the generated epics.

---

## **Prompt for Cursor**

```
You are acting as an Agile project scaffolding agent for the "Parallax Prophet" game.

## Context:
- The full PRD is at @prd.md and contains detailed goals, scope, and epics list.
- The `/prj-mgmt` directory contains templates for epics, features, stories, and tasks.
- We have a prioritized epic list in @epics/README.md, starting with 01 Camera & Perspective System → 08 Performance & QA.

## Goal:
Generate a complete Markdown scaffold for the agile hierarchy:
EPIC → FEATURE → STORY → TASK
…with placeholder content based on the PRD’s descriptions and acceptance criteria.

## Rules:
1. **Folder Structure**  
   - Each epic gets its own folder under `/prj-mgmt/epics/NN-epic-slug/`  
     (e.g., `01-camera-and-perspective/epic.md`).
   - Inside each epic folder, create subfolders for each feature:  
     `/prj-mgmt/epics/NN-epic-slug/features/feature-slug/feature.md`.
   - Inside each feature folder, create subfolders for stories:  
     `/prj-mgmt/epics/NN-epic-slug/features/feature-slug/stories/story-slug/story.md`.
   - Inside each story folder, create tasks:  
     `/prj-mgmt/epics/NN-epic-slug/features/feature-slug/stories/story-slug/tasks/task-slug.md`.

2. **Naming Conventions**  
   - kebab-case for all folder names.  
   - Prefix epics with two-digit ordering from the PRD list.  
   - Task and story slugs should be short action phrases.

3. **Template Usage**  
   - Copy text from the corresponding template in `/prj-mgmt` and fill in details from the PRD.  
   - Link child entities from parent (epic links to features, feature links to stories, story links to tasks).  
   - In stories, include Gherkin-style acceptance criteria adapted from PRD.

4. **Content Population**  
   - Use PRD acceptance criteria, scope, and success metrics for each epic.  
   - Use PRD deliverables and systems to derive features.  
   - Create at least 2–3 stories per feature with clear user role, benefit, and context.  
   - Create at least 2 tasks per story with actionable verb phrasing.  
   - Where PRD leaves details TBD, mark `TBD` but keep the structure.

5. **Sprint-1 Manifest**  
   - Create `/prj-mgmt/sprints/sprint-1.md` listing only the epics chosen for sprint 1 (from the PRD priorities).
   - Link each epic in sprint-1.md to its `/epic.md` file.
   - Include sprint goal, start/end dates (TBD), and definition of done.

6. **Linking**  
   - All links must be relative so they work in Markdown previews in Cursor.
   - Use the structure: `[Feature Name](./features/feature-slug/feature.md)` etc.

7. **Scope for Sprint 1**  
   - From PRD priorities, include these epics:  
     - 01 Camera & Perspective System  
     - 02 Dimension Toggle System  
     - 03 Engine/ECS & Project Skeleton  
     - 04 UI/HUD & Controls

## Output:
1. Create the folder and file structure in `/prj-mgmt` for sprint 1 epics, their features, stories, and tasks.
2. Populate each file with:
   - Title
   - Owner: TBD
   - Status: Planned
   - Overview & business value from PRD
   - Acceptance criteria from PRD or inferred
   - Linked children (features/stories/tasks)
3. Update `/prj-mgmt/sprints/sprint-1.md` linking to the epics.
```

---

If you feed Cursor that prompt while your PRD and `/prj-mgmt` templates are in context, it should **auto-generate** all the files in the right places, with links, so you can start the sprint immediately.

```