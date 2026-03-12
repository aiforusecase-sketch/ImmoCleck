import Link from 'next/link'
import { ArrowRight, CheckCircle, ClipboardCheck, Shield, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="container mx-auto max-w-screen-xl px-4 py-20 md:py-32">
      <div className="flex flex-col gap-10 md:flex-row md:items-center">
        {/* Left column */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground">
            <CheckCircle className="size-3.5 text-primary" />
            Trusted by 2,400+ property buyers
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Inspect your property{' '}
            <span className="text-primary">before you commit</span>
          </h1>

          <p className="text-lg text-muted-foreground">
            ImmoCleck delivers professional property inspection reports in 24 hours. Know exactly
            what you&apos;re buying before signing the contract.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/signup">
                Start free inspection
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#features">See how it works</Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="size-3.5 text-primary" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="size-3.5 text-primary" /> First report free
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="size-3.5 text-primary" /> 24h delivery
            </span>
          </div>
        </div>

        {/* Right column — mock inspection report */}
        <div className="md:w-1/2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Inspection Report</p>
                <p className="font-semibold">Musterstraße 12, München</p>
              </div>
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                Complete
              </span>
            </div>

            <div className="space-y-3">
              {[
                { label: 'Structural Integrity', score: 92, icon: Shield },
                { label: 'Electrical Systems', score: 87, icon: ClipboardCheck },
                { label: 'Plumbing & Water', score: 95, icon: CheckCircle },
                { label: 'Roof Condition', score: 78, icon: Clock },
              ].map(({ label, score, icon: Icon }) => (
                <div key={label} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Icon className="size-3.5" />
                      {label}
                    </span>
                    <span className="font-medium">{score}/100</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <div>
                <p className="text-xs text-muted-foreground">Overall Score</p>
                <p className="text-2xl font-bold text-primary">88/100</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Certified by</p>
                <p className="text-sm font-medium">TÜV Inspector</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
