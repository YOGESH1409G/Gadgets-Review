'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ProductCard({ product }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  const handleBuyNow = (e, affiliateType) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Show notification
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
    
    // In production, redirect to affiliate link
    const affiliateLink = product.affiliateLinks?.[affiliateType] || '#'
    console.log(`Redirecting to: ${affiliateLink}`)
    
    // Uncomment for production:
    // window.open(affiliateLink, '_blank')
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400 text-lg">★</span>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400 text-lg">☆</span>
      )
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-600 text-lg">☆</span>
      )
    }

    return stars
  }

  return (
    <>
      <Link href={`/product/${product.id}`}>
        <div className="bg-dark-card rounded-2xl overflow-hidden card-hover group cursor-pointer border border-white/10">
          {/* Product Image */}
          <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
            {/* Trending Badge */}
            {product.trending && (
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  🔥 TRENDING
                </span>
              </div>
            )}

            {/* Discount Badge */}
            {product.originalPrice && product.originalPrice > product.price && (
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </div>
            )}

            {/* Product Image Placeholder */}
            <div className="w-full h-full flex items-center justify-center product-placeholder group-hover:scale-110 transition-transform duration-500">
              {!isImageLoaded && (
                <div className="text-6xl opacity-50">
                  {product.category === 'smartphones' && '📱'}
                  {product.category === 'laptops' && '💻'}
                  {product.category === 'earphones' && '🎧'}
                  {product.category === 'tablets' && '📱'}
                </div>
              )}
            </div>

            {/* Shimmer effect */}
            <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-pulse" />
          </div>

          {/* Product Info */}
          <div className="p-6">
            {/* Brand */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
                {product.brand}
              </span>
              {product.inStock ? (
                <span className="text-green-400 text-xs flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>In Stock</span>
                </span>
              ) : (
                <span className="text-red-400 text-xs">Out of Stock</span>
              )}
            </div>

            {/* Product Name */}
            <h3 className="text-white text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-3">
              <div className="flex items-center star-rating">
                {renderStars(product.rating)}
              </div>
              <span className="text-white/60 text-sm">
                {product.rating} ({product.reviews.toLocaleString()} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-white/70 text-sm mb-4 line-clamp-2 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Key Features */}
            {product.features && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 2 && (
                    <span className="text-xs bg-white/5 text-white/60 px-2 py-1 rounded-full">
                      +{product.features.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Price Section */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-white">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-lg text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={(e) => handleBuyNow(e, 'amazon')}
                  className="btn-primary py-2 px-4 rounded-lg text-white font-semibold text-sm hover:scale-105 transition-transform duration-200 flex items-center justify-center space-x-1"
                  disabled={!product.inStock}
                >
                  <span>Amazon</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
                
                <button
                  onClick={(e) => handleBuyNow(e, 'flipkart')}
                  className="py-2 px-4 rounded-lg border border-purple-500 text-purple-400 font-semibold text-sm hover:bg-purple-500 hover:text-white transition-all duration-200 flex items-center justify-center space-x-1"
                  disabled={!product.inStock}
                >
                  <span>Flipkart</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>

              {/* View Details Button */}
              <button className="w-full py-2 px-4 rounded-lg glass border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-all duration-200 flex items-center justify-center space-x-2 group">
                <span>View Full Review</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Link>

      {/* Notification */}
      {showNotification && (
        <div className="notification">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Redirecting to best deal!</span>
          </div>
        </div>
      )}
    </>
  )
}