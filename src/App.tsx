import React from 'react'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Card from './components/Card'
import StatsSection from './components/StatsSection'
import { cards } from './data'

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />

      <section id="notes" className="mt-8">
        <h2 className="text-2xl font-bold mb-4">主页 · 照片 / 笔记 / 视频</h2>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Card key={c.id} card={c} />
          ))}
        </div>
      </section>

      <StatsSection />
    </Layout>
  )
}

export default App
