import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'TechAurex - Your Ultimate Gadget Review & Buying Guide',
  description: 'Dive into comprehensive reviews, honest insights, and in-depth comparisons to make informed decisions for your next tech upgrade.',
  keywords: 'gadget reviews, tech reviews, smartphone reviews, laptop reviews, earphones, tablets, buying guide, affiliate',
  authors: [{ name: 'TechAurex Team' }],
  openGraph: {
    title: 'TechAurex - Your Ultimate Gadget Review & Buying Guide',
    description: 'Comprehensive tech reviews and buying guides for smartphones, laptops, earphones, and tablets.',
    url: 'https://techaurex.in',
    siteName: 'TechAurex',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TechAurex - Tech Reviews',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechAurex - Tech Reviews & Buying Guide',
    description: 'Your trusted source for honest tech reviews and buying recommendations.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6366f1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "TechAurex",
              "url": "https://techaurex.in",
              "description": "Your ultimate gadget review and buying guide",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://techaurex.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {/* Background Pattern */}
        <div className="fixed inset-0 hero-pattern opacity-50 pointer-events-none" />
        
        {/* Main Layout */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </div>

        {/* Floating Elements for Visual Appeal */}
        <div className="fixed top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse pointer-events-none" />
        <div className="fixed bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse delay-1000 pointer-events-none" />
        
        {/* Loading Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Add loading class to body on page load
              document.addEventListener('DOMContentLoaded', function() {
                document.body.classList.add('loaded');
              });
              
              // Smooth scrolling for anchor links
              document.addEventListener('click', function(e) {
                if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
                  e.preventDefault();
                  const target = document.querySelector(e.target.getAttribute('href'));
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              });
            `
          }}
        />
      </body>
    </html>
  )
}