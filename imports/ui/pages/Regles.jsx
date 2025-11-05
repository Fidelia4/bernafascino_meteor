import React from "react";
import { Truck, RefreshCw, Scissors, CreditCard, CheckCircle, Phone, MailCheckIcon, HomeIcon } from "lucide-react";

const Regles = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white text-gray-800 px-6 md:px-20 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-yellow-900 mb-8">
        🧾 Règles et Politiques de la Boutique
      </h1>

      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10">
        Bienvenue chez <span className="font-semibold text-yellow-800">Berna_Fascino</span> 
          & <span className="font-semibold text-yellow-800">Fascino Collection</span>.  
        Veuillez lire attentivement nos conditions avant tout achat.
      </p>

      {/* --- Conditions d'achat --- */}
      <section className="mb-10 bg-white shadow-md rounded-2xl p-6 border-l-4 border-black">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-yellow-700 mb-4">
          <CheckCircle size={24} /> 1. Conditions d’achat
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Toute commande confirmée est ferme et définitive après paiement.</li>
          <li>Les articles sont confectionnés avec soin selon les tailles et modèles choisis.</li>
          <li>Pour les tenues sur mesure, un délai de confection est communiqué avant validation.</li>
        </ul>
      </section>

      {/* --- Retours et échanges --- */}
      <section className="mb-10 bg-white shadow-md rounded-2xl p-6 border-l-4 border-black">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-yellow-700 mb-4">
          <RefreshCw size={24} /> 2. Retours et échanges
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Les articles sur mesure ne sont ni repris ni échangés, sauf erreur de notre part.</li>
          <li>Les articles prêt-à-porter peuvent être échangés sous 3 jours ouvrables après réception.</li>
          <li>Les articles doivent être neufs, non lavés et non modifiés.</li>
          <li>Les frais de retour sont à la charge du client.</li>
        </ul>
      </section>

      {/* --- Livraison --- */}
      <section className="mb-10 bg-white shadow-md rounded-2xl p-6 border-l-4 border-black">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-yellow-700 mb-4">
          <Truck size={24} /> 3. Livraison
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Les livraisons sont disponibles au Bénin et à l’international.</li>
          <li>Les frais de livraison sont entièrement à la charge du client, même en cas de retouche.</li>
          <li>Les délais varient selon la destination et le type de commande.</li>
        </ul>
      </section>

      {/* --- Retouches --- */}
      <section className="mb-10 bg-white shadow-md rounded-2xl p-6 border-l-4 border-black">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-yellow-700 mb-4">
          <Scissors size={24} /> 4. Retouches
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Les retouches mineures sont possibles après réception.</li>
          <li>Les frais de transport pour les retouches restent à la charge du client.</li>
          <li>En cas d’erreur de notre part, la boutique prendra en charge la modification.</li>
        </ul>
      </section>

      {/* --- Paiement --- */}
      <section className="mb-10 bg-white shadow-md rounded-2xl p-6 border-l-4 border-black">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-yellow-700 mb-4">
          <CreditCard size={24} /> 5. Paiement
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Paiement via Mobile Money (MTN, Moov, Celtiis) ou en espèces à l’atelier.</li>
          <li>Toute commande doit être intégralement réglée avant livraison.</li>
        </ul>
      </section>

      {/* --- Engagement qualité --- */}
      <section className="mb-10 bg-white shadow-md rounded-2xl p-6 border-l-4 border-black">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-yellow-700 mb-4">
          <CheckCircle size={24} /> 6. Engagement qualité
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Chaque création est réalisée à la main avec des tissus de qualité.</li>
          <li>Nous garantissons des finitions soignées et un contrôle qualité rigoureux.</li>
          <li>Notre service client reste disponible pour toute assistance.</li>
        </ul>
      </section>

      {/* --- Contact --- */}
      <section className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-black">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-yellow-700 mb-4">
          <Phone size={24} /> 7. Contact
        </h2>
        <p className="text-gray-700   ">
          <HomeIcon size={15} />  Berna_Fascino – Cotonou, Bénin 
          <Phone size={15} /> +229 0154 10 34 65/ +229 01 96 33 31 09
          <MailCheckIcon size={15} /> fideliagbd@gmail.com
        </p>
      </section>

      <footer className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} Berna_Fascino&Fascino_Collection – Tous droits réservés.
      </footer>
    </div>
  );
};

export default Regles;
