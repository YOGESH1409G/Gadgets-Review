import Link from 'next/link'

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Chief Editor", 
      image: "👨‍💻",
      bio: "Tech enthusiast with 8+ years in product reviews"
    },
    {
      name: "Priya Sharma",
      role: "Senior Tech Reviewer",
      image: "👩‍🔬", 
      bio: "Specializes in smartphones and wearable technology"
    },
    {
      name: "Amit Patel",
      role: "Hardware Specialist",
      image: "👨‍🔧",
      bio: "Expert in laptops, gaming gear, and performance testing"
    },
    {
      name: "Sneha Gupta",
      role: "Audio & Visual Expert",
      image: "👩‍🎤",
      bio: "Focuses on audio devices, cameras, and entertainment tech"
    }
  ]

  const milestones = [
    { year: "2020", event: "TechAurex founded with a vision to provide honest tech reviews" },
    { year: "2021", event: "Reached 10,000 monthly readers and launched affiliate partnerships" },
    { year: "2022", event: "Expanded team and introduced video reviews on YouTube" },
    { year: "2023", event: "Crossed 100,000 subscribers and won 'Best Tech Blog' award" },
    { year: "2024", event: "Launched mobile app and expanded to 5 team members" },
    { year: "2025", event: "Serving 50,000+ users monthly with comprehensive reviews" }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About TechAurex
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Our passion for technology drives everything we do. We're not just reviewers – 
            we're your trusted companions in the ever-evolving world of gadgets.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center space-x-3">
                <span className="text-5xl">🚀</span>
                <span>Our Mission</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                We believe that technology should enhance life, not complicate it. Every review we write, 
                every recommendation we make, comes from hours of real-world testing and genuine care for our community.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <span className="text-3xl">❤️</span>
                <span>Why We Do This</span>
              </h3>
              <p className="text-lg text-white/70 leading-relaxed">
                In a world flooded with sponsored content and biased reviews, we stand as a beacon of honesty. 
                We test every product with the same enthusiasm and critical eye that we'd use for our own purchases. 
                Your trust is our most valuable asset, and we guard it fiercely.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-dark-card rounded-3xl p-8 border border-white/10">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="p-6 glass rounded-xl">
                  <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                  <div className="text-white/70">Products Tested</div>
                </div>
                <div className="p-6 glass rounded-xl">
                  <div className="text-3xl font-bold gradient-text mb-2">50K+</div>
                  <div className="text-white/70">Happy Readers</div>
                </div>
                <div className="p-6 glass rounded-xl">
                  <div className="text-3xl font-bold gradient-text mb-2">4.9★</div>
                  <div className="text-white/70">Average Rating</div>
                </div>
                <div className="p-6 glass rounded-xl">
                  <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                  <div className="text-white/70">Honest Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-dark-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              These principles guide every review, every recommendation, and every interaction we have
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "Transparency",
                description: "We disclose all affiliate relationships and never let partnerships influence our honest opinions."
              },
              {
                icon: "⚡",
                title: "Excellence",
                description: "We thoroughly test products in real-world scenarios to provide comprehensive, accurate reviews."
              },
              {
                icon: "🤝",
                title: "Community",
                description: "We listen to our readers, respond to questions, and build genuine relationships with our audience."
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "We stay ahead of tech trends to bring you insights on the latest and most innovative products."
              },
              {
                icon: "🎯",
                title: "Accessibility",
                description: "We make complex tech simple, helping everyone make informed decisions regardless of expertise."
              },
              {
                icon: "🌟",
                title: "Quality",
                description: "Every piece of content meets our high standards for research, testing, and presentation."
              }
            ].map((value, index) => (
              <div 
                key={value.title}
                className="text-center p-8 glass rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 opacity-0 animate-fadeInUp"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="text-6xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Passionate tech enthusiasts dedicated to bringing you honest, comprehensive reviews
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="text-center p-8 bg-dark-card rounded-2xl border border-white/10 hover:bg-white/5 transition-all duration-300 opacity-0 animate-slideInLeft"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="text-8xl mb-6">{member.image}</div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-purple-400 font-medium mb-4">{member.role}</p>
              <p className="text-white/70 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-white/70">
              From humble beginnings to becoming a trusted voice in tech reviews
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className={`flex items-center space-x-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} opacity-0 animate-fadeInUp`}
                style={{ 
                  animationDelay: `${index * 300}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="flex-shrink-0 w-32 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">{milestone.year}</div>
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"></div>
                </div>
                
                <div className="flex-1 bg-dark-card p-6 rounded-2xl border border-white/10">
                  <p className="text-white/80 text-lg leading-relaxed">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Promise */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="bg-dark-card rounded-3xl p-12 border border-white/10">
          <h2 className="text-4xl font-bold text-white mb-8 flex items-center justify-center space-x-3">
            <span className="text-5xl">🌟</span>
            <span>Our Promise</span>
          </h2>
          
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              Every recommendation on TechAurex comes with a promise: we've either tested it ourselves 
              or extensively researched it through reliable sources. We're committed to transparency, 
              integrity, and helping you find the perfect gadget for your needs and budget.
            </p>
            
            <p>
              We believe in the transformative power of technology when it's in the right hands. 
              Our goal isn't just to review products – it's to empower you with the knowledge to make 
              decisions that will genuinely improve your digital life.
            </p>
            
            <div className="pt-8">
              <p className="text-2xl font-bold gradient-text">
                Join us on this incredible journey through the world of technology. 
                Together, let's discover the gadgets that will shape tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Want to Know More?
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Have questions about our review process? Want to suggest a product? 
            We'd love to hear from you!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="/contact"
              className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg inline-flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
            >
              <span>Get In Touch</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
            
            <Link 
              href="/categories"
              className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Browse Reviews</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}