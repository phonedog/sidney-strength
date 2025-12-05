import React from 'react'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Card from './components/Card'
import StatsSection from './components/StatsSection'
import ChatBot from './components/ChatBot'
import { cards } from './data'

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />

      <section id="notes" className="mt-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-dark-charcoal mb-6">我的训练 · 照片 / 笔记 / 视频</h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Card key={c.id} card={c} />
          ))}
        </div>
      </section>

      <StatsSection />

      <ChatBot />
    </Layout>
  )
}

export default App
