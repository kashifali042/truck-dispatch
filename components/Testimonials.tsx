"use client";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Jose Jonzalez",
    image: "/images/user1.jpg", // change to your image path
    review:
      "It's a pleasure to work with Dispatch Experts. I want to continue working with Dispatch Experts. Thank you to all employees.",
    stars: 5,
  },
  {
    name: "Edgar Araya",
    image: "/images/user2.jpg",
    review:
      "I advise you to work with Dispatch Experts, which has great experience in the transportation industry. They're reliable, transparent and offer higher rates. I guarantee their excellent and professional service.",
    stars: 5,
  },
  {
    name: "Luis Castro",
    image: "/images/user3.jpg",
    review:
      "I'm glad to work with Tony from Dispatch Experts. They always find good loads for me. Thank you so much.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white styles_section__oCGAA pb-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          OUR <span className="text-orange-500">CUSTOMERS SAY</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-8 border border-gray-100"
            >
              {/* User Image */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 object-cover rounded-full border"
                />
                <div>
                  <h4 className="font-semibold text-lg">{t.name}</h4>

                  {/* Stars */}
                  <div className="flex text-orange-500">
                    {Array.from({ length: t.stars }).map((_, idx) => (
                      <FaStar key={idx} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed">{t.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
