'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Sparkles, Instagram, MessageCircle, Linkedin, Twitter } from 'lucide-react'
import { Platform, Tone, CaptionRequest } from '@/types'

interface CaptionFormProps {
  onGenerate: (request: CaptionRequest) => void
  isLoading: boolean
  generationsLeft: number
}

const platformIcons = {
  instagram: Instagram,
  tiktok: MessageCircle,
  linkedin: Linkedin,
  twitter: Twitter,
}

const platformLabels = {
  instagram: 'Instagram',
  tiktok: 'TikTok',
  linkedin: 'LinkedIn',
  twitter: 'Twitter',
}

const toneLabels = {
  funny: 'Funny',
  professional: 'Professional',
  inspirational: 'Inspirational',
  witty: 'Witty',
  aesthetic: 'Aesthetic',
  casual: 'Casual',
  bold: 'Bold',
}

export function CaptionForm({ onGenerate, isLoading, generationsLeft }: CaptionFormProps) {
  const [topic, setTopic] = useState('')
  const [platform, setPlatform] = useState<Platform>('instagram')
  const [tone, setTone] = useState<Tone>('casual')
  const [includeEmojis, setIncludeEmojis] = useState(true)
  const [includeHashtags, setIncludeHashtags] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!topic.trim() || generationsLeft <= 0) return

    onGenerate({
      topic: topic.trim(),
      platform,
      tone,
      includeEmojis,
      includeHashtags,
    })
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Topic Input */}
          <div className="space-y-2">
            <label htmlFor="topic" className="text-sm font-medium text-gray-700">
              What's your post about?
            </label>
            <Textarea
              id="topic"
              placeholder="e.g., New product launch, weekend coffee, motivational quote..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="min-h-[100px]"
              required
            />
          </div>

          {/* Platform and Tone Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="platform" className="text-sm font-medium text-gray-700">
                Platform
              </label>
              <Select
                value={platform}
                onChange={(e) => setPlatform(e.target.value as Platform)}
              >
                {Object.entries(platformLabels).map(([value, label]) => {
                  const Icon = platformIcons[value as Platform]
                  return (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  )
                })}
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="tone" className="text-sm font-medium text-gray-700">
                Tone
              </label>
              <Select
                value={tone}
                onChange={(e) => setTone(e.target.value as Tone)}
              >
                {Object.entries(toneLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="emojis"
                checked={includeEmojis}
                onChange={(e) => setIncludeEmojis(e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="emojis" className="text-sm text-gray-700">
                Include emojis
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="hashtags"
                checked={includeHashtags}
                onChange={(e) => setIncludeHashtags(e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="hashtags" className="text-sm text-gray-700">
                Include hashtags
              </label>
            </div>
          </div>

          {/* Generate Button */}
          <div className="space-y-3">
            <Button
              type="submit"
              className="w-full"
              disabled={!topic.trim() || isLoading || generationsLeft <= 0}
              size="lg"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Generating amazing captions...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Captions
                </>
              )}
            </Button>

            {/* Generation Counter */}
            <p className="text-center text-sm text-gray-500">
              {generationsLeft > 0 ? (
                <>You have <span className="font-medium text-blue-600">{generationsLeft}</span> generations left</>
              ) : (
                <span className="text-red-500">Generation limit reached. Refresh to continue.</span>
              )}
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
