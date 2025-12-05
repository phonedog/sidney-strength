import type { Card } from './types'

// 站点基本信息（硬编码初始内容）
export const profile = {
  name: 'Sidney Strength',
  sport: '力量举 (Powerlifting)',
  squatPR: 150,
  benchPR: 130,
  deadliftPR: 190,
  height: 178,
  weight: 78,
}

// 示例卡片数据（中文为主，真实训练笔记风格）
export const cards: Card[] = [
  {
    id: 'n1',
    type: 'note',
    title: '深蹲训练 - 速度与深度控制',
    date: '2025-11-28',
    tags: ['深蹲', '技术', '下放节奏'],
    content:
      '热身后做工作组 5x5 @ 120kg，目标以控制下放速度为主。第4组出现膝内扣倾向，注意膝盖外推并加紧核心。RPE 感觉 8/10。建议下次在第3组后加 2 个低RPE的暂停深蹲，强化底部稳定性。'
  },
  {
    id: 'n2',
    type: 'note',
    title: '深蹲 - 轻重量技术日',
    date: '2025-10-12',
    tags: ['恢复', '技术'],
    content:
      '采用 60% 轻重量，做 6x3 专注于下放与转力点，采用箱式深蹲 3x4 练习深蹲深度一致性。感觉膝盖压力减小，核心参与感提升。'
  },
  {
    id: 'v1',
    type: 'video',
    title: '卧推 - 暂停卧推训练（教学）',
    date: '2025-11-10',
    tags: ['卧推', '视频'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: '示例视频说明如何进行 1s 暂停卧推以提升胸部出力和起始阶段锁定。'
  },
  {
    id: 'v2',
    type: 'video',
    title: '硬拉 - 锁定动作细节',
    date: '2025-09-20',
    tags: ['硬拉', '视频'],
    videoUrl: 'https://player.bilibili.com/player.html?bvid=BV1xx411c7mD',
    description: '示例 B 站嵌入链接，展示保持背部中立与臀腿发力的要点。'
  },
  {
    id: 'p1',
    type: 'photo',
    title: '训练房深蹲自拍',
    date: '2025-11-28',
    tags: ['深蹲', '训练房'],
    imageUrl: 'https://images.unsplash.com/photo-1558611848-73f7eb4001d3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    description: '深蹲工作组后，抓拍动作下放位置与膝盖趋势。'
  },
  {
    id: 'p2',
    type: 'photo',
    title: '比赛备战 - 热身带',
    date: '2025-08-05',
    tags: ['比赛', '热身'],
    imageUrl: 'https://images.unsplash.com/photo-1554284126-aa88f22d8dff?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    description: '赛前热身的短暂记录，顺带检查动作轨迹。'
  }
]

// 训练周数据（最近 4 周示例）
export const trainingWeeks = [
  {
    week: 'Week 4',
    focus: '深蹲 5x5, 卧推 4x6, 硬拉 3x3',
    summary: '状态提升，深蹲底部更稳，硬拉锁定更好。'
  },
  {
    week: 'Week 3',
    focus: '技术日：暂停卧推与速度深蹲',
    summary: '卧推起始更稳定，建议下周继续提高暂停时间。'
  },
  {
    week: 'Week 2',
    focus: '中等负荷力量储备：深蹲 4x6, 卧推 5x5',
    summary: '总体恢复良好，重量进展平稳。'
  },
  {
    week: 'Week 1',
    focus: '恢复周：低强度，技术为主',
    summary: '轻量化训练，恢复为主，准备下个训练周期。'
  }
]
