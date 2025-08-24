'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Copy, Check, Instagram, MessageCircle, Linkedin, Twitter, Sparkles } from 'lucide-react'
import { GeneratedCaption } from '@/types'
import { copyToClipboard } from '@/lib/utils'

interface CaptionCardProps {
  caption: GeneratedCaption
  index: number
}

const platformIcons = {
  instagram: Instagram,
  tiktok: MessageCircle,
  linkedin: Linkedin,
  twitter: Twitter,
}

const platformColors = {
  instagram: 'bg-gradient-to-r from-purple-500 to-pink-500',
  tiktok: 'bg-black',
  linkedin: 'bg-blue-600',
  twitter: 'bg-blue-400',
}

export function CaptionCard({ caption, index }: CaptionCardProps) {
  const [copied, setCopied] = useState(false)
  
  const PlatformIcon = platformIcons[caption.platform]
  
  const handleCopy = async () => {
    const fullText = caption.hashtags.length > 0 
      ? `${caption.content}\n\n${caption.hashtags.join(' ')}`
      : caption.content
    
    const success = await copyToClipboard(fullText)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const formatContent = (content: string) => {
    return content.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        {i < content.split('\n').length - 1 && <br />}
      </span>
    ))
  }

  return (
    <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slide-up">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`p-2 rounded-lg ${platformColors[caption.platform]}`}>
              <PlatformIcon className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 capitalize">
                {caption.platform} • {caption.tone}
              </h3>
              <p className="text-sm text-gray-500">Option {index + 1}</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="flex items-center space-x-1"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-green-600">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          {/* Caption Content */}
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
              {formatContent(caption.content)}
            </p>
          </div>
          
          {/* Hashtags */}
          {caption.hashtags.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">Suggested Hashtags:</p>
              <div className="flex flex-wrap gap-2">
                {caption.hashtags.map((hashtag, i) => (
                  <span
                    key={i}
                    className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                  >
                    {hashtag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
