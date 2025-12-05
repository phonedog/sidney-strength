import React from 'react'
import { profile } from '../data'

const Hero: React.FC = () => {
  return (
    <section id="home" className="mb-8">
      <div className="rounded-xl card-bg p-6 md:p-8 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">力量举训练日记 <span className="text-indigo-400 text-lg">Powerlifting Log</span></h1>
            <p className="mt-2 text-slate-300">记录力量与生活的日常——训练、视频与进步的可视化笔记。</p>

            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="text-sm text-slate-400">身高 / 体重</div>
                <div className="text-sm font-medium">{profile.height}cm / {profile.weight}kg</div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="p-3 rounded-lg card-bg flex flex-col items-center w-28">
              <div className="text-xs text-slate-400">S</div>
              <div className="text-xl font-bold text-indigo-300">{profile.squatPR}kg</div>
              <div className="text-xs text-slate-400">Squat</div>
            </div>
            <div className="p-3 rounded-lg card-bg flex flex-col items-center w-28">
              <div className="text-xs text-slate-400">B</div>
              <div className="text-xl font-bold text-indigo-300">{profile.benchPR}kg</div>
              <div className="text-xs text-slate-400">Bench</div>
            </div>
            <div className="p-3 rounded-lg card-bg flex flex-col items-center w-28">
              <div className="text-xs text-slate-400">D</div>
              <div className="text-xl font-bold text-indigo-300">{profile.deadliftPR}kg</div>
              <div className="text-xs text-slate-400">Deadlift</div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="col-span-1 rounded-md p-3 card-bg">
            <div className="text-sm font-semibold">本周训练重点</div>
            <ul className="mt-2 text-sm text-slate-300 space-y-1">
              <li>深蹲技术：控制下放节奏，保持核心紧张</li>
              <li>卧推：练习 1 秒暂停卧推，增加胸部起始力</li>
              <li>硬拉：维持背部中立，避免下背代偿</li>
            </ul>
          </div>
          <div className="col-span-1 rounded-md p-3 card-bg">
            <div className="text-sm font-semibold">训练风格</div>
            <div className="mt-2 text-sm text-slate-300">以技术先行为主，周期性提升重量并关注动作质量与恢复。</div>
          </div>
          <div className="col-span-1 rounded-md p-3 card-bg">
            <div className="text-sm font-semibold">简短目标</div>
            <div className="mt-2 text-sm text-slate-300">稳步提高深蹲稳定性，卧推力量起点和硬拉锁定强度。</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
