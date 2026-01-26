'use client'

import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    const headerOffset = 80

    const handleClick = (e: Event) => {
      const link = e.currentTarget as HTMLAnchorElement
      const href = link.getAttribute('href')
      if (!href || href === '#' || href === '') return

      const target = document.querySelector(href)
      if (!target) return

      e.preventDefault()
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = targetPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }

    anchorLinks.forEach((link) => {
      link.addEventListener('click', handleClick)
    })

    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener('click', handleClick)
      })
    }
  }, [])
}
