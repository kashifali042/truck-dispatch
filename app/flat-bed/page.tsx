export default function FlatBed() {
  return (
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 px-4">
      {/* Left Content */}
      <div>
        <h2 className="text-3xl font-bold text-blue-700">
          Flatbed <span className="text-black">Dispatching Services</span>
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Truck Dispatch Experts helps flatbed and open deck carriers stay loaded with reliable, high paying freight across the country. We connect you with shippers who need oversized, heavy haul, construction, machinery, and industrial loads moved safely and on time. With strong rate negotiation, 24/7 support, and no long term contracts, you stay flexible while maximizing your weekly revenue.
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
            Outstanding <span className="text-black">Dispatching Services</span>
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            What sets us apart from other dispatch services? Well, we’ve got professional dispatchers with years of experience in the industry and we understand that in order to run a successful business, you need to maximize the time that you spend earning and minimize the losses and downtime that is associated with looking for your next load, shipper or location. Plus, we ensure repeat revenue from long-term relationships with our shippers.
          </p>

          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3 mt-6">
            Loads Suitable for Your <span className="text-black">Reefer</span>
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            As a specialized service, we know that your reefer truck and all the skills you have, should fetch a reasonable and secure rate. With cargo that is often delicate like food and drinks, pharmaceuticals, fresh flowers, and more, these deliveries usually can’t afford delays. Giving your shipper peace of mind while you’re on the road can be a challenging task while you’re already moving as efficiently as you can. Let us keep up frequent communication with the shipper, and help you navigate routes in real time so that you and the cargo make it to your destination safe and on time. We also have connections for reefer loads, and can help with everything from selecting and picking up the loads, to planning routes to handling invoicing and payment. Once you’re registered with us, you can start picking up either dry or reefer loads from shippers that trust our service. Your reefer is a costly investment, so it’s all the more important that you minimize deadhead and take advantage of the market’s demands for refrigerated loads. We’ll help you maintain and grow your roster of shippers so that you will have a stable income to help pay off your reefer truck. We can get you started with reliable loads so that you can continue building your business with minimal points of stagnation
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3">
            <span className="text-black">Top</span> Market Loads
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            We put the time and energy into cultivating great working relationships--with our drivers and also our shippers. This means that we’re negotiating the best rate that we can for you and we’re able to coordinate with our shippers to keep them updated on their load, keeping them happy while you focus on the road.
          </p>
        </div>
      </div>
    </section>
  );
}
