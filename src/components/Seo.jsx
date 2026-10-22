import { useEffect } from 'react'
import { SITE_URL } from '../data'

function upsert(selector, attrs) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
}

export default function Seo({ title, description, path = '/', image = '/og-image.jpg' }) {
  useEffect(() => {
    const url = SITE_URL + path
    const img = SITE_URL + image
    document.title = title
    upsert('meta[name="description"]', { name: 'description', content: description })
    upsert('link[rel="canonical"]', { rel: 'canonical', href: url })
    upsert('meta[property="og:title"]', { property: 'og:title', content: title })
    upsert('meta[property="og:description"]', { property: 'og:description', content: description })
    upsert('meta[property="og:url"]', { property: 'og:url', content: url })
    upsert('meta[property="og:image"]', { property: 'og:image', content: img })
    upsert('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    upsert('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    upsert('meta[name="twitter:image"]', { name: 'twitter:image', content: img })
  }, [title, description, path, image])
  return null
}