import React from 'react'
import { profile, trainingWeeks } from '../data'

const StatsSection: React.FC = () => {
  return (
    <section id="data" className="mt-8">
      <h2 className="text-2xl font-bold mb-4">训练数据总览 · PRs</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg p-4 card-bg">
          <div className="text-sm text-slate-400">当前 PR 一览</div>
          <div className="mt-3 flex items-center gap-4">
            <div className="p-3 rounded-md bg-gradient-to-br from-indigo-700 to-indigo-500 text-white">
              <div className="text-xs">S</div>
              <div className="text-xl font-bold">{profile.squatPR}kg</div>
            </div>
            <div className="p-3 rounded-md bg-gradient-to-br from-rose-600 to-rose-400 text-white">
              <div className="text-xs">B</div>
              <div className="text-xl font-bold">{profile.benchPR}kg</div>
            </div>
            <div className="p-3 rounded-md bg-gradient-to-br from-green-700 to-green-500 text-white">
              <div className="text-xs">D</div>
              <div className="text-xl font-bold">{profile.deadliftPR}kg</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 rounded-lg p-4 card-bg">
          <div className="text-sm text-slate-400">近期训练周数</div>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {trainingWeeks.map((w) => (
              <div key={w.week} className="p-3 rounded-md bg-white/2">
                <div className="text-sm font-semibold">{w.week}</div>
                <div className="text-xs text-slate-300">{w.focus}</div>
                <div className="mt-1 text-sm text-slate-200">{w.summary}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
