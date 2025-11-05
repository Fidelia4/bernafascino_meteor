import React, { useState } from "react";
import { Meteor } from "meteor/meteor";

export default function Contact() {
  // 🔹 États pour gérer les champs du formulaire
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  // 🔹 Fonction de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nom || !email || !message) {
      setStatus("Veuillez remplir tous les champs.");
      return;
    }

    Meteor.call("messages.insert", { nom, email, message }, (error) => {
      if (error) {
        console.error("Erreur lors de l’envoi :", error);
        setStatus("❌ Une erreur est survenue. Veuillez réessayer.");
      } else {
        setStatus("✅ Message envoyé avec succès !");
        setNom("");
        setEmail("");
        setMessage("");
      }
    });
  };

  return (
    <div
      className="flex flex-col items-center justify-center p-6 md:p-12 -mt-12 text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/image.png')" }}
    >
      <h1 className="text-3xl font-bold mb-6 text-white drop-shadow-lg">
        Contactez-nous
      </h1>

      {/* Conteneur principal */}
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-full max-w-5xl bg-[#ffffff] opacity-90 rounded-xl p-6 md:p-10 shadow-lg">
        {/* Partie gauche : Formulaire */}
        <div className="flex-1 flex flex-col items-center">
          <p className="mb-2 text-lg">
            Email : <span className="font-semibold">fideliagbd@gmail.com</span>
          </p>
          <p className="mb-6 text-lg">
            Téléphone : <span className="font-semibold">+229 01 54 10 34 65</span>
          </p>

          <form
            className="flex flex-col gap-3 w-full max-w-md items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-700"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-700"
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-700 h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-900 text-white py-2 px-8 rounded-md hover:bg-yellow-800 transition-all mt-2"
            >
              Envoyer
            </button>
          </form>

          {/* Message de statut */}
          {status && (
            <p className="mt-4 text-sm text-gray-700 font-medium">{status}</p>
          )}
        </div>

        {/* Partie droite : Google Map */}
        <div className="flex-1 w-full max-w-md h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Carte Fascino"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7957.0!2d2.36117!3d6.37599!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102356bb4c35e7ad%3A0x5e52c8654b62a5b5!2sEcole%20Primaire%20Publique%20Agla-Agongbomey!5e0!3m2!1sfr!2sbj!4v1698670000000!5m2!1sfr!2sbj"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Texte sous la carte */}
      <p className="text-center mt-6 text-white italic max-w-2xl drop-shadow-md">
        📍 Nous sommes situés à l’école de base Agla Agbongbomey, près de la
        cafétéria Choco Milo — Cotonou.
      </p>
    </div>
  );
}
