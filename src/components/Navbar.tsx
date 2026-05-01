import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Trang Chủ", path: "/" },
  { name: "English Service", path: "/english-service" },
  { name: "Giới Thiệu", path: "/gioi-thieu" },
  { name: "Sự Kiện", path: "/su-kien" },
  { name: "Bible Study", path: "/bible-study" },
  { name: "Thông Báo", path: "/thong-bao" },
  { name: "Liên Hệ", path: "/lien-he" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900 text-white border-b-4 border-gold py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-10 h-10 border-2 border-gold flex items-center justify-center rounded-sm">
              <span className="text-gold font-bold text-xl group-hover:scale-110 transition-transform">✝</span>
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-widest leading-tight uppercase">Hội Thánh Tin Lành</h1>
              <h2 className="text-[10px] text-gold tracking-[0.2em] uppercase">Vietnamese Christian Church</h2>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-gold ${
                  location.pathname === link.path ? "text-gold border-b border-gold" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-gold transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-800 border-t border-slate-700 overflow-hidden mt-4"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-xs font-bold uppercase tracking-[0.2em] ${
                    location.pathname === link.path ? "text-gold" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
