import React from 'react'
import { trainingWeeks } from '../data'

const WorldMap: React.FC = () => {
  return (
    <section className="mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="retro-card p-6 crt-vignette">
        <div className="text-neon font-black mb-4">WORLD MAP</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {trainingWeeks.map((w, idx) => (
            <div key={w.week} className="retro-tile p-4 rounded blocky">
              <div className="text-sm font-black text-neon mb-1">{w.week}</div>
              <div className="text-xs text-gray-300 mb-2">{w.focus}</div>
              <div className="text-sm text-gray-200">{w.summary}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorldMap
