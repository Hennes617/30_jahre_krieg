import { Card, CardContent } from '@/components/ui/card'
import Image from "next/image";

const battles = [
  {
    name: 'Schlacht am Weißen Berg',
    date: '8. November 1620',
    location: 'Bei Prag, Böhmen',
    description: 'Entscheidende Niederlage der böhmischen Ständeaufständischen gegen die kaiserlichen Truppen. Die Schlacht dauerte nur etwa eine Stunde.',
    result: 'Katholischer Sieg',
    image: '/white-mountain-battle-1620-prague.jpg'
  },
  {
    name: 'Schlacht bei Breitenfeld',
    date: '17. September 1631',
    location: 'Bei Leipzig',
    description: 'Erster großer Sieg der Schweden unter Gustav II. Adolf gegen die kaiserlichen Truppen unter Tilly. Wendepunkt des Krieges.',
    result: 'Schwedischer Sieg',
    image: '/battle-of-breitenfeld-1631-swedish-army.jpg'
  },
  {
    name: 'Schlacht bei Lützen',
    date: '16. November 1632',
    location: 'Bei Leipzig',
    description: 'Schwedischer Sieg gegen Wallenstein, aber Gustav Adolf fällt in der Schlacht. Sein Tod schwächte die protestantische Seite.',
    result: 'Schwedischer Sieg, aber Gustav Adolf gefallen',
    image: '/battle-of-lutzen-1632-gustavus-adolphus-death.jpg'
  },
  {
    name: 'Schlacht bei Nördlingen',
    date: '6. September 1634',
    location: 'Nördlingen, Bayern',
    description: 'Vernichtende Niederlage der Schweden und ihrer Verbündeten gegen die kaiserlich-spanischen Truppen.',
    result: 'Katholischer Sieg',
    image: '/battle-of-nordlingen-1634.jpg'
  }
]

export function Battles() {
  return (
    <section id="schlachten" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Wichtige Schlachten</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {battles.map((battle, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={battle.image || "/placeholder.svg"}
                alt={battle.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">{battle.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{battle.date}</p>
                <p className="text-sm text-muted-foreground mb-3">📍 {battle.location}</p>
                <p className="leading-relaxed mb-3">{battle.description}</p>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {battle.result}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
