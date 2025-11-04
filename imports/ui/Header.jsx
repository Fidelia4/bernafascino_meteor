import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/Apropos" },
  { label: "Nos créations", to: "/NosCreations" },
  { label: "Règles", to: "/Regles" },
  { label: "Contact", to: "/Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 shadow-sm bg-[#f7f7f7] font-[Nunito] backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center px-8 h-20 relative">
          {/* Logo à gauche */}
          <img src="/images/logo.png" alt="Fascino Logo" className="h-36" />

          {/* Liens de navigation au centre */}
          <nav
            className={`${
              menuOpen
                ? "fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-40"
                : "hidden sm:flex"
            }`}
          >
            <ul className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "font-bold text-yellow-600"
                          : "font-normal text-yellow-700"
                      } text-lg transition-all`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Icône panier à droite */}
          <img
            src="/images/panier2.png"
            alt="Panier"
           
            onClick={() => navigate("/NosCreations")} 
            className="h-26 w-26 cursor-pointer hidden sm:block"
          />

          {/* Hamburger mobile */}
          <button
            className="sm:hidden w-8 h-8 flex flex-col justify-between z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-full h-1 bg-black rounded"></span>
            <span className="block w-full h-1 bg-black rounded"></span>
            <span className="block w-full h-1 bg-black rounded"></span>
          </button>
        </div>
      </header>

      {/* Espace pour compenser la nav fixée */}
      <div className="h-20"></div>
    </>
  );
}
