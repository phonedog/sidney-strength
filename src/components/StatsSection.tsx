import React from 'react'
import { profile, trainingWeeks } from '../data'

const StatsSection: React.FC = () => {
  return (
    <section id="data" className="mt-12 bg-dark-charcoal text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black mb-8">训练数据总览 · PRs</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 当前 PR 一览卡片 */}
          <div className="rounded-lg p-6 bg-gray-900 border-2 border-slate-700">
            <div className="text-sm text-gray-300 mb-4 font-semibold">当前 PR 一览</div>
            <div className="flex items-center gap-4">
              {/* 深蹲（黄色突出） */}
              <div className="p-4 rounded-md bg-neon-yellow text-dark-charcoal font-bold text-center">
                <div className="text-xs font-bold">S</div>
                <div className="text-3xl font-black">{profile.squatPR}kg</div>
              </div>
              {/* 卧推 */}
              <div className="p-4 rounded-md bg-slate-700 text-white font-bold text-center">
                <div className="text-xs font-bold">B</div>
                <div className="text-3xl font-black">{profile.benchPR}kg</div>
              </div>
              {/* 硬拉 */}
              <div className="p-4 rounded-md bg-slate-700 text-white font-bold text-center">
                <div className="text-xs font-bold">D</div>
                <div className="text-3xl font-black">{profile.deadliftPR}kg</div>
              </div>
            </div>
          </div>

          {/* 近期训练周数卡片 */}
          <div className="md:col-span-2 rounded-lg p-6 bg-gray-900 border-2 border-slate-700">
            <div className="text-sm text-gray-300 mb-4 font-semibold">近期训练周数</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trainingWeeks.map((w) => (
                <div key={w.week} className="p-4 rounded-md bg-slate-800 border-2 border-slate-700 hover:border-neon-yellow/50 transition">
                  <div className="text-sm font-black text-neon-yellow mb-1">{w.week}</div>
                  <div className="text-xs text-gray-400 mb-2">{w.focus}</div>
                  <div className="text-sm text-gray-200 leading-relaxed">{w.summary}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
