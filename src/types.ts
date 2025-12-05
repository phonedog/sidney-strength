export type CardType = 'note' | 'photo' | 'video'

export interface BaseCard {
  id: string
  type: CardType
  title: string
  date: string // ISO or readable date
  tags: string[]
}

export interface NoteCard extends BaseCard {
  type: 'note'
  content: string
}

export interface PhotoCard extends BaseCard {
  type: 'photo'
  imageUrl: string
  description?: string
}

export interface VideoCard extends BaseCard {
  type: 'video'
  videoUrl: string
  description?: string
}

export type Card = NoteCard | PhotoCard | VideoCard
