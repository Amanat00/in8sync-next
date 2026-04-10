'use client'
import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const observeEl = (el: Element) => {
      if (el.classList.contains('reveal') && !el.classList.contains('in')) {
        observer.observe(el)
      }
      el.querySelectorAll('.reveal:not(.in)').forEach(child => observer.observe(child))
    }

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    const mutObs = new MutationObserver(mutations => {
      mutations.forEach(mut => {
        mut.addedNodes.forEach(node => {
          if (node instanceof Element) observeEl(node)
        })
      })
    })
    mutObs.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutObs.disconnect()
    }
  }, [])

  return null
}
