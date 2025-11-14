import { Card, CardContent } from '@/components/ui/card'

const timelineEvents = [
  {
    year: '1618',
    title: 'Prager Fenstersturz',
    description: 'Protestantische Adlige werfen katholische Statthalter aus dem Fenster. Beginn des Krieges.',
    phase: 'Böhmisch-Pfälzischer Krieg'
  },
  {
    year: '1620',
    title: 'Schlacht am Weißen Berg',
    description: 'Entscheidende Niederlage der böhmischen Protestanten gegen die katholische Liga.',
    phase: 'Böhmisch-Pfälzischer Krieg'
  },
  {
    year: '1625',
    title: 'Dänischer Kriegseintritt',
    description: 'König Christian IV. von Dänemark greift zugunsten der Protestanten ein.',
    phase: 'Dänisch-Niedersächsischer Krieg'
  },
  {
    year: '1630',
    title: 'Schweden tritt ein',
    description: 'König Gustav II. Adolf von Schweden greift auf protestantischer Seite ein.',
    phase: 'Schwedischer Krieg'
  },
  {
    year: '1632',
    title: 'Schlacht bei Lützen',
    description: 'Schwedischer Sieg, aber Gustav Adolf fällt in der Schlacht.',
    phase: 'Schwedischer Krieg'
  },
  {
    year: '1635',
    title: 'Frankreich tritt ein',
    description: 'Das katholische Frankreich kämpft gegen Habsburg und das katholische Spanien.',
    phase: 'Französisch-Schwedischer Krieg'
  },
  {
    year: '1648',
    title: 'Westfälischer Friede',
    description: 'Friedensschlüsse von Münster und Osnabrück beenden den Krieg.',
    phase: 'Kriegsende'
  }
]

export function Timeline() {
  return (
    <section id="zeitleiste" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Zeitleiste</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-8 w-4 h-4 rounded-full bg-primary ring-4 ring-background md:left-1/2 -translate-x-2" />
                  
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-2xl font-bold text-primary mb-2">{event.year}</div>
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{event.phase}</p>
                        <p className="text-sm leading-relaxed">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
