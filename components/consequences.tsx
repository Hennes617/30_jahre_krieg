import { Card, CardContent } from '@/components/ui/card'
import { TrendingDown, Home, Scale } from 'lucide-react'

export function Consequences() {
  return (
    <section id="folgen" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Folgen des Krieges</h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg leading-relaxed">
            Der Dreißigjährige Krieg hinterließ tiefe Spuren in Europa. Die Auswirkungen waren in 
            vielen Bereichen spürbar und prägten die weitere Entwicklung des Kontinents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <Card>
            <CardContent className="pt-6">
              <TrendingDown className="h-12 w-12 text-destructive mb-4" />
              <h3 className="text-xl font-bold mb-3">Bevölkerungsverluste</h3>
              <p className="leading-relaxed mb-4">
                Deutschland verlor etwa 30-40% seiner Bevölkerung. Manche Regionen waren fast entvölkert. 
                Hunger, Seuchen und direkte Kriegshandlungen forderten Millionen Opfer.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Gesamtbevölkerung sank von ca. 20 auf 12 Millionen</li>
                <li>• Manche Städte verloren über die Hälfte ihrer Einwohner</li>
                <li>• Besonders betroffen: Sachsen, Württemberg, Pfalz</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Home className="h-12 w-12 text-destructive mb-4" />
              <h3 className="text-xl font-bold mb-3">Wirtschaftliche Zerstörung</h3>
              <p className="leading-relaxed mb-4">
                Felder lagen brach, Handel kam zum Erliegen, Städte waren zerstört. 
                Die wirtschaftliche Erholung dauerte Generationen.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Landwirtschaft verwüstet, Hungersnöte</li>
                <li>• Handelswege unterbrochen</li>
                <li>• Handwerk und Gewerbe zusammengebrochen</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-5xl mx-auto">
          <CardContent className="pt-6">
            <Scale className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Westfälischer Friede 1648</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2 text-lg">Politische Folgen:</h4>
                <ul className="space-y-2 leading-relaxed">
                  <li>• <strong>Souveränität der Fürsten:</strong> Die deutschen Fürsten erhielten weitgehende Unabhängigkeit vom Kaiser</li>
                  <li>• <strong>Schwächung des Kaisers:</strong> Das Heilige Römische Reich wurde zu einem lockeren Staatenbund</li>
                  <li>• <strong>Neue Mächte:</strong> Frankreich und Schweden stiegen auf, Spanien und Habsburg wurden schwächer</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-2 text-lg">Religiöse Folgen:</h4>
                <ul className="space-y-2 leading-relaxed">
                  <li>• <strong>Religionsfreiheit:</strong> Calvinismus wurde als dritte Konfession anerkannt</li>
                  <li>• <strong>Cuius regio, eius religio:</strong> Landesherren bestimmten weiterhin die Religion</li>
                  <li>• <strong>Ende der Religionskriege:</strong> Das Zeitalter der großen Glaubenskriege in Europa war vorbei</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm leading-relaxed">
                <strong>Langfristige Bedeutung:</strong> Der Westfälische Friede gilt als Grundlage des modernen 
                Völkerrechts und des europäischen Staatensystems. Die Prinzipien der Souveränität und 
                Gleichberechtigung der Staaten wurden hier erstmals festgeschrieben.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-3">Zusammenfassung</h3>
              <p className="leading-relaxed">
                Der Dreißigjährige Krieg war eine der größten Katastrophen der deutschen Geschichte. 
                Er zeigte die Schrecken religiöser Intoleranz und machtkämpferischer Politik. 
                Aus den Erfahrungen dieses Krieges entstand ein neues europäisches Staatensystem, 
                das auf dem Prinzip der Souveränität und religiöser Toleranz beruhte.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
