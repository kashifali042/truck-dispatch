"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How fast can I start hauling reefer freight?",
    answer: "Most carriers begin the same day after submitting required documents.",
  },
  {
    question: "Do you force dispatch?",
    answer: "No. You approve every load.",
  },
  {
    question: "Do you handle temperature-critical loads?",
    answer: "Yes. We dispatch fresh, frozen, medical, and time-sensitive reefer freight.",
  },
  {
    question: "Do you help new reefer authorities?",
    answer: "Yes. We guide you through setup, shipper connections, and early load planning.",
  },
  {
    question: "Can you find dedicated reefer lanes?",
    answer: "Yes, especially in produce and grocery supply chains.",
  },
  {
    question: "Do you offer 24/7 support?",
    answer: "Absolutely. We monitor your freight and assist anytime day or night.",
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
          Reefer <span className="text-black">Dispatch Services</span>
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Truck Dispatch Experts helps reefer owner operators and fleets stay loaded with reliable, temperature controlled freight. We connect you to high paying refrigerated loads, negotiate strong rates, and handle all communication so you can focus on safe, on time deliveries. With 24/7 dispatch support and no long term contracts, you stay flexible while keeping your reefer moving every day.
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
            Why Choose Us for Reefer Dispatching?
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            Reefer freight requires experience, precision, and constant monitoring. Truck dispatch experts works directly with trusted shippers needing fresh, frozen, medical, and time-sensitive freight moved safely. We track market demand, temperature requirements, lane trends, and rate changes to ensure your reefer hauls profitable freight each week with minimal downtime.
          </p>

          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3 mt-6">
            Reefer Dispatch Services
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            Truck dispatch experts supports your reefer operations with temperature specific load planning, real-time updates, and continuous communication with shippers and brokers. Whether it's produce, beverages, frozen goods, or medical shipments, we ensure you have the right loads that match your reefer capabilities and schedule. Our team handles route planning, coordination, and compliance so you can focus on safe, efficient deliveries.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3">
            TOP MARKET LOADS
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            We secure premium reefer loads from trusted shippers needing reliable, temperature controlled transportation. Our dispatchers reduce your downtime by sourcing nearby freight quickly, minimizing empty miles, and keeping your reefer on steady, high value loads. No more refreshing load boards we bring the right loads straight to you.
          </p>

          <h3 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-3 mt-6">
            NO CONTRACTS
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            We offer a true no contract dispatching service, giving you total freedom to choose your loads and lanes. You pay only per load, can decline any load, and can pause or stop service anytime. No pressure. No forced dispatch. No long term commitments, just flexibility and support when you need it.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-orange-500 border-l-4 border-orange-500 pl-3">
            Start to Finish Support
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            We manage every stage of your reefer operation. From load search and lane planning to booking, paperwork, billing, and payment follow ups, everything is covered at no additional cost. You stay focused on driving while we take care of the backend work that keeps your reefer running smoothly and profitably.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3 mt-6">
            Reasonable Fee Structure
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            Our fee structure is transparent and built to support reefer carriers with higher fuel and operating costs. You receive complete dispatch services load search, negotiation, booking, paperwork, and billing, without surprise fees or hidden charges. With Truck dispatch experts, your business stays predictable and profitable.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-blue-700 border-l-4 border-blue-700 pl-3 mt-6">
            Who We Work With
          </h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Reefer owner-operators</li>
            <li>Regional and OTR refrigerated carriers</li>
            <li>Fleets hauling fresh, frozen, and perishables</li>
            <li>New reefer authorities</li>
            <li>Drivers needing 24/7 dispatch communication</li>
            <li>Carriers wanting consistent temperature-controlled freight</li>
          </ul>
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
              Reefer <span className="text-orange-400">Dispatch</span> FAQs
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
