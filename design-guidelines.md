Emotional Thesis

Feels like a GMP mission control room before launch — focused, collaborative, high-stakes, and empowering.

Not playful.
Not gamified.
Not corporate dull.

Emotion we design for:

Competence under pressure.

Core message woven into the interface:

We protect patients.
We protect evidence.
We protect data integrity.
We win by doing it right.

Visual System

Built on calm intensity + structured clarity.
Think: Linear × enterprise dashboard × inspection war room.

Typography

Tone: Confident. Precise. Professional. Modern.

Primary type: Geometric sans-serif (Inter / SF Pro style)
Reason: Clarity + technical credibility.

Secondary (optional): Monospace for record excerpts.

Typographic Scale (8pt rhythm aligned)
Role	Size	Weight	Line Height	Usage
H1	40px	600	1.2	Mission titles
H2	28px	600	1.3	Section headers
H3	20px	600	1.4	Panel titles
H4	16px	600	1.5	Card headings
Body	15px	400	1.6	Standard content
Caption	13px	400	1.5	Metadata / timestamps
Mono	14px	500	1.5	Raw data / log excerpts

Rules:

Minimum contrast AA+

Never center long text

Use whitespace to create authority

Color System

Mood: Controlled intensity + professional confidence

Dark-mode primary environment.

Primary Background

Deep Navy: #0B1220
RGB: 11, 18, 32

Secondary Panel Surface

Slate Blue: #121A2B
RGB: 18, 26, 43

Elevated Card

Graphite: #1B2438
RGB: 27, 36, 56

Primary Accent (Integrity)

Electric Teal: #19E3B1
RGB: 25, 227, 177
Used for:

Confirmed defensible decisions

Escalation done correctly

Integrity Meter positive state

Alert / Pressure Accent

Mission Amber: #F5A524
RGB: 245, 165, 36
Used for:

Incoming pressure

Escalation prompts

Time-sensitive alerts

Critical Risk

Controlled Red: #E5484D
RGB: 229, 72, 77
Used sparingly:

Evidence chain weakened

OOS mishandled

Never bright neon red.

Neutral Text

Primary: #E6EDF7

Secondary: #9BA6C2

Disabled: #58627A

Contrast rule:
Minimum 4.5:1 at all times.

Spacing & Layout System

8pt grid only.

Spacing scale:

8

16

24

32

48

64

Layout Structure

Top Bar:

Mission timer

Integrity meter

Batch ID

Main Layout:

Left: Document review panel (60%)

Right: Decision panel (40%)

Pressure overlays:

Centered modal

Slight blur background

12% opacity dark veil

Breakpoints (Mobile-First)

Mobile:
Stack panels vertically
Pressure events full-screen

Tablet:
Split 70/30

Desktop:
Split 60/40

Never more than two primary columns.

Motion & Interaction (Kindness in Design)

Motion tone:
Confident. Intentional. Not flashy.

Duration Rules

Micro interactions: 150–200ms

Panel transitions: 220–260ms

Pressure modal: 280ms ease-out

Never exceed 300ms

Easing

Use:

ease-out for confirmations

slight spring for escalations

Avoid:

Bounce

Elastic effects

Playful overshoot

Interaction Behaviors

When pressure message appears:

Subtle amber pulse around top bar

No shaking

No loud sounds

When correct escalation:

Teal glow fade for 300ms

Integrity meter rises smoothly

When integrity compromised:

Red underline appears beneath evidence chain

Not full-screen error

Empty States

Instead of:
“No records.”

Use:
“Awaiting original evidence.”

Instead of:
“No issues found.”

Use:
“No integrity signals identified yet.”

This reinforces investigation mindset.

Voice & Tone

Personality:

Calm

Professional

Direct

Respectful

Empowering

Never:

Sarcastic

Childlike

Gamified

Patronizing

Microcopy Examples

Onboarding

“You are part of the Batch Decision Team.
Your responsibility: protect patients and data integrity.”

Success

“Decision defensible. Evidence chain intact.”

Escalation Prompt

“Time pressure detected.
What is the fastest compliant path?”

Error / Misstep

“Evidence protection incomplete.
Reassess original source record.”

System Consistency Anchors

Design anchors:

Linear (clarity, focus)

Enterprise dashboard logic

Apple-level restraint in motion

Recurring metaphors:

Mission

Evidence chain

Integrity meter

Inspection defensibility

Avoid:

Locks

Padlocks

Puzzle imagery

Cartoon timers

Accessibility
Structure

Proper semantic headings (H1–H4)

Landmark roles

Logical tab order

Keyboard Navigation

All decisions accessible via tab

Enter confirms action

Escape closes modals

Focus States

2px teal outline

No removal of default focus without replacement

ARIA

Live regions for pressure events

Announce integrity meter changes

Label all decision buttons clearly

Emotional Audit Checklist

Before shipping, ask:

Does this feel serious and empowering?

Would a QA leader respect this interface?

Does it avoid trivializing GMP?

Does motion support clarity?

Does the user feel trusted?

If anything feels like a “game,” remove it.

Technical QA Checklist

Typography aligned to 8pt grid

Contrast ratios ≥ WCAG AA+

Motion ≤ 300ms

No hidden navigation

Integrity meter clearly readable

Pressure overlays do not obscure decisions entirely

Design Snapshot
🎨 Color Palette Preview
Deep Navy      #0B1220
Slate Blue     #121A2B
Graphite       #1B2438
Electric Teal  #19E3B1
Mission Amber  #F5A524
Controlled Red #E5484D
Text Primary   #E6EDF7
Text Secondary #9BA6C2
🔤 Typographic Scale

| H1 | 40px / 600 |
| H2 | 28px / 600 |
| H3 | 20px / 600 |
| H4 | 16px / 600 |
| Body | 15px / 400 |
| Caption | 13px / 400 |

📐 Layout System

8pt spacing grid

Max 2-column structure

60/40 desktop split

Full-screen pressure overlay on mobile

Consistent 24px card padding

Emotional Thesis (One Sentence)

A calm, high-stakes GMP mission environment where teams practice protecting patients and data integrity under pressure.

Design Integrity Review

The visual system aligns with the emotional goal of competence under pressure. Dark structure + restrained motion reinforce seriousness. Teal and amber accents create energy without playfulness.

One improvement for even stronger harmony:

Introduce subtle contextual realism — timestamps, document IDs, and structured record formatting — to deepen authenticity without increasing complexity.
