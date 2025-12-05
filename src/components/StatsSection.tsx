import React from 'react'
import { profile, trainingWeeks } from '../data'

const StatsSection: React.FC = () => {
  return (
    <section id="data" className="mt-12 bg-dark-charcoal text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black mb-8">训练数据总览 · PRs</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg p-6 bg-gray-800 border-2 border-gray-700">
            <div className="text-sm text-gray-400 mb-4">当前 PR 一览</div>
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-md bg-neon-yellow text-dark-charcoal font-bold">
                <div className="text-xs">S</div>
                <div className="text-2xl">{profile.squatPR}kg</div>
              </div>
              <div className="p-4 rounded-md bg-gray-600 text-white font-bold">
                <div className="text-xs">B</div>
                <div className="text-2xl">{profile.benchPR}kg</div>
              </div>
              <div className="p-4 rounded-md bg-gray-600 text-white font-bold">
                <div className="text-xs">D</div>
                <div className="text-2xl">{profile.deadliftPR}kg</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 rounded-lg p-6 bg-gray-800 border-2 border-gray-700">
            <div className="text-sm text-gray-400 mb-4">近期训练周数</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trainingWeeks.map((w) => (
                <div key={w.week} className="p-4 rounded-md bg-gray-700 border border-gray-600">
                  <div className="text-sm font-bold text-neon-yellow">{w.week}</div>
                  <div className="text-xs text-gray-300 mt-1">{w.focus}</div>
                  <div className="mt-2 text-sm text-gray-200">{w.summary}</div>
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
