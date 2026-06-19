import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import PricingPage from './pages/PricingPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import VisitingCardsPage from './pages/common/VisitingCardsPage';
import WeddingCardsPage from './pages/common/WeddingCardsPage';
import BannerPrintingPage from './pages/common/BannerPrintingPage';
import FlexPrintingPage from './pages/common/FlexPrintingPage';
import Header from './components/Header';
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <ScrollToTop /> */}

<Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/visiting-card" element={<VisitingCardsPage />} />
          <Route path="/services/wedding-card" element={<WeddingCardsPage />} />
          <Route path="/services/banner-printing" element={<BannerPrintingPage />} />
          <Route path="/services/flex-printing" element={<FlexPrintingPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}