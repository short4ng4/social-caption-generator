import React from 'react'
import { Sparkles, Zap, Heart, TrendingUp } from 'lucide-react'

export function Hero() {
  return (
    <div className="text-center space-y-6 mb-12">
      {/* Main Heading */}
      <div className="space-y-4">
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Social Caption
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {' '}Generator
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Create engaging, platform-specific captions for Instagram, TikTok, LinkedIn, and Twitter in seconds
        </p>
      </div>

      {/* Feature Pills */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <div className="flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
          <Zap className="w-4 h-4" />
          <span className="text-sm font-medium">Instant Generation</span>
        </div>
        
        <div className="flex items-center space-x-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full">
          <Heart className="w-4 h-4" />
          <span className="text-sm font-medium">Platform Optimized</span>
        </div>
        
        <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">Engagement Ready</span>
        </div>
      </div>

      {/* Quick Steps */}
      <div className="bg-gray-50 rounded-2xl p-6 max-w-4xl mx-auto mt-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
              1
            </div>
            <p className="text-sm text-gray-600">
              Describe your post topic
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
              2
            </div>
            <p className="text-sm text-gray-600">
              Choose platform & tone
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
              3
            </div>
            <p className="text-sm text-gray-600">
              Copy & paste to your post
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
