import React, { useEffect, useState, useRef } from "react";

/**
 * Page d'accueil "Berna Fascino"
 * - Meteor + React + Tailwind
 * - Placez les images/videos dans public/images et public/videos
 */

export default function Accueil() {
  return (
    <main className="w-full min-h-screen font-sans text-gray-800">
      <Hero />
      <About />
      <CollectionCarousel />
      <Services />
      <Testimonials />
      <FinalCta />
    </main>
  );
}

/* ------------------- HERO ------------------- */
function Hero() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center flex items-center justify-center -mt-12"
      style={{
        backgroundImage: `url('/images/bgaccueil1.png')`,
      }}
      aria-label="Hero Berna Fascino"
    >
      <div className="w-full max-w-6xl px-6 md:px-12 text-center">
        <div className="bg-[#222222] opacity-70 backdrop-blur-sm rounded-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Berna Fascino
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-yellow-200">
            <span className="font-semibold">Vos vêtements taillés à la perfection.</span>
          </p>
          <p className="mt-3 text-sm md:text-base text-white/90 max-w-2xl mx-auto">
            Fondée en 2000 par Madame Bernadette Hounnou à Agla-Agongbomey — Cotonou.
            Artisanat, tradition et haute couture africaine : chaque pièce est cousue avec cœur.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/NosCreations"
              className="inline-block bg-yellow-800 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
            >
              Découvrir la Fascino Collection
            </a>

            <a
              href="/Contact"
              className="inline-block border-2 border-white text-white px-5 py-2.5 rounded-lg hover:bg-white hover:text-black transition"
            >
              Prendre rendez-vous
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-white/80">
            <span className="px-3 py-1 bg-white/10 rounded-full">Artisanat depuis 2000</span>
            <span className="px-3 py-1 bg-white/10 rounded-full">Sur-mesure</span>
            <span className="px-3 py-1 bg-white/10 rounded-full">Éco-responsable</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------- ABOUT ------------------- */
function About() {
  return (
    <section className="w-full py-16 bg-white -mt-12 ">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Notre Maison</h2>
          <p className="text-lg text-gray-700 mb-4">
            Berna Fascino est née en 2000 grâce à la détermination de Madame Bernadette Hounnou.
            Parti d’un petit atelier à Agla-Agongbomey, la maison est devenue un repère d’excellence
            où la tradition et la modernité se rencontrent.
          </p>
          <p className="text-gray-600 mb-6">
            Nous créons des vêtements haute couture pour hommes et femmes, disponibles en prêt-à-porter
            (Fascino Collection) ou en commandes sur-mesure. Chaque pièce est pensée, dessinée et cousue
            avec soin par nos artisans.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge text="Artisanat depuis 2000" />
            <Badge text="Sur-mesure & Haute couture" />
            <Badge text="Service à domicile" />
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/mam.jpg"
            alt="Bernadette Hounnou - fondatrice Berna Fascino"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Badge({ text }) {
  return (
    <span className="px-4 py-2 rounded-full bg-yellow-800 text-white text-sm font-medium shadow ">
      {text}
    </span>
  );
}
/* ------------------- COLLECTION CAROUSEL (images + videos) ------------------- */
function CollectionCarousel() {
  const slides = [
    { type: "img", src: "/images/maman.jpg", alt: "Création 1" },
    { type: "img", src: "/images/cliente1.jpg", alt: "Création 2" },
    { type: "img", src: "/images/mode3.jpg", alt: "Création 3" },
    { type: "img", src: "/images/mode4.jpg", alt: "Création 4" },
    { type: "img", src: "/images/mode12.jpg", alt: "Création 5" },
    { type: "video", src: "/images/clip1.mp4", alt: "Vidéo coulisse 1" },
    { type: "video", src: "/images/clip2.mp4", alt: "Vidéo coulisse 2" },
  ];

  const [index, setIndex] = useState(0);
  const length = slides.length;
  const videoRef = useRef(null);
  const autoRef = useRef();

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, 6000);
    return () => clearInterval(autoRef.current);
  }, [length]);

  useEffect(() => {
    if (slides[index].type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [index]);

  return (
    <section className="w-full py-16 bg-gray-50 relative overflow-hidden  ">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-900">
          Fascino Collection
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Vente de tenues prêtes à porter — et créations sur commande.
        </p>

        {/* CAROUSEL */}
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative w-full h-80 md:h-[450px] rounded-lg overflow-hidden shadow-xl">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {s.type === "img" ? (
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                ) : (
                  <video
                    ref={i === index ? videoRef : null}
                    src={s.src}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                  />
                )}
              </div>
            ))}
          </div>

          {/* CONTROLS */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setIndex((index - 1 + length) % length)}
              className="px-3 py-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
              aria-label="Précédent"
            >
              ‹
            </button>

            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition ${
                    i === index ? "bg-yellow-800" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setIndex((index + 1) % length)}
              className="px-3 py-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
              aria-label="Suivant"
            >
              ›
            </button>
          </div>

          {/* CAPTION */}
          <div className="mt-6 text-center text-gray-700 italic">
            Tenues prêtes à porter et créations sur commande – qualité artisanale
            <br />
            <strong className="text-yellow-900">Berna Fascino</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------- SERVICES ------------------- */
function Services() {
  const services = [
    {
      title: "Confection sur commande",
      desc: "Tenues hommes & femmes sur-mesure, réalisées dans notre atelier.",
    },
    {
      title: "Vente prêt-à-porter",
      desc: "Fascino Collection — pièces prêtes à porter, sélectionnées avec soin.",
    },
    {
      title: "Service à domicile",
      desc: "Essayages et livraisons directement chez vous pour votre confort.",
    },
  ];

  return (
    <section className="w-full py-16 -mt-8 ">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg shadow hover:translate-y-1 transition">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------- TESTIMONIALS ------------------- */
function Testimonials() {
  const items = [
    {
      name: "Syrolie A.",
      rating: 5,
      text: "La robe que j’ai commandée était parfaite. Équipe à l'écoute et talentueuse !",
    },
    {
      name: "Waliss B.",
      rating: 4,
      text: "Un costume sur mesure impeccable. Le service à domicile m'a vraiment aidé.",
    },
    {
      name: "Fidelia G.",
      rating: 5,
      text: "Tenues prêtes à porter de grande qualité, accueil chaleureux.",
    },
    {
      name: "Dr Milene H.",
      rating: 5,
      text: "On sent la passion dans chaque couture. Fascino est exceptionnelle.",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50 -mt-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-8 -mt-8 text-center">Avis clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <blockquote key={i} className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-700 mb-4">“{it.text}”</p>
              <div className="flex items-center justify-between">
                <strong className="text-sm">{it.name}</strong>
                <span className="text-yellow-600">{'★'.repeat(it.rating)}</span>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------- FINAL CTA ------------------- */
function FinalCta() {
  return (
    <section className="w-full py-16  text-yellow-800 bg-cover bg-center -mt-8" style={{ backgroundImage: "url('/images/bgaccueil2.png')" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt(e) à vivre l’expérience Berna Fascino ?</h2>
        <p className="mb-6 text-lg">Réservez votre essayage sur-mesure ou découvrez notre collection.</p>
        <div className="flex items-center justify-center gap-4 -mb-6">
          <a
            href="/Contact"
            className="bg-white text-yellow-800 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Prendre rendez-vous
          </a>
          <a
            href="/NosCreations"
            className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
          >
            Voir nos créations
          </a>
        </div>
      </div>
    </section>
  );
}
