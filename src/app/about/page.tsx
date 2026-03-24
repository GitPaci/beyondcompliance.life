import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-navy">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-graphite">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-teal" />
          <span className="text-body font-semibold text-text-primary">
            BeyondCompliance.life
          </span>
        </Link>
        <Link
          href="/"
          className="text-caption text-text-secondary hover:text-text-primary transition-colors duration-150"
        >
          ← Back
        </Link>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-14">
        <p className="text-caption text-text-disabled uppercase tracking-widest mb-2">
          About
        </p>
        <h1 className="text-h2 font-semibold text-text-primary mb-8">
          Why Static Training Is Not Enough
        </h1>

        {/* Problem */}
        <section className="mb-10">
          <h2 className="text-h4 font-semibold text-amber mb-3">The Problem</h2>
          <p className="text-body text-text-secondary leading-relaxed mb-4">
            Data integrity failures in pharmaceutical manufacturing are rarely
            caused by ignorance. Operators and QA professionals typically know
            the rules. The problem is that rules learned in a classroom or
            e-learning module are difficult to apply when production is behind
            schedule, a manager is on the phone, and a colleague says everything
            will be fine.
          </p>
          <p className="text-body text-text-secondary leading-relaxed">
            Traditional GMP training teaches ALCOA+ concepts. It rarely simulates
            the pressure under which those concepts need to be applied. The gap
            between knowing the policy and making the right decision under stress
            is where data integrity failures happen.
          </p>
        </section>

        {/* Why simulation */}
        <section className="mb-10">
          <h2 className="text-h4 font-semibold text-teal mb-3">
            Why Simulation Changes Behavior
          </h2>
          <p className="text-body text-text-secondary leading-relaxed mb-4">
            Simulation works because it puts people into a decision-making
            context before the real stakes exist. Research in behavioral training
            consistently shows that practice under realistic conditions — including
            emotional and social pressure — produces more durable behavior change
            than passive knowledge transfer.
          </p>
          <p className="text-body text-text-secondary leading-relaxed mb-4">
            BeyondCompliance.life is designed around that principle. The
            simulator does not test whether you know the rule. It tests whether
            you can apply it when someone is asking you not to.
          </p>
          <p className="text-body text-text-secondary leading-relaxed">
            Every outcome is framed not as a score, but as an inspection
            defensibility signal — because that is the standard that actually
            matters in a regulatory context.
          </p>
        </section>

        {/* Mission statement */}
        <section className="mb-10 bg-slate rounded-lg border-l-4 border-teal px-6 py-6">
          <p className="text-caption text-text-disabled uppercase tracking-wider mb-3">
            Mission Statement
          </p>
          <p className="text-body text-text-primary leading-relaxed font-medium">
            We protect patients by building teams that protect evidence — not
            because they are told to, but because they have practised it under
            pressure and know what it means.
          </p>
        </section>

        {/* Principles */}
        <section className="mb-10">
          <h2 className="text-h4 font-semibold text-text-primary mb-4">
            Product Principles
          </h2>
          <div className="space-y-3">
            {[
              "Patient protection over speed pressure",
              "Evidence defensibility over checkbox completion",
              "Clarity over complexity",
              "Behavior change over passive knowledge transfer",
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                <p className="text-body text-text-secondary">{p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-graphite rounded-lg p-6">
          <p className="text-caption text-text-disabled uppercase tracking-wider mb-2">
            Pilot Discussion
          </p>
          <p className="text-body text-text-secondary leading-relaxed mb-4">
            If you are a QA leader or training manager interested in piloting
            this simulator at your site, reach out to start the conversation.
          </p>
          <a
            href="mailto:pilot@beyondcompliance.life"
            className="inline-block px-5 py-2.5 bg-slate text-teal border border-teal/30 rounded text-body font-medium hover:bg-teal/10 transition-all duration-150"
          >
            Contact for Pilot Discussion
          </a>
        </section>
      </div>
    </div>
  );
}
