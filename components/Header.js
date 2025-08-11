'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/categories?search=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="gradient-text text-2xl font-bold">TechAurex</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            
            {/* Categories Dropdown */}
            <div className="relative group">
              <Link href="/categories" className="text-white hover:text-purple-400 transition-colors duration-300 font-medium flex items-center space-x-1">
                <span>Categories</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-64 glass rounded-xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-2">
                  <Link href="/categories?category=smartphones" className="block p-3 rounded-lg hover:bg-white/10 transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📱</span>
                      <div>
                        <div className="text-white font-medium">Smartphones</div>
                        <div className="text-gray-400 text-sm">Latest mobile devices</div>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/categories?category=laptops" className="block p-3 rounded-lg hover:bg-white/10 transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">💻</span>
                      <div>
                        <div className="text-white font-medium">Laptops</div>
                        <div className="text-gray-400 text-sm">Powerful computing devices</div>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/categories?category=earphones" className="block p-3 rounded-lg hover:bg-white/10 transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🎧</span>
                      <div>
                        <div className="text-white font-medium">Earphones</div>
                        <div className="text-gray-400 text-sm">Premium audio devices</div>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/categories?category=tablets" className="block p-3 rounded-lg hover:bg-white/10 transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📱</span>
                      <div>
                        <div className="text-white font-medium">Tablets</div>
                        <div className="text-gray-400 text-sm">Versatile touch devices</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/reviews" className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">
              Reviews
            </Link>
            <Link href="/about" className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search for gadgets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 pl-10 custom-input rounded-full text-white placeholder-gray-400 focus:w-80 transition-all duration-300"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </form>
            
            {/* Cart Icon */}
            <button className="p-2 text-white hover:text-purple-400 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
              </svg>
            </button>
            
            {/* User Icon */}
            <button className="p-2 text-white hover:text-purple-400 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white hover:text-purple-400 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass rounded-xl mt-2 border border-white/20">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search for gadgets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 custom-input rounded-full text-white placeholder-gray-400"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </form>
              
              <Link href="/" className="block px-3 py-2 text-white hover:text-purple-400 hover:bg-white/10 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              
              <div className="space-y-1">
                <Link href="/categories" className="block px-3 py-2 text-white hover:text-purple-400 hover:bg-white/10 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                  All Categories
                </Link>
                <Link href="/categories?category=smartphones" className="block px-6 py-2 text-gray-300 hover:text-purple-400 hover:bg-white/10 rounded-lg transition-all duration-200 text-sm" onClick={() => setIsMenuOpen(false)}>
                  📱 Smartphones
                </Link>
                <Link href="/categories?category=laptops" className="block px-6 py-2 text-gray-300 hover:text-purple-400 hover:bg-white/10 rounded-lg transition-all duration-200 text-sm" onClick={() => setIsMenuOpen(false)}>
                  💻 Laptops
                </Link>
                <Link href="/categories?category=earphones" className="block px-6 py-2 text-gray-300 hover:text-purple-400 hover:bg-white/10 rounded-lg transition-all duration-200 text-sm" onClick={() => setIsMenuOpen(false)}>
                  🎧 Earphones
                </Link>
                <Link href="/categories?category=tablets" className="block px-6 py-2 text-gray-300 hover:text-purple-400 hover:bg-white/10 rounded-lg transition-all duration-200 text-sm" onClick={() => setIsMenuOpen(false)}>
                  📱 Tablets
                </Link>
              </div>
              
              <Link href="/reviews" className="block px-3 py-2 text-white hover:text-purple-400 hover:bg-white/10 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                Reviews
              </Link>
              <Link href="/about" className="block px-3 py-2 text-white hover:text-purple-400 hover:bg-white/10 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-white hover:text-purple-400 hover:bg-white/10 rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}