import {
  Shield,
  Zap,
  ClipboardCheck,
  Clock,
  FileText,
  MessageSquare,
} from 'lucide-react'

const FEATURES = [
  {
    icon: ClipboardCheck,
    title: 'Structural Assessment',
    description:
      'Detailed analysis of load-bearing walls, foundations, and roof integrity by certified engineers.',
  },
  {
    icon: Zap,
    title: 'Electrical & Plumbing',
    description:
      'Full inspection of wiring, circuit panels, pipe condition, and water pressure throughout the property.',
  },
  {
    icon: Shield,
    title: 'Certified Inspectors',
    description:
      'Every report is prepared and signed off by TÜV-certified property inspection professionals.',
  },
  {
    icon: Clock,
    title: '24-Hour Turnaround',
    description:
      'Receive your comprehensive inspection report within one business day of the site visit.',
  },
  {
    icon: FileText,
    title: 'PDF Export',
    description:
      'Download a shareable, bank-ready PDF report suitable for mortgage applications and negotiations.',
  },
  {
    icon: MessageSquare,
    title: 'Expert Consultation',
    description:
      'Follow-up call with your assigned inspector to discuss findings, risks, and recommended next steps.',
  },
]

export function Features() {
  return (
    <section id="features" className="border-t border-border bg-muted/30 py-20">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Everything you need to buy with confidence
          </h2>
          <p className="mt-3 text-muted-foreground">
            Our comprehensive inspection service covers every aspect of the property so there are no
            surprises after you sign.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <feature.icon className="mb-4 size-8 text-primary" />
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
