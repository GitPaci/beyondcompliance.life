import Link from "next/link";

const METRICS = [
  { label: "Escalation correctness", value: "74%", trend: "+12% vs control group" },
  { label: "Evidence protection rate", value: "81%", trend: "+18% post-simulation" },
  { label: "Pressure response quality", value: "68%", trend: "Baseline established" },
  { label: "GDP correction defensibility", value: "77%", trend: "+9% vs control group" },
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-navy">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-graphite">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-teal" />
          <span className="text-body font-semibold text-text-primary">
            BeyondCompliance.life
          </span>
        </div>
        <Link
          href="/"
          className="text-caption text-text-secondary hover:text-text-primary transition-colors duration-150"
        >
          ← Back
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-caption text-text-disabled uppercase tracking-widest mb-2">
            Leadership Preview
          </p>
          <h1 className="text-h2 font-semibold text-text-primary mb-3">
            A Training System Built for Inspection Readiness
          </h1>
          <p className="text-body text-text-secondary max-w-xl leading-relaxed">
            For QA leaders evaluating strategic training value. Four sections —
            what it trains, what it measures, why it matters, and how to roll it
            out.
          </p>
        </div>

        {/* Panel 1: What this trains */}
        <section className="bg-slate rounded-lg border border-graphite p-8 mb-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded bg-teal/10 flex items-center justify-center">
              <span className="text-teal font-mono font-semibold text-caption">01</span>
            </div>
            <h2 className="text-h4 font-semibold text-text-primary">
              What This Simulator Trains
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: "ALCOA+ decision-making under pressure",
                body: "Operators practice Attributable, Legible, Contemporaneous, Original, Accurate principles in realistic scenarios — not theory.",
              },
              {
                label: "GDP correction behavior",
                body: "Correct, defensible documentation corrections: cross-out with initials and date, no obliteration, reason for change.",
              },
              {
                label: "Escalation discipline",
                body: "When and how to escalate integrity concerns before they become deviations — even when social and production pressure suggests otherwise.",
              },
              {
                label: "Evidence chain protection",
                body: "Raw data traceability, original record requirements, and the difference between acceptable reprints and data integrity violations.",
              },
            ].map((item) => (
              <div key={item.label} className="bg-graphite rounded p-4">
                <p className="text-caption font-semibold text-teal mb-1">
                  {item.label}
                </p>
                <p className="text-caption text-text-secondary leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Panel 2: What we measure */}
        <section className="bg-slate rounded-lg border border-graphite p-8 mb-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded bg-amber/10 flex items-center justify-center">
              <span className="text-amber font-mono font-semibold text-caption">02</span>
            </div>
            <h2 className="text-h4 font-semibold text-text-primary">
              What We Measure
            </h2>
          </div>
          <p className="text-body text-text-secondary mb-6 leading-relaxed">
            Every session produces observable behavioral metrics — not
            self-reported knowledge scores. These outputs are auditable training
            evidence.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="bg-graphite rounded p-4 text-center"
              >
                <p className="text-h3 font-semibold text-teal font-mono mb-1">
                  {m.value}
                </p>
                <p className="text-caption text-text-disabled mb-1">{m.label}</p>
                <p className="text-xs text-text-disabled">{m.trend}</p>
              </div>
            ))}
          </div>
          <p className="text-caption text-text-disabled italic">
            Sample data shown. Your site&apos;s baseline is established in the first pilot cohort.
          </p>
        </section>

        {/* Panel 3: Why it matters */}
        <section className="bg-slate rounded-lg border border-graphite p-8 mb-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded bg-red/10 flex items-center justify-center">
              <span className="text-red font-mono font-semibold text-caption">03</span>
            </div>
            <h2 className="text-h4 font-semibold text-text-primary">
              Why It Matters
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                heading: "Inspection risk is behavioral",
                body: "Data integrity citations most commonly arise from pressure-induced decisions — not ignorance of policy. Static training does not address this.",
              },
              {
                heading: "Regulatory expectations are increasing",
                body: "FDA, MHRA, and EMA guidance on data integrity is explicit: training must demonstrate behavior change, not just knowledge completion.",
              },
              {
                heading: "The gap between training and conduct is your audit exposure",
                body: "If investigators find evidence of decisions that contradict documented training, the credibility gap becomes a critical finding.",
              },
            ].map((item) => (
              <div
                key={item.heading}
                className="flex gap-4 pb-4 border-b border-graphite last:border-0 last:pb-0"
              >
                <div className="mt-1 w-1 shrink-0 bg-red rounded-full h-auto" />
                <div>
                  <p className="text-body font-semibold text-text-primary mb-1">
                    {item.heading}
                  </p>
                  <p className="text-body text-text-secondary leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Panel 4: Rollout model */}
        <section className="bg-slate rounded-lg border border-graphite p-8 mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded bg-graphite flex items-center justify-center">
              <span className="text-text-secondary font-mono font-semibold text-caption">04</span>
            </div>
            <h2 className="text-h4 font-semibold text-text-primary">
              Rollout Model
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                phase: "Pilot",
                timeframe: "Weeks 1–2",
                description:
                  "10–20 operators complete one scenario. Establish baseline behavioral metrics. Evaluate site relevance and facilitator fit.",
              },
              {
                phase: "Site Rollout",
                timeframe: "Month 2–3",
                description:
                  "Extend to all manufacturing and QC personnel. Configure department-specific scenarios. Track behavior trends.",
              },
              {
                phase: "Enterprise",
                timeframe: "Month 4+",
                description:
                  "Multi-site deployment with centralized analytics. Annual scenario refresh. Inspection evidence package for QA file.",
              },
            ].map((p) => (
              <div key={p.phase} className="bg-graphite rounded p-5">
                <p className="text-caption text-text-disabled uppercase tracking-wider mb-1">
                  {p.timeframe}
                </p>
                <p className="text-body font-semibold text-text-primary mb-2">
                  {p.phase}
                </p>
                <p className="text-caption text-text-secondary leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/mission"
            className="inline-block px-8 py-4 bg-teal text-navy font-semibold rounded text-body hover:bg-teal/90 transition-all duration-150 mr-4"
          >
            Try the Simulator
          </Link>
          <Link
            href="/about"
            className="inline-block px-8 py-4 bg-graphite text-text-primary font-semibold rounded text-body hover:bg-slate border border-text-disabled transition-all duration-150"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
