import { Phone, MapPin, Mail, Facebook, Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border-2 border-gold flex items-center justify-center rounded-sm">
                <span className="text-gold font-bold text-2xl">✝</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold tracking-widest uppercase">HTTL Jacksonville</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold">Vietnamese Christian Church</p>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-loose uppercase tracking-tighter">
              Tôn vinh Thượng Đế và phục vụ cộng đồng qua đức tin, tình yêu và chân lý của Chúa Giê-su. 
              Mọi vinh hiển thuộc về Ngài.
            </p>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-gold text-[10px] font-bold uppercase tracking-widest mb-8">Giờ Nhóm Lại</h4>
            <ul className="space-y-4 text-[11px] text-slate-300">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span className="uppercase text-slate-500">Lễ Thờ Phượng</span>
                <span className="font-bold">CN 11:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span className="uppercase text-slate-500">English Service</span>
                <span className="font-bold">CN 11:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span className="uppercase text-slate-500">Bible Study</span>
                <span className="font-bold">CN 4:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-slate-200 text-[10px] font-bold uppercase tracking-widest mb-8">Điều Hướng</h4>
            <ul className="space-y-3 text-[11px] uppercase tracking-widest">
              <li><Link to="/english-service" className="text-slate-400 hover:text-gold transition-colors">English Service</Link></li>
              <li><Link to="/gioi-thieu" className="text-slate-400 hover:text-gold transition-colors">Giới Thiệu</Link></li>
              <li><Link to="/su-kien" className="text-slate-400 hover:text-gold transition-colors">Sự Kiện</Link></li>
              <li><Link to="/bible-study" className="text-slate-400 hover:text-gold transition-colors">Bible Study</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold text-[10px] font-bold uppercase tracking-widest mb-8">Liên Hệ</h4>
            <ul className="space-y-4 text-xs font-bold">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold" /> (904) 846-2517
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-1" /> 
                <span className="leading-relaxed">7629 Herlong Rd,<br />Jacksonville, FL 32210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          <p>© {new Date().getFullYear()} Hội Thánh Tin Lành Jacksonville</p>
          <div className="flex gap-8">
            <a href="https://www.facebook.com/vccjaxfl/" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors underline">Facebook</a>
            <a href="#" className="hover:text-gold transition-colors underline">Youtube</a>
          </div>
        </div>
      </div>
      {/* Final Accent Strip */}
      <div className="bg-gold h-2 w-full mt-8"></div>
    </footer>
  );
}
