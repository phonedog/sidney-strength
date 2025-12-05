import React from 'react'
import type { Card as CardType } from '../types'

const TypeLabel: React.FC<{ type: CardType['type'] }> = ({ type }) => {
  const map: Record<string, string> = {
    note: '训练笔记',
    photo: '训练照片',
    video: '训练视频'
  }
  return <span className="px-2 py-0.5 text-xs rounded-full bg-white/6 text-slate-200">{map[type]}</span>
}

const Card: React.FC<{ card: CardType }> = ({ card }) => {
  return (
    <article className="card-bg rounded-xl p-4 card-transition glass-hover shadow-sm hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <div>
          <TypeLabel type={card.type} />
          <h3 className="mt-2 text-lg font-semibold">{card.title}</h3>
          <div className="mt-1 text-xs text-slate-400">{card.date} · {card.tags.join(' · ')}</div>
        </div>
      </div>

      <div className="mt-3 text-slate-200">
        {card.type === 'note' && (
          <p className="text-sm">{card.content}</p>
        )}

        {card.type === 'photo' && (
          <div className="mt-3">
            <img src={card.imageUrl} alt={card.title} className="w-full h-44 object-cover rounded-md" />
            {card.description && <p className="mt-2 text-sm text-slate-300">{card.description}</p>}
          </div>
        )}

        {card.type === 'video' && (
          <div className="mt-3">
            <div className="w-full aspect-video rounded-md overflow-hidden bg-black">
              {/* 直接用 iframe 支持 YouTube / Bilibili 嵌入链接 */}
              <iframe src={card.videoUrl} title={card.title} className="w-full h-full" frameBorder={0} allowFullScreen></iframe>
            </div>
            {card.description && <p className="mt-2 text-sm text-slate-300">{card.description}</p>}
          </div>
        )}
      </div>
    </article>
  )
}

export default Card
