"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How fast can I start running box truck loads?",
    answer: "Most carriers start the same day after sending required documents.",
  },
  {
    question: "Do you force dispatch?",
    answer: "No, you approve every load.",
  },
  {
    question: "Do you book local or regional runs?",
    answer: "Yes. We book local, regional, and OTR box truck loads.",
  },
  {
    question: "Do you work with non CDL box truck drivers?",
    answer: "Yes, as long as your MC is active and documents are complete.",
  },
  {
    question: "Is the fee really 8%?",
    answer: "Yes, a flat 8%, with no hidden charges.",
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
          Box Truck <span className="text-black">Dispatch Services</span>
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed mb-4">
          Truck Dispatch Experts helps box truck owner operators and small fleets stay loaded with steady, high paying freight. We connect you with shippers and brokers who specialize in box truck friendly loads, final mile freight, retail deliveries, warehouse transfers, expedited freight, and regional runs. With strong rate negotiation, 24/7 support and a straightforward 8% dispatch fee, you stay profitable while keeping your box truck moving daily.
        </p>
        <h2 className="text-3xl font-bold text-blue-700">Ready to Start Running High-Paying <span className="text-black">Box Truck Loads?</span></h2>
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
            Why Choose Us for <span className="text-black">Box Truck Dispatching?</span>
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            Box truck freight requires precision, quick communication, and the ability to secure the right loads at the right time. Truck dispatch experts understands small vehicle freight requirements, dock preferences, appointment windows, and the lanes that perform best for box truck operators. Our team reduces your empty miles, finds consistent weekly runs, and helps you stay profitable without wasting time searching load boards.
          </p>

          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3 mt-6">
            Reasonable Fee Structure — <span className="text-black">Only 8%</span>
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            Our pricing for box trucks is simple: 8% per load, with no hidden fees and no extra charges. You get full dispatch support load search, negotiation, booking, paperwork, and billing all included. With Truck dispatch experts, you keep more of your earnings while getting professional dispatch service.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3">
            <span className="text-black">TOP</span> MARKET LOADS
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            We work with brokers and shippers who regularly ship box truck friendly freight. From dedicated warehouse routes to short haul and same day deliveries, we help you secure consistent loads. Our dispatchers reduce your empty miles and waiting time by finding nearby freight quickly, keeping your schedule full without the stress of searching load boards.
          </p>

          <h3 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-3 mt-6">
            <span className="text-black">NO</span> CONTRACTS
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            We operate with a no contract policy, allowing you to run your business your way. You choose your loads, you pick your lanes, and you can pause or stop anytime. No forced dispatch, no minimum requirements, and no long term commitments, just flexibility and reliable support.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-3">
            Who We <span className="text-black">Work With</span>
          </h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>16 ft, 20 ft, 22 ft, 24 ft, and 26 ft box truck operators</li>
            <li>At least 6 months old authorities running box trucks</li>
            <li>Regional and OTR box truck carriers</li>
            <li>Expedited and same day delivery carriers</li>
            <li>Non-CDL and CDL box truck drivers</li>
            <li>Small fleets needing dependable dispatch</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3 mt-6">
            <span className="text-black">What You Get</span> With Our Box Truck Dispatching
          </h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Dedicated dispatcher experienced in box truck freight</li>
            <li>Access to high paying local, regional, and OTR box truck loads</li>
            <li>Strong rate negotiation on every job</li>
            <li>Full booking, scheduling, and shipper communication</li>
            <li>24/7 driver support and real-time updates</li>
            <li>Help with detention, TONU, and layover pay</li>
            <li>Complete paperwork, invoicing, billing, and POD submission</li>
            <li>Smart lane planning to avoid downtime</li>
            <li>Simple 8% dispatch fee no hidden charges</li>
            <li>No contracts work on your terms</li>
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
              Box Truck <span className="text-orange-400">Dispatch</span> FAQs
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
