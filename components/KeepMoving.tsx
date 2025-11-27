export default function KeepMoving() {
  return (
    <section id="keep-moving" className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">

        {/* LEFT SIDE STATS */}
        <div className="space-y-14">

          {/* 2000 Carriers */}
          <div>
            <p className="text-orange-500 font-bold">OVER</p>
            <h1 className="text-6xl md:text-7xl font-bold text-blue-700">2000</h1>
            <p className="text-xl font-semibold text-gray-700 mt-1">CARRIERS</p>
            <p className="text-gray-600 mt-2 w-4/5">
              carriers have trusted us with their dispatch and back office needs
            </p>
          </div>

          <div className="border-t border-blue-300 w-full"></div>

          {/* 300 Loads + 500 Brokers */}
          <div className="grid grid-cols-2 gap-10">

            {/* 300 Loads */}
            <div>
              <p className="text-orange-500 font-bold">OVER</p>
              <h1 className="text-6xl font-bold text-blue-700">300</h1>
              <p className="text-xl font-semibold text-gray-700 mt-1">LOADS</p>
              <p className="text-gray-600 mt-2">
                daily loads are booked by our dispatchers
              </p>
            </div>

            {/* 500 Brokers */}
            <div>
              <p className="text-orange-500 font-bold">OVER</p>
              <h1 className="text-6xl font-bold text-blue-700">500</h1>
              <p className="text-xl font-semibold text-gray-700 mt-1">BROKERS</p>
              <p className="text-gray-600 mt-2">
                brokers and shippers trust us with their loads
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE TEXT + BUTTON */}
        <div className="flex flex-col justify-center pl-6">

          <h2 className="text-4xl font-bold text-gray-900">
            KEEP <span className="text-blue-600">MOVING</span>
          </h2>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            KEEP <span className="text-orange-500">EARNING</span>
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed w-4/5">
            We help thousands of Carriers & Owner Operators to streamline their 
            operations and increase their cash flow.
          </p>

          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Start Moving Today
          </button>

        </div>
      </div>
    </section>
  );
}
