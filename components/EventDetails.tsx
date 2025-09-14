export default function EventDetails() {
  return (
    <div className="bg-black p-8 rounded-lg border border-blood-red/20 shadow-2xl relative">
      <div className="bg-blood-red p-6 rounded-lg mb-8 blood-drip relative">
        <h3 className="font-gothic text-3xl md:text-4xl text-white text-center tracking-wider">Event Details</h3>
        <div className="blood-drip-extra-1"></div>
        <div className="blood-drip-extra-2"></div>
        <div className="blood-drip-extra-3"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blood-red rounded-full flex items-center justify-center">
              <span className="text-white text-xl">📅</span>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-white text-lg">Date</h4>
              <p className="text-gray-300">Friday, October 26th, 2024</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blood-red rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🕘</span>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-white text-lg">Time</h4>
              <p className="text-gray-300">8:00 PM - Late</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blood-red rounded-full flex items-center justify-center">
              <span className="text-white text-xl">📍</span>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-white text-lg">Location</h4>
              <p className="text-gray-300">
                123 Vampire Lane
                <br />
                Gothic City, GC 12345
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blood-red rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🦇</span>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-white text-lg">Dress Code</h4>
              <p className="text-gray-300">Vampire & Gothic Costumes Required</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
