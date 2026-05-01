import { motion } from "motion/react";
import { Phone, MapPin, Mail, MessageSquare, Send, Globe, Facebook, Youtube } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16 space-y-4">
             <span className="text-gold font-bold uppercase tracking-widest text-xs">Phục vụ & Hỗ trợ</span>
             <h1 className="text-5xl font-serif font-bold text-navy">Liên Hệ Với Chúng Tôi</h1>
             <p className="text-gray-400 font-light max-w-2xl mx-auto">Chúng tôi luôn lắng nghe và sẵn sàng cầu nguyện cùng bạn.</p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
             {/* Contact Cards */}
             <div className="space-y-6">
                {[
                  { icon: <Phone size={24} />, title: "Điện thoại", info: "(904) 846-2517", color: "gold" },
                  { icon: <Mail size={24} />, title: "Email", info: "info@httljacksonville.org", color: "navy" },
                  { icon: <MapPin size={24} />, title: "Văn phòng", info: "7629 Herlong Rd, Jacksonville, FL 32210", color: "gold" },
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-off-white border border-gray-100 hover:shadow-xl transition-all group">
                    <div className={`w-12 h-12 bg-${item.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">{item.title}</h4>
                    <p className="text-xl font-serif font-bold text-navy break-words">{item.info}</p>
                  </div>
                ))}

                <div className="p-8 rounded-3xl gold-gradient text-white space-y-4">
                  <h4 className="font-serif font-bold text-xl">Kết nối xã hội</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/vccjaxfl/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors">
                      <Facebook size={24} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors">
                      <Youtube size={24} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors">
                      <Globe size={24} />
                    </a>
                  </div>
                </div>
             </div>

             {/* Form */}
             <div className="lg:col-span-2 bg-navy rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
                <div className="relative z-10 space-y-10">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-serif font-bold italic">Gửi Lời Nhắn</h3>
                    <p className="text-gray-400 font-light">Vui lòng điền thông tin bên dưới, chúng tôi sẽ phản hồi sớm nhất có thể.</p>
                  </div>

                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-gold-light">Họ và Tên</label>
                       <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-gold transition-colors" placeholder="Nguyễn Văn A" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-gold-light">Email</label>
                       <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-gold transition-colors" placeholder="email@example.com" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-gold-light">Chủ đề</label>
                       <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-gold transition-colors appearance-none outline-none">
                          <option className="bg-navy">Yêu cầu cầu nguyện</option>
                          <option className="bg-navy">Tìm hiểu đạo</option>
                          <option className="bg-navy">Thắc mắc chung</option>
                       </select>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-gold-light">Lời nhắn của bạn</label>
                       <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-gold transition-colors" placeholder="Bạn cần chúng tôi giúp đỡ điều gì?"></textarea>
                    </div>
                    <div className="md:col-span-2 pt-4">
                       <button className="gold-gradient w-full py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-gold/20 flex items-center justify-center space-x-2 group">
                         <span>Gửi Yêu Cầu</span>
                         <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                       </button>
                    </div>
                  </form>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[500px] w-full bg-gray-100">
         <div className="w-full h-full relative group">
           <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
            alt="Google Map Integration" 
            className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
           />
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 text-center animate-bounce pointer-events-auto cursor-pointer">
                 <MapPin className="text-gold mx-auto mb-2" size={32} />
                 <h4 className="font-serif font-bold text-navy">Chúng tôi ở đây!</h4>
                 <p className="text-xs text-gray-400">7629 Herlong Rd, Jacksonville, FL 32210</p>
              </div>
           </div>
         </div>
      </section>
    </div>
  );
}
