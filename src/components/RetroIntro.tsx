import React, { useEffect, useState } from 'react'

const RetroIntro: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 600)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') onStart()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onStart])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center crt crt-vignette scanlines">
      <div className="text-center max-w-2xl px-6">
        <div className="text-neon text-2xl mb-6">SIDNEY STRENGTH</div>
        <div className="text-white text-lg mb-8">力量举 · 训练人生 — 8-bit 版</div>

        <div className="text-sm text-gray-300 mb-6">按 Enter / 空格 或 点击开始</div>

        <button
          onClick={onStart}
          className="retro-btn px-6 py-3 rounded blocky mx-auto"
        >
          {blink ? 'PRESS START' : 'PRESS START'}
        </button>
      </div>
    </div>
  )
}

export default RetroIntro
