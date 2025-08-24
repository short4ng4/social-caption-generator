import OpenAI from 'openai'
import { Platform, Tone, CaptionRequest, GeneratedCaption } from '@/types'

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

interface PlatformConfig {
  maxLength: number
  style: string
  hashtagCount: number
}

const platformConfigs: Record<Platform, PlatformConfig> = {
  instagram: {
    maxLength: 2200,
    style: 'visual-focused with line breaks for readability',
    hashtagCount: 10,
  },
  tiktok: {
    maxLength: 300,
    style: 'trendy, casual, and engaging with hooks',
    hashtagCount: 5,
  },
  linkedin: {
    maxLength: 1300,
    style: 'professional, value-driven, and thought-provoking',
    hashtagCount: 5,
  },
  twitter: {
    maxLength: 280,
    style: 'concise, punchy, and conversation-starting',
    hashtagCount: 3,
  },
}

const toneDescriptions: Record<Tone, string> = {
  funny: 'humorous, witty, and entertaining',
  professional: 'polished, authoritative, and business-appropriate',
  inspirational: 'motivating, uplifting, and encouraging',
  witty: 'clever, sharp, and intellectually playful',
  aesthetic: 'visually-minded, artistic, and beautifully crafted',
  casual: 'relaxed, friendly, and conversational',
  bold: 'confident, attention-grabbing, and fearless',
}

export async function generateCaptions(request: CaptionRequest): Promise<GeneratedCaption[]> {
  const { topic, platform, tone, includeEmojis, includeHashtags } = request
  const config = platformConfigs[platform]
  const toneDesc = toneDescriptions[tone]

  const systemPrompt = `You are an expert social media copywriter specializing in creating engaging captions for ${platform}. 

Platform specifications for ${platform}:
- Maximum length: ${config.maxLength} characters
- Style: ${config.style}
- Target hashtag count: ${config.hashtagCount}

Generate 4 distinct captions that are:
- ${toneDesc} in tone
- Optimized for ${platform} engagement
- ${includeEmojis ? 'Include relevant emojis naturally' : 'No emojis'}
- Each caption should be unique in approach and style
- Focus on the topic: "${topic}"

${includeHashtags ? `For each caption, also suggest ${config.hashtagCount} relevant hashtags that are:
- Popular but not oversaturated
- Mix of broad and niche tags
- Relevant to the content and platform` : 'Do not include hashtags in the response.'}

Return ONLY a JSON array with this exact structure:
[
  {
    "content": "The caption text here",
    "hashtags": ["#hashtag1", "#hashtag2", "#hashtag3"]
  }
]

${!includeHashtags ? 'Set hashtags to an empty array [].' : ''}

Ensure the JSON is valid and properly formatted.`

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
      ],
      temperature: 0.8,
      max_tokens: 2000,
    })

    const responseContent = completion.choices[0]?.message?.content
    if (!responseContent) {
      throw new Error('No response from OpenAI')
    }

    // Parse the JSON response
    const captionsData = JSON.parse(responseContent)
    
    // Convert to GeneratedCaption format
    const captions: GeneratedCaption[] = captionsData.map((caption: any, index: number) => ({
      id: `${Date.now()}-${index}`,
      content: caption.content,
      hashtags: caption.hashtags || [],
      platform,
      tone,
    }))

    return captions
  } catch (error) {
    console.error('Error generating captions:', error)
    throw new Error('Failed to generate captions. Please try again.')
  }
}
