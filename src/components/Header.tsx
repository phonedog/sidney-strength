import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-neon-yellow shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-neon-yellow flex items-center justify-center text-sm font-bold text-dark-charcoal">SS</div>
            <div>
              <div className="text-sm font-bold text-dark-charcoal">Sidney Strength</div>
              <div className="text-xs text-gray-600">力量举训练记录</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <a href="#home" className="text-dark-charcoal hover:text-neon-yellow transition">主页</a>
            <a href="#notes" className="text-dark-charcoal hover:text-neon-yellow transition">训练记录</a>
            <a href="#videos" className="text-dark-charcoal hover:text-neon-yellow transition">视频</a>
            <a href="#data" className="text-dark-charcoal hover:text-neon-yellow transition">数据</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
