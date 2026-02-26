# Design Guidelines

## Design Intent

Create an interface that feels like a GMP mission control environment:

- focused,
- credible,
- high-stakes,
- calm under pressure.

This is **not** playful gamification.

---

## Emotional Thesis

Design for: **competence under pressure**.

Core message across UI:

- We protect patients.
- We protect evidence.
- We protect data integrity.

---

## Brand and Voice

### Personality

- Calm
- Professional
- Direct
- Respectful
- Empowering

### Avoid

- condescending feedback,
- celebratory “game win” language,
- alarmist error theatrics.

### Copy style examples

Use:

- “Evidence chain weakened. Reassess original source.”
- “Decision defensible. Evidence protected.”

Avoid:

- “Wrong answer.”
- “Great job! You win.”

---

## Visual System

## Color palette

### Core surfaces

- Deep Navy: `#0B1220`
- Slate Blue: `#121A2B`
- Graphite: `#1B2438`

| Token | Hex | Preview |
|---|---|---|
| Deep Navy | `#0B1220` | <span style="display:inline-block;width:96px;height:20px;border-radius:4px;background:#0B1220;border:1px solid #2A344A;"></span> |
| Slate Blue | `#121A2B` | <span style="display:inline-block;width:96px;height:20px;border-radius:4px;background:#121A2B;border:1px solid #2A344A;"></span> |
| Graphite | `#1B2438` | <span style="display:inline-block;width:96px;height:20px;border-radius:4px;background:#1B2438;border:1px solid #2A344A;"></span> |

### Status accents

- Integrity Teal: `#19E3B1`
- Mission Amber: `#F5A524`
- Controlled Red: `#E5484D`

| Token | Hex | Preview |
|---|---|---|
| Integrity Teal | `#19E3B1` | <span style="display:inline-block;width:96px;height:20px;border-radius:4px;background:#19E3B1;border:1px solid #2A344A;"></span> |
| Mission Amber | `#F5A524` | <span style="display:inline-block;width:96px;height:20px;border-radius:4px;background:#F5A524;border:1px solid #2A344A;"></span> |
| Controlled Red | `#E5484D` | <span style="display:inline-block;width:96px;height:20px;border-radius:4px;background:#E5484D;border:1px solid #2A344A;"></span> |

### Text colors

- Primary: `#E6EDF7`
- Secondary: `#9BA6C2`
- Disabled: `#58627A`

| Token | Hex | Preview |
|---|---|---|
| Primary | `#E6EDF7` | <span style="display:inline-block;width:96px;height:20px;border-radius:4px;background:#E6EDF7;border:1px solid #2A344A;"></span> |
| Secondary | `#9BA6C2` | <span style="display:inline-block;width:96px;height:20px;border-radius:4px;background:#9BA6C2;border:1px solid #2A344A;"></span> |
| Disabled | `#58627A` | <span style="display:inline-block;width:96px;height:20px;border-radius:4px;background:#58627A;border:1px solid #2A344A;"></span> |

**Accessibility rule:** Maintain at least WCAG AA contrast (4.5:1).

---

## Typography

### Recommended families

- Primary: Inter / SF Pro (or equivalent modern geometric sans)
- Secondary (optional): Monospace for record excerpts and logs

### Suggested scale

- H1: 40 / 600
- H2: 28 / 600
- H3: 20 / 600
- H4: 16 / 600
- Body: 15 / 400
- Caption: 13 / 400
- Mono: 14 / 500

Guidelines:

- avoid centered long-form body copy,
- prioritize readability and hierarchy,
- use whitespace to communicate authority.

---

## Layout System

- Use an 8pt spacing grid.
- Preferred desktop split: 60/40 (documents/actions).
- Keep max two primary columns.

### Responsive behavior

- **Mobile:** stacked layout, full-screen pressure overlays
- **Tablet:** 70/30 split
- **Desktop:** 60/40 split

---

## Motion and Interaction

### Motion tone

Intentional, controlled, and low-drama.

### Timing

- Micro-interactions: 150–200ms
- Panel transitions: 220–260ms
- Pressure modal entrance: ~280ms ease-out

Never exceed ~300ms for core interactions.

### Behavior patterns

- Pressure event: subtle amber emphasis, no shaking effects
- Correct escalation: restrained teal confirmation
- Integrity compromise: localized red cue (not full-screen disruption)

---

## Component Guidance

### Mission header

Must always show:

- batch context,
- mission timer,
- integrity indicator.

### Evidence panel

- Preserve document readability
- Support traceability cues (timestamps, author/source metadata)

### Action panel

- Keep decision options explicit and mutually clear
- Require commitment before advancing

### Scorecard

Prioritize defensibility outputs:

- patient risk,
- evidence chain strength,
- inspection readiness,
- decision rationale quality.

---

## Empty and System States

Prefer investigation-oriented language.

Use:

- “Awaiting original evidence.”
- “No integrity signals identified yet.”

Avoid:

- “No records.”
- “No issues found.”

---

## UX Non-Negotiables

- Clarity over decoration.
- Credibility over novelty.
- Defensible decision support over entertainment.
- Respect for the operator’s professional judgment at all times.
