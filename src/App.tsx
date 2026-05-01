/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, X, Phone, MapPin, Facebook, Mail, 
  ChevronRight, Calendar, BookOpen, Info, Home as HomeIcon, MessageSquare, Globe 
} from "lucide-react";
import React from 'react';

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import EnglishService from "./pages/EnglishService";
import About from "./pages/About";
import Events from "./pages/Events";
import BibleStudy from "./pages/BibleStudy";
import Announcements from "./pages/Announcements";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/english-service" element={<PageWrapper><EnglishService /></PageWrapper>} />
              <Route path="/gioi-thieu" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/su-kien" element={<PageWrapper><Events /></PageWrapper>} />
              <Route path="/bible-study" element={<PageWrapper><BibleStudy /></PageWrapper>} />
              <Route path="/thong-bao" element={<PageWrapper><Announcements /></PageWrapper>} />
              <Route path="/lien-he" element={<PageWrapper><Contact /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

