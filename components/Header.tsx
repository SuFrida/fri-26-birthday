export default function Header() {
  return (
    <header className="relative bg-blood-red py-30 text-center mb-6 blood-drip">
      <div className="absolute inset-0 opacity-10">
        <div className="fangs-pattern"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <h1 className="font-gothic text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wider leading-tight animate-fade-in">
          Birthday Halloween Party
        </h1>
        <h2 className="font-gothic text-3xl md:text-4xl text-white/90 mb-8 tracking-wide animate-fade-in-delay-1">26 Años de Fri</h2>
        <p className="font-sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-delay-2">
          Adéntrate en una noche de vampiros. <br /> Disfrázate a tu estilo: de cualquier época, cultura, serie o película.
        </p>
      </div>
      <div className="blood-drip-extra-1"></div>
        <div className="blood-drip-extra-2"></div>
        <div className="blood-drip-extra-3"></div>
    </header>
  )
}
