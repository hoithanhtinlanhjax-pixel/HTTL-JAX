import { motion } from "motion/react";
import { Globe, MapPin, Clock, MessageSquare, ChevronRight, Users, Heart, Star } from "lucide-react";

export default function EnglishService() {
  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="relative h-[60vh] flex items-center justify-center text-white bg-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000" 
            alt="English Ministry" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-navy/40"></div>
        </div>
        <div className="relative z-10 text-center space-y-6 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-gold/20 border border-gold/30 text-gold-light text-xs font-bold uppercase tracking-widest"
          >
            <Globe size={14} />
            <span>International Ministry</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold">English Service</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            A diverse community of believers growing together in faith, hope, and love.
          </p>
        </div>
      </section>

      {/* Main Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-navy">Welcome to Our <br /><span className="text-gold">English Ministry</span></h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                At Jacksonville Christian Alliance, our English Ministry is a place for individuals and families from all walks of life to experience God. 
                Whether you're a student, a young professional, or a seasoned resident, our doors are open for you to find community and spiritual growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
                <div className="p-6 bg-off-white rounded-2xl space-y-3">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-gold">
                    <Clock size={24} />
                  </div>
                  <h4 className="font-bold text-navy">Service Time</h4>
                  <p className="text-gray-500 text-sm">Every Sunday at 11:00 PM</p>
                </div>
                <div className="p-6 bg-off-white rounded-2xl space-y-3">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-gold">
                    <MapPin size={24} />
                  </div>
                  <h4 className="font-bold text-navy">Location</h4>
                  <p className="text-gray-500 text-sm">Sanctuary - Main Building</p>
                </div>
              </div>
              <button className="px-8 py-4 bg-navy text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg">
                I'm New Here
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&q=80&w=600" alt="Church 1" className="rounded-2xl h-full object-cover shadow-xl" />
              <div className="flex flex-col gap-4">
                <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=600" alt="Church 2" className="rounded-2xl aspect-square object-cover shadow-xl" />
                <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600" alt="Church 3" className="rounded-2xl aspect-square object-cover shadow-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16 space-y-4">
            <h2 className="text-4xl font-serif font-bold italic">What to Expect</h2>
            <p className="text-gray-400 font-light max-w-xl mx-auto">We strive to create an environment that is welcoming, Christ-centered, and impactful.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Contemporary Worship", 
                desc: "A mix of modern songs and timeless hymns to lead us into God's presence.",
                icon: <Heart className="text-gold" size={28} />
              },
              { 
                title: "Biblical Preaching", 
                desc: "Gospel-centered messages that are applicable to your daily life.",
                icon: <Star className="text-gold" size={28} />
              },
              { 
                title: "Global Family", 
                desc: "A community representing many cultures united by one Lord.",
                icon: <Users className="text-gold" size={28} />
              }
            ].map((v, i) => (
              <div key={i} className="space-y-6">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed italic">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
