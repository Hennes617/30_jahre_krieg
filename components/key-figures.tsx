import { Card, CardContent } from '@/components/ui/card'
import Image from "next/image";

const figures = [
  {
    name: 'Gustav II. Adolf',
    title: 'König von Schweden',
    years: '1594-1632',
    side: 'Protestanten',
    description: 'Der "Löwe aus Mitternacht" war einer der bedeutendsten Heerführer des Krieges. Er führte Schweden in den Krieg und errang wichtige Siege, fiel aber 1632 bei Lützen.',
    image: '/king-gustav-adolf-sweden-portrait-17th-century.jpg'
  },
  {
    name: 'Albrecht von Wallenstein',
    title: 'Kaiserlicher Feldherr',
    years: '1583-1634',
    side: 'Katholiken',
    description: 'Brillanter, aber umstrittener Feldherr des Kaisers. Er stellte auf eigene Kosten große Armeen auf und wurde 1634 ermordet, weil man ihm Verrat unterstellte.',
    image: '/albrecht-wallenstein-portrait-17th-century-general.jpg'
  },
  {
    name: 'Ferdinand II.',
    title: 'Kaiser des Heiligen Römischen Reiches',
    years: '1578-1637',
    side: 'Katholiken',
    description: 'Streng katholischer Kaiser, dessen Politik zur Eskalation des Konflikts beitrug. Er wollte den Katholizismus im gesamten Reich durchsetzen.',
    image: '/emperor-ferdinand-ii-habsburg-portrait.jpg'
  },
  {
    name: 'Kardinal Richelieu',
    title: 'Französischer Staatsmann',
    years: '1585-1642',
    side: 'Gegen Habsburg',
    description: 'Führte das katholische Frankreich auf die Seite der Protestanten, um die Habsburger zu schwächen. Ein Meister der Machtpolitik.',
    image: '/cardinal-richelieu-portrait-17th-century.jpg'
  },
  {
    name: 'Maximilian I.',
    title: 'Herzog/Kurfürst von Bayern',
    years: '1573-1651',
    side: 'Katholiken',
    description: 'Anführer der Katholischen Liga und wichtigster Verbündeter des Kaisers. Bayern profitierte vom Krieg durch Gebietsgewinne.',
    image: '/maximilian-i-bavaria-portrait-17th-century.jpg'
  },
  {
    name: 'Friedrich V.',
    title: 'Kurfürst von der Pfalz',
    years: '1596-1632',
    side: 'Protestanten',
    description: 'Der "Winterkönig" von Böhmen. Seine Annahme der böhmischen Krone 1619 war ein Auslöser des Krieges. Er verlor alles und starb im Exil.',
    image: '/frederick-v-palatinate-winter-king-portrait.jpg'
  }
]

export function KeyFigures() {
  return (
    <section id="personen" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Wichtige Persönlichkeiten</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {figures.map((figure, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={figure.image || "/placeholder.svg"}
                alt={figure.name}
                className="w-full h-64 object-cover"
              />
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-1">{figure.name}</h3>
                <p className="text-sm font-medium text-primary mb-1">{figure.title}</p>
                <p className="text-sm text-muted-foreground mb-2">{figure.years}</p>
                <div className="inline-block px-2 py-1 bg-secondary/20 text-secondary-foreground rounded text-xs font-medium mb-3">
                  {figure.side}
                </div>
                <p className="text-sm leading-relaxed">{figure.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
