"use client";

import { motion } from "framer-motion";

export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-4/3">
      <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-[#9034e9]/15 via-white to-[#f16412]/10 border border-white/70 shadow-[0_24px_60px_rgba(15,23,42,0.16)] overflow-hidden">
        <div className="absolute -top-16 -right-10 w-40 h-40 rounded-full bg-[#9034e9]/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 w-48 h-48 rounded-full bg-[#f16412]/20 blur-3xl" />

        <div className="relative h-full p-5 flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="size-8 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-semibold">
                ID
              </span>
              <div className="space-y-1">
                <div className="h-2.5 w-20 rounded-full bg-slate-900/10" />
                <div className="h-2 w-16 rounded-full bg-slate-900/5" />
              </div>
            </div>
            <div className="h-7 px-3 rounded-full bg-[#9034e9]/10 text-[10px] font-medium text-[#9034e9] flex items-center">
              Live Outreach · 142 patients
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-white/70 border border-slate-100/80 p-3 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Department flow</span>
              <span>Today</span>
            </div>
            <div className="flex gap-2">
              {["Triage", "Consult", "Pharmacy", "Complete"].map(
                (stage, idx) => (
                  <div key={stage} className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-slate-500">
                        {stage}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-700">
                        {idx === 0
                          ? "42"
                          : idx === 1
                          ? "31"
                          : idx === 2
                          ? "24"
                          : "18"}
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          idx === 0
                            ? "bg-[#9034e9]"
                            : idx === 1
                            ? "bg-[#f16412]"
                            : "bg-emerald-500"
                        }`}
                        style={{ width: `${70 - idx * 10}%` }}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-auto grid grid-cols-2 gap-3 text-[10px]"
          >
            <div className="rounded-xl bg-white/70 border border-slate-100/80 p-3 space-y-2">
              <div className="flex items-center justify-between text-slate-500">
                <span>Inventory</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                  Stable
                </span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span>Amoxicillin</span>
                  <span className="font-semibold text-slate-800">84%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Paracetamol</span>
                  <span className="font-semibold text-slate-800">62%</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-slate-900 text-slate-50 p-3 space-y-2">
              <div className="text-[10px] text-slate-300">
                Today&apos;s load
              </div>
              <div className="flex items-end gap-1">
                <span className="text-lg font-semibold">317</span>
                <span className="text-[10px] text-slate-400 mb-0.5">
                  patients
                </span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-emerald-300">
                <span className="inline-block size-1.5 rounded-full bg-emerald-400" />
                On track vs. last mission
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
