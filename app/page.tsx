import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Overview } from '@/components/overview'
import { Timeline } from '@/components/timeline'
import { Causes } from '@/components/causes'
import { Battles } from '@/components/battles'
import { KeyFigures } from '@/components/key-figures'
import { Consequences } from '@/components/consequences'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Overview />
        <Timeline />
        <Causes />
        <Battles />
        <KeyFigures />
        <Consequences />
      </main>
      <Footer />
    </div>
  )
}
