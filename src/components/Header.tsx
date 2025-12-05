import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xs bg-black/30 border-b border-white/6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-sm font-semibold">SS</div>
            <div>
              <div className="text-sm font-semibold">Sidney Strength</div>
              <div className="text-xs text-slate-400">力量举训练记录</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-white/90 text-slate-300">主页</a>
            <a href="#notes" className="hover:text-white/90 text-slate-300">训练记录</a>
            <a href="#videos" className="hover:text-white/90 text-slate-300">视频</a>
            <a href="#data" className="hover:text-white/90 text-slate-300">数据</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
