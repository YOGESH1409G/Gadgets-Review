'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import ProductCard from '../../../components/ProductCard'
import { getProductById, products } from '../../../data/products'

export default function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [showNotification, setShowNotification] = useState(false)
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    if (id) {
      const productData = getProductById(id)
      setProduct(productData)
      
      if (productData) {
        // Get related products from same category
        const related = products
          .filter(p => p.category === productData.category && p.id !== productData.id)
          .slice(0, 4)
        setRelatedProducts(related)
      }
    }
  }, [id])

  const handleBuyNow = (affiliateType) => {
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
    
    const affiliateLink = product.affiliateLinks?.[affiliateType] || '#'
    console.log(`Redirecting to: ${affiliateLink}`)
    // In production: window.open(affiliateLink, '_blank')
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span 
        key={i} 
        className={`text-xl ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'}`}
      >
        ★
      </span>
    ))
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="h-96 bg-gray-700 rounded-2xl"></div>
              <div className="space-y-6">
                <div className="h-8 bg-gray-700 rounded w-3/4"></div>
                <div className="h-6 bg-gray-700 rounded w-1/2"></div>
                <div className="h-20 bg-gray-700 rounded"></div>
                <div className="h-12 bg-gray-700 rounded w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/categories" className="hover:text-white transition-colors">Categories</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href={`/categories?category=${product.category}`} className="hover:text-white transition-colors capitalize">
              {product.category}
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Product Image */}
          <div className="space-y-6">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center product-placeholder">
                <div className="text-8xl opacity-50">
                  {product.category === 'smartphones' && '📱'}
                  {product.category === 'laptops' && '💻'}
                  {product.category === 'earphones' && '🎧'}
                  {product.category === 'tablets' && '📱'}
                </div>
              </div>
              
              {product.trending && (
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                    🔥 TRENDING
                  </span>
                </div>
              )}
              
              {product.originalPrice && product.originalPrice > product.price && (
                <div className="absolute top-6 right-6">
                  <span className="bg-red-500 text-white text-sm font-bold px-3 py-2 rounded-lg">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-purple-400 text-lg font-medium uppercase tracking-wider">
                  {product.brand}
                </span>
                {product.inStock ? (
                  <span className="text-green-400 text-sm flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>In Stock</span>
                  </span>
                ) : (
                  <span className="text-red-400 text-sm">Out of Stock</span>
                )}
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4">
                {product.name}
              </h1>
              
              <p className="text-xl text-white/70 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {renderStars(product.rating)}
              </div>
              <span className="text-white text-lg">
                {product.rating} ({product.reviews.toLocaleString()} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-white">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-2xl text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              {product.originalPrice && product.originalPrice > product.price && (
                <div className="text-green-400 text-lg font-medium">
                  You save {formatPrice(product.originalPrice - product.price)}
                </div>
              )}
            </div>

            {/* Key Features */}
            {product.features && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Buy Buttons */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => handleBuyNow('amazon')}
                  className="btn-primary py-4 px-6 rounded-xl text-white font-bold text-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center space-x-2"
                  disabled={!product.inStock}
                >
                  <span>Buy on Amazon</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
                
                <button
                  onClick={() => handleBuyNow('flipkart')}
                  className="py-4 px-6 rounded-xl border-2 border-purple-500 text-purple-400 font-bold text-lg hover:bg-purple-500 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
                  disabled={!product.inStock}
                >
                  <span>Buy on Flipkart</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
              
              <p className="text-white/60 text-sm text-center">
                🔒 Secure checkout • 🚚 Fast delivery • 💰 Best price guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Tabs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-dark-card rounded-3xl overflow-hidden border border-white/10">
          {/* Tab Navigation */}
          <div className="border-b border-white/10">
            <div className="flex overflow-x-auto">
              {[
                { id: 'overview', name: 'Overview', icon: '📋' },
                { id: 'specs', name: 'Specifications', icon: '⚙️' },
                { id: 'review', name: 'In-Depth Review', icon: '📝' },
                { id: 'pros-cons', name: 'Pros & Cons', icon: '⚖️' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-white bg-purple-500/20 border-b-2 border-purple-500'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Product Overview</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {product.description}
                </p>
                
                {product.features && (
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">What's Included</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 glass rounded-lg">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Detailed Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="p-4 glass rounded-lg border border-white/10">
                      <div className="text-purple-400 font-medium capitalize mb-2">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="text-white text-lg font-semibold">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'review' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">In-Depth Review</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/80 text-lg leading-relaxed">
                    {product.inDepthReview}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'pros-cons' && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-6">Pros & Cons</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* Pros */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-green-400 flex items-center space-x-2">
                      <span className="text-2xl">👍</span>
                      <span>The Good</span>
                    </h4>
                    <div className="space-y-3">
                      {product.pros.map((pro, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                          <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-white/80">{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cons */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-red-400 flex items-center space-x-2">
                      <span className="text-2xl">👎</span>
                      <span>The Bad</span>
                    </h4>
                    <div className="space-y-3">
                      {product.cons.map((con, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                          <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="text-white/80">{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            You Might Also Like
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

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
    </div>
  )
}