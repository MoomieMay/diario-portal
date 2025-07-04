import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';

import Home from './pages/Home';
import Funebres from './pages/Funebres';
import Newsletters from './pages/Newsletters';
import Clasificados from './pages/Clasificados';
import Contacto from './pages/Contacto';
import Anuncios from './pages/Anuncios';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Header />
      <NavMenu />
      <main className="mt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/funebres" element={<Funebres />} />
          <Route path="/newsletters" element={<Newsletters />} />
          <Route path="/clasificados" element={<Clasificados />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/anuncios" element={<Anuncios />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
