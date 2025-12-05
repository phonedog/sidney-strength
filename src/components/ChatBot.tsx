import React, { useMemo, useState } from 'react'

type Message = {
  id: string
  role: 'user' | 'bot'
  text: string
}

const WEBHOOK_URL = 'https://phonedog.app.n8n.cloud/webhook/f21c53bc-f771-42b5-b6ac-913e043e81db'

const ChatBot: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const canSend = useMemo(() => message.trim().length > 0 && !loading, [message, loading])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSend) return
    setError(null)

    const payload = {
      name: name.trim() || undefined,
      email: email.trim() || undefined,
      message: message.trim(),
      timestamp: new Date().toISOString(),
      page: window.location.href,
      userAgent: navigator.userAgent,
    }

    const userEntry: Message = { id: crypto.randomUUID(), role: 'user', text: payload.message }
    setMessages((prev) => [...prev, userEntry])
    setLoading(true)

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const text = await res.text()
      const botReply: Message = {
        id: crypto.randomUUID(),
        role: 'bot',
        text: text || 'Thanks for reaching out! We received your message.',
      }
      setMessages((prev) => [...prev, botReply])
      setMessage('')
    } catch (err) {
      console.error(err)
      setError('发送失败，请稍后再试。')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="chatbot" className="mt-10">
      <div className="card-bg rounded-xl p-5 md:p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center text-sm font-semibold">AI</div>
          <div>
            <h2 className="text-xl font-semibold leading-tight">Chatbot · 留言助手</h2>
            <p className="text-sm text-slate-300">发送你的问题或需求，等待 n8n 自动回复。</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 rounded-lg bg-white/2 p-4 space-y-3 max-h-72 overflow-y-auto">
            {messages.length === 0 && (
              <div className="text-sm text-slate-400">还没有消息，留下第一条吧。</div>
            )}
            {messages.map((m) => (
              <div key={m.id} className="flex gap-2">
                <div className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-semibold ${m.role === 'user' ? 'bg-indigo-500/70' : 'bg-emerald-500/70'}`}>
                  {m.role === 'user' ? 'Me' : 'Bot'}
                </div>
                <div className="flex-1">
                  <div className="text-xs text-slate-400">{m.role === 'user' ? '你' : 'n8n 回复'}</div>
                  <div className="text-sm text-slate-100 whitespace-pre-wrap">{m.text}</div>
                </div>
              </div>
            ))}
            {error && <div className="text-sm text-rose-300">{error}</div>}
            {loading && <div className="text-sm text-indigo-200 animate-pulse">等待 n8n 回复中...</div>}
          </div>

          <form onSubmit={handleSubmit} className="rounded-lg p-4 bg-white/2 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-slate-400 mb-1">姓名（可选）</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="How should I call you?"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">邮箱（可选）</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="for follow-up"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">留言</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                required
                className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Tell me your goal、问题或训练需求"
              />
            </div>

            <button
              type="submit"
              disabled={!canSend}
              className="w-full rounded-md py-2 text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? '发送中...' : '发送给 n8n'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ChatBot
