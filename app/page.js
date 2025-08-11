import HeroSection from '../components/HeroSection'
import ProductCard from '../components/ProductCard'
import Link from 'next/link'
import { getFeaturedProducts, getLatestReviews, categories } from '../data/products'

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()
  const latestReviews = getLatestReviews()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Trending Gadget Reviews Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trending Gadget Reviews
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover the latest and most popular gadgets with our comprehensive reviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="opacity-0 animate-fadeInUp"
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/categories"
              className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg inline-flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
            >
              <span>View All Products</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Top Picks for You
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Handpicked recommendations based on expert reviews and user feedback
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product, index) => (
              <div 
                key={`top-pick-${product.id}`}
                className="opacity-0 animate-slideInLeft"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Browse by Category
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Find exactly what you're looking for in our organized categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={category.id}
                href={`/categories?category=${category.id}`}
                className="group"
              >
                <div 
                  className="bg-dark-card rounded-2xl p-8 text-center card-hover border border-white/10 opacity-0 animate-fadeInUp"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="text-6xl mb-6 group-hover:animate-bounce">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-white/70 mb-6">
                    {category.description}
                  </p>
                  <div className="btn-primary inline-flex items-center space-x-2 px-6 py-3 rounded-full text-white font-semibold group-hover:scale-105 transition-transform duration-300">
                    <span>Explore</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Reviews Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest Reviews
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Fresh insights and honest opinions on the newest gadgets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestReviews.map((review, index) => (
              <Link 
                key={review.id}
                href={`/product/${review.productId}`}
                className="group"
              >
                <div 
                  className="bg-dark-card rounded-2xl p-8 card-hover border border-white/10 opacity-0 animate-fadeInUp"
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
                      {review.category}
                    </span>
                    <span className="text-white/60 text-sm">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {review.title}
                  </h3>

                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`text-lg ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-white/60 text-sm">{review.rating}/5</span>
                  </div>

                  <p className="text-white/70 line-clamp-3 mb-6 leading-relaxed">
                    {review.content}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">By {review.author}</span>
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/reviews"
              className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg inline-flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
            >
              <span>View All Reviews</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-dark-card rounded-3xl p-8 lg:p-16 border border-white/10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Trust TechAurex?
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Numbers that speak for our commitment to honest reviews
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-4">500+</div>
                <div className="text-white/70 font-medium">Products Reviewed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-4">50K+</div>
                <div className="text-white/70 font-medium">Happy Readers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-4">4.9★</div>
                <div className="text-white/70 font-medium">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-4">100%</div>
                <div className="text-white/70 font-medium">Honest Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Perfect Gadget?
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied customers who made smart buying decisions with our expert reviews
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="/categories"
              className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg inline-flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
            >
              <span>Start Shopping</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </Link>
            
            <Link 
              href="/about"
              className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Learn About Us</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}