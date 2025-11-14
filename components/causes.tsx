import { Card, CardContent } from '@/components/ui/card'
import { Cross, Crown, Landmark, Shield } from 'lucide-react'

export function Causes() {
  return (
    <section id="ursachen" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Ursachen des Krieges</h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg leading-relaxed">
            Der Dreißigjährige Krieg hatte vielfältige Ursachen. Es war nicht nur ein Religionskrieg, 
            sondern auch ein Machtkampf europäischer Dynastien um die Vorherrschaft in Europa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <Cross className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Religiöse Spannungen</h3>
              <p className="leading-relaxed">
                Der Konflikt zwischen Katholiken und Protestanten war seit der Reformation ungelöst. 
                Der Augsburger Religionsfriede von 1555 brachte nur vorübergehende Ruhe. 
                Die calvinistische Bewegung wurde nicht anerkannt, was zu neuen Spannungen führte.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Crown className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Machtpolitik</h3>
              <p className="leading-relaxed">
                Die Habsburger wollten ihre Macht im Reich stärken. Andere europäische Mächte wie 
                Frankreich, Schweden und Dänemark versuchten, Habsburg zu schwächen und ihren eigenen 
                Einfluss zu vergrößern.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Landmark className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Verfassungskonflikt</h3>
              <p className="leading-relaxed">
                Im Heiligen Römischen Reich stritten Kaiser und Fürsten um die Verteilung der Macht. 
                Die Fürsten wollten ihre Unabhängigkeit bewahren, während der Kaiser seine Autorität 
                stärken wollte.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Bündnissysteme</h3>
              <p className="leading-relaxed">
                Es entstanden zwei große Lager: Die Katholische Liga unter Führung Bayerns und die 
                Protestantische Union unter Führung der Pfalz. Diese Bündnisse machten aus lokalen 
                Konflikten schnell große Kriege.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
