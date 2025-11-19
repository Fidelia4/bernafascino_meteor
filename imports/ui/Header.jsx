import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/Apropos" },
  { label: "Nos créations", to: "/NosCreations" },
  { label: "Règles", to: "/Regles" },
  { label: "Contact", to: "/Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* OVERLAY FLOU (visible uniquement si menu ouvert) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 sm:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <header className="fixed top-0 left-0 w-full z-50 shadow-sm bg-[#f7f7f7] font-[Nunito]">
        <div className="container mx-auto flex justify-between items-center px-6 h-20 relative">

          {/* LOGO */}
          <img src="/images/logo.png" alt="Logo" className="h-30" />

          {/* NAVIGATION */}
          <nav
            className={`absolute sm:static top-20 left-0 w-full sm:w-auto
            bg-[#f7f7f7] sm:bg-transparent shadow-md sm:shadow-none
            flex flex-col sm:flex-row items-center gap-6 py-4 sm:py-0
            transition-all duration-300 z-50
            ${menuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 sm:opacity-100 sm:max-h-full overflow-hidden"
            }`}
          >
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg transition-all 
                  ${
                    isActive
                      ? "text-yellow-600 font-bold border-b-2 border-yellow-600"
                      : "text-yellow-700"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* PANIER DESKTOP */}
          <img
            src="/images/panier2.png"
            alt="Panier"
            onClick={() => navigate("/NosCreations")}
            className="h-20 w-20 cursor-pointer hidden sm:block"
          />

          {/* HAMBURGER MOBILE */}
          <button
            className="sm:hidden flex flex-col gap-1 z-50"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="w-8 h-1 bg-black rounded"></span>
            <span className="w-8 h-1 bg-black rounded"></span>
            <span className="w-8 h-1 bg-black rounded"></span>
          </button>
        </div>
      </header>

      {/* ESPACE POUR COMPENSER LA NAVBAR FIXE */}
      <div className="h-20"></div>
    </>
  );
}
