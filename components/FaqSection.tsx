"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "HOW DO I START GETTING LOADS?",
    answer:
      "Since there are no contracts, the only action required is to fill out a “request a call back” form on our website and one of our trained onboarding professionals will contact you within 1 business day.",
  },
  {
    question: "HOW LONG DOES THE SETUP WITH DISPATCH EXPERTS TAKE?",
    answer: "Setup normally takes 1 business day after paperwork is submitted.",
  },
  {
    question: "DO I NEED MY OWN MC AUTHORITY?",
    answer: "Yes, an active MC authority is required.",
  },
  {
    question: "WHAT TYPE OF EQUIPMENT DOES DISPATCH EXPERTS MOVE?",
    answer: "We move Dry Vans, Reefers, Flatbeds, and Hotshots.",
  },
  {
    question: "HOW MUCH DOES IT COST?",
    answer: "Pricing depends on equipment type and plan chosen.",
  },
  {
    question: "ARE THERE ANY COMMITMENTS?",
    answer: "No long-term commitments. Cancel anytime.",
  },
  {
    question: "CAN I DECLINE A LOAD?",
    answer: "Yes, drivers can decline any load.",
  },
  {
    question: "DOES DE HELP WITH INVOICING AND HOW DO I GET PAID?",
    answer:
      "Yes, Dispatch Experts helps with invoicing and ensures payment is processed on time.",
  },
  {
    question: "WHAT IS A FACTORING COMPANY?",
    answer:
      "A factoring company buys your invoices and pays you instantly, minus a small fee.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#0066A1] style_section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-white text-4xl font-bold mb-12">
          FREQUENTLY <span className="text-orange-400">ASKED</span> QUESTIONS
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
  );
}
