"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Crown,
  Brain,
  FlaskConical,
  Shield,
  Hammer,
  Eye,
  Trophy,
  ArrowRight,
  Github,
  Sparkles,
  Target,
  Rocket,
  Cpu,
} from "lucide-react";

type IconType = ComponentType<{ className?: string }>;

type Agent = {
  id: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  color: string;
  icon: IconType;
};

const agents: Agent[] = [
  {
    id: "zeus",
    name: "ZEUS",
    title: "The Orchestrator",
    tagline: "Commander of the Fleet",
    description:
      "The supreme coordinator. ZEUS delegates tasks, manages conflicts, and ensures every agent delivers.",
    capabilities: ["Task Delegation", "Strategic Planning", "Quality Assurance"],
    color: "from-amber-500 to-orange-600",
    icon: Crown,
  },
  {
    id: "athena",
    name: "ATHENA",
    title: "The Architect",
    tagline: "Master of Design",
    description:
      "When systems need structure, ATHENA delivers. From API contracts to database schemas.",
    capabilities: ["System Design", "Security Hardening", "Database Schema"],
    color: "from-blue-500 to-cyan-600",
    icon: Brain,
  },
  {
    id: "prometheus",
    name: "PROMETHEUS",
    title: "The DevOps Sage",
    tagline: "Infrastructure Guardian",
    description:
      "CI/CD pipelines bow before PROMETHEUS. He brings fire to deployments.",
    capabilities: ["CI/CD Pipelines", "Performance Tuning", "Automation"],
    color: "from-green-500 to-emerald-600",
    icon: FlaskConical,
  },
  {
    id: "heracles",
    name: "HERACLES",
    title: "The Heavy Hitter",
    tagline: "Implementation Beast",
    description:
      "Refactors, migrations, complex features—HERACLES handles the heavy lifting.",
    capabilities: ["Code Refactoring", "Large Migrations", "Data Processing"],
    color: "from-red-500 to-rose-600",
    icon: Hammer,
  },
  {
    id: "heimdall",
    name: "HEIMDALL",
    title: "The Watchman",
    tagline: "Eyes Everywhere",
    description:
      "Nothing slips past HEIMDALL. He sees every bug, tests every scenario.",
    capabilities: ["Test Automation", "Bug Detection", "Monitoring"],
    color: "from-purple-500 to-violet-600",
    icon: Eye,
  },
  {
    id: "talos",
    name: "TALOS",
    title: "The Guardian",
    tagline: "Security Enforcer",
    description:
      "Vulnerabilities fear TALOS. He audits, certifies, ensures security.",
    capabilities: ["Security Audits", "Code Certification", "Compliance"],
    color: "from-slate-500 to-gray-600",
    icon: Shield,
  },
  {
    id: "dante",
    name: "DANTE",
    title: "The Wayfinder",
    tagline: "Recovery Specialist",
    description:
      "Lost in errors? DANTE finds the path. He diagnoses failures, recovers systems.",
    capabilities: ["Error Recovery", "Diagnostics", "Documentation"],
    color: "from-teal-500 to-cyan-600",
    icon: Sparkles,
  },
];

interface StatCardProps {
  icon: IconType;
  value: string;
  label: string;
}

function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
        <Icon className="h-6 w-6 text-slate-400" />
      </div>
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="text-sm text-slate-400">{label}</p>
    </div>
  );
}

export default function Showcase() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950" />
        <div className="relative mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-400">
              <Zap className="h-4 w-4" />
              <span>AI-Powered Development</span>
            </div>

            <h1 className="bg-gradient-to-r from-amber-200 via-purple-200 to-pink-200 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
              AI FACTORY
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-400">
              Meet the elite squad of AI agents that build software at impossible
              speeds. Seven specialists. One mission.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://github.com/pauldorosjackysrl-sketch"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Trophy className="h-5 w-5" />
              Explore Projects
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="https://github.com/pauldorosjackysrl-sketch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-8 py-4 font-semibold text-white transition-all hover:bg-slate-800"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Meet The Agents
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent, i) => {
              const Icon = agent.icon;

              return (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-slate-700 hover:bg-slate-900"
                >
                  {/* Gradient accent */}
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${agent.color}`}
                  />

                  {/* Icon */}
                  <div
                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${agent.color}`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {agent.name}
                      </h3>
                      <p className="text-sm font-medium text-slate-400">
                        {agent.tagline}
                      </p>
                    </div>

                    <span className="rounded-full border border-slate-700 bg-slate-950/40 px-3 py-1 text-xs text-slate-300">
                      {agent.title}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-slate-400">
                    {agent.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {agent.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-xs text-slate-500">
                      Agent ID: <span className="text-slate-400">{agent.id}</span>
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-300 transition-all group-hover:text-white">
                      View profile
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>

                  {/* subtle background glow */}
                  <div
                    className={`pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br ${agent.color} opacity-0 blur-3xl transition-opacity group-hover:opacity-15`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-white">Factory Metrics</h2>
              <p className="mt-2 text-slate-400">
                Built for speed, correctness, and scale.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard icon={Target} value="7" label="Specialized Agents" />
              <StatCard icon={Rocket} value="10x" label="Delivery Velocity" />
              <StatCard icon={Cpu} value="∞" label="Parallel Execution" />
              <StatCard icon={Shield} value="0" label="Tolerance for Bugs" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/25 via-slate-950/0 to-slate-950/0" />

            <div className="relative flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Ready to ship faster?
                </h3>
                <p className="mt-2 max-w-2xl text-slate-400">
                  Put the AI Factory to work: orchestration, architecture, DevOps,
                  implementation, QA, security, and recovery—covered.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 lg:justify-end">
                <a
                  href="https://github.com/pauldorosjackysrl-sketch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <Trophy className="h-5 w-5" />
                  Browse Repos
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="https://github.com/pauldorosjackysrl-sketch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/30 px-8 py-4 font-semibold text-white transition-all hover:bg-slate-800"
                >
                  <Github className="h-5 w-5" />
                  Star on GitHub
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-10 text-center text-sm text-slate-600">
            © {new Date().getFullYear()} AI Factory. Built with Next.js + Tailwind.
          </footer>
        </div>
      </section>
    </div>
  );
}