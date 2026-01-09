import Image from "next/image";
import JoinToast from "./components/JoinToast";
import WaitlistModal from "./components/WaitlistModal";
import PricingSection from "./components/PricingSection";

const WAITLIST_FORM_URL = "https://forms.gle/tCmgmxyvCxLms7Nb7";

const screens = [
  { src: "/screens/app-1.png", title: "Dashboard" },
  { src: "/screens/app-2.png", title: "Client Management" },
  { src: "/screens/app-3.png", title: "Case Workspace" },
  { src: "/screens/app-4.png", title: "Document Generator" },
  { src: "/screens/app-5.png", title: "Document Analyzer" },
  { src: "/screens/app-6.png", title: "Case Strategy" },
  { src: "/screens/app-7.png", title: "Tasks & Calendar" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-ink-50 dark:from-slate-950 dark:via-slate-900 dark:to-ink-950 transition-colors">
      <JoinToast />
      <WaitlistModal />

      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 md:px-6 md:py-8">
        {/* SIDEBAR */}
        <aside className="hidden w-[270px] md:block">
          <div className="sticky top-6 space-y-4">
            <div className="rounded-3xl bg-slate-950/95 p-5 text-white shadow-[0_0_40px_rgba(99,102,241,0.35)]">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-600">
                  ⚖️
                </div>
                <div>
                  <div className="font-semibold">LegalAssist</div>
                  <div className="text-xs text-white/70">AI Legal Platform</div>
                </div>
              </div>

              <nav className="mt-5 space-y-2 text-sm">
                {[
                  ["Overview", "🏠", "#overview"],
                  ["Features", "✨", "#features"],
                  ["Demo", "🎥", "#demo"],
                  ["Pricing", "💎", "#pricing"],
                  ["FAQ", "❓", "#faq"],
                  ["Screens", "🖼️", "#screens"],
                  ["Waitlist", "📝", "#waitlist"],
                ].map(([label, icon, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 rounded-xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white transition"
                  >
                    <span>{icon}</span> {label}
                  </a>
                ))}
              </nav>

              <a
                href={WAITLIST_FORM_URL}
                target="_blank"
                className="mt-5 inline-flex w-full justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90"
              >
                Get Early Access
              </a>
            </div>

            <div className="rounded-2xl bg-white/70 p-4 text-xs text-slate-600 dark:bg-white/5 dark:text-slate-300">
              Built by <strong>Asma Ahmed</strong>
              <br />
              Not legal advice. Attorney review required.
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="flex-1 space-y-8">
          {/* HERO */}
          <section
            id="overview"
            className="rounded-[28px] bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-purple-700 p-8 text-white shadow-[0_0_80px_rgba(99,102,241,0.45)]"
          >
            <h1 className="text-3xl md:text-4xl font-semibold">
              Your intelligent legal assistant — built like a real firm system.
            </h1>
            <p className="mt-3 max-w-2xl text-white/85">
              Manage clients, cases, documents, and AI-powered legal workflows
              in one secure platform.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={WAITLIST_FORM_URL}
                target="_blank"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950"
              >
                Join Waitlist
              </a>
              <a
                href="#demo"
                className="rounded-xl bg-white/15 px-5 py-3 text-sm font-semibold"
              >
                Watch Demo
              </a>
            </div>
          </section>

          {/* FEATURES */}
          <section id="features" className="space-y-4">
            <h2 className="text-2xl font-semibold">What LegalAssist helps you do</h2>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                "Client & Case Management",
                "AI Document Generation",
                "PDF & Image Analysis",
                "Case Strategy Insights",
                "Tasks & Deadlines",
                "Professional Disclaimers",
              ].map((f) => (
                <div
                  key={f}
                  className="rounded-2xl bg-white/70 p-5 backdrop-blur hover:shadow-[0_0_40px_rgba(99,102,241,0.35)] transition dark:bg-white/5"
                >
                  {f}
                </div>
              ))}
            </div>
          </section>

          {/* DEMO */}
          <section id="demo" className="space-y-4">
            <h2 className="text-2xl font-semibold">Demo Video</h2>
            <div className="aspect-video overflow-hidden rounded-3xl shadow-xl">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/HTjIDlD48Qo"
                allowFullScreen
              />
            </div>
          </section>

          {/* SCREENS */}
          <section id="screens">
            <h2 className="text-2xl font-semibold mb-4">App Screens</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {screens.map((s) => (
                <div
                  key={s.src}
                  className="overflow-hidden rounded-3xl hover:shadow-[0_0_40px_rgba(99,102,241,0.35)] transition"
                >
                  <Image
                    src={s.src}
                    alt={s.title}
                    width={800}
                    height={450}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* PRICING (FIXED) */}
          <section id="pricing">
            <PricingSection />
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-4">
            <h2 className="text-2xl font-semibold">FAQ</h2>
            <details className="rounded-xl bg-white/70 p-4 dark:bg-white/5">
              <summary className="font-semibold cursor-pointer">
                Is this legal advice?
              </summary>
              <p className="mt-2 text-sm">
                No. LegalAssist provides informational AI assistance only.
              </p>
            </details>
          </section>

          {/* WAITLIST */}
          <section
            id="waitlist"
            className="rounded-3xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 p-8 text-white"
          >
            <h2 className="text-2xl font-semibold">Join the Waitlist</h2>
            <p className="mt-2 text-white/85">
              Early access • No spam • Founder-led
            </p>

            <a
              href={WAITLIST_FORM_URL}
              target="_blank"
              className="mt-5 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-slate-950"
            >
              Join via Google Form
            </a>
          </section>

          {/* FOOTER */}
          <footer className="pt-8 text-xs text-slate-500">
            © 2026 LegalAssist • Built by Asma Ahmed •
            <a className="ml-2 underline" href="/about">About</a>
            <a className="ml-2 underline" href="/privacy">Privacy</a>
            <a className="ml-2 underline" href="/terms">Terms</a>
            <a className="ml-2 underline" href="/contact">Contact</a>
          </footer>
        </div>
      </div>
    </main>
  );
}
