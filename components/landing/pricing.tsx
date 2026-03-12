import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const PLANS = [
  {
    name: 'Starter',
    price: 'Free',
    period: null,
    description: 'For buyers doing initial research',
    features: [
      '1 property report',
      'Basic structural check',
      'Digital PDF export',
      'Email support',
    ],
    cta: 'Get started',
    href: '/signup',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '€149',
    period: '/inspection',
    description: 'For serious buyers requiring full due diligence',
    features: [
      'Full 200-point inspection',
      'Certified TÜV inspector',
      '24-hour delivery',
      'Expert consultation call',
      'Bank-ready PDF report',
      'Priority support',
    ],
    cta: 'Start inspection',
    href: '/signup',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: null,
    description: 'For agencies and institutional investors',
    features: [
      'Unlimited properties',
      'Dedicated inspector team',
      'API access',
      'White-label reports',
      'SLA guarantee',
      'Dedicated account manager',
    ],
    cta: 'Contact sales',
    href: 'mailto:sales@immocleck.de',
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-muted-foreground">
            Start for free. Upgrade when you need the full inspection.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative rounded-2xl border bg-card p-8',
                plan.highlighted && 'ring-2 ring-primary shadow-lg'
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
                  Recommended
                </span>
              )}

              <div className="mb-6">
                <h3 className="font-semibold">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="mb-8 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="w-full"
                variant={plan.highlighted ? 'default' : 'outline'}
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
