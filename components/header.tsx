import { Sword } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sword className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Der Dreißigjährige Krieg</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#uberblick" className="hover:text-primary transition-colors">Überblick</a>
          <a href="#zeitleiste" className="hover:text-primary transition-colors">Zeitleiste</a>
          <a href="#ursachen" className="hover:text-primary transition-colors">Ursachen</a>
          <a href="#schlachten" className="hover:text-primary transition-colors">Schlachten</a>
          <a href="#personen" className="hover:text-primary transition-colors">Personen</a>
          <a href="#folgen" className="hover:text-primary transition-colors">Folgen</a>
        </nav>
      </div>
    </header>
  )
}
