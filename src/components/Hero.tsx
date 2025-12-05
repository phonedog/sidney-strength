import React from 'react'
import { profile } from '../data'

const Hero: React.FC = () => {
  return (
    <section id="home" className="mb-12 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* 左侧：文案 + CTA */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-neon-yellow px-3 py-1 rounded font-bold text-xs text-dark-charcoal">
                力量举 POWERLIFTING
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-dark-charcoal mb-4 leading-tight">
              训练自己<br />成就完美
            </h1>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              记录每一次突破，用数据见证进步。深蹲、卧推、硬拉——把力量刻在肌肉里，把梦想写在训练日记上。
            </p>

            {/* 身高体重 + PR 展示 */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-card-bg p-3 rounded border-2 border-gray-300">
                <div className="text-xs text-gray-600">身高</div>
                <div className="text-lg font-bold text-dark-charcoal">{profile.height}cm</div>
              </div>
              <div className="bg-card-bg p-3 rounded border-2 border-gray-300">
                <div className="text-xs text-gray-600">体重</div>
                <div className="text-lg font-bold text-dark-charcoal">{profile.weight}kg</div>
              </div>
              <div className="card-yellow p-3 rounded border-2 border-neon-yellow">
                <div className="text-xs text-gray-700 font-bold">BMI</div>
                <div className="text-lg font-bold text-dark-charcoal">{(profile.weight / (profile.height / 100) ** 2).toFixed(1)}</div>
              </div>
            </div>

            {/* CTA 按钮与装饰 */}
            <div className="flex items-center gap-4">
              <button className="bg-dark-charcoal text-neon-yellow font-bold px-6 py-3 rounded hover:bg-neon-yellow hover:text-dark-charcoal transition">
                开始训练 →
              </button>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-neon-yellow"></div>
                <div className="w-2 h-2 rounded-full bg-neon-yellow"></div>
                <div className="w-2 h-2 rounded-full bg-neon-yellow"></div>
              </div>
            </div>

            {/* 斜纹装饰 */}
            <div className="mt-6 h-24 stripe-pattern opacity-50"></div>
          </div>

          {/* 右侧：大圆形 + 图片占位符 */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* 背景圆形 - 黄色 */}
              <div className="absolute inset-0 bg-neon-yellow rounded-full opacity-80"></div>
              {/* 内层圆形 - 浅灰占位 */}
              <div className="absolute inset-4 bg-gray-300 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-black text-dark-charcoal mb-2">💪</div>
                  <div className="text-sm font-bold text-dark-charcoal">训练照片<br />占位</div>
                </div>
              </div>
            </div>

            {/* 装饰元素（右上哈希线） */}
            <div className="absolute top-0 right-0 w-24 h-24 opacity-30">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="3" />
                <line x1="20" y1="0" x2="100" y2="80" stroke="black" strokeWidth="3" />
                <line x1="0" y1="20" x2="80" y2="100" stroke="black" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>

        {/* 本周训练重点：移到下方 */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-card-bg p-4 rounded border-2 border-gray-300">
            <div className="text-sm font-bold text-dark-charcoal">深蹲技术</div>
            <div className="mt-2 text-sm text-gray-700">控制下放节奏，保持核心紧张</div>
          </div>
          <div className="bg-card-bg p-4 rounded border-2 border-gray-300">
            <div className="text-sm font-bold text-dark-charcoal">卧推力量</div>
            <div className="mt-2 text-sm text-gray-700">练习 1 秒暂停卧推，增加起始力</div>
          </div>
          <div className="bg-card-bg p-4 rounded border-2 border-gray-300">
            <div className="text-sm font-bold text-dark-charcoal">硬拉稳定</div>
            <div className="mt-2 text-sm text-gray-700">维持背部中立，避免下背代偿</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
