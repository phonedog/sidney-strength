import React, { useState } from 'react'
import Layout from './components/Layout'
import RetroIntro from './components/RetroIntro'
import StatusScreen from './components/StatusScreen'
import WorldMap from './components/WorldMap'
import Card from './components/Card'
import StatsSection from './components/StatsSection'
import ChatBot from './components/ChatBot'
import { cards } from './data'

const App: React.FC = () => {
  const [started, setStarted] = useState(false)

  return (
    <Layout>
      {!started && <RetroIntro onStart={() => setStarted(true)} />}

      {/* Main content shows after pressing start */}
      <div className={started ? '' : 'opacity-40 pointer-events-none'}>
        <StatusScreen />

        <section id="notes" className="mt-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-neon mb-6">训练日志 · 卡片</h2>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <Card key={c.id} card={c} />
            ))}
          </div>
        </section>

        <WorldMap />

        <StatsSection />

        <ChatBot />
      </div>
    </Layout>
  )
}

export default App
