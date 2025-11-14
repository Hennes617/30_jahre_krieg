import { Sword } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <Sword className="h-5 w-5 text-primary" />
            <span className="font-bold">Der Dreißigjährige Krieg</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Ein Geschichtsprojekt über einen der verheerendsten Konflikte Europas
          </p>
          <p className="text-xs text-muted-foreground">
            Erstellt für das Geschichtsprojekt Klasse 7 • 2025
          </p>
        </div>
      </div>
    </footer>
  )
}
