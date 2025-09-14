export default function Header() {
  return (
    <header className="relative bg-blood-red py-20 text-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="fangs-pattern"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <h1 className="font-gothic text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wider leading-tight">
          Halloween Party
        </h1>
        <h2 className="font-gothic text-3xl md:text-4xl text-white/90 mb-8 tracking-wide">Fri's 26th Birthday</h2>
        <p className="font-sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
          Come celebrate a night of vampires and creatures of the night. Costumes required.
        </p>
      </div>
    </header>
  )
}
