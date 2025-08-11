'use client'

import { useState, useEffect } from 'react'
import { brands, priceRanges, categories } from '../data/products'

export default function FilterSidebar({ filters, onFiltersChange, isOpen, onToggle }) {
  const [localFilters, setLocalFilters] = useState({
    category: 'all',
    brands: [],
    priceRange: '',
    sortBy: 'newest',
    ...filters
  })

  useEffect(() => {
    setLocalFilters(prev => ({ ...prev, ...filters }))
  }, [filters])

  const handleFilterChange = (key, value) => {
    const newFilters = { ...localFilters, [key]: value }
    setLocalFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const handleBrandToggle = (brand) => {
    const newBrands = localFilters.brands.includes(brand)
      ? localFilters.brands.filter(b => b !== brand)
      : [...localFilters.brands, brand]
    
    handleFilterChange('brands', newBrands)
  }

  const clearAllFilters = () => {
    const clearedFilters = {
      category: 'all',
      brands: [],
      priceRange: '',
      sortBy: 'newest'
    }
    setLocalFilters(clearedFilters)
    onFiltersChange(clearedFilters)
  }

  const getActiveFiltersCount = () => {
    let count = 0
    if (localFilters.category !== 'all') count++
    if (localFilters.brands.length > 0) count++
    if (localFilters.priceRange) count++
    return count
  }

  return (
    <>
      {/* Mobile Filter Toggle Button */}
      <div className="lg:hidden fixed top-24 left-4 z-40">
        <button
          onClick={onToggle}
          className="btn-primary px-4 py-2 rounded-lg flex items-center space-x-2 text-white font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
          </svg>
          <span>Filters</span>
          {getActiveFiltersCount() > 0 && (
            <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {getActiveFiltersCount()}
            </span>
          )}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onToggle}
        />
      )}

      {/* Filter Sidebar */}
      <div className={`
        fixed lg:static top-0 left-0 h-full lg:h-auto w-80 lg:w-full
        bg-dark-card lg:bg-transparent border-r lg:border-r-0 border-white/10
        transform lg:transform-none transition-transform duration-300 ease-in-out
        z-50 lg:z-auto overflow-y-auto lg:overflow-y-visible
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 lg:p-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 lg:mb-4">
            <h3 className="text-xl font-bold text-white">FILTERS</h3>
            <div className="flex items-center space-x-2">
              {getActiveFiltersCount() > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={onToggle}
                className="lg:hidden text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Sort By */}
          <div className="mb-8">
            <label className="block text-white font-medium mb-3">Sort By</label>
            <select
              value={localFilters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="w-full px-4 py-2 custom-input rounded-lg text-white bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="mb-8">
            <label className="block text-white font-medium mb-3">Price Range</label>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="radio"
                  name="priceRange"
                  value=""
                  checked={localFilters.priceRange === ''}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  className="w-4 h-4 text-purple-500 border-white/30 focus:ring-purple-500 focus:ring-2 bg-transparent"
                />
                <span className="text-white/80 group-hover:text-white transition-colors">All Prices</span>
              </label>
              
              {priceRanges.map(range => (
                <label key={range.id} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="priceRange"
                    value={range.id}
                    checked={localFilters.priceRange === range.id}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    className="w-4 h-4 text-purple-500 border-white/30 focus:ring-purple-500 focus:ring-2 bg-transparent"
                  />
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Brand Filter */}
          <div className="mb-8">
            <label className="block text-white font-medium mb-3">Brand</label>
            <div className="space-y-3 max-h-48 overflow-y-auto">
              {brands.map(brand => (
                <label key={brand} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={localFilters.brands.includes(brand)}
                    onChange={() => handleBrandToggle(brand)}
                    className="filter-checkbox"
                  />
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <label className="block text-white font-medium mb-3">Category</label>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="radio"
                  name="category"
                  value="all"
                  checked={localFilters.category === 'all'}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="w-4 h-4 text-purple-500 border-white/30 focus:ring-purple-500 focus:ring-2 bg-transparent"
                />
                <span className="text-white/80 group-hover:text-white transition-colors">All Categories</span>
              </label>
              
              {categories.map(category => (
                <label key={category.id} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="category"
                    value={category.id}
                    checked={localFilters.category === category.id}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="w-4 h-4 text-purple-500 border-white/30 focus:ring-purple-500 focus:ring-2 bg-transparent"
                  />
                  <span className="text-xl mr-2">{category.icon}</span>
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    {category.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Apply Button for Mobile */}
          <div className="lg:hidden pt-6 border-t border-white/10">
            <button
              onClick={onToggle}
              className="w-full btn-primary py-3 rounded-lg text-white font-semibold"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </>
  )
}