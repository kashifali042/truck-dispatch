"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isShrunk, setIsShrunk] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsShrunk(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow transition-all duration-300
      ${isShrunk ? "py-2 shadow-md" : "py-6"}
    `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        
        {/* LOGO */}
        <a href="/" className={`transition-all duration-300 ${isShrunk ? "scale-90" : "scale-100"}`}>
          <img
            src="/truck-dispatch-expert-logo.png"
            alt="Logo"
            className="h-16 w-auto"
          />
        </a>

        {/* ======== DESKTOP MENU ======== */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8 text-sm font-medium">

            {/* DROPDOWN */}
            <li className="relative group" onMouseEnter={() => setOpenDropdown(true)} onMouseLeave={() => setOpenDropdown(false)}>
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="hover:text-blue-600 flex items-center gap-1"
              >
                Dispatch Services & Truck Types ▼
              </button>

              <div
                className={`absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-md 
                transition-all duration-300
                ${openDropdown ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
              `}
              >
                <Link href="/dry-van" className="block px-4 py-2 hover:bg-gray-100">Dry Van</Link>
                <Link href="/reefer" className="block px-4 py-2 hover:bg-gray-100">Reefer</Link>
                <Link href="/box-truck" className="block px-4 py-2 hover:bg-gray-100">Box Truck</Link>
                <Link href="/flat-bed" className="block px-4 py-2 hover:bg-gray-100">Flat Bed</Link>
                <Link href="/step-deck" className="block px-4 py-2 hover:bg-gray-100">Hot Shot</Link>
                <Link href="/power-only" className="block px-4 py-2 hover:bg-gray-100">Power Only</Link>
              </div>
            </li>

            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#what-to-do">What We Do</a></li>
            <li><a href="#keep-moving">Keep Moving</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>

            <li>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-sm">
                Set Up With Us
              </button>
            </li>
          </ul>
        </nav>

        {/* ======== MOBILE HAMBURGER ======== */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </button>
      </div>

      {/* ======== MOBILE MENU ======== */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t shadow-md px-6 pb-4">

          {/* DROPDOWN MOBILE */}
          <div>
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="w-full text-left py-3 font-medium"
            >
              Dispatch Services ▼
            </button>

            {openDropdown && (
              <div className="pl-4 pb-2">
                <Link href="/dry-van" className="block py-2">Dry Van</Link>
                <Link href="/reefer" className="block py-2">Reefer</Link>
                <Link href="/box-truck" className="block py-2">Box Truck</Link>
                <Link href="/flat-bed" className="block py-2">Flat Bed</Link>
                <Link href="/step-deck" className="block py-2">Step Deck</Link>
                <Link href="/power-only" className="block py-2">Power Only</Link>
              </div>
            )}
          </div>

          <a href="#testimonials" className="block py-3">Testimonials</a>
          <a href="#what-to-do" className="block py-3">What We Do</a>
          <a href="#keep-moving" className="block py-3">Keep Moving</a>
          <a href="#faq" className="block py-3">FAQ</a>
          <a href="#contact" className="block py-3">Contact</a>

          <button className="bg-blue-600 text-white w-full py-3 mt-2 rounded">
            Set Up With Us
          </button>
        </div>
      )}
    </header>
  );
}
