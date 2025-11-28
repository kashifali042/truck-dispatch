import React from "react";

export default function CallbackForm() {
  return (
    <section id="contact" className="w-full bg-white py-16 style_section">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        <div>
          <h2 className="text-3xl font-bold text-black tracking-tight">REQUEST A</h2>
          <h2 className="text-3xl font-bold text-blue-600 tracking-tight mt-1">CALLBACK</h2>
        </div>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Company Name"
            className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none"
          />

          <input
            type="text"
            placeholder="Phone"
            className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none"
          />
          <input
            type="text"
            placeholder="Details"
            className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none"
          />

          <input
            type="text"
            placeholder="Promo Code"
            className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none"
          />

          <select className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none">
            <option value="">Equipment Type</option>
            <option value="trucks">Trucks</option>
            <option value="trailers">Trailers</option>
            <option value="containers">Containers</option>
          </select>

          <select className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none">
            <option value="">Home State</option>
            <option value="CA">California</option>
            <option value="TX">Texas</option>
            <option value="FL">Florida</option>
            <option value="NY">New York</option>
          </select>

          <select className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none">
            <option value="">How did you hear about us</option>
            <option value="google">Google</option>
            <option value="referral">Referral</option>
            <option value="ad">Advertisement</option>
          </select>

          <button
            type="submit"
            className="col-span-1 sm:col-span-2 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Start Moving Today
          </button>
        </form>
      </div>
    </section>
  );
}
