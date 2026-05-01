import { motion } from "motion/react";
import { ChevronRight, Calendar, BookOpen, Clock, MapPin, Globe, Play, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="overflow-hidden pt-20">
      {/* Geometric Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col md:flex-row border-b border-slate-100">
        <div className="w-full md:w-1/2 bg-slate-50 flex flex-col justify-center px-8 md:px-24 py-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] block">
              Chào mừng bạn đến với
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight italic">
              Nhà Của Chúa,<br />
              <span className="text-gold">Nơi Tìm Thấy Hy Vọng.</span>
            </h1>
            <p className="max-w-md text-slate-600 text-sm leading-relaxed font-medium">
              Chúng tôi là một cộng đồng đức tin, cùng nhau tôn vinh Thiên Chúa và chia sẻ tình yêu của Ngài tại thành phố Jacksonville.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/lien-he" className="btn-primary flex items-center justify-center">
                Tham Gia Nhóm Lại
              </Link>
              <Link to="/gioi-thieu" className="btn-secondary flex items-center justify-center">
                Tìm Hiểu Thêm
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 bg-slate-200 relative overflow-hidden h-[400px] md:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1200" 
            alt="Church Interior" 
            className="w-full h-full object-cover grayscale brightness-90 transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-slate-900/20"></div>
          
          {/* Floating Quote Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-10 right-10 bg-white p-8 shadow-2xl border-l-[6px] border-gold z-20 max-w-xs"
          >
            <p className="text-xs italic text-slate-500 mb-4 leading-relaxed font-serif">
              "Vì Đức Chúa Trời yêu thương thế gian đến nỗi đã ban Con Một của Ngài, hầu cho hễ ai tin Con ấy không bị hư mất mà được sự sống đời đời."
            </p>
            <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest border-t border-slate-100 pt-3">
              — Giăng 3:16
            </p>
          </motion.div>
        </div>
      </section>

      {/* Geometric Info Grid */}
      <section className="bg-white border-b border-slate-100 grid grid-cols-1 md:grid-cols-4">
        {/* Service Hours */}
        <div className="p-12 border-r border-slate-100 hover:bg-slate-50 transition-colors group">
          <h4 className="text-gold text-[10px] font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
            <Clock size={14} /> Giờ Nhóm Lại
          </h4>
          <ul className="text-[11px] space-y-4">
            <li className="flex justify-between items-center group-hover:translate-x-1 transition-transform">
              <span className="text-slate-400 uppercase tracking-tighter">CN 11:00 AM</span>
              <span className="font-bold text-slate-900">Lễ Thờ Phượng</span>
            </li>
            <li className="flex justify-between items-center group-hover:translate-x-1 transition-transform">
              <span className="text-slate-400 uppercase tracking-tighter">CN 11:00 PM</span>
              <span className="font-bold text-slate-900">English Service</span>
            </li>
            <li className="flex justify-between items-center group-hover:translate-x-1 transition-transform">
              <span className="text-slate-400 uppercase tracking-tighter">CN 04:30 PM</span>
              <span className="font-bold text-slate-900">Bible Study</span>
            </li>
            <li className="flex justify-between items-center group-hover:translate-x-1 transition-transform">
              <span className="text-slate-400 uppercase tracking-tighter font-italic">T4 07:00 PM</span>
              <span className="font-bold italic text-gold">Online Study</span>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div className="p-12 border-r border-slate-100 hover:bg-slate-50 transition-colors">
          <h4 className="text-slate-900 text-[10px] font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
            <MapPin size={14} className="text-gold" /> Địa Điểm
          </h4>
          <div className="space-y-4">
            <p className="text-xs text-slate-600 leading-loose uppercase tracking-wide font-medium">
              7629 Herlong Rd,<br />
              Jacksonville, FL 32210
            </p>
            <p className="text-sm font-bold text-slate-900">(904) 846-2517</p>
            <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="text-gold text-[10px] font-bold underline tracking-widest uppercase block mt-6">
              Bản Đồ Chỉ Đường
            </a>
          </div>
        </div>

        {/* Bible Study Promo */}
        <div className="p-12 border-r border-slate-100 bg-slate-50 hover:bg-slate-100 transition-colors">
          <h4 className="text-slate-900 text-[10px] font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
            <BookOpen size={14} className="text-gold" /> Bible Study
          </h4>
          <p className="text-xs text-slate-500 mb-6 italic leading-relaxed">
            Khám phá Lời Chúa cùng cộng đoàn mỗi tuần để vun đắp đời sống đức tin và nhận lấy sự khôn ngoan của Chúa.
          </p>
          <Link to="/bible-study" className="inline-block bg-white px-5 py-2 rounded-full text-[10px] border border-slate-200 uppercase font-bold text-slate-900 hover:border-gold transition-colors">
            Xem Tài Liệu
          </Link>
        </div>

        {/* Action Card */}
        <div className="p-12 bg-slate-900 text-white flex flex-col justify-between group">
          <div>
            <h4 className="text-gold text-[10px] font-bold uppercase tracking-widest mb-8">Liên Hệ</h4>
            <p className="text-lg font-bold mb-2 group-hover:text-gold transition-colors">Bạn cần sự đồng hành hay lời cầu nguyện?</p>
            <p className="text-xs text-slate-400 font-medium">Chúng tôi luôn ở đây để lắng nghe và chia sẻ cùng bạn.</p>
          </div>
          <Link to="/lien-he" className="flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-widest mt-8 group-hover:translate-x-2 transition-transform">
            Gửi Lời Nhắn <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      {/* Main Quote / Mission Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center space-y-12">
          <div className="inline-block w-12 h-1 bg-gold"></div>
          <h2 className="text-3xl md:text-5xl font-serif italic text-slate-900 leading-tight">
            "Chúng tôi là minh chứng cho tình yêu của Chúa, <br />
            <span className="text-gold not-italic font-sans font-extrabold uppercase tracking-tighter">tại trung tâm Jacksonville."</span>
          </h2>
          <div className="flex justify-center gap-12 pt-8">
            <div className="text-center">
              <span className="block text-4xl font-extrabold text-slate-900">20+</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Năm phục vụ</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-extrabold text-gold">4</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Giờ nhóm hằng tuần</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Decorative Accent */}
      <div className="bg-gold h-4 w-full"></div>
    </div>
  );
}
