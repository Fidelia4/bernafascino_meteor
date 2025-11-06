import React, { useState } from "react";
import { Meteor } from "meteor/meteor"; // ✅ Import essentiel pour l'appel de méthode

export default function NosCreation() {
  const creationsFemme = [
    {
      id: 1,
      nom: "Corset Élégant",
      image: "/images/corset.jpg",
      description: "Corset ajusté en tissu wax premium, finitions main.",
      prix: 45000,
    },
    {
      id: 2,
      nom: "Blazer Robe",
      image: "/images/blazer.jpg",
      description: "Robe Blazer moderne, coupe structurée.",
      prix: 15000,
    },
    {
      id: 3,
      nom: "Haut evasé + cullotte",
      image: "/images/fidculotte.jpg",
      description:
        "Haut evasé + cullotte taille haute fluide, parfait pour vos petite sortie en mode décontracté.",
      prix: 10000,
    },
  ];

  const chemisesCollection = [
    { id: 1, nom: "Chemise Homme en coton", image: "/images/chemisecoton.jpg", prix: 17000 },
    { id: 2, nom: "Chemise en coton/tissu crepe", image: "/images/chemisecoton2.jpg", prix: 17000 },
    { id: 3, nom: "Chemise en T_dentelle", image: "/images/chemisedentelle.png", prix: 20000 },
    { id: 4, nom: "Chemise en T_dentelle", image: "/images/chemisedentelle2.jpg", prix: 20000 },
    { id: 5, nom: "Chemise femme", image: "/images/chemisefemme1.jpg", prix: 20000 },
    { id: 6, nom: "Chemise femme", image: "/images/chemisefemme2.jpg", prix: 20000 },
    { id: 7, nom: "Chemise femme", image: "/images/chemisefemme3.jpg", prix: 20000 },
    { id: 8, nom: "Chemise femme", image: "/images/chemisefemme4.jpg", prix: 20000 },
    { id: 9, nom: "Chemise Mixte", image: "/images/chemisemixte3.jpg", prix: 20000 },
    { id: 10, nom: "Chemise Mixte", image: "/images/chemisemixte1.jpg", prix: 20000 },
    { id: 11, nom: "Chemise Mixte", image: "/images/chemisemixte2.jpg", prix: 20000 },
    { id: 12, nom: "Chemise Mixte Premium", image: "/images/chemisemixte4.jpg", prix: 20000 },
  ];

  const [quantites, setQuantites] = useState({});
  const [clientNom, setClientNom] = useState("");
  const [clientEmail, setClientEmail] = useState("");

  // 🔹 Gère les changements de quantité
  const handleChange = (id, value) => {
    setQuantites({ ...quantites, [id]: Number(value) });
  };

  // 🔹 Gestion de la commande
  const handleCommander = (item) => {
    const quantite = quantites[item.id] || 1;
    const prixTotal = quantite * item.prix;

    if (!clientNom || !clientEmail) {
      alert("❌ Veuillez entrer votre nom et email avant de commander.");
      return;
    }

    // ✅ Appel au serveur Meteor
    Meteor.call(
      "commandes.insert",
      {
        nomClient: clientNom,
        emailClient: clientEmail,
        article: item.nom,
        quantite,
        prixTotal,
      },
      (err, res) => {
        if (err) {
          console.error("Erreur :", err);
          alert("❌ Une erreur est survenue, veuillez réessayer.");
        } else {
          alert(`✅ Commande envoyée : ${quantite} x ${item.nom} (${prixTotal} FCFA)`);
        }
      }
    );
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-4 md:px-12 -mt-11">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* ---- Gauche : Créations Berna Fascino ---- */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-800 mb-6 text-center md:text-left">
            Nos Créations - Berna Fascino
          </h2>
          <div className="grid gap-8">
            {creationsFemme.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300"
              >
                <img src={item.image} alt={item.nom} className="w-full h-148 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{item.nom}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <span className="text-yellow-700 font-bold">
                    {item.prix.toLocaleString()} FCFA
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Droite : Fascino Collection ---- */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-800 mb-4 text-center md:text-left">
            Fascino Collection - Chemises
          </h2>

          {/* 🔸 Infos client */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Votre nom"
              value={clientNom}
              onChange={(e) => setClientNom(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 flex-1"
            />
            <input
              type="email"
              placeholder="Votre email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 flex-1"
            />
          </div>

          {/* 🔸 Liste chemises */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {chemisesCollection.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center"
              >
                <img
                  src={item.image}
                  alt={item.nom}
                  className="w-40 h-50 object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-semibold">{item.nom}</h3>
                <p className="text-yellow-700 font-bold mb-2">
                  {item.prix.toLocaleString()} FCFA
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <input
                    type="number"
                    min="1"
                    value={quantites[item.id] || 1}
                    onChange={(e) => handleChange(item.id, e.target.value)}
                    className="w-16 border border-gray-300 rounded-lg p-1 text-center"
                  />
                  <button
                    onClick={() => handleCommander(item)}
                    className="bg-yellow-700 text-white px-3 py-2 rounded-lg hover:bg-yellow-800 transition"
                  >
                    Commander
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
