"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import { flatDocs } from "../toc/items"

export default function DocNav() {
  const pathname = usePathname()
  const router = useRouter()
  const index = flatDocs.findIndex(i => pathname.startsWith(i.href))
  const prev = index > 0 ? flatDocs[index - 1] : null
  const next = index >= 0 && index < flatDocs.length - 1 ? flatDocs[index + 1] : null

  useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target && e.target.tagName) || ""
      const editable = (e.target && (e.target.isContentEditable || e.target.getAttribute && e.target.getAttribute('contenteditable') === 'true'))
      if (editable || /INPUT|TEXTAREA|SELECT/.test(tag)) return
      if (e.key === 'ArrowLeft' && prev) {
        e.preventDefault()
        router.push(prev.href)
      } else if (e.key === 'ArrowRight' && next) {
        e.preventDefault()
        router.push(next.href)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next, router])

  if (!prev && !next) return null

  return (
    <div className="mt-8 relative flex items-center justify-between text-sm min-h-10">
      <div>
        {prev && (
          <Link href={prev.href} className="inline-flex items-center gap-2 px-3 py-2 rounded-full hairline hover:bg-white/5">
            <span>← Previous:</span>
            <span className="font-medium">{prev.label}</span>
          </Link>
        )}
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 text-[--color-muted] pointer-events-none">
        {index >= 0 && (<span>{index + 1} of {flatDocs.length}</span>)}
      </div>
      <div>
        {next && (
          <Link href={next.href} className="inline-flex items-center gap-2 px-3 py-2 rounded-full hairline hover:bg-white/5">
            <span className="font-medium">{next.label}</span>
            <span>Next →</span>
          </Link>
        )}
      </div>
    </div>
  )
}


