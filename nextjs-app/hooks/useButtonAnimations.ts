'use client'

import { useEffect } from 'react'

export function useButtonAnimations() {
  useEffect(() => {
    const buttons = document.querySelectorAll('.btn, .btn-primary, .btn-secondary, .btn-large')

    const handleClick = (e: Event) => {
      const button = e.currentTarget as HTMLElement
      const mouseEvent = e as MouseEvent
      const ripple = document.createElement('span')
      const rect = button.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = mouseEvent.clientX - rect.left - size / 2
      const y = mouseEvent.clientY - rect.top - size / 2

      ripple.style.width = ripple.style.height = size + 'px'
      ripple.style.left = x + 'px'
      ripple.style.top = y + 'px'
      ripple.classList.add('ripple')

      button.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    }

    buttons.forEach((button) => {
      button.addEventListener('click', handleClick)
    })

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('click', handleClick)
      })
    }
  }, [])
}
