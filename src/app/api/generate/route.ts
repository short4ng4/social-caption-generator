import { NextRequest, NextResponse } from 'next/server'
import { generateCaptions } from '@/lib/openai'
import { CaptionRequest } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const body: CaptionRequest = await request.json()
    
    // Validate request
    if (!body.topic || !body.platform || !body.tone) {
      return NextResponse.json(
        { error: 'Missing required fields: topic, platform, tone' },
        { status: 400 }
      )
    }

    // Generate captions
    const captions = await generateCaptions(body)
    
    return NextResponse.json({ captions })
  } catch (error) {
    console.error('API Error:', error)
    
    return NextResponse.json(
      { error: 'Failed to generate captions. Please try again.' },
      { status: 500 }
    )
  }
}
