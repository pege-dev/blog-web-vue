export const useOrganizationSchema = () => {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'The Daily Blog',
          url: 'https://yourdomain.com',
          logo: 'https://yourdomain.com/images/logo.png',
          sameAs: [
            'https://twitter.com/dailyblog',
            'https://instagram.com/dailyblog'
          ]
        })
      }
    ]
  })
}

export const useWebsiteSchema = () => {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'The Daily Blog',
          url: 'https://yourdomain.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://yourdomain.com/blog?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        })
      }
    ]
  })
}

export const useBlogPostingSchema = (post: {
  title: string
  description: string
  imageUrl: string
  datePublished: string
  author?: string
  url: string
}) => {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description,
          image: post.imageUrl,
          datePublished: post.datePublished,
          author: {
            '@type': 'Person',
            name: post.author || 'The Daily Blog Team'
          },
          publisher: {
            '@type': 'Organization',
            name: 'The Daily Blog',
            logo: {
              '@type': 'ImageObject',
              url: 'https://yourdomain.com/images/logo.png'
            }
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': post.url
          }
        })
      }
    ]
  })
}
