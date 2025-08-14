"use client"

import { useEffect, useState } from "react"

function getSystemPrefersDark() {
  if (typeof window === "undefined") return true
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
}

function applyTheme(theme) {
  if (typeof document === "undefined") return
  const el = document.documentElement
  if (theme === "light") {
    el.setAttribute("data-theme", "light")
  } else {
    el.removeAttribute("data-theme")
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null
    const initial = saved || (getSystemPrefersDark() ? "dark" : "light")
    setTheme(initial)
    applyTheme(initial)
  }, [])

  useEffect(() => {
    applyTheme(theme)
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme)
    }
  }, [theme])

  const isDark = theme === "dark"

  const trackClass = isDark
    ? "bg-white/5 hover:bg-white/10"
    : "bg-[#d5d8df] hover:bg-[#cbd1db]"

  return (
    <button
      type="button"
      aria-label="Toggle color mode"
      className={`relative inline-flex items-center h-8 w-14 rounded-full hairline transition ${trackClass}`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span className={`absolute left-1 ${!isDark ? "text-[#9aa0a6]" : "text-[--color-muted] opacity-70"} z-[1]`} aria-hidden>
        {/* Sun icon */}
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V2M12 22v-2M4 12H2m20 0h-2M5 5l-1.5-1.5M20.5 20.5 19 19M5 19l-1.5 1.5M20.5 3.5 19 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6"/>
        </svg>
      </span>
      <span className={`absolute right-1 ${isDark ? "text-[#9aa0a6]" : "text-[--color-muted] opacity-70"} z-[1]`} aria-hidden>
        {/* Moon icon */}
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span
        className={`absolute inline-block h-6 w-6 rounded-full bg-white/90 transition-transform ${isDark ? "translate-x-7" : "translate-x-1"} z-0`}
        aria-hidden
      />
    </button>
  )
}


