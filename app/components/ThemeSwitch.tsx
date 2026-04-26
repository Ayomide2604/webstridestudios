'use client'

import { useEffect, useState } from 'react'

export default function ThemeSwitch() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Get stored theme or default to light
    const storedTheme = localStorage.getItem('theme') || 'light'
    setTheme(storedTheme)
    document.documentElement.setAttribute('data-bs-theme', storedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-bs-theme', newTheme)
  }

  return (
    <div className="form-check form-switch mode-switch pe-lg-1 ms-auto me-4">
      <input
        type="checkbox"
        className="form-check-input"
        id="theme-mode"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <label
        className="form-check-label d-none d-sm-block"
        htmlFor="theme-mode"
      >
        Light
      </label>
      <label
        className="form-check-label d-none d-sm-block"
        htmlFor="theme-mode"
      >
        Dark
      </label>
    </div>
  )
}
