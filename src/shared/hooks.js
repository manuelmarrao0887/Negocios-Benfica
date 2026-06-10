import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-reveal hook backed by IntersectionObserver.
 * Returns [ref, shown]. Attach ref to an element; `shown` flips true once it
 * scrolls into view (and stays true). Honours prefers-reduced-motion and
 * degrades gracefully where IntersectionObserver is unavailable.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || shown) return

    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setShown(true)
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px', ...options }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [shown, options])

  return [ref, shown]
}

/** Set document <title> and meta description for the current page. */
export function usePageMeta(title, description) {
  useEffect(() => {
    if (title) document.title = title
    if (description) {
      let m = document.querySelector('meta[name="description"]')
      if (!m) {
        m = document.createElement('meta')
        m.setAttribute('name', 'description')
        document.head.appendChild(m)
      }
      m.setAttribute('content', description)
    }
  }, [title, description])
}

/** Track whether the window has scrolled past `offset` px (for sticky nav styling). */
export function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return scrolled
}
