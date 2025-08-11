'use client'

import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ products, isLoading = false }) {
  const [displayedProducts, setDisplayedProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  
  const PRODUCTS_PER_PAGE = 8

  useEffect(() => {
    // Reset when products change
    setCurrentPage(1)
    setDisplayedProducts(products.slice(0, PRODUCTS_PER_PAGE))
  }, [products])

  const loadMore = async () => {
    setIsLoadingMore(true)
    
    // Simulate loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const nextPage = currentPage + 1
    const startIndex = (nextPage - 1) * PRODUCTS_PER_PAGE
    const endIndex = startIndex + PRODUCTS_PER_PAGE
    const newProducts = products.slice(startIndex, endIndex)
    
    setDisplayedProducts(prev => [...prev, ...newProducts])
    setCurrentPage(nextPage)
    setIsLoadingMore(false)
  }

  const hasMoreProducts = displayedProducts.length < products.length

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="bg-dark-card rounded-2xl overflow-hidden border border-white/10">
      <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-700 rounded w-20 animate-pulse" />
          <div className="h-4 bg-gray-700 rounded w-16 animate-pulse" />
        </div>
        <div className="h-6 bg-gray-700 rounded w-3/4 animate-pulse" />
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-gray-700 rounded animate-pulse" />
            ))}
          </div>
          <div className="h-4 bg-gray-700 rounded w-24 animate-pulse" />
        </div>
        <div className="h-4 bg-gray-700 rounded w-full animate-pulse" />
        <div className="h-4 bg-gray-700 rounded w-2/3 animate-pulse" />
        <div className="flex justify-between items-center">
          <div className="h-8 bg-gray-700 rounded w-24 animate-pulse" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="h-10 bg-gray-700 rounded animate-pulse" />
          <div className="h-10 bg-gray-700 rounded animate-pulse" />
        </div>
        <div className="h-10 bg-gray-700 rounded animate-pulse" />
      </div>
    </div>
  )

  // Empty state component
  const EmptyState = () => (
    <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
      <div className="w-32 h-32 mb-6 opacity-20">
        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.429.73-6 1.97M3 17.5c0-.828.336-1.576.879-2.121M21 17.5c0-.828-.336-1.576-.879-2.121M6 8a6 6 0 1112 0v3.5" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">No Products Found</h3>
      <p className="text-white/60 max-w-md mb-6">
        We couldn't find any products matching your current filters. 
        Try adjusting your search criteria or browse our categories.
      </p>
      <button 
        onClick={() => window.location.href = '/categories'}
        className="btn-primary px-6 py-3 rounded-lg text-white font-semibold"
      >
        Browse All Products
      </button>
    </div>
  )

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <LoadingSkeleton key={index} />
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="grid grid-cols-1">
        <EmptyState />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Results Count */}
      <div className="flex items-center justify-between">
        <div className="text-white/60">
          Showing {displayedProducts.length} of {products.length} products
        </div>
        
        {/* View Toggle */}
        <div className="flex items-center space-x-2">
          <span className="text-white/60 text-sm">View:</span>
          <div className="flex bg-white/5 rounded-lg p-1">
            <button className="p-2 rounded bg-purple-500 text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button className="p-2 rounded text-white/60 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedProducts.map((product, index) => (
          <div 
            key={product.id}
            className="opacity-0 animate-fadeInUp"
            style={{ 
              animationDelay: `${(index % PRODUCTS_PER_PAGE) * 100}ms`,
              animationFillMode: 'forwards'
            }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Load More Section */}
      {hasMoreProducts && (
        <div className="flex justify-center pt-8">
          <button
            onClick={loadMore}
            disabled={isLoadingMore}
            className="btn-primary px-8 py-3 rounded-lg text-white font-semibold flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform duration-200"
          >
            {isLoadingMore ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Loading More...</span>
              </>
            ) : (
              <>
                <span>Load More Products</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </>
            )}
          </button>
        </div>
      )}

      {/* End of Results */}
      {!hasMoreProducts && displayedProducts.length > PRODUCTS_PER_PAGE && (
        <div className="text-center py-8 border-t border-white/10">
          <p className="text-white/60">
            You've seen all {products.length} products in this category
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 text-purple-400 hover:text-purple-300 font-medium flex items-center space-x-2 mx-auto transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>Back to Top</span>
          </button>
        </div>
      )}

      {/* Quick Stats */}
      {displayedProducts.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
          <div className="text-center p-4 glass rounded-lg">
            <div className="text-2xl font-bold text-white mb-1">
              {products.length}
            </div>
            <div className="text-white/60 text-sm">Total Products</div>
          </div>
          
          <div className="text-center p-4 glass rounded-lg">
            <div className="text-2xl font-bold text-white mb-1">
              {Math.round(products.reduce((acc, p) => acc + p.rating, 0) / products.length * 10) / 10}★
            </div>
            <div className="text-white/60 text-sm">Avg Rating</div>
          </div>
          
          <div className="text-center p-4 glass rounded-lg">
            <div className="text-2xl font-bold text-white mb-1">
              ₹{Math.min(...products.map(p => p.price)).toLocaleString()}
            </div>
            <div className="text-white/60 text-sm">Starting Price</div>
          </div>
          
          <div className="text-center p-4 glass rounded-lg">
            <div className="text-2xl font-bold text-white mb-1">
              {products.filter(p => p.inStock).length}
            </div>
            <div className="text-white/60 text-sm">In Stock</div>
          </div>
        </div>
      )}
    </div>
  )
}