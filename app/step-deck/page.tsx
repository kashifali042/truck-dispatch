"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How fast can I start running hotshot loads?",
    answer: "Most hotshot carriers start the same day after submitting documents.",
  },
  {
    question: "Do I need ramps or a gooseneck trailer?",
    answer: "It helps but we also book bumper pull and dovetail hotshot loads.",
  },
  {
    question: "Do you find partial loads?",
    answer: "Yes, we book partials, expedited freight, and light hotshot loads daily.",
  },
  {
    question: "Is the fee really 8%?",
    answer: "Yes, a simple flat 8%, with no hidden charges.",
  },
  {
    question: "Do you help new hotshot authorities?",
    answer: "Absolutely. We help with setup, shipper coordination, and early load planning.",
  },
  {
    question: "Is support available 24/7?",
    answer: "Yes, our dispatch team is always available.",
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
          Hot Shot <span className="text-black">Dispatch Services</span>
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed mb-4">
          Truck Dispatch Experts help hotshot owner operators and fleets stay loaded with fast moving, high paying freight. We work with brokers and shippers who specialize in hotshot loads, lightweight machinery, construction materials, expedited shipments, partials, and fast delivery freight. With strong rate negotiation, 24/7 support, and a simple 8% dispatch fee, your hotshot stays earning every day without downtime.
        </p>
        <h2 className="text-3xl font-bold text-blue-700">Ready to Start Running High Paying <span className="text-black">Hot Shot Loads?</span></h2>
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
            Why Choose Us for <span className="text-black">Hot Shot Dispatching?</span>
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            Hotshot trucking requires speed, timing, and the ability to secure the right load without wasting miles. Truck Dispatch Experts understand hotshot ready freight, partial loads, trailer specs, equipment limitations, and the tight delivery windows that define this industry. We help you avoid deadhead, find profitable lanes, and keep your hotshot unit running consistently with strong weekly revenue.
          </p>

          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3 mt-6">
            Reasonable Fee Structure — <span className="text-black">Only 8%</span>
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            Our fee is straightforward and designed for hotshot carriers 8% per load. This includes load search, negotiation, booking, paperwork, invoicing, and full dispatch support. No setup fees, no subscription costs, and no hidden charges.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3">
            <span className="text-black">TOP</span> MARKET LOADS
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            We source hotshot friendly freight from trusted brokers and shippers across the U.S. Whether you prefer short hauls, regional routes, or OTR freight, we bring you consistent loads without the stress of searching load boards. You get access to strong paying markets, fast moving loads, and repeat lanes when available.
          </p>

          <h3 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-3 mt-6">
            <span className="text-black">NO</span> CONTRACTS
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            We operate with a true no contract dispatch model. You choose your loads, decide your lanes, and can pause or stop anytime. No forced dispatch. No pressure. Total flexibility for your hotshot business.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-3">
            Start to <span className="text-black">Finish Support</span>
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            We manage everything from load search to payment follow ups booking, scheduling, paperwork, billing, and compliance. You focus on driving while we handle the backend operations. With no extra charges beyond the 8% fee, you get full operational support designed to simplify your day.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-3">
            Who We <span className="text-black">Work With</span>
          </h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>CDL and non CDL hotshot drivers</li>
            <li>New authorities running hotshot</li>
            <li>Local, regional, and OTR hotshot carriers</li>
            <li>30–40 ft gooseneck & dovetail trailers</li>
            <li>Hotshots hauling light machinery, construction materials, partials, and expedited loads</li>
            <li>Owner operators wanting consistent weekly freight</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3 mt-6">
            <span className="text-black">What You Get</span> With Our Hot Shot Dispatching
          </h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Dedicated dispatcher experienced in hotshot freight</li>
            <li>Access to high paying expedited, partial, and lightweight loads</li>
            <li>Strong rate negotiation to maximize every mile</li>
            <li>Full booking, scheduling, and shipper communication</li>
            <li>Real time load updates and 24/7 driver support</li>
            <li>Assistance with detention, layover, and TONU</li>
            <li>Paperwork, invoicing, PODs, and billing handled for you</li>
            <li>Smart routing and lane planning to reduce deadhead miles</li>
            <li>A simple 8% dispatch fee no hidden charges</li>
            <li>No contracts, work on your own terms</li>
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
            <td className="p-4">Trailer details (length, weight limit, ramps, etc.)</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section id="faq" className="py-20 bg-[#0066A1] style_section">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-center text-white text-4xl font-bold mb-12">
              Hot Shot <span className="text-orange-400">Dispatch</span> FAQs
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
