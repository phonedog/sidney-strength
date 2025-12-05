import React from 'react'
import type { Card as CardType } from '../types'

const TypeLabel: React.FC<{ type: CardType['type'] }> = ({ type }) => {
  const map: Record<string, string> = {
    note: '训练笔记',
    photo: '训练照片',
    video: '训练视频'
  }
  const colors: Record<string, string> = {
    note: 'bg-neon-yellow text-dark-charcoal',
    photo: 'bg-gray-200 text-dark-charcoal',
    video: 'bg-gray-200 text-dark-charcoal'
  }
  return <span className={`px-3 py-1 text-xs font-bold rounded ${colors[type]}`}>{map[type]}</span>
}

const Card: React.FC<{ card: CardType }> = ({ card }) => {
  return (
    <article className="card-bg rounded-lg p-5 card-transition glass-hover border-2 border-gray-300 hover:border-neon-yellow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <TypeLabel type={card.type} />
          <h3 className="mt-3 text-lg font-bold text-dark-charcoal">{card.title}</h3>
          <div className="mt-1 text-xs text-gray-600">{card.date} · {card.tags.join(' · ')}</div>
        </div>
      </div>

      <div className="mt-4 text-gray-800">
        {card.type === 'note' && (
          <p className="text-sm leading-relaxed">{card.content}</p>
        )}

        {card.type === 'photo' && (
          <div className="mt-3">
            <img src={card.imageUrl} alt={card.title} className="w-full h-44 object-cover rounded-md border-2 border-gray-300" />
            {card.description && <p className="mt-3 text-sm text-gray-700">{card.description}</p>}
          </div>
        )}

        {card.type === 'video' && (
          <div className="mt-3">
            <div className="w-full aspect-video rounded-md overflow-hidden border-2 border-gray-300 bg-dark-charcoal">
              <iframe src={card.videoUrl} title={card.title} className="w-full h-full" frameBorder={0} allowFullScreen></iframe>
            </div>
            {card.description && <p className="mt-3 text-sm text-gray-700">{card.description}</p>}
          </div>
        )}
      </div>
    </article>
  )
}

export default Card
