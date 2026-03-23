import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  NavLink,
} from "react-router-dom";
import { useEffect } from "react";
import "./i18n/i18n";
import { Header } from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter basename="/">
      {/* change basename to match your vite.config base path */}
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
