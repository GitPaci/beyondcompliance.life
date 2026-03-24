import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-graphite">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-teal" />
          <span className="text-body font-semibold text-text-primary">
            BeyondCompliance.life
          </span>
        </div>
        <Link
          href="/about"
          className="text-caption text-text-secondary hover:text-text-primary transition-colors duration-150"
        >
          About
        </Link>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal/10 border border-teal/20 rounded-full mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-teal" />
            <span className="text-caption text-teal uppercase tracking-widest font-semibold">
              GMP Data Integrity Simulator
            </span>
          </div>

          <h1 className="text-h1 font-semibold text-text-primary mb-6 leading-tight">
            Practice Defensible Decisions{" "}
            <span className="text-teal">Under Pressure</span>
          </h1>

          <p className="text-body text-text-secondary leading-relaxed mb-4 max-w-lg mx-auto">
            Traditional GMP training explains policy. It rarely prepares you for
            time pressure, production urgency, or social influence.
          </p>
          <p className="text-body text-text-secondary leading-relaxed mb-10 max-w-lg mx-auto">
            This simulator puts you inside a real batch release case with
            integrity issues — and makes you decide under realistic pressure.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/mission"
              className="px-8 py-4 bg-teal text-navy font-semibold rounded text-body hover:bg-teal/90 transition-all duration-150"
            >
              Start Mission
            </Link>
            <Link
              href="/leadership"
              className="px-8 py-4 bg-graphite text-text-primary font-semibold rounded text-body hover:bg-slate border border-text-disabled transition-all duration-150"
            >
              I&apos;m a QA Leader
            </Link>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="border-t border-graphite bg-slate px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-caption text-text-disabled uppercase tracking-widest text-center mb-10">
            Why This Exists
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                accent: "text-teal",
                label: "Evidence Protection",
                body: "Build the habit of protecting documentation integrity even when speed pressure is highest.",
              },
              {
                accent: "text-amber",
                label: "Pressure Realism",
                body: "Timed interruptions from production, peers, and leadership simulate real operational decisions.",
              },
              {
                accent: "text-red",
                label: "Inspection Readiness",
                body: "Every outcome is framed as inspection defensibility — the standard that matters most.",
              },
            ].map((item) => (
              <div key={item.label} className="text-center md:text-left">
                <div
                  className={`inline-block w-8 h-1 rounded-full mb-4 ${item.accent.replace("text-", "bg-")}`}
                />
                <h3 className={`text-h4 font-semibold ${item.accent} mb-2`}>
                  {item.label}
                </h3>
                <p className="text-body text-text-secondary leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core belief footer strip */}
      <div className="px-6 py-6 border-t border-graphite text-center">
        <p className="text-caption text-text-disabled">
          Core belief:{" "}
          <span className="text-text-secondary font-medium">
            Data integrity is patient protection.
          </span>
        </p>
      </div>
    </main>
  );
}
