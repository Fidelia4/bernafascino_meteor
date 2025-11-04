import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import NosCreations from "./pages/NosCreation";
import Regles from "./pages/Regles";        
import Contact from "./pages/Contact";      

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow mt-4">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/Apropos" element={<Apropos />} />
            <Route path="/NosCreations" element={<NosCreations />} />
            <Route path="/Regles" element={<Regles />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
