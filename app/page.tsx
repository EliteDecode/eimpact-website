import {
  MotionItem,
  MotionSection,
  MotionStagger,
} from "@/components/animations";
import { HeroIllustration } from "@/components/hero-illustration";
import { Badge, Button, GlassCard } from "@/components/ui";
import {
  ArrowRightIcon,
  Globe,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

const problems = [
  "Paper records that get lost, damaged, or misfiled during busy missions.",
  "Slow patient flow caused by manual queues and duplicated data entry.",
  "Poor drug accountability with no clear link between prescriptions and inventory.",
  "Volunteer teams working in silos with no shared, real-time view of operations.",
];

const solutions = [
  {
    title: "Digitized patient records",
    body: "Capture structured data at registration and surface it instantly across triage, consultation, and pharmacy.",
  },
  {
    title: "Live patient flow",
    body: "Track every patient from arrival to discharge so teams see bottlenecks before they become queues.",
  },
  {
    title: "Accountable prescribing",
    body: "Link each prescription to inventory so every tablet, vial, and dose is tracked in real time.",
  },
  {
    title: "Coordinated volunteering",
    body: "Give coordinators and team leads a shared view of tasks, roles, and on-ground activity.",
  },
];

const features = [
  {
    title: "Patient Registration",
    body: "Fast, structured onboarding with demographics, visit reason, and unique IDs—optimized for low-resource environments.",
  },
  {
    title: "Department Flow Management",
    body: "Configurable flows from triage to consultation, labs, procedure, and pharmacy, with real-time queue visibility.",
  },
  {
    title: "Prescription & Pharmacy",
    body: "Digital prescriptions, dispensing workflows, and double-checks that reduce errors and improve safety.",
  },
  {
    title: "Volunteer Management",
    body: "Track volunteers, assignments, and shifts across departments so every role is covered when it matters most.",
  },
  {
    title: "Inventory Management",
    body: "Drug and consumable tracking with stock alerts and batch-level visibility tailored for outreach realities.",
  },
  {
    title: "Reporting",
    body: "Mission summaries, patient counts, diagnoses, and drug usage ready for funders, partners, and internal learning.",
  },
];

const steps = [
  {
    step: "01",
    title: "Set up your mission",
    body: "Define your outreach location, dates, departments, and team structure in a few guided steps.",
  },
  {
    step: "02",
    title: "Configure patient flow",
    body: "Choose how patients move—triage, consult, labs, pharmacy—and E-Impact creates a live digital pathway.",
  },
  {
    step: "03",
    title: "Run outreach on autopilot",
    body: "Volunteers register patients, update statuses, and dispense medication on any connected device.",
  },
  {
    step: "04",
    title: "Review and report impact",
    body: "After the mission, export clean data, analyze performance, and share impact with stakeholders.",
  },
];

const audiences = ["NGOs", "Outreach Teams", "Mobile Clinics"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-slate-900">
      <div className="relative isolate overflow-hidden pb-20">
        <div className="pointer-events-none absolute inset-0 gradient-hero" />

        <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-2">
            <div className="size-9 rounded-2xl gradient-pill shadow-lg shadow-[#9034e9]/40 flex items-center justify-center text-xs font-bold text-white">
              Ei
            </div>
            <span className="font-semibold tracking-tight text-slate-900">
              E-Impact
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#problem" className="hover:text-slate-900">
              Problem
            </a>
            <a href="#solution" className="hover:text-slate-900">
              Solution
            </a>
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-slate-900">
              How it works
            </a>
            <a href="#audience" className="hover:text-slate-900">
              Who it&apos;s for
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="md"
              href="https://admin.eimpactchart.com/auth/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Admin Login <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </header>

        <MotionSection
          id="hero"
          className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pt-10 sm:px-6 lg:flex-row lg:items-center lg:pt-16 lg:px-8"
        >
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <Badge>Digital outreach, zero paper chaos</Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Replace outreach paper logs with
              <span className="block bg-clip-text text-transparent gradient-pill">
                {" "}
                live, accountable workflows.
              </span>
            </h1>
            <p className="mx-auto max-w-xl text-base text-slate-600 sm:text-lg">
              E-Impact is a mission-ready platform that runs your entire medical
              outreach—from patient registration to pharmacy and reporting—
              without losing a single record.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                href="https://admin.eimpactchart.com/auth/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Admin Login
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="https://volunteer.eimpactchart.com/auth/signin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f16412]/5 text-[#f16412] border border-[#f16412]/30 hover:bg-[#f16412]/10"
              >
                Volunteers login
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 lg:justify-start">
              <span className="inline-flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Built for low-connectivity environments
              </span>
              <span className="h-3 w-px bg-slate-200" />
              <span>
                Designed for NGOs, outreach teams &amp; mobile clinics
              </span>
            </div>
          </div>
          <div className="flex-1">
            <HeroIllustration />
          </div>
        </MotionSection>

        <MotionSection
          id="problem"
          className="relative z-10 mx-auto mt-20 max-w-5xl px-4 sm:px-6 lg:px-8"
        >
          <GlassCard className="section-curve bg-slate-950 text-slate-50 px-6 py-8 sm:px-10 sm:py-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-md space-y-3">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#f16412]">
                  The problem
                </p>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Outreach missions still run on paper.
                </h2>
                <p className="text-sm text-slate-400 sm:text-base">
                  During high-volume medical camps, paper quickly becomes a
                  liability—slowing teams down and hiding the very impact
                  you&apos;re trying to measure.
                </p>
              </div>
              <MotionStagger className="grid flex-1 gap-3 text-sm">
                {problems.map((item) => (
                  <MotionItem
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-linear-to-r from-slate-900/80 via-slate-800/80 to-slate-900/60 px-4 py-3"
                  >
                    <span className="mt-1 inline-block size-1.5 rounded-full bg-[#f16412]" />
                    <p className="text-slate-100">{item}</p>
                  </MotionItem>
                ))}
              </MotionStagger>
            </div>
          </GlassCard>
        </MotionSection>

        <MotionSection
          id="solution"
          className="relative z-10 mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#9034e9]">
                The E-Impact approach
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                One mission hub, every moving part in sync.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-600 sm:text-base">
              E-Impact replaces scattered paper forms with a connected, mission
              control view—where patient journeys, volunteers, and inventory are
              orchestrated in real time.
            </p>
          </div>
          <MotionStagger className="mt-8 grid gap-4 md:grid-cols-2">
            {solutions.map((solution) => (
              <MotionItem key={solution.title}>
                <GlassCard className="h-full rounded-2xl bg-white/80 px-5 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-2xl bg-[#9034e9]/10 text-xs font-medium text-[#9034e9]">
                      {/* simple icon placeholder */}
                      <span className="size-4 rounded-md bg-linear-to-tr from-[#9034e9] to-[#f16412]" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{solution.body}</p>
                </GlassCard>
              </MotionItem>
            ))}
          </MotionStagger>
        </MotionSection>

        <MotionSection
          id="features"
          className="relative z-10 mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#9034e9]">
                Core features
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Built for outreach realities, not hospital desktops.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-600 sm:text-base">
              Every module in E-Impact is designed with constraints in mind:
              limited time, limited power, and a long line of patients who
              can&apos;t wait.
            </p>
          </div>
          <MotionStagger className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <MotionItem key={feature.title}>
                <GlassCard className="group h-full rounded-2xl bg-white/80 px-5 py-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.16)]">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold text-slate-900">
                      {feature.title}
                    </h3>
                    <span className="rounded-full bg-[#9034e9]/5 px-2 py-1 text-[10px] font-medium text-[#9034e9]">
                      Mission-ready
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{feature.body}</p>
                </GlassCard>
              </MotionItem>
            ))}
          </MotionStagger>
        </MotionSection>

        <MotionSection
          id="how-it-works"
          className="relative z-10 mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8"
        >
          <GlassCard className="section-curve bg-[#fff5ec]/90 px-6 py-8 sm:px-10 sm:py-10 border border-[#f97316]/10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-md space-y-3">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#9034e9]">
                  How it works
                </p>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  From setup to impact in days, not months.
                </h2>
                <p className="text-sm text-slate-600 sm:text-base">
                  E-Impact is intentionally lightweight to deploy and train—so
                  your next mission doesn&apos;t depend on a 6-month IT project.
                </p>
              </div>
              <MotionStagger className="grid flex-1 gap-4 md:grid-cols-2">
                {steps.map((step) => (
                  <MotionItem key={step.step}>
                    <div className="h-full rounded-2xl bg-white px-4 py-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="flex size-7 items-center justify-center rounded-full bg-[#9034e9]/10 text-[10px] font-semibold text-[#9034e9]">
                          {step.step}
                        </span>
                        <h3 className="text-sm font-semibold text-slate-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm text-slate-600">{step.body}</p>
                    </div>
                  </MotionItem>
                ))}
              </MotionStagger>
            </div>
          </GlassCard>
        </MotionSection>

        <MotionSection
          id="audience"
          className="relative z-10 mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#9034e9]">
                Who it&apos;s for
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Purpose-built for teams on the move.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-600 sm:text-base">
              Whether you&apos;re coordinating a single-day outreach or a
              multi-site campaign, E-Impact gives you a mission hub that travels
              with you.
            </p>
          </div>
          <MotionStagger className="mt-6 flex flex-wrap gap-3">
            {audiences.map((item) => (
              <MotionItem key={item}>
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm">
                  {item}
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </MotionSection>

        <MotionSection
          id="cta"
          className="relative z-10 mx-auto mt-20 max-w-5xl px-4 sm:px-6 lg:px-8"
        >
          <div className="overflow-hidden rounded-3xl bg-linear-to-r from-[#9034e9] to-[#f16412] px-6 py-8 sm:px-10 sm:py-10 shadow-[0_24px_70px_rgba(15,23,42,0.3)]">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3 text-white">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Ready to run your next outreach on E-Impact?
                </h2>
                <p className="max-w-xl text-sm text-white/80 sm:text-base">
                  Share a few details about your organization and upcoming
                  missions. We&apos;ll set up a tailored demo and a rollout plan
                  that fits your context.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  href="https://wa.me/2349060606527"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white hover:bg-[#1ebe5d] border border-[#15803d]/40 text-center"
                >
                  Talk to our team
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  href="https://admin.eimpactchart.com/auth/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center"
                >
                  Go to Admin Login
                </Button>
              </div>
            </div>
          </div>
        </MotionSection>

        <footer className="relative z-10 mx-auto mt-12 flex max-w-6xl flex-col gap-3 px-4 pb-10 pt-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} E-Impact. All rights reserved.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#hero" className="hover:text-slate-600">
              Back to top
            </a>
            <span className="h-3 w-px bg-slate-200" />
            <span>Designed for medical outreach missions.</span>
            <div className="flex items-center gap-3 text-slate-400">
              <a
                href="https://wa.me/2349060606527"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-slate-600"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="https://www.purplebeetech.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                className="hover:text-slate-600"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@purplebeetech.com"
                aria-label="Email"
                className="hover:text-slate-600"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/purple-bee-technology/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-slate-600"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
