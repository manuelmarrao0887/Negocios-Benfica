import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Reset scroll position on every route change (path only, ignores hash anchors).
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}
