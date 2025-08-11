import Link from 'next/link'
import { reviews, getProductById } from '../../data/products'

export default function ReviewsPage() {
  const allReviews = reviews.sort((a, b) => new Date(b.date) - new Date(a.date))

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span 
        key={i} 
        className={`text-lg ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'}`}
      >
        ★
      </span>
    ))
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Latest Reviews
          </h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Fresh insights and honest opinions on the newest gadgets from our expert team
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{reviews.length}+</div>
              <div className="text-white/60 text-sm">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4.8★</div>
              <div className="text-white/60 text-sm">Avg Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/60 text-sm">Honest</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Review */}
      {allReviews.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Featured Review
            </h2>
            
            <div className="bg-dark-card rounded-3xl overflow-hidden border border-white/10 p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider border border-purple-500/30">
                      {allReviews[0].category}
                    </span>
                    <span className="text-white/60">
                      {formatDate(allReviews[0].date)}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                    {allReviews[0].title}
                  </h3>
                  
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex">
                      {renderStars(allReviews[0].rating)}
                    </div>
                    <span className="text-white text-lg font-medium">
                      {allReviews[0].rating}/5
                    </span>
                  </div>
                  
                  <p className="text-white/80 text-lg leading-relaxed mb-8">
                    {allReviews[0].content.substring(0, 300)}...
                  </p>
                  
                  <Link 
                    href={`/product/${allReviews[0].productId}`}
                    className="btn-primary inline-flex items-center space-x-2 px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300"
                  >
                    <span>Read Full Review</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                    </svg>
                  </Link>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center product-placeholder">
                    <div className="text-8xl opacity-50">
                      {allReviews[0].category === 'smartphones' && '📱'}
                      {allReviews[0].category === 'laptops' && '💻'}
                      {allReviews[0].category === 'earphones' && '🎧'}
                      {allReviews[0].category === 'tablets' && '📱'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* All Reviews */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          All Reviews
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allReviews.slice(1).map((review, index) => (
            <Link 
              key={review.id}
              href={`/product/${review.productId}`}
              className="group"
            >
              <div 
                className="bg-dark-card rounded-2xl p-6 card-hover border border-white/10 h-full opacity-0 animate-fadeInUp"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider border border-blue-500/30">
                    {review.category}
                  </span>
                  <span className="text-white/60 text-sm">
                    {formatDate(review.date)}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                  {review.title}
                </h3>

                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-white/60 text-sm">{review.rating}/5</span>
                </div>

                <p className="text-white/70 line-clamp-4 mb-6 leading-relaxed">
                  {review.content}
                </p>

                <div className="flex items-center justify-between mt-auto">
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
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Never Miss a Review
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Subscribe to get the latest tech reviews and buying guides delivered straight to your inbox
          </p>
          
          <form className="flex flex-col sm:flex-row max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 custom-input rounded-full text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="btn-primary px-8 py-4 rounded-full text-white font-semibold whitespace-nowrap hover:scale-105 transition-transform duration-300"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-white/60 text-sm mt-4">
            No spam, unsubscribe anytime. Join 50,000+ tech enthusiasts.
          </p>
        </div>
      </div>

      {/* Categories CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Explore Reviews by Category
          </h2>
          <p className="text-xl text-white/70">
            Find reviews for specific types of gadgets
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { id: 'smartphones', name: 'Smartphones', icon: '📱', count: reviews.filter(r => r.category === 'smartphones').length },
            { id: 'laptops', name: 'Laptops', icon: '💻', count: reviews.filter(r => r.category === 'laptops').length },
            { id: 'earphones', name: 'Earphones', icon: '🎧', count: reviews.filter(r => r.category === 'earphones').length },
            { id: 'tablets', name: 'Tablets', icon: '📱', count: reviews.filter(r => r.category === 'tablets').length }
          ].map((category) => (
            <Link 
              key={category.id}
              href={`/categories?category=${category.id}`}
              className="group"
            >
              <div className="p-6 glass rounded-xl border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-5xl mb-4 group-hover:animate-bounce">
                  {category.icon}
                </div>
                <div className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                  {category.name}
                </div>
                <div className="text-white/60 text-sm">
                  {category.count} Reviews
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}