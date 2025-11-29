export default function DryVanDispatch() {
  return (
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 px-4">
      {/* Left Content */}
      <div>
        <h2 className="text-3xl font-bold text-blue-700">
          DRY VAN <span className="text-black">DISPATCH SERVICES</span>
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Truck dispatch experts helps dry van owner-operators stay loaded with reliable, high paying freight. We match you with the best loads for your lanes, negotiate strong rates, and handle all paperwork so you can focus on driving. With 24/7 dispatch support and no long term contracts, you stay flexible while keeping your dry van moving every day.
        </p>

        {/* Form */}
        <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="Company Name" className="border p-2 rounded-lg bg-blue-50" />
          <input type="email" placeholder="Email" className="border p-2 rounded-lg bg-blue-50" />
          <input type="text" placeholder="Phone" className="border p-2 rounded-lg bg-blue-50" />
          <input type="text" placeholder="Details" className="border p-2 rounded-lg bg-blue-50" />
          <input type="text" placeholder="Promo Code" className="border p-2 rounded-lg bg-blue-50" />
          <select className="border p-2 rounded-lg bg-blue-50">
            <option>Equipment Type</option>
            <option>Dry Van</option>
            <option>Reefer</option>
          </select>
          <select className="border p-2 rounded-lg bg-blue-50">
            <option>Home State</option>
            <option>California</option>
            <option>Texas</option>
          </select>
          <select className="border p-2 rounded-lg bg-blue-50">
            <option>How did you hear about us?</option>
            <option>Google</option>
            <option>Facebook</option>
          </select>

          <button type="submit" className="sm:col-span-2 bg-blue-700 text-white py-3 rounded-lg font-semibold mt-2">
            Start Moving Today
          </button>
        </form>
      </div>

      {/* Right Content (Image/Video) */}
      <div className="flex justify-center items-center">
        <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/aJJh0rTsWr8" 
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-md w-full max-w-xl"
          ></iframe>
      </div>
      
      <div className="sm:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div>
          <h3 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-3">
            Why Choose Us for Dry Van Dispatching?
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            Truck dispatch experts specializes in dry van freight and understands the lanes, rates, and market patterns that impact your business. Our team monitors nationwide market conditions, spot rates, and high-demand regions so you always make informed decisions. We work to reduce empty miles, boost your RPM, and keep you on profitable freight all week long.
          </p>

          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3 mt-6">
            REASONABLE FEE STRUCTURE
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            We provide start to finish support, meaning that we’re with you for every stage of your operation.
            From finding new shippers or connecting with existing ones, to booking and scheduling loads for you,
            to handling billing and payment, at no extra cost. With Dispatch Experts your responsibilities become
            easier to manage so we help you stay focused on the practical side of business rather than logistics.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3">
            TOP MARKET LOADS
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            We secure top market freight for your truck by working directly with reliable shippers and brokers who consistently offer competitive rates. Our dispatchers minimize your empty miles by finding nearby freight fast, helping you avoid downtime between loads. No more constant load board refreshing we do the searching and negotiating while you run profitable, steady freight from trusted partners nationwide.
          </p>

          <h3 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-3 mt-6">
            NO CONTRACTS
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            We operate with a true no contract policy, giving you complete freedom to run your business your way. You only pay per load, and you choose which loads you want to take. There is no pressure, no minimum requirement, and no long term commitment. If you ever decide to pause or stop, just send us a quick message or call no hassle, no penalties, just flexibility on your terms.
          </p>
        </div>
      </div>
    </section>
  );
}
