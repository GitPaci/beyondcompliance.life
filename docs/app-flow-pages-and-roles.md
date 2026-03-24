# App Flow, Pages, and Roles

## Experience Overview

The product is intentionally simple: one high-impact mission flow for operators and one evaluation view for QA leaders.

### Core navigation

1. Landing page
2. Mission simulator
3. Mission complete scorecard
4. Leadership preview
5. About page

---

## Page Architecture

## 1) Landing Page

**Purpose:** Establish trust, clarity, and action.

### Required sections

- clear value proposition,
- short explanation of mission simulation,
- two CTAs:
  - **Start Mission**
  - **I’m a QA Leader**

---

## 2) Mission Simulator

**Purpose:** Simulate GMP data integrity decisions under pressure.

### Layout

- **Top bar:** Batch ID, timer, integrity indicator
- **Left panel:** Record and evidence review
- **Right panel:** Decision actions and escalation options
- **Overlay layer:** Timed pressure events (email/IM/call)

### Behavioral objective

Ensure users make inspectable decisions while balancing urgency and evidence quality.

---

## 3) Mission Complete (Scorecard)

**Purpose:** Turn actions into defensibility insights.

### Recommended sections

- Integrity summary
- Evidence chain strength
- Patient risk exposure
- Decision defensibility
- Behavioral insights
- Reflection prompt

### Calls to action

- **Run Again**
- **Share with Leadership**

---

## 4) Leadership Preview

**Purpose:** Support internal funding and rollout decisions.

### Four-panel structure

1. **What this trains** (ALCOA+ behavior under pressure)
2. **What we measure** (observable metrics)
3. **Why it matters** (inspection and risk impact)
4. **Rollout model** (pilot-to-scale path)

Tone: Executive, concise, outcomes-first.

---

## 5) About Page

**Purpose:** Explain the training philosophy.

### Content goals

- why static GMP training is insufficient,
- why simulation changes behavior,
- mission statement centered on patient and evidence protection,
- optional contact for pilot discussion.

---

## Role Model (MVP)

### Operator (primary user)

**Can access:**

- mission simulator,
- personal scorecard,
- optional limited mission history.

**Cannot access:**

- aggregate team analytics,
- scenario configuration.

### QA Leader (decision maker)

**Can access:**

- leadership preview,
- demo mission,
- sample analytics outputs.

**Goal:** Evaluate strategic value and implementation fit.

### Admin (post-MVP)

Deferred to future scope:

- user management,
- scenario configuration,
- trend reporting.

---

## Primary User Journeys

### Journey 1 — Operator

1. Start mission
2. Review evidence + respond to pressure
3. Receive scorecard

### Journey 2 — QA Leader

1. Open leadership view
2. Review measurable outcomes
3. Initiate pilot/funding conversation

### Journey 3 — Advocacy Loop

1. Operator completes scenario
2. Shares scorecard with leadership
3. Leadership evaluates rollout potential

---

## UX Guardrails

- Keep navigation shallow and explicit.
- No hidden branching for MVP.
- Maximum clarity on action consequences.
- Always frame outcomes as inspection defensibility.

---

## Information Architecture Principle

> One mission, one scorecard, one leadership decision path.

This keeps the product focused, testable, and fundable.
