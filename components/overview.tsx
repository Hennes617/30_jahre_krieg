import { Card, CardContent } from '@/components/ui/card'
import { Calendar, MapPin, Users, Skull } from 'lucide-react'

export function Overview() {
  return (
    <section id="uberblick" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Überblick</h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg leading-relaxed mb-4">
            Der Dreißigjährige Krieg war einer der verheerendsten Konflikte in der europäischen Geschichte. 
            Was als religiöser Konflikt zwischen Katholiken und Protestanten im Heiligen Römischen Reich begann, 
            entwickelte sich zu einem europäischen Machtkampf, der Millionen von Menschen das Leben kostete.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <Calendar className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Dauer</h3>
              <p className="text-muted-foreground">1618 bis 1648<br/>30 Jahre Krieg</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Schauplatz</h3>
              <p className="text-muted-foreground">Hauptsächlich im Heiligen Römischen Reich</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Parteien</h3>
              <p className="text-muted-foreground">Katholiken vs. Protestanten<br/>Europäische Großmächte</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Skull className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Opfer</h3>
              <p className="text-muted-foreground">Ca. 4-8 Millionen Tote in Mitteleuropa</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
