import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background z-0" />
      <Image
        src="/historical-17th-century-european-battlefield-with-.jpg"
        alt="Dreißigjähriger Krieg Schlacht"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance text-foreground">
          Der Dreißigjährige Krieg
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground text-balance">
          1618 - 1648: Europas verheerendster Konflikt der Frühen Neuzeit
        </p>
      </div>
    </section>
  )
}
