import React, { useRef, useState, useEffect } from "react";

/**
 * Page "À propos" — Berna Fascino
 * - Meteor + React + Tailwind
 * - Place images in /public/images and video in /public/videos
 *
 * Assets used in this component (place these files in /public):
 *  - /images/mam.jpg           (portrait fondatrice)
 *  - /images/atelier1.jpg      (atelier photo)
 *  - /images/atelier2.jpg      (atelier photo 2)
 *  - /images/team1.jpg         (équipe / couturière)
 *  - /videos/history.mp4       (vidéo courte coulisses) - optional
 *
 * Drop this file in: imports/ui/pages/APropos.jsx
 */

/* --------- Small hook to detect element in viewport (for simple animations) --------- */
function useInView(options = { root: null, rootMargin: "0px", threshold: 0.15 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (options.once !== false) obs.unobserve(el); // default: animate once
          }
        });
      },
      { root: options.root, rootMargin: options.rootMargin, threshold: options.threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, options.rootMargin, options.threshold, options.once]);

  return [ref, inView];
}

/* -------------------------- Main component (default export) ------------------------- */
export default function APropos() {
  return (
    <main className="w-full min-h-screen font-sans text-gray-800">
      <Intro />
      <History />
      <Values />
      <Founder />
      <Services />
      <Testimonials />
      <FinalCta />
    </main>
  );
}

/* -------------------------------- Intro / Hero -------------------------------- */
function Intro() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`w-full bg-white py-2 md:py-4 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-4">À propos de Berna Fascino</h2>
          <p className="text-lg text-gray-700 mb-4">
            Fondée en 2000 à Agla-Agongbomey — Cotonou, Berna Fascino est la maison de couture de Madame
            Bernadette Hounnou. Née d’une passion pour le fil et le tissu, la maison allie savoir-faire
            traditionnel et élégance moderne pour créer des pièces qui racontent une histoire.
          </p>

          <p className="text-gray-600 mb-6">
            Slogan : <span className="font-semibold">Vos vêtements taillés à la perfection.</span>
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-yellow-800 text-white text-sm font-medium shadow">Artisanat depuis 2000</span>
            <span className="px-4 py-2 rounded-full bg-yellow-700 text-white text-sm font-medium shadow">Sur-mesure & Haute couture</span>
            <span className="px-4 py-2 rounded-full bg-yellow-600 text-white text-sm font-medium shadow">Service à domicile</span>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/mama.jpg"
            alt="Bernadette Hounnou - fondatrice Berna Fascino"
            className="w-full h-145 object-cover"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Our history -------------------------------- */
function History() {
  const [ref, inView] = useInView({ threshold: 0.12 });

  return (
   <section className="w-full bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
    
    {/* ---- Colonne gauche : images + vidéo ---- */}
    <div className="space-y-6">
      {/* Deux images côte à côte */}
      <div className="grid grid-cols-2 gap-4">
        <img
          src="/images/mam.jpg"
          alt="Atelier Berna Fascino"
          className="w-full h-48 object-cover rounded-lg shadow"
          draggable={false}
        />
        <img
          src="/images/maman.jpg"
          alt="Artisans au travail"
          className="w-full h-48 object-cover rounded-lg shadow"
          draggable={false}
        />
      </div>

      {/* Vidéo en dessous */}
      <div className="w-full">
        <video
          src="/videos/history.mp4"
          controls
          className="w-full rounded-lg shadow-lg"
          muted
          loop
          playsInline
        />
      </div>
    </div>

    {/* ---- Colonne droite : texte ---- */}
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
      }`}
    >
      <h2 className="text-3xl font-bold mb-4 text-yellow-800">Notre histoire</h2>
      <p className="text-gray-700 mb-4">
        En 2000, une jeune femme nommée <strong>Bernadette</strong> ouvrit un petit atelier à 
        Agla-Agongbomey avec une vieille machine à coudre et un rêve : offrir des vêtements 
        qui donnent confiance. Jour après jour, ses mains ont façonné tissus et coupes. 
        Les clientes sont devenues des amies, les commandes se sont multipliées, et la 
        réputation de l’atelier a grandi grâce à l’exigence du détail et à la chaleur humaine.
      </p>

      <p className="text-gray-600">
        Aujourd’hui, <strong>Berna Fascino</strong> porte ce même esprit : chaque pièce est conçue 
        pour sublimer la personne qui la porte, dans le respect des traditions et avec une 
        touche contemporaine.
      </p>
    </div>
  </div>
</section>

  );
}

/* -------------------------------- Values / Badges -------------------------------- */
function Values() {
  const values = [
    {
      title: "Authenticité africaine",
      desc: "Motifs, tissus et savoir-faire inspirés par notre héritage.",
      icon: "/images/autenticite.png",
    },
    {
      title: "Perfection & Détail",
      desc: "Chaque couture est vérifiée — parce que le détail fait la différence.",
      icon: "/images/details.png",
    },
    {
      title: "Sur-mesure & Confort",
      desc: "Coupes adaptées à votre morphologie pour un tombé impeccable.",
      icon: "/images/mesure.png",
    },
    {
      title: "Satisfaction client",
      desc: "Service personnalisé : essayages, retouches et livraisons à domicile.",
      icon: "/images/satisfaction.png",
    },
  ];

  return (
    <section className="w-full py-16 bg-white -mt-8 ">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-6  -mt-8 text-yellow-800">Nos Valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-lg shadow hover:translate-y-1 transition">
              <img
                src={v.icon}
                alt={v.title}
                className="w-16 h-16 mx-auto mb-4"
                draggable={false}
              />
              <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-gray-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* -------------------------------- Founder / Team -------------------------------- */
function Founder() {
  const [ref, inView] = useInView({ threshold: 0.12 });

  return (
    <>
    </>
  );
}

/* -------------------------------- Services -------------------------------- */
function Services() {
  const services = [
    { title: "Confection sur commande", text: "Tenues hommes & femmes sur-mesure, essayages et finitions." },
    { title: "Fascino Collection", text: "Pièces prêtes à porter, prêtes à être portées et chéries." },
    { title: "Service à domicile", text: "Essayages et livraisons pour votre confort." },
    { title: "Retouches & Ajustements", text: "Ajustements précis pour un tombé parfait." },
  ];

  return (
    <section className="w-full py-16 bg-gray-50 -mt-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h3 className="text-2xl font-bold mb-6 text-center -mt-8">Ce que nous faisons</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-6 bg-white rounded-lg shadow hover:translate-y-1 transition">
              <h4 className="font-semibold mb-2">{s.title}</h4>
              <p className="text-gray-600">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Testimonials -------------------------------- */
function Testimonials() {
  const testimonials = [
    { name: "Clarisse A.", text: "La robe que j’ai commandée m’a redonné confiance. Merci Berna Fascino !" },
    { name: "Roland K.", text: "Un costume sur-mesure parfait et un service impeccable." },
    { name: "Linda G.", text: "Produits de qualité et un accueil chaleureux." },
  ];

  return (
    <section className="w-full py-8 -mt-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h3 className="text-2xl font-bold mb-8 mt-10 text-center">Ils parlent de nous</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure key={i} className="p-6 bg-white rounded-lg shadow">
              <blockquote className="text-gray-700 mb-4">“{t.text}”</blockquote>
              <figcaption className="text-sm font-semibold text-gray-800">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Final CTA -------------------------------- */
function FinalCta() {
  return (
    <section
      className="w-full py-16 text-yellow-800 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bgaccueil2.png')" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center -mt-8">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Rejoignez la famille Berna Fascino</h3>
        <p className="mb-6 text-lg text-white/90">Chaque couture raconte une histoire — commençons la vôtre.</p>
        <div className="flex items-center justify-center gap-4">
          <a href="/NosCreations" className="bg-white text-yellow-800 -mt-8 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Découvrir nos créations
          </a>
          <a href="/Contact" className="border-2 border-white  px-6 py-3 -mt-8 rounded-lg hover:bg-white/10 transition">
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
}
