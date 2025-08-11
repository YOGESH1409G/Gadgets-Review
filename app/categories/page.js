'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import FilterSidebar from '../../components/FilterSidebar'
import ProductGrid from '../../components/ProductGrid'
import { products, filterProducts } from '../../data/products'

export default function CategoriesPage() {
  const searchParams = useSearchParams()
  const [filters, setFilters] = useState({
    category: 'all',
    brands: [],
    priceRange: '',
    sortBy: 'newest',
    searchQuery: ''
  })
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Initialize filters from URL params
  useEffect(() => {
    const category = searchParams.get('category') || 'all'
    const search = searchParams.get('search') || ''
    
    const initialFilters = {
      ...filters,
      category,
      searchQuery: search
    }
    
    setFilters(initialFilters)
    handleFilterChange(initialFilters)
    setIsLoading(false)
  }, [searchParams])

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
    const filtered = filterProducts(products, newFilters)
    setFilteredProducts(filtered)
  }

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  const getCategoryTitle = () => {
    if (filters.category === 'all') {
      return filters.searchQuery ? `Search Results for "${filters.searchQuery}"` : 'All Products'
    }
    
    const categoryNames = {
      'smartphones': 'Smartphones',
      'laptops': 'Laptops', 
      'earphones': 'Earphones',
      'tablets': 'Tablets'
    }
    
    return categoryNames[filters.category] || 'Products'
  }

  const getCategoryDescription = () => {
    if (filters.searchQuery) {
      return `Found ${filteredProducts.length} products matching your search`
    }
    
    const descriptions = {
      'all': 'Discover our complete collection of tech products',
      'smartphones': 'Latest smartphones with cutting-edge technology',
      'laptops': 'Powerful laptops for work, gaming, and creativity',
      'earphones': 'Premium audio devices for immersive experience',
      'tablets': 'Versatile tablets for productivity and entertainment'
    }
    
    return descriptions[filters.category] || 'Quality tech products'
  }

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-700 rounded w-1/3 mb-4"></div>
            <div className="h-6 bg-gray-700 rounded w-1/2 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <div className="space-y-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-20 bg-gray-700 rounded"></div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-96 bg-gray-700 rounded-2xl"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {getCategoryTitle()}
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {getCategoryDescription()}
          </p>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 mt-6 text-white/60">
            <span>Home</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>Categories</span>
            {filters.category !== 'all' && (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-white capitalize">{filters.category}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filter Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <FilterSidebar
                filters={filters}
                onFiltersChange={handleFilterChange}
                isOpen={isFilterOpen}
                onToggle={toggleFilter}
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              
              {/* Results Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <h2 className="text-2xl font-bold text-white">
                    {filteredProducts.length} Products
                  </h2>
                  
                  {/* Active Filters */}
                  {(filters.category !== 'all' || filters.brands.length > 0 || filters.priceRange || filters.searchQuery) && (
                    <div className="flex flex-wrap gap-2">
                      {filters.category !== 'all' && (
                        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                          {filters.category}
                        </span>
                      )}
                      {filters.brands.map(brand => (
                        <span key={brand} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                          {brand}
                        </span>
                      ))}
                      {filters.priceRange && (
                        <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">
                          Price Filter
                        </span>
                      )}
                      {filters.searchQuery && (
                        <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm border border-pink-500/30">
                          "{filters.searchQuery}"
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Sort Dropdown for Mobile */}
                <div className="sm:hidden">
                  <select
                    value={filters.sortBy}
                    onChange={(e) => handleFilterChange({ ...filters, sortBy: e.target.value })}
                    className="w-full px-4 py-2 custom-input rounded-lg text-white bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none"
                  >
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>

              {/* Product Grid */}
              <ProductGrid products={filteredProducts} isLoading={false} />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Category Navigation */}
      <div className="bg-dark-card py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Browse Other Categories
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { id: 'smartphones', name: 'Smartphones', icon: '📱' },
              { id: 'laptops', name: 'Laptops', icon: '💻' },
              { id: 'earphones', name: 'Earphones', icon: '🎧' },
              { id: 'tablets', name: 'Tablets', icon: '📱' }
            ].filter(cat => cat.id !== filters.category).map((category) => (
              <button
                key={category.id}
                onClick={() => handleFilterChange({ ...filters, category: category.id })}
                className="p-6 glass rounded-xl border border-white/10 text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:animate-bounce">
                  {category.icon}
                </div>
                <div className="text-white font-medium group-hover:text-purple-300 transition-colors">
                  {category.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}