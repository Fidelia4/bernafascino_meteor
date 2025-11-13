import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-yellow-800 text-white p-10 flex flex-col md:flex-row justify-around items-center">
      {/* Logo */}
      <div>
        <img src="/images/logoblanc.png" alt="Fascino Logo" className="h-40 " />
      </div>

      {/* Contact */}
      <div className="text-sm">
        <h3 className="font-bold mb-2 text-center">Contact</h3>
        <p>Tél: +229 01 54 10 34 65 / </p>
         <p> +229 01 96 33 31 09</p> 
        <p>Email: fideliagbd@gmail.com</p>
        <p>Agla Agongbomey,Cotonou, Bénin</p>
      </div>

      {/* Réseaux sociaux */}
      <div className="text-sm">
        <h3 className="font-bold mb-2 text-center">Suivez-nous</h3>
        <div className="flex gap-4 mt-2">
          <a href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODk1MTE5MTAwMjgxNzgz?story_media_id=3705078725777849586_64561994540&igsh=MXNwdmh4MXF3NDFtNQ==" target="_blank" rel="noopener noreferrer">
            <img src="images/instafid.png" alt="instagram" className="w-8 h-8" />
            Instagram
          </a>
          <a href="https://wa.me/message/RR3ALGKGJ5WGD1" target="_blank" rel="noopener noreferrer">
            <img src="images/whatsappfid.png" alt="whatsapp" className="w-8 h-8" />
            Whatsapp
          </a>
        </div>
      </div>

      {/* Mentions légales */}
      <div className="text-sm">
        <h3 className="font-bold mb-2 text-center">Mentions légales</h3>
        <ul>
          <li><a href="#conditions" className="underline">Politique de confidentialité</a></li>
          <li><a href="#conditions" className="underline">Conditions générales</a></li>
          <li><a href="/Apropos" className="underline">À propos</a></li>
        </ul> 
      </div>
    </footer>
  );
};

export default Footer;
