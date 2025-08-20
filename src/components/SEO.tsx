
import React from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

export const SEO: React.FC<SEOProps> = ({
  title = 'CareLegal - Personal Injury Attorneys',
  description = 'Experienced personal injury lawyers fighting for your rights. No fees unless we win. Free consultation available 24/7.',
  keywords = 'personal injury lawyer, car accident attorney, medical malpractice, wrongful death, slip and fall',
  image = '/images/og-image.jpg',
  url = 'https://caretlegal.com',
  type = 'website'
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: string) => {
      let element = property 
        ? document.querySelector(`meta[property="${property}"]`)
        : document.querySelector(`meta[name="${name}"]`)
      
      if (!element) {
        element = document.createElement('meta')
        if (property) {
          element.setAttribute('property', property)
        } else {
          element.setAttribute('name', name)
        }
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('og:title', title, 'og:title')
    updateMetaTag('og:description', description, 'og:description')
    updateMetaTag('og:image', image, 'og:image')
    updateMetaTag('og:url', url, 'og:url')
    updateMetaTag('og:type', type, 'og:type')
    updateMetaTag('twitter:card', 'summary_large_image', 'twitter:card')
    updateMetaTag('twitter:title', title, 'twitter:title')
    updateMetaTag('twitter:description', description, 'twitter:description')
    updateMetaTag('twitter:image', image, 'twitter:image')
  }, [title, description, keywords, image, url, type])

  return null
}
