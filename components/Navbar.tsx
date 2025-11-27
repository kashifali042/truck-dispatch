"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isShrunk, setIsShrunk] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

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

        {/* Logo */}
        <div className={`transition-all duration-300 ${isShrunk ? "scale-90" : "scale-100"}`}>
            <a href="/" className="flex items-center gap-2">
            <img
                src="./truck-dispatch-expert-logo.png"
                alt="Logo"
                className="h-20 w-auto"
            />
            {/* <span className="text-xl font-semibold">DispatchExperts</span> */}
            </a>
        </div>

        {/* Menu */}
        <nav>
          <ul className="flex items-center gap-8 text-sm font-medium">
            <li
              className="relative group"
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="hover:text-blue-600 flex items-center gap-1"
              >
                Dispatch Services & Truck Types ▼
              </button>

              {/* DROPDOWN BOX */}
              <div
                className={`absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-md transition-all duration-300
                ${openDropdown ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
              `}
              >
                <Link href="/dry-van" className="block px-4 py-2 hover:bg-gray-100">
                  Dry Van
                </Link>

                <Link href="/reefer" className="block px-4 py-2 hover:bg-gray-100">
                  Reefer
                </Link>

                <Link href="/box-truck" className="block px-4 py-2 hover:bg-gray-100">
                  Box Truck
                </Link>

                <Link href="/flat-bed" className="block px-4 py-2 hover:bg-gray-100">
                  Flat Bed
                </Link>

                <Link href="/step-deck" className="block px-4 py-2 hover:bg-gray-100">
                  Step Deck
                </Link>

                <Link href="/power-only" className="block px-4 py-2 hover:bg-gray-100">
                  Power Only
                </Link>
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
      </div>
    </header>
  );
}
