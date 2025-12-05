import React, { useState, useEffect } from 'react'

export default function App() {
  const [activeTab, setActiveTab] = useState<'STATS' | 'QUESTS' | 'INVENTORY'>('STATS')
  const [loaded, setLoaded] = useState(false)

  // 模拟从CSV读取的数据 (基于您之前的文件)
  const athleteData = {
    name: '崔鑫煜',
    level: 31, // Age
    class: '80kg级',
    role: 'Powerlifter',
    total: 582.5, // S215 + B125 + D242.5
    stats: {
      squat: { val: 215, max: 300, color: 'bg-red-500' },
      bench: { val: 125, max: 200, color: 'bg-blue-500' },
      deadlift: { val: 242.5, max: 300, color: 'bg-yellow-500' }
    }
  }

  const questLog = [
    {
      id: 1,
      title: 'WORLD 1: The Intro',
      date: '2025 Jan - Feb',
      desc: '适应期训练。建立基准力量。',
      boss: 'Squat 207.5kg',
      status: 'CLEARED',
      loot: '+10 EXP'
    },
    {
      id: 2,
      title: 'WORLD 2: Volume Valley',
      date: '2025 Feb - Mar',
      desc: '高容量轰炸。积累疲劳，第4周遭遇 RPE 9.5 强敌。',
      boss: 'Deadlift 232.5kg',
      status: 'CLEARED',
      loot: '+25 STR'
    },
    {
      id: 3,
      title: 'WORLD 3: Tech Reserve',
      date: '2025 Aug - Dec',
      desc: '技术重塑与储备。暂停深蹲与节奏卧推的试炼。',
      boss: 'Technique Mastery',
      status: 'ONGOING',
      loot: 'New Skill Unlocked'
    }
  ]

  useEffect(() => {
    // 简单的加载动画延时
    const timer = setTimeout(() => setLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen pb-20 relative font-['Press_Start_2P',_cursive] text-gray-200 overflow-x-hidden bg-[#1a1a1a]">
      {/* 这里我们将 CSS 样式直接嵌入组件中，确保单文件运行且包含所有复古特效。 */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        /* 自定义滚动条 */
        ::-webkit-scrollbar {
          width: 12px;
          background: #000;
        }
        ::-webkit-scrollbar-thumb {
          background: #b91c1c; 
          border: 2px solid #fff;
        }

        /* CRT 扫描线特效 */
        .scanlines {
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0),
            rgba(255,255,255,0) 50%,
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.2)
          );
          background-size: 100% 4px;
          position: fixed;
          top: 0; 
          left: 0; 
          right: 0; 
          bottom: 0; 
          pointer-events: none;
          z-index: 50;
        }

        /* 复古容器边框 */
        .nes-container {
          position: relative;
          background-color: #262626;
          border-style: solid;
          border-width: 4px;
          border-color: #fce7f3;
          box-shadow: 
            -4px 0 0 0 #000, 
            4px 0 0 0 #000, 
            0 -4px 0 0 #000, 
            0 4px 0 0 #000;
          margin: 10px;
        }

        .blink {
          animation: blinker 1s linear infinite;
        }

        @keyframes blinker {
          50% { opacity: 0; }
        }

        /* 像素按钮点击效果 */
        .pixel-btn {
          box-shadow: inset -4px -4px 0px 0px #991b1b;
        }
        .pixel-btn:active {
          box-shadow: inset 4px 4px 0px 0px #000;
          transform: translateY(2px);
        }

        /* 属性条加载动画 */
        .stat-fill {
          transition: width 1.5s ease-out;
        }

        /* 确保字体回退 */
        body {
            font-family: 'Press Start 2P', cursive, monospace;
        }
      `}</style>

      <div className="scanlines"></div>
      
      {/* Header Section */}
      <header className="bg-red-700 text-white p-6 border-b-4 border-black text-center sticky top-0 z-40 shadow-lg">
        <h1 className="text-xl md:text-3xl text-yellow-300 drop-shadow-md mb-2 tracking-widest" style={{ fontFamily: '"Press Start 2P", cursive' }}>
          POWERLIFTING QUEST
        </h1>
        <p className="text-xs md:text-sm">PLAYER 1 START</p>
      </header>

      <div className="max-w-4xl mx-auto p-4 mt-8 font-sans" style={{ fontFamily: '"Press Start 2P", cursive' }}>
        
        {/* Character Profile Card */}
        <div className="nes-container p-6 mb-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-32 h-32 bg-gray-300 border-4 border-black relative flex items-center justify-center overflow-hidden shrink-0">
            {/* SVG Pixel Avatar */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 text-gray-800" style={{ imageRendering: 'pixelated' }}>
              <path d="M12 2C9 2 7 4 7 7c0 1.5.5 3 1.5 4C6 12 4 14 4 17v3h16v-3c0-3-2-5-4.5-6 1-1 1.5-2.5 1.5-4 0-3-2-5-5-5zm0 2c1.5 0 3 1.5 3 3s-1.5 3-3 3-3-1.5-3-3 1.5-3 3-3z"/>
              <rect x="2" y="16" width="4" height="6" className="text-gray-600" />
              <rect x="18" y="16" width="4" height="6" className="text-gray-600" />
            </svg>
            <div className="absolute bottom-0 w-full bg-black text-white text-[10px] text-center py-1">LV.{athleteData.level}</div>
          </div>
          
          <div className="flex-1 w-full">
            <h2 className="text-xl md:text-2xl text-yellow-400 mb-4 border-b-4 border-dashed border-gray-600 pb-2">{athleteData.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
              <p><span className="text-gray-400">CLASS:</span> {athleteData.class}</p>
              <p><span className="text-gray-400">JOB:</span> {athleteData.role}</p>
              <p><span className="text-gray-400">TOTAL:</span> {athleteData.total} KG</p>
              <p><span className="text-gray-400">STATUS:</span> <span className="text-green-400 blink">ACTIVE</span></p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
          {['STATS', 'QUESTS', 'INVENTORY'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`flex-1 py-4 px-2 border-4 border-black font-bold text-xs md:text-sm transition-all duration-100 pixel-btn whitespace-nowrap
                ${activeTab === tab ? 'bg-yellow-400 text-black translate-y-1' : 'bg-gray-700 hover:bg-gray-600'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="bg-gray-800 border-4 border-white p-4 min-h-[300px] shadow-2xl relative">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-4 h-4 bg-white"></div>
          <div className="absolute top-0 right-0 w-4 h-4 bg-white"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-white"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-white"></div>

          {activeTab === 'STATS' && (
            <div className="space-y-8 py-4 px-2">
              <h3 className="text-lg md:text-xl text-center text-blue-300 mb-6">- ATTRIBUTES -</h3>
              
              {/* Stat Bars */}
              {Object.entries(athleteData.stats).map(([key, stat]) => (
                <div key={key} className="mb-4">
                  <div className="flex justify-between mb-1 text-[10px] md:text-xs">
                    <span className="uppercase text-yellow-200">{key}</span>
                    <span>{(stat as any).val} KG</span>
                  </div>
                  <div className="w-full bg-gray-900 border-2 border-gray-600 h-6 relative p-1">
                    <div 
                      className={`h-full ${ (stat as any).color } stat-fill`}
                      style={{ width: loaded ? `${((stat as any).val / (stat as any).max) * 100}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}

              <div className="mt-8 p-4 bg-black border-2 border-gray-600 text-[10px] md:text-xs text-green-400 font-mono leading-relaxed">
                <p>{'>'} 分析系统启动...</p>
                <p>{'>'} 硬拉能力评级: <span className="text-yellow-400">S</span></p>
                <p>{'>'} 卧推稳定性: <span className="text-yellow-400">A+</span></p>
                <p>{'>'} 深蹲潜力: 检测到进步空间...</p>
              </div>
            </div>
          )}

          {activeTab === 'QUESTS' && (
            <div className="space-y-6">
              <h3 className="text-lg md:text-xl text-center text-green-300 mb-6">- ADVENTURE LOG -</h3>
              {questLog.map((quest) => (
                <div key={quest.id} className="bg-gray-900 border-2 border-gray-500 p-4 hover:border-yellow-400 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-2 border-b-2 border-gray-700 pb-2">
                    <h4 className="text-yellow-400 text-xs md:text-sm group-hover:text-white leading-tight">{quest.title}</h4>
                    <span className={`text-[8px] md:text-[10px] px-2 py-1 ml-2 ${quest.status === 'CLEARED' ? 'bg-green-700' : 'bg-blue-700'}`}>
                      {quest.status}
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-400 mb-2">{quest.date}</p>
                  <p className="text-[10px] md:text-xs text-gray-300 mb-3 leading-loose">{quest.desc}</p>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-red-400">BOSS: {quest.boss}</span>
                    <span className="text-yellow-600">LOOT: {quest.loot}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'INVENTORY' && (
            <div className="text-center py-10">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  {name: 'SBD Belt', icon: '🛡️', rarity: 'Epic'},
                  {name: 'Wrist Wraps', icon: '🧤', rarity: 'Rare'},
                  {name: 'Squat Shoes', icon: '👟', rarity: 'Rare'},
                  {name: 'Chalk', icon: '☁️', rarity: 'Common'},
                  {name: 'Smelling Salts', icon: '😤', rarity: 'Consumable'},
                  {name: 'Camera', icon: '📷', rarity: 'Tool'}
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center bg-gray-900 p-2 border-2 border-gray-700 hover:bg-gray-700 transition-colors">
                    <span className="text-2xl mb-2">{item.icon}</span>
                    <span className="text-[8px] text-gray-300">{item.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500">装备栏位 6/10</p>
            </div>
          )}
        </div>

        {/* Footer / Credits */}
        <div className="mt-8 text-center text-[10px] text-gray-500 pb-8">
          <p>© 2025 CUI XINYU FITNESS</p>
          <p>POWERED BY NINTENDO POWER (Not really)</p>
          <div className="mt-4 animate-bounce text-yellow-600">
            INSERT COIN TO CONTINUE
          </div>
        </div>
      </div>
    </div>
  )
}

/* 90年代任天堂游戏风格 */
