"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How fast can I start running Power Only loads?",
    answer: "Most carriers start the same day after sending the required documents.",
  },
  {
    question: "Do you force dispatch?",
    answer: "No. You choose every load.",
  },
  {
    question: "Do you handle load out and tow away freight?",
    answer: "Yes. We work with shippers offering load outs, tow aways, drop trailers, and preloaded freight.",
  },
  {
    question: "Can new authorities run Power Only?",
    answer: "Yes. Power Only is one of the best ways for new carriers to start earning quickly.",
  },
  {
    question: "Do you find dedicated Power Only lanes?",
    answer: "Yes, especially in high volume Midwest and Southern regions.",
  },
  {
    question: "Is support available 24/7?",
    answer: "Absolutely. Our dispatch team is available day and night.",
  },
];

export default function Reefer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 px-4">
      {/* Left Content */}
      <div>
        <h2 className="text-3xl font-bold text-blue-700">
          Power Only <span className="text-black">Dispatch Services</span>
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed mb-4">
          Truck Dispatch Experts helps Power Only owner operators and fleets stay loaded with consistent, high paying freight from load outs and tow aways to trailer moves, preloaded trailers, and drop and hook freight. We find the right trailer type, the right lane, and the right rate so you can stay moving without downtime. With strong rate negotiation, 24/7 support, and no long term contracts, your Power Only unit stays earning every week.
        </p>
        <h2 className="text-3xl font-bold text-blue-700">Ready to Start Running High Paying <span className="text-black">Power Only Loads?</span></h2>
        {/* Form */}
        <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" className="border p-2 rounded-lg bg-blue-50" />
          <input type="text" placeholder="Company Name" className="border p-2 rounded-lg bg-blue-50" />
          <input type="text" placeholder="Phone" className="border p-2 rounded-lg bg-blue-50" />
          <input type="email" placeholder="Email" className="border p-2 rounded-lg bg-blue-50" />
          <input type="text" placeholder="Details" className="border p-2 rounded-lg bg-blue-50" />
          <input type="text" placeholder="Promo Code" className="border p-2 rounded-lg bg-blue-50" />
          <select className="border p-2 rounded-lg bg-blue-50">
            <option>Equipment Type</option>
            <option>Dry Van</option>
            <option>Reefer</option>
            <option>Flatbed</option>
            <option>Step Deck</option>
            <option>Hot Shot</option>
            <option>Box Truck</option>
            <option>Power Only</option>
          </select>
          <input type="text" placeholder="MC Number" className="border p-2 rounded-lg bg-blue-50" />
          <input type="text" placeholder="Preferred Lanes / States" className="border p-2 rounded-lg bg-blue-50" />
          <textarea placeholder="Message or Questions" className="border p-2 rounded-lg bg-blue-50"></textarea>

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
            Why Choose Us for <span className="text-black">Power Only Dispatching?</span>
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            Power Only freight requires flexibility, timing, and understanding of trailer types, load outs, and equipment compatibility. Truck Dispatch Experts works with shippers and brokers who regularly move reefers, dry vans, flatbeds, chassis, and preloaded trailers giving you more opportunities and higher weekly revenue. We reduce your empty miles, plan better routes, and keep your truck loaded with the most profitable Power Only freight available.
          </p>

          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3 mt-6">
            Reasonable <span className="text-black">Fee Structure</span>
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            Our fee structure is simple and built for Power Only carriers. You receive full dispatch service load search, rate negotiation, booking, paperwork, and billing without hidden charges or complicated terms. With Truck dispatch experts, your operations stay smooth, efficient, and profitable.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3">
            <span className="text-black">TOP</span> MARKET LOADS
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            We work with brokers and shippers who consistently need reliable Power Only carriers. Whether it's picking up a preloaded trailer, moving a customer's equipment, or completing a tow away shipment, we connect you with profitable freight fast. No more refreshing load boards we bring the strongest Power Only loads directly to you.
          </p>

          <h3 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-3 mt-6">
            <span className="text-black">NO</span> CONTRACTS
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            We operate with a true no contract model, giving you full freedom to pick your loads, choose your lanes, and pause anytime. You pay only per load, never face forced dispatch, and remain in complete control of your business. No commitments. No pressure. Total flexibility.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-3">
            Start to <span className="text-black">Finish Support</span>
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            We work with brokers and shippers who consistently need reliable Power Only carriers. Whether it's picking up a preloaded trailer, moving a customer's equipment, or completing a tow away shipment, we connect you with profitable freight fast. No more refreshing load boards we bring the strongest Power Only loads directly to you.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-3">
            Who We <span className="text-black">Work With</span>
          </h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Power Only owner operators</li>
            <li>Regional and OTR Power Only carriers</li>
            <li>Carriers hauling load out and drop trailers</li>
            <li>Fleets running tow away shipments</li>
            <li>New authorities entering Power Only lanes</li>
            <li>Drivers wanting consistent, fast turnaround freight</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3 mt-6">
            <span className="text-black">What You Get</span> With Our Box Truck Dispatching
          </h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Dedicated dispatcher experienced in Power Only operations</li>
            <li>Access to high paying load out, tow-away, and trailer move freight</li>
            <li>Strong rate negotiation on every load</li>
            <li>Real time updates and 24/7 driver support</li>
            <li>Full load booking and scheduling handled for you</li>
            <li>Help with detention, layover, and TONU pay</li>
            <li>Complete paperwork, invoicing, and billing management</li>
            <li>Smart lane planning to reduce empty miles</li>
            <li>No contracts pay only per load</li>
            <li>Market insights for the strongest Power Only regions</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="py-10 px-4 max-w-4xl mx-auto style_section">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">
        Documents Required to Get Started
      </h2>

      <table className="w-full border border-gray-300 rounded-lg text-left">
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="p-4 border-r">MC Authority</td>
            <td className="p-4">W-9</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-4 border-r">Signed Carrier Agreement</td>
            <td className="p-4">Driver’s License</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-4 border-r">Certificate of Insurance (COI)</td>
            <td className="p-4">Truck details (size, year, liftgate info, etc.)</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section id="faq" className="py-20 bg-[#0066A1] style_section">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-center text-white text-4xl font-bold mb-12">
              Power Only <span className="text-orange-400">Dispatch</span> FAQs
            </h2>
    
            <div className="grid md:grid-cols-3 gap-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow cursor-pointer transition-all duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-bold">{faq.question}</h3>
    
                    <span className="text-orange-500 text-lg">
                      {openIndex === index ? <FaMinus /> : <FaPlus />}
                    </span>
                  </div>
    
                  {/* Answer */}
                  {openIndex === index && (
                    <p className="mt-4 text-sm text-gray-600">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </>  
  );
}
