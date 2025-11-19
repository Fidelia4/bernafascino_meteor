import React from "react";

// Footer 100% responsive — mobile, tablette, desktop
// Optimisé :
// - Meilleur centrage sur mobile
// - Colonnes organisées verticalement puis horizontalement
// - Suppression des marges négatives qui cassaient la mise en page
// - Icônes + textes bien alignés
// - Espacements harmonisés

const Footer = () => {
  return (
    <footer className="w-full bg-yellow-800 text-white px-6 py-10 flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0 text-center md:text-left">

      {/* LOGO */}
      <div className="flex flex-col items-center md:items-start">
        <img src="/images/logoblanc.png" alt="Fascino Logo" className="h-28 sm:h-36 md:h-40 object-contain" />
      </div>

      {/* CONTACT */}
      <div>
        <h3 className="font-bold mb-3 text-lg">Contact</h3>
        <p>Tél: +229 01 54 10 34 65</p>
        <p>+229 01 96 33 31 09</p>
        <p>Email: fideliagbd@gmail.com</p>
        <p>Agla Agongbomey, Cotonou — Bénin</p>
      </div>

      {/* RÉSEAUX SOCIAUX */}
      <div>
        <h3 className="font-bold mb-3 text-lg">Suivez-nous</h3>
        <div className="flex flex-col items-center md:items-start gap-3">
          <a
            href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODk1MTE5MTAwMjgxNzgz?story_media_id=3705078725777849586_64561994540&igsh=MXNwdmh4MXF3NDFtNQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <img src="images/instafid.png" alt="instagram" className="w-8 h-8" />
            <span>Instagram</span>
          </a>

          <a
            href="https://wa.me/message/RR3ALGKGJ5WGD1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <img src="images/whatsappfid.png" alt="whatsapp" className="w-8 h-8" />
            <span>Whatsapp</span>
          </a>
        </div>
      </div>

      {/* MENTIONS LÉGALES */}
      <div>
        <h3 className="font-bold mb-3 text-lg">Mentions légales</h3>
        <ul className="flex flex-col gap-2">
          <li><a href="#conditions" className="underline">Politique de confidentialité</a></li>
          <li><a href="#conditions" className="underline">Conditions générales</a></li>
          <li><a href="/Apropos" className="underline">À propos</a></li>
        </ul>
      </div>
    </footer>
  );
};

  {/* COPYRIGHT */}
      <div className="w-full mt-10 pt-4 border-t border-white/30 text-center text-sm opacity-80">
        © {new Date().getFullYear()} Fascino Collection — Tous droits réservés.
      </div>
export default Footer;
