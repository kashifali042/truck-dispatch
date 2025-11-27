import Image from "next/image";

const items = [
  {
    title: "DRY VAN",
    desc: "Gain access to thousands of dry van loads from hundreds of shippers in one call",
    img: "/dry-van.png",
  },
  {
    title: "REEFER",
    desc: "From consumables to pharmaceuticals, one place has both the experts and the loads",
    img: "/reefer.png",
  },
  {
    title: "BOX TRUCK",
    desc: "Our vast industry network includes hundreds of brokers and suppliers specializing in Box Trucks",
    img: "/box-truck.png",
  },
  {
    title: "FLAT BED",
    desc: "Dispatch Experts moves hundreds of Hot Shot, Flatbed, and Step Deck carriers daily",
    img: "/flat-bed.png",
  },
  {
    title: "STEP DECK",
    desc: "Dispatch Experts moves hundreds of Hot Shot, Flatbed, and Step Deck carriers daily",
    img: "/step-deck.png",
  },
  {
    title: "POWER ONLY",
    desc: "From load outs to tow aways, one place has both the experts and the loads",
    img: "/power-only.png",
  },
];

export default function WhatWeMove() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-16">
          WHAT WE <span className="text-blue-600">MOVE</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">

          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <Image
                src={item.img}
                alt={item.title}
                width={150}
                height={100}
                className="mb-4"
              />

              {/* Title */}
              <h3 className="text-lg font-bold">{item.title}</h3>

              {/* Description */}
              <p className="mt-2 text-gray-600 max-w-xs">{item.desc}</p>

              {/* Button */}
              <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700">
                more
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
