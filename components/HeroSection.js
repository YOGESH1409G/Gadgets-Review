'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  
  const heroTexts = [
    "Cutting-Edge Gadgets",
    "Honest Tech Reviews", 
    "Smart Buying Decisions"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-black/90" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 text-6xl opacity-10 animate-bounce" style={{ animationDelay: '0s' }}>📱</div>
          <div className="absolute top-40 right-20 text-5xl opacity-10 animate-bounce" style={{ animationDelay: '1s' }}>💻</div>
          <div className="absolute bottom-40 left-20 text-4xl opacity-10 animate-bounce" style={{ animationDelay: '2s' }}>🎧</div>
          <div className="absolute bottom-20 right-10 text-5xl opacity-10 animate-bounce" style={{ animationDelay: '1.5s' }}>⌚</div>
          <div className="absolute top-60 left-1/2 text-4xl opacity-10 animate-bounce" style={{ animationDelay: '0.5s' }}>📷</div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white/80 font-medium">Trusted by 50,000+ Tech Enthusiasts</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Your Ultimate Guide to
            </h1>
            
            {/* Animated Text */}
            <div className="h-20 md:h-24 lg:h-28 flex items-center justify-center">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text transition-all duration-500 transform">
                {heroTexts[currentText]}
              </h2>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Dive into comprehensive reviews, honest insights, and in-depth comparisons 
            to make informed decisions for your next tech upgrade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <Link 
              href="/categories"
              className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 flex items-center space-x-2 group"
            >
              <span>Explore Reviews</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </Link>
            
            <Link 
              href="/about"
              className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center space-x-2 group"
            >
              <span>Learn More</span>
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/60">Products Reviewed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/60">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9★</div>
              <div className="text-white/60">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/60">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-96 hidden lg:block opacity-20">
        <div className="relative w-full h-full">
          {/* 3D Gadget Illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Phone */}
              <div className="absolute top-0 left-10 w-20 h-32 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500 border border-white/20">
                <div className="w-full h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-lg"></div>
              </div>
              
              {/* Laptop */}
              <div className="absolute top-16 right-0 w-32 h-20 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg shadow-2xl transform -rotate-12 hover:-rotate-6 transition-transform duration-500 border border-white/20">
                <div className="w-full h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-t-lg"></div>
              </div>
              
              {/* Headphones */}
              <div className="absolute bottom-10 left-0 w-24 h-24 bg-gradient-to-b from-gray-600 to-gray-700 rounded-full shadow-2xl transform rotate-45 hover:rotate-30 transition-transform duration-500 border border-white/20 flex items-center justify-center">
                <div className="text-white text-2xl">🎧</div>
              </div>
              
              {/* Smartwatch */}
              <div className="absolute bottom-0 right-16 w-16 h-16 bg-gradient-to-b from-gray-500 to-gray-600 rounded-lg shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 border border-white/20 flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}