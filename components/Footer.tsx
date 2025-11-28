import { Phone, Mail, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1D77BB] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Contact */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="/truck-dispatch-expert-logo.png"
              alt="Logo"
              className="h-16 w-auto"
            />
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <Phone size={16} />
              <span>213-277-5534</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={16} />
              <span>info@dispatchexperts.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Globe size={16} />
              <span>www.dispatchexperts.com</span>
            </li>
          </ul>
        </div>

        {/* Truck Types */}
        <div>
          <h3 className="font-semibold mb-4 text-sm tracking-wide">TRUCK TYPES</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link href="/dry-van" className="block px-4 py-2 hover:bg-gray-100">Dry Van</Link></li>
            <li><Link href="/reefer" className="block px-4 py-2 hover:bg-gray-100">Reefer</Link></li>
            <li><Link href="/box-truck" className="block px-4 py-2 hover:bg-gray-100">Box truck</Link></li>
            <li><Link href="/flat-bed" className="block px-4 py-2 hover:bg-gray-100">Flat Bed</Link></li>
            <li><Link href="/step-deck" className="block px-4 py-2 hover:bg-gray-100">Step Deck</Link></li>
            <li><Link href="/power-only" className="block px-4 py-2 hover:bg-gray-100">Power only</Link></li>
          </ul>
        </div>

        {/* What We Do */}
        <div>
          <h3 className="font-semibold mb-4 text-sm tracking-wide">WHAT WE DO</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Load search FTL/LTL</li>
            <li>Rate Negotiation & booking</li>
            <li>Broker Setup</li>
            <li>Detention Layover Tonu</li>
            <li>Invoicing & Collections</li>
            <li>"Factoring & Insurance Assistance"</li>
            <li>Dedicated Dispatch Team</li>
            <li>24/7 Support</li>
            <li>Pay Per Load No Contracts</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-4 text-sm tracking-wide">FIND US ON SOCIAL MEDIA</h3>
          <div className="flex space-x-4 text-white">
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition">
              <Linkedin />
            </a>
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition">
              <Facebook />
            </a>
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition">
              <Instagram />
            </a>
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition">
              <Twitter />
            </a>
          </div>
          <ul className="mt-6 space-y-2 text-sm opacity-90">
            <li>24/7 Support</li>
            <li>Broker Setup</li>
            <li>Factoring Assistance</li>
            <li>Pay Per Load No Contracts</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
