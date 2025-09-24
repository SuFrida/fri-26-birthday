export default function Map() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-blood-red/20 shadow-2xl">
      <div className="bg-blood-red p-6 rounded-lg mb-8 blood-drip relative">
        <h3 className="font-gothic text-3xl md:text-4xl text-white text-center">Encuentra la Cripta</h3>
        <div className="blood-drip-extra-1"></div>
        <div className="blood-drip-extra-2"></div>
        <div className="blood-drip-extra-3"></div>
      </div>

      <div className="aspect-video rounded-lg overflow-hidden border border-blood-red/30">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8314.354503335468!2d-99.15850522816677!3d19.43708977105732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8cd0ff7e861%3A0x94edaf86fa50e93d!2sC.%20Maestro%20Antonio%20Caso%2060%2C%20San%20Rafael%2C%20Cuauht%C3%A9moc%2C%2006470%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1757914604690!5m2!1ses-419!2smx"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Party Location"
        />
      </div>

      <p className="text-center text-gray-300 mt-4 font-sans">C. Maestro Antonio Caso 60, San Rafael, Cuauhtémoc, 06470 Ciudad de México, CDMX</p>
    </div>
  )
}
