"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How fast can I start running loads?",
    answer:
      "Most dry van carriers start the same day after sending documents.",
  },
  {
    question: "Do I get to choose my loads?",
    answer: "Yes, we never force dispatch. You approve every load.",
  },
  {
    question: "Can you help new dry van authorities?",
    answer: "Absolutely. We guide you through setup, shippers, and early load strategies.",
  },
  {
    question: "Do you offer dedicated lanes?",
    answer: "Yes, when available. We work with shippers who prefer consistent carriers.",
  },
  {
    question: "Is support really 24/7?",
    answer: "Yes. Our dispatch team is available around the clock.",
  },
];

export default function DryVanDispatch() {
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
          DRY VAN <span className="text-black">DISPATCH SERVICES</span>
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Truck dispatch experts helps dry van owner-operators stay loaded with reliable, high paying freight. We match you with the best loads for your lanes, negotiate strong rates, and handle all paperwork so you can focus on driving. With 24/7 dispatch support and no long term contracts, you stay flexible while keeping your dry van moving every day.
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
            Why Choose Us for Dry Van Dispatching?
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            Truck dispatch experts specializes in dry van freight and understands the lanes, rates, and market patterns that impact your business. Our team monitors nationwide market conditions, spot rates, and high-demand regions so you always make informed decisions. We work to reduce empty miles, boost your RPM, and keep you on profitable freight all week long.
          </p>

          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3 mt-6">
            Start to Finish Support
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            Truck dispatch experts gives you complete start-to-finish support, staying with you through every part of your operation. From sourcing new shippers and managing your current lanes to booking, scheduling, paperwork, billing, and payment follow ups everything is handled at no extra cost. We simplify your workload so you can focus on driving, delivering, and growing your business while we manage the logistics behind the scenes.
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

        <div>
          <h3 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-3">
            What You Get With Our Dry Van Dispatching
          </h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Dedicated dispatcher focused entirely on your dry van</li>
            <li>Access to high paying nationwide dry van loads</li>
            <li>Strong rate negotiation for better weekly revenue</li>
            <li>Load booking, scheduling, and shipper communication</li>
            <li>Real-time check calls and 24/7 support</li>
            <li>Help with detention, layover, and TONU</li>
            <li>Full paperwork, invoicing, and billing handled for you</li>
            <li>Smarter routing and lane optimization to avoid downtime</li>
            <li>No contracts – pay only per load</li>
            <li>Market updates and lane insights to help you earn more</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3 mt-6">
            Start to Finish Support
          </h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>New dry van authorities</li>
            <li>Solo owner operators</li>
            <li>Regional and OTR carriers</li>
            <li>Small fleets</li>
            <li>Drivers needing dispatch communication support</li>
            <li>Carriers seeking consistent weekly freight</li>
            <li>Owner operators wanting less downtime and better RPM</li>
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
              Dry Van <span className="text-orange-400">Dispatch</span> FAQs
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
