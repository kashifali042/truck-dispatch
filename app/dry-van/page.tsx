export default function DryVanDispatch() {
  return (
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 px-4">
      {/* Left Content */}
      <div>
        <h2 className="text-3xl font-bold text-blue-700">
          DRY VAN <span className="text-black">DISPATCH SERVICES</span>
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Dispatch Experts work to ensure that you get to run your business the way you want – picking up loads 
          that are convenient for your schedule and getting support 24/7 along the way without any contracts so 
          you can stay flexible.
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
            START-TO-FINISH SUPPORT
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            We provide start to finish support, meaning that we’re with you for every stage of your operation.
            From finding new shippers or connecting with existing ones, to booking and scheduling loads for you,
            to handling billing and payment, at no extra cost. With Dispatch Experts your responsibilities become
            easier to manage so we help you stay focused on the practical side of business rather than logistics.
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
            We help you secure top market freight loads and negotiate fair and competitive rates on your behalf.
            We also aim to reduce wait time on the road load by providing you with available shippers in the areas
            you’re in so you’re not stuck waiting. Our service saves you from refreshing the load boards by finding
            better paying jobs from reliable shippers.
          </p>

          <h3 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-3 mt-6">
            NO CONTRACTS
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            We offer pay per load meaning no contracts or commitments. Don’t want a certain load? No problem.
            Pick the one that suits you best and move. We minimize numbers of loads, so you stay flexible.
            Take on what works for you. If you decide to part ways later just contact us anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
