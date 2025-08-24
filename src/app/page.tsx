'use client'

import React, { useState, useEffect } from 'react'
import { Hero } from '@/components/Hero'
import { CaptionForm } from '@/components/CaptionForm'
import { CaptionCard } from '@/components/CaptionCard'
import { CaptionRequest, GeneratedCaption } from '@/types'
import { RateLimiter } from '@/lib/rateLimit'
import { RefreshCw, AlertCircle } from 'lucide-react'

export default function HomePage() {
  const [captions, setCaptions] = useState<GeneratedCaption[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [generationsLeft, setGenerationsLeft] = useState(10)

  useEffect(() => {
    // Initialize rate limiting
    setGenerationsLeft(RateLimiter.getRemainingGenerations())
  }, [])

  const handleGenerate = async (request: CaptionRequest) => {
    if (!RateLimiter.canGenerate()) {
      setError('Daily generation limit reached. Please try again tomorrow.')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate captions')
      }

      setCaptions(data.captions)
      RateLimiter.incrementUsage()
      setGenerationsLeft(RateLimiter.getRemainingGenerations())
    } catch (error) {
      console.error('Generation error:', error)
      setError(error instanceof Error ? error.message : 'An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <Hero />

        {/* Generation Form */}
        <div className="mb-12">
          <CaptionForm
            onGenerate={handleGenerate}
            isLoading={isLoading}
            generationsLeft={generationsLeft}
          />
        </div>

        {/* Error Display */}
        {error && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-red-800 text-sm">{error}</p>
                {error.includes('limit reached') && (
                  <button
                    onClick={handleRefresh}
                    className="mt-2 text-red-600 hover:text-red-700 text-sm font-medium flex items-center space-x-1"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Refresh Page</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Generated Captions */}
        {captions.length > 0 && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Your Generated Captions
              </h2>
              <p className="text-gray-600">
                Choose your favorite and copy it to your social media platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {captions.map((caption, index) => (
                <CaptionCard
                  key={caption.id}
                  caption={caption}
                  index={index}
                />
              ))}
            </div>

            {/* Regenerate Button */}
            <div className="text-center mt-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                ↑ Generate More Captions
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-24 text-center text-gray-500 text-sm">
          <p>
            Built with Next.js, OpenAI, and Tailwind CSS. Generate engaging captions for all your social media needs.
          </p>
        </footer>
      </div>
    </div>
  )
}