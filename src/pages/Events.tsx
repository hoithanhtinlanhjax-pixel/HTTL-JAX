import { motion } from "motion/react";
import { Calendar, Clock, MapPin, ChevronRight, Share2, Heart } from "lucide-react";

export default function Events() {
  const events = [
    {
      title: "Đại Hội Phục Hưng 2026",
      date: "May 15-17, 2026",
      time: "7:00 PM",
      location: "Sanctuary",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
      category: "Special Event"
    },
    {
      title: "Ngày Hội Thiếu Nhi Vui Vẻ",
      date: "June 05, 2026",
      time: "10:00 AM",
      location: "Fellowship Hall",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
      category: "Youth"
    },
    {
      title: "Tiệc Thông Công Hè",
      date: "July 12, 2026",
      time: "1:00 PM",
      location: "Outdoor Garden",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=800",
      category: "Fellowship"
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="space-y-4">
              <span className="text-gold font-bold uppercase tracking-widest text-xs">Stay Connected</span>
              <h1 className="text-5xl font-serif font-bold text-navy">Sự Kiện Sắp Tới</h1>
              <div className="w-20 h-1 bg-gold"></div>
            </div>
            <div className="flex space-x-2">
              <button className="px-6 py-2 bg-navy text-white rounded-full text-sm font-bold shadow-md">Tất cả</button>
              <button className="px-6 py-2 bg-off-white text-gray-500 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">Theo lịch</button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {events.map((event, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 px-4 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-navy uppercase tracking-widest">
                    {event.category}
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-navy group-hover:text-gold transition-colors">{event.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center"><Calendar size={14} className="mr-1 text-gold" /> {event.date}</span>
                      <span className="flex items-center"><Clock size={14} className="mr-1 text-gold" /> {event.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={16} className="mr-2 text-gold" /> {event.location}
                  </div>
                  <div className="pt-4 flex justify-between items-center border-t border-gray-50">
                    <button className="text-navy font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                      Chi tiết <ChevronRight size={16} className="ml-1" />
                    </button>
                    <div className="flex space-x-3 text-gray-400">
                      <button className="hover:text-gold transition-colors"><Heart size={18} /></button>
                      <button className="hover:text-gold transition-colors"><Share2 size={18} /></button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-navy rounded-3xl text-center space-y-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
             <div className="relative z-10 space-y-4">
               <h3 className="text-3xl font-serif font-bold text-white italic italic">Bạn muốn tổ chức sự kiện tại hội thánh?</h3>
               <p className="text-gray-400 font-light max-w-2xl mx-auto">
                 Chúng tôi luôn sẵn lòng hỗ trợ các hoạt động cộng đồng và các mục vụ đức tin. Vui lòng liên hệ với văn phòng hội thánh để biết thêm chi tiết về thủ tục đặt phòng.
               </p>
               <div className="pt-6">
                 <button className="px-8 py-3 gold-gradient text-white font-bold rounded-full shadow-lg hover:shadow-gold/20 transition-all">
                   Liên Hệ Ngay
                 </button>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
