export type Platform = 'instagram' | 'tiktok' | 'linkedin' | 'twitter'

export type Tone = 'funny' | 'professional' | 'inspirational' | 'witty' | 'aesthetic' | 'casual' | 'bold'

export interface CaptionRequest {
  topic: string
  platform: Platform
  tone: Tone
  includeEmojis: boolean
  includeHashtags: boolean
}

export interface GeneratedCaption {
  id: string
  content: string
  hashtags: string[]
  platform: Platform
  tone: Tone
}

export interface GenerationSession {
  generationsUsed: number
  maxGenerations: number
  sessionId: string
}
