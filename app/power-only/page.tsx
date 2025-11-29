export default function PowerOnly() {
  return (
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 px-4">
      {/* Left Content */}
      <div>
        <h2 className="text-3xl font-bold text-blue-700">
          Power only <span className="text-black">Loads</span><span className="text-black"> For owner & operators</span>
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Truck Dispatch Experts helps Power Only owner operators and fleets stay loaded with consistent, high paying freight from load outs and tow aways to trailer moves, preloaded trailers, and drop and hook freight. We find the right trailer type, the right lane, and the right rate so you can stay moving without downtime. With strong rate negotiation, 24/7 support, and no long term contracts, your Power Only unit stays earning every week.
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
            Dispatch Services Tailored for <span className="text-black">Box Trucks</span>
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            If you’re an owner/operator of a box truck, you know the headaches that can come from running your business. From the pile of paperwork, searching for decent loads and trying to maintain working relationships with reliable brokers and shippers, we get it and we want to help take the stress out of whatever is eating up your time and profits. The industry can be tough on box truck operators, with shippers sometimes hesitant to use the service or operators feeling stuck in the red with the quality of loads that are available. We offer services tailored to your business. Want help getting loads but can handle the paperwork? That’s great. Want the paperwork handled and live route information from a dedicated dispatcher? We do that too. Our model is designed with the owner/operator in mind, and we trust that you know what’s best for your business and can choose what services you want from Dispatch Experts.
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
            <span className="text-black">Concentrate</span> on What You Do Best
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            At Dispatch Experts, we can handle pretty much everything that you need to be on the road with a good load. We know that filling out paperwork can take hours, time that could be spent making deliveries, so we can take that off your plate to ensure that you’re stacking up more runs with extraneous tasks out of your way.
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