import { Navigation } from '@/sections/Navigation';
import { Footer } from '@/sections/Footer';
import Home from '@/pages/Home';
import AboutPage from '@/pages/AboutPage';
import ContractsPage from '@/pages/ContractsPage';
import ClientsPage from '@/pages/ClientsPage';
import ContactPage from '@/pages/ContactPage';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { useEffect } from 'react';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white text-electric-black">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-earth-blue focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navigation />
      <ScrollToTop />
      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contracts" element={<ContractsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
