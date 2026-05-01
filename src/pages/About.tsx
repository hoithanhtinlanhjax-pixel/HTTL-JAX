import { motion } from "motion/react";
import { Info, Users, Shield, Award, Heart, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-gold font-bold uppercase tracking-widest text-xs">Về Hội Thánh Jacksonville</span>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy">Lịch Sử & <br />Sứ Mệnh</h1>
                <div className="w-20 h-1 bg-gold"></div>
              </div>
              <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
                <p>
                  Hội Thánh Tin Lành Jacksonville là một phần của hệ phái Christian and Missionary Alliance (C&MA). Chúng tôi là một cộng đồng các tín hữu tận hiến cho việc thờ phượng Chúa, yêu thương nhau và chia sẻ tin mừng về Chúa Giê-su Ki-tô.
                </p>
                <p>
                  Với lịch sử lâu dài phục vụ cộng đồng người Việt tại Jacksonville, chúng tôi không chỉ là một nhà thờ, mà còn là một gia đình lớn nơi mỗi thành viên được chăm sóc và tăng trưởng tâm linh.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-gold flex-shrink-0">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Tình Yêu</h4>
                    <p className="text-sm text-gray-500">Yêu Chúa và yêu người lân cận như mình.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-gold flex-shrink-0">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">Sứ Mệnh</h4>
                    <p className="text-sm text-gray-500">Đem tình yêu Chúa đến với mọi dân tộc.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
               <div className="gold-gradient absolute inset-0 transform translate-x-4 translate-y-4 rounded-3xl"></div>
               <img src="https://images.unsplash.com/photo-1548345680-f5475ee511d7?auto=format&fit=crop&q=80&w=1200" alt="Church History" className="relative z-10 rounded-3xl w-full h-full object-cover shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif font-bold text-navy">Những Điều Chúng Tôi Tin</h2>
            <p className="text-gray-500 italic max-w-2xl mx-auto font-light">
              "Chúa Giê-su Ki-tô hôm qua, ngày nay, và cho đến đời đời không hề thay đổi." - Hê-bơ-rơ 13:8
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4 p-8 bg-off-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-serif font-bold text-navy flex items-center">
                <span className="text-gold mr-3">01.</span> Chúa Giê-su là Đấng Cứu Thế
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Ngài đã chết thay cho tội lỗi chúng ta để chúng ta được phục hòa với Đức Chúa Trời.
              </p>
            </div>
            <div className="space-y-4 p-8 bg-off-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-serif font-bold text-navy flex items-center">
                <span className="text-gold mr-3">02.</span> Chúa Giê-su là Đấng Thánh Hóa
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Quyền năng của Đức Thánh Linh làm đổi mới đời sống chúng ta từng ngày.
              </p>
            </div>
            <div className="space-y-4 p-8 bg-off-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-serif font-bold text-navy flex items-center">
                <span className="text-gold mr-3">03.</span> Chúa Giê-su là Đấng Chữa Lành
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Ngài quan tâm và ban ơn chữa lành cho thân thể và tâm linh chúng ta.
              </p>
            </div>
            <div className="space-y-4 p-8 bg-off-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-serif font-bold text-navy flex items-center">
                <span className="text-gold mr-3">04.</span> Chúa Giê-su là Vua Sắp Đến
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Ngài sẽ trở lại để tiếp rước Hội Thánh và cai trị muôn đời.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <div className="space-y-4">
               <h2 className="text-4xl font-serif font-bold">Ban Chấp Hành</h2>
               <p className="text-gray-400 font-light">Những người phục vụ âm thầm đằng sau các hoạt động của hội thánh.</p>
             </div>
             <div className="hidden md:block w-32 h-1 bg-gold"></div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="group space-y-4">
                 <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img src={`https://i.pravatar.cc/300?u=${i}`} alt="Leader" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-0 group-hover:opacity-80 transition-opacity"></div>
                 </div>
                 <div>
                   <h4 className="text-xl font-serif font-bold">Người Phục Vụ #{i}</h4>
                   <p className="text-gold-light text-xs font-bold uppercase tracking-widest">Chấp sự</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
