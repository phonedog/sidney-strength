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
  const [showChat, setShowChat] = useState(false)

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
    <section id="chatbot" className="mt-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 折叠/展开按钮 */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="w-full flex items-center justify-between bg-dark-charcoal border-2 border-neon-yellow rounded-lg p-4 hover:bg-gray-900 transition"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-neon-yellow flex items-center justify-center text-sm font-black text-dark-charcoal">💬</div>
          <div className="text-left">
            <h2 className="text-lg font-black text-neon-yellow leading-tight">留言助手 · ChatBot</h2>
            <p className="text-xs text-gray-400">发送你的问题或训练需求，等待 n8n 自动回复</p>
          </div>
        </div>
        <div className="text-neon-yellow font-bold text-xl">{showChat ? '−' : '+'}</div>
      </button>

      {/* 聊天区域（可折叠） */}
      {showChat && (
        <div className="mt-4 bg-gray-900 rounded-lg p-6 border-2 border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* 消息展示区 */}
            <div className="lg:col-span-2 rounded-lg bg-slate-800 p-4 space-y-3 max-h-96 overflow-y-auto border border-slate-700">
              {messages.length === 0 && (
                <div className="text-sm text-gray-400 italic">还没有消息，留下第一条吧。</div>
              )}
              {messages.map((m) => (
                <div key={m.id} className="flex gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${
                    m.role === 'user'
                      ? 'bg-neon-yellow text-dark-charcoal'
                      : 'bg-gray-600 text-white'
                  }`}>
                    {m.role === 'user' ? '你' : 'n8n'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`rounded-md p-3 ${
                      m.role === 'user'
                        ? 'bg-neon-yellow/10 border border-neon-yellow/30 text-gray-100'
                        : 'bg-slate-700 border border-slate-600 text-gray-200'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap break-words">{m.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              {error && <div className="text-sm text-red-400 font-semibold">❌ {error}</div>}
              {loading && <div className="text-sm text-neon-yellow animate-pulse font-semibold">⏳ 等待 n8n 回复中...</div>}
            </div>

            {/* 输入表单 */}
            <form onSubmit={handleSubmit} className="rounded-lg p-4 bg-slate-800 space-y-3 border border-slate-700">
              <div>
                <label className="block text-xs text-gray-300 mb-2 font-bold">姓名（可选）</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md bg-slate-700 border border-slate-600 text-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neon-yellow/50"
                  placeholder="你叫什么？"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-300 mb-2 font-bold">邮箱（可选）</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md bg-slate-700 border border-slate-600 text-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neon-yellow/50"
                  placeholder="contact@example.com"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-300 mb-2 font-bold">留言 *</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  required
                  className="w-full rounded-md bg-slate-700 border border-slate-600 text-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neon-yellow/50 resize-none"
                  placeholder="你的问题或训练需求..."
                />
              </div>
              <button
                type="submit"
                disabled={!canSend}
                className="w-full rounded-md py-2 text-sm font-bold bg-neon-yellow text-dark-charcoal hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? '⏳ 发送中...' : '✉️ 发送给 n8n'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default ChatBot
