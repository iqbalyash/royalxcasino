'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header id="masthead" className="site-header" role="banner">
      <div className="container header-container">
        <div className="site-branding">
          <Link href="/" className="site-logo" rel="home">
            Royal X Casino
          </Link>
        </div>

        <nav
          id="site-navigation"
          className={`main-navigation ${isMenuOpen ? 'active' : ''}`}
          role="navigation"
          aria-label="Primary Menu"
        >
          <button
            className="menu-toggle"
            aria-controls="primary-menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="screen-reader-text">Primary Menu</span>
            <span aria-hidden="true">Menu</span>
          </button>
          <ul id="primary-menu" className="nav-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
