export default function EventDetails() {
  return (
    <div className="bg-black p-8 rounded-lg border border-blood-red/20 shadow-2xl relative">
      <div className="bg-blood-red p-6 rounded-lg mb-8 blood-drip relative">
        <h3 className="font-gothic text-3xl md:text-4xl text-white text-center tracking-wider">Detalles de la Eventa</h3>
        <div className="blood-drip-extra-1"></div>
        <div className="blood-drip-extra-2"></div>
        <div className="blood-drip-extra-3"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Row 1 */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-blood-red rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xl">📅</span>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-white text-lg">Fecha</h4>
            <p className="text-gray-300">Sábado, 25 de Octubre, 2025</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-blood-red rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xl">📍</span>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-white text-lg">Ubicación</h4>
            <p className="text-gray-300">
              Calle Maestro Antonio Caso #60
              <br />
              Colonia San Rafael, C.P. 06470, Cuautemoc, CDMX
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-blood-red rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xl">🕘</span>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-white text-lg">Hora</h4>
            <p className="text-gray-300">6:00 PM - Hasta el Amanecer</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-blood-red rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xl">🦇</span>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-white text-lg">Código de Vestimenta</h4>
            <p className="text-gray-300">
              Elige el atuendo de vampiro que más te guste.<br />De cualquier época, cultura, serie o película
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
