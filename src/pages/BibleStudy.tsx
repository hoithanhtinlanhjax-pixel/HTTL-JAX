import { motion } from "motion/react";
import { BookOpen, Calendar, Clock, MapPin, Play, MessageCircle, ArrowRight } from "lucide-react";

export default function BibleStudy() {
  const groups = [
    {
      title: "Nhóm Học Kinh Thánh Chủ Nhật",
      time: "CN 4:30 PM",
      location: "Hội trường lầu 1",
      desc: "Tìm hiểu sâu hơn về bài giảng sáng Chủ Nhật và các nguyên tắc nền tảng của đức tin.",
      leader: "Ban Mục Vụ"
    },
    {
      title: "Nhóm Học Kinh Thánh Online (Thứ 4)",
      time: "Thứ 4 7:00 PM",
      location: "Zoom / Facebook Live",
      desc: "Dành cho những ai không thể đến trực tiếp. Một giờ học lời Chúa ấm cúng giữa tuần.",
      leader: "Ban Mục Vụ"
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
               <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=1200" alt="Bible Study Intro" className="rounded-[2.5rem] shadow-2xl relative z-10" />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <span className="text-gold font-bold uppercase tracking-widest text-xs">Deepen Your Faith</span>
                <h1 className="text-5xl font-serif font-bold text-navy italic">Học Kinh Thánh</h1>
                <div className="w-20 h-1 bg-gold"></div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Lời Chúa là ngọn đèn cho chân chúng ta và là ánh sáng cho đường lối chúng ta. Tại Jacksonville, chúng tôi coi trọng việc học và suy ngẫm Lời Ngài hằng ngày.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                   <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-gold flex-shrink-0">
                     <BookOpen size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-navy">Lớp Thần Học Căn Bản</h4>
                     <p className="text-sm text-gray-500">Dành cho các tín hữu mới muốn tìm hiểu nền tảng đức tin.</p>
                   </div>
                </div>
                <div className="flex items-start space-x-4">
                   <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-gold flex-shrink-0">
                     <Play size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-navy">Podcast Học Lời Chúa</h4>
                     <p className="text-sm text-gray-500">Nghe các bài giảng ngắn hằng tuần mọi lúc mọi nơi.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group List */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
           <div className="text-center mb-16 space-y-4">
             <h2 className="text-4xl font-serif font-bold text-navy">Các Nhóm Học Hiện Tại</h2>
             <p className="text-gray-400 font-light">Hãy chọn một nhóm phù hợp với thời gian biểu của bạn.</p>
           </div>

           <div className="space-y-8">
             {groups.map((group, i) => (
                <div key={i} className="flex flex-col md:flex-row bg-off-white rounded-3xl p-8 items-center gap-8 hover:bg-gold/5 transition-all border border-gray-100 group">
                  <div className="w-20 h-20 gold-gradient rounded-3xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                    <Calendar size={32} />
                  </div>
                  <div className="flex-grow space-y-2">
                    <div className="flex flex-wrap gap-4 text-xs font-bold text-gold-light uppercase tracking-widest">
                      <span className="flex items-center"><Clock size={14} className="mr-1" /> {group.time}</span>
                      <span className="flex items-center"><MapPin size={14} className="mr-1" /> {group.location}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-navy group-hover:text-gold transition-colors">{group.title}</h3>
                    <p className="text-gray-600 font-light text-sm italic">"{group.desc}"</p>
                  </div>
                  <button className="whitespace-nowrap px-6 py-3 bg-navy text-white font-bold rounded-full text-sm hover:bg-gold transition-all flex items-center">
                    Đăng Ký Tham Gia <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* Resource Request */}
      <section className="py-24 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
           <MessageCircle size={48} className="mx-auto text-gold mb-4" />
           <h2 className="text-4xl font-serif font-bold italic">Bạn cần tài liệu học tập?</h2>
           <p className="text-gray-400 font-light text-lg">
             Chúng tôi cung cấp sách giải nghĩa Kinh Thánh, các bản dịch khác nhau và tài liệu hướng dẫn học hằng ngày hoàn toàn miễn phí. Hãy đăng ký để chúng tôi gửi đến bạn.
           </p>
           <div className="pt-6">
              <button className="px-10 py-4 border-2 border-gold text-gold font-bold rounded-full hover:bg-gold hover:text-white transition-all">
                Yêu Cầu Tài Liệu
              </button>
           </div>
        </div>
      </section>
    </div>
  );
}
