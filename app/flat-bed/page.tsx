"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How fast can I start getting flatbed loads?",
    answer: "Most carriers begin the same day after submitting documents.",
  },
  {
    question: "Do you force dispatch?",
    answer: "No. You approve every load you stay in control.",
  },
  {
    question: "Do you handle oversized or heavy haul loads?",
    answer: "Yes. We work with shippers offering machinery, steel, construction freight, and more.",
  },
  {
    question: "Do you help new authorities running flatbed?",
    answer: "Yes. We assist with setup, lane planning, and onboarding so you can start earning quickly.",
  },
  {
    question: "Can you find consistent lanes for flatbed?",
    answer: "Yes. We secure repeat and dedicated lanes when available.",
  },
  {
    question: "Is support really 24/7?",
    answer: "Yes, our team is available around the clock.",
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
          Flatbed <span className="text-black">Dispatch Services</span>
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Truck Dispatch Experts helps flatbed and open deck carriers stay loaded with reliable, high paying freight across the country. We connect you with shippers who need oversized, heavy haul, construction, machinery, and industrial loads moved safely and on time. With strong rate negotiation, 24/7 support, and no long term contracts, you stay flexible while maximizing your weekly revenue.
        </p>

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
            Why Choose Us for Flatbed Dispatching?
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            Flatbed freight requires experience, safety awareness, and the ability to match the right load to the right trailer. Truck dispatch experts understands securement requirements, commodity types, weight restrictions, and the lanes that perform best for flatbed carriers. We help you avoid dead miles, pick the strongest markets, and keep your open-deck trailer running profitable loads all week long.
          </p>

          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3 mt-6">
            Reasonable Fee Structure
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            Our fee structure is transparent and built to support reefer carriers with higher fuel and operating costs. You receive complete dispatch services load search, negotiation, booking, paperwork, and billing, without surprise fees or hidden charges. With Truck dispatch experts, your business stays predictable and profitable.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3">
            TOP MARKET LOADS
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            We connect you with high demand shippers needing open deck carriers for industrial, construction, and oversized freight. Our dispatch team reduces your downtime by finding nearby freight fast and keeping your trailer full. No more refreshing load boards we bring top market loads directly to you.
          </p>

          <h3 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-3 mt-6">
            NO CONTRACTS
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            We operate with a true no contract policy, giving you full control over your business. You choose the loads you want, pay only per load, and can pause or stop anytime. No pressure, no minimum requirements, and absolutely no forced dispatch.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-3">
            Start to Finish Support
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            We handle every step of the flatbed process. From sourcing freight and scheduling appointments to paperwork, billing, and payment follow ups everything is included at no extra charge. You get complete support for your operation while staying focused on driving and securing your loads properly.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3 mt-6">
            Who We Work With
          </h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Flatbed owner operators</li>
            <li>Step deck and RGN carriers</li>
            <li>Hotshot drivers</li>
            <li>Regional and OTR flatbed fleets</li>
            <li>New authorities hauling open deck freight</li>
            <li>Carriers hauling steel, lumber, machinery, and oversized loads</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-3">
            What You Get With Our Flatbed Dispatching
          </h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Dedicated dispatcher experienced in flatbed & open deck freight</li>
            <li>Access to high paying flatbed, step deck, and oversized loads</li>
            <li>Strong rate negotiation for higher operating costs</li>
            <li>Full load planning, booking, and shipper coordination</li>
            <li>24/7 communication and support</li>
            <li>Help with detention, layover, and TONU pay</li>
            <li>Complete paperwork, invoicing, and billing management</li>
            <li>Smart routing to avoid restrictions & reduce empty miles</li>
            <li>No contracts, pay only per load</li>
            <li>Market guidance for steel, machinery, construction, and industrial lanes</li>
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
            <td className="p-4">Truck & Trailer Information</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section id="faq" className="py-20 bg-[#0066A1] style_section">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-center text-white text-4xl font-bold mb-12">
              Flatbed <span className="text-orange-400">Dispatch</span> FAQs
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
