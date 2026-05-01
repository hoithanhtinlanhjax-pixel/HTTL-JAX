import { motion } from "motion/react";
import { Bell, Info, AlertTriangle, CheckCircle, ChevronRight, Share2 } from "lucide-react";

export default function Announcements() {
  const announcements = [
    {
      title: "Thông báo về việc thay đổi giờ nhóm Chủ Nhật tới",
      date: "May 01, 2026",
      category: "Hành Chính",
      desc: "Do có sự kiện đặc biệt tại khu vực Herlong Rd, giờ nhóm chính sẽ bắt đầu sớm hơn 30 phút vào Chủ Nhật tuần sau.",
      status: "Quan trọng",
      color: "bg-red-50 text-red-600 border-red-100"
    },
    {
      title: "Kêu gọi tình nguyện viên cho Ban Thiếu Nhi",
      date: "April 28, 2026",
      category: "Mục Vụ",
      desc: "Chúng tôi đang cần 5 tình nguyện viên hỗ trợ chăm sóc các em thiếu nhi trong các buổi nhóm sáng.",
      status: "Đang tuyển",
      color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      title: "Cập nhật tiến độ sửa chữa Hội Trường",
      date: "April 20, 2026",
      category: "Cơ Sở Vật Chất",
      desc: "Giai đoạn 1 của việc sửa chữa máy lạnh hội trường đã hoàn tất. Cảm ơn sự kiên nhẫn của toàn thể con cái Chúa.",
      status: "Tin tức",
      color: "bg-green-50 text-green-600 border-green-100"
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Bell size={40} className="mx-auto text-gold animate-pulse mb-4" />
            <h1 className="text-5xl font-serif font-bold text-navy italic italic">Thông Báo Hội Thánh</h1>
            <p className="text-gray-400 font-light text-lg">Những cập nhật mới nhất từ Ban Chấp Hành.</p>
          </div>

          <div className="space-y-6">
            {announcements.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl border border-gray-100 bg-off-white hover:bg-white hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-1 h-full font-bold ${item.color.split(' ')[1]}`}></div>
                <div className="flex flex-col md:flex-row justify-between gap-6">
                   <div className="space-y-4 flex-grow">
                      <div className="flex items-center space-x-3">
                         <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${item.color}`}>
                           {item.status}
                         </span>
                         <span className="text-xs text-gray-400 font-medium">{item.date} • {item.category}</span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-navy group-hover:text-gold transition-colors">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed font-light italic italic">
                        "{item.desc}"
                      </p>
                   </div>
                   <div className="flex md:flex-col justify-end items-center md:items-end gap-3">
                      <button className="p-3 rounded-full hover:bg-gray-100 transition-colors text-gray-400"><Share2 size={18} /></button>
                      <button className="px-6 py-2 bg-navy text-white rounded-full text-xs font-bold hover:bg-gold transition-all">Chi tiết</button>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-12 gold-gradient rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 shadow-xl">
             <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-navy backdrop-blur-md flex-shrink-0">
                <Bell size={28} />
             </div>
             <div className="text-center md:text-left">
                <h3 className="text-2xl font-serif font-bold text-navy mb-2">Đăng ký nhận thông báo qua SMS</h3>
                <p className="text-navy/60 font-medium">Nhận tin tức khẩn cấp và lịch nhắc nhở giờ nhóm trực tiếp về điện thoại của bạn.</p>
             </div>
             <div className="flex-shrink-0">
                <button className="px-8 py-4 bg-navy text-white font-bold rounded-full shadow-lg hover:bg-slate-800 transition-all">
                  Đăng Ký Ngay
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
