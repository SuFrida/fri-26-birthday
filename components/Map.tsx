export default function Map() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-blood-red/20 shadow-2xl">
      <div className="bg-blood-red p-6 rounded-lg mb-8 blood-drip relative">
        <h3 className="font-gothic text-3xl md:text-4xl text-white text-center">Find the Lair</h3>
        <div className="blood-drip-extra-1"></div>
        <div className="blood-drip-extra-2"></div>
        <div className="blood-drip-extra-3"></div>
      </div>

      <div className="aspect-video rounded-lg overflow-hidden border border-blood-red/30">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Party Location"
        />
      </div>

      <p className="text-center text-gray-300 mt-4 font-sans">123 Vampire Lane, Gothic City, GC 12345</p>
    </div>
  )
}
