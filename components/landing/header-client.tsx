'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Home, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface User {
  email?: string
  sub: string
}

interface HeaderClientProps {
  user: User | null
}

export function HeaderClient({ user }: HeaderClientProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-xl items-center px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Home className="size-4 text-primary" />
          <span>
            Immo<span className="text-primary">Cleck</span>
          </span>
        </Link>

        {/* Nav links */}
        <nav className="ml-8 hidden items-center gap-6 md:flex">
          <Link
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
        </nav>

        {/* Auth button */}
        <div className="ml-auto">
          {user ? (
            <div className="relative" ref={ref}>
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted"
              >
                <div className="flex size-7 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  {user.email?.[0]?.toUpperCase() ?? '?'}
                </div>
                <span className="hidden max-w-32 truncate text-sm sm:block">{user.email}</span>
                <ChevronDown className={cn('size-3.5 text-muted-foreground transition-transform', open && 'rotate-180')} />
              </button>

              {open && (
                <div className="absolute right-0 top-full mt-1 w-48 rounded-lg border border-border bg-background shadow-lg">
                  <div className="border-b border-border px-3 py-2">
                    <p className="truncate text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <div className="p-1">
                    <Link
                      href="/logout"
                      className="flex w-full items-center rounded-md px-2 py-1.5 text-sm text-destructive hover:bg-destructive/10"
                      onClick={() => setOpen(false)}
                    >
                      Sign out
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Button asChild size="sm">
              <Link href="/login">Sign in</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
