import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesCards from "./components/ServicesCards";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-cairo ">
      <Header />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ServicesCards />
                <CTA />
              </>
            }
          />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
