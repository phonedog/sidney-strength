import React from 'react'
import { profile } from '../data'

// Map S/B/D to STR/VIT/DEX for RPG-style bars
const scaleTo100 = (value: number, max = 250) => Math.min(100, Math.round((value / max) * 100))

const Bar: React.FC<{ label: string; value: number; color?: string }> = ({ label, value, color }) => {
  const pct = scaleTo100(value)
  const blocks = Math.ceil(pct / 10)
  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs text-gray-300 mb-1">
        <div>{label}</div>
        <div>{value}kg</div>
      </div>
      <div className="w-full bg-slate-800 rounded-sm h-6 retro-tile p-1">
        <div className="flex h-4 gap-1" style={{ width: '100%' }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`flex-1 rounded-sm ${i < blocks ? 'bg-neon' : 'bg-slate-700'}`}
              style={{ height: '100%' }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const StatusScreen: React.FC = () => {
  return (
    <section className="mt-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="retro-card p-6 crt-vignette scanlines">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-neon text-lg">STATUS</div>
            <div className="text-white text-sm">角色属性</div>
          </div>
          <div className="text-sm text-gray-300">Lv. 1</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            {/* STR from Squat */}
            <Bar label="STR (力量 - 深蹲)" value={profile.squatPR} />
            <Bar label="VIT (耐力 - 卧推)" value={profile.benchPR} />
            <Bar label="DEX (灵活 - 硬拉)" value={profile.deadliftPR} />
          </div>

          <div className="md:col-span-2">
            <div className="bg-slate-800 retro-tile p-4 rounded">
              <div className="text-sm text-gray-300 mb-2">人物信息</div>
              <div className="text-xs text-gray-400">身高: {profile.height} cm</div>
              <div className="text-xs text-gray-400">体重: {profile.weight} kg</div>
              <div className="mt-3 text-sm text-gray-200">这是把你的三大项转成 RPG 属性的演示视图，数值按比例缩放并以像素风格方块展示。</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatusScreen
