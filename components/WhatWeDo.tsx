import React from "react";

export default function WhatWeDo() {
  const services = [
    {
      title: "LOAD SEARCH FTL/LTL",
      icon: "/search.png",
    },
    {
      title: "RATE NEGOTIATION & BOOKING",
      icon: "/handshake.png",
    },
    {
      title: "BROKER SETUP",
      icon: "/document.png",
    },
    {
      title: "DETENTION LAYOVER TONU",
      icon: "/clock.png",
    },
    {
      title: "INVOICING & COLLECTIONS",
      icon: "/invoice.png",
    },
    {
      title: "FACTORING & INSURANCE ASSISTANCE",
      icon: "/insurance.png",
    },
    {
      title: "24/7 SUPPORT",
      icon: "/support.png",
    },
  ];

  const features = [
    {
      title: "TOP MARKET LOADS",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      icon: "/icons/star.svg",
    },
    {
      title: "START-TO-FINISH SUPPORT",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      icon: "/icons/team.svg",
    },
    {
      title: "NO CONTRACTS",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      icon: "/icons/no-contract.svg",
    },
  ];

  return (
    <section id="what-to-do" className="w-full py-20 bg-blue-700 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          WHAT WE <span className="text-orange-400">DO</span>
        </h2>
      </div>

      {/* Icons Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-10 px-6 max-w-6xl mx-auto mb-20">
        {services.map((s, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-3">
            <img src={s.icon} alt={s.title} className="w-12 h-12" />
            <p className="text-sm font-semibold leading-tight">{s.title}</p>
          </div>
        ))}
      </div>

      {/* Features Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="rounded-2xl shadow-lg p-6 text-center">
            <div className="flex flex-col items-center gap-4">
              <img src={f.icon} alt={f.title} className="w-14 h-14" />
              <h3 className="text-xl font-semibold text-blue-700">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
