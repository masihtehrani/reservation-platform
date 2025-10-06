'use client';

import { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  CreditCard, 
  BarChart3, 
  Smartphone, 
  Users, 
  Star,
  Play,
  Phone,
  Globe,
  Building2,
  Film,
  Theater,
  Dumbbell,
  Shield,
  Zap,
  CheckCircle,
  Mail,
  MapPin,
  TrendingUp,
  Database,
  FileText,
  Upload,
  Download,
  Settings,
  UserCheck,
  Crown,
  Building,
  X
} from 'lucide-react';
import NextImage from 'next/image';

export default function ReservationPlatform() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...contactForm,
          timestamp: new Date().toISOString(),
          source: 'reservation-platform'
        }),
      });

      if (response.ok) {
        setContactForm({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: ''
        });
        setIsContactModalOpen(false);
        alert('درخواست شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.');
      } else {
        throw new Error('خطا در ارسال درخواست');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('خطا در ارسال درخواست. لطفاً دوباره تلاش کنید.');
    }
  };

  const stats = [
    { number: "500+", label: "کسب‌وکار فعال", icon: Building2 },
    { number: "50K+", label: "رزرو ماهانه", icon: Calendar },
    { number: "99.9%", label: "آپتایم سیستم", icon: Shield },
    { number: "40%", label: "افزایش درآمد", icon: TrendingUp }
  ];

  const industries = [
    { 
      icon: Dumbbell, 
      name: "باشگاه‌های ورزشی", 
      description: "مدیریت زمین‌های ورزشی، کلاس‌ها و رزرواسیون",
      examples: ["زمین تنیس", "استخر", "سالن بدنسازی", "کلاس‌های گروهی"],
      image: "/images/industries/sports.svg"
    },
    { 
      icon: Building2, 
      name: "کانترهای ساعتی", 
      description: "رزرو کانترها و فضاهای کاری ساعتی",
      examples: ["کانتر پاساژ", "اتاق جلسه", "فضای کاری مشترک", "استودیو"],
      image: "/images/industries/counter.svg"
    },
    { 
      icon: Film, 
      name: "سینما", 
      description: "مدیریت بلیت‌ها و رزرو صندلی‌ها",
      examples: ["سالن سینما", "تئاتر", "کنسرت", "نمایشگاه"],
      image: "/images/industries/cinema.svg"
    },
    { 
      icon: Theater, 
      name: "تئاتر", 
      description: "رزرو صندلی‌ها و مدیریت رویدادها",
      examples: ["سالن تئاتر", "کنسرت", "نمایش", "رویدادهای فرهنگی"],
      image: "/images/industries/theater.svg"
    },
    { 
      icon: Globe, 
      name: "سایر کسب‌وکارها", 
      description: "هر نوع کسب‌وکاری که نیاز به رزرواسیون دارد",
      examples: ["رستوران", "هتل", "سالن عروسی", "مراکز آموزشی"],
      image: "/images/industries/other.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F1E9] via-white to-[#F0F0F0]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-[#A89078]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="font-bold text-2xl bg-gradient-to-r from-[#A89078] to-[#4ABDAC] bg-clip-text text-transparent">
                رزروپلاس
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8 space-x-reverse">
                <a href="#home" className="text-[#1A3C5E] hover:text-[#4ABDAC] px-3 py-2 text-sm font-medium transition-colors">خانه</a>
                <a href="#features" className="text-[#1A3C5E] hover:text-[#4ABDAC] px-3 py-2 text-sm font-medium transition-colors">ویژگی‌ها</a>
                <a href="#admin-panel" className="text-[#1A3C5E] hover:text-[#4ABDAC] px-3 py-2 text-sm font-medium transition-colors">پنل مدیریت</a>
                <a href="#pricing" className="text-[#1A3C5E] hover:text-[#4ABDAC] px-3 py-2 text-sm font-medium transition-colors">قیمت‌ها</a>
                <a href="#testimonials" className="text-[#1A3C5E] hover:text-[#4ABDAC] px-3 py-2 text-sm font-medium transition-colors">مشتریان</a>
                <a href="#contact" className="text-[#1A3C5E] hover:text-[#4ABDAC] px-3 py-2 text-sm font-medium transition-colors">تماس</a>
              </div>
            </div>
            <a 
              href="https://miroteam.ir" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#52B788] to-[#4ABDAC] text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center"
            >
              <Phone className="w-4 h-4 ml-2" />
              تماس با تیم
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A89078]/10 via-transparent to-[#4ABDAC]/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-right">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block text-[#1A3C5E]">خرید سیستم رزرواسیون</span>
                <span className="block bg-gradient-to-r from-[#4ABDAC] to-[#52B788] bg-clip-text text-transparent">
                  پلتفرم رزرو حرفه‌ای
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-[#333333] leading-relaxed">
                <strong>نرم‌افزار رزرواسیون</strong> چندمنظوره برای هر نوع کسب‌وکاری که نیاز به <strong>رزرو آنلاین</strong> دارد. 
                از باشگاه‌های ورزشی تا سینما، تئاتر و کانترهای ساعتی.
                <br />
                <span className="font-semibold text-[#4ABDAC]">افزایش 40% درآمد</span> با <strong>سیستم رزرواسیون پیشرفته</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-gradient-to-r from-[#52B788] to-[#4ABDAC] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center w-full"
                >
                  <Play className="w-5 h-5 ml-2" />
                  مشاهده دمو سیستم
                </button>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="border-2 border-[#4ABDAC] text-[#4ABDAC] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[#4ABDAC] hover:text-white transition-all flex items-center justify-center w-full"
                >
                  <Phone className="w-5 h-5 ml-2" />
                  تماس برای استعلام قیمت
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center">
                {stats.map((stat) => (
                  <div 
                    key={stat.label}
                    className="bg-white rounded-xl p-4 shadow-lg"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-[#4ABDAC] to-[#52B788] rounded-lg flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-[#52B788]">{stat.number}</div>
                    <div className="text-sm text-[#333333]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  className="w-full h-auto rounded-2xl"
                  controls
                  poster="/images/hero-dashboard.svg"
                  preload="metadata"
                >
                  <source src="/video/padel_admin.mp4" type="video/mp4" />
                  مرورگر شما از پخش ویدئو پشتیبانی نمی‌کند.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C5E] mb-4">
              برای <span className="bg-gradient-to-r from-[#4ABDAC] to-[#52B788] bg-clip-text text-transparent">هر کسب‌وکاری</span>
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              سیستم رزرواسیون ما برای انواع مختلف کسب‌وکارها طراحی شده است
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <NextImage
                    src={industry.image}
                    alt={industry.name}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#1A3C5E] text-center mb-2">{industry.name}</h3>
                <p className="text-sm text-[#333333] text-center mb-3">{industry.description}</p>
                <div className="space-y-1">
                  {industry.examples.map((example, idx) => (
                    <div key={idx} className="text-xs text-[#4ABDAC] text-center">• {example}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsContactModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-4 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#1A3C5E]">درخواست تماس</h2>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1A3C5E] mb-2">
                    نام
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.firstName}
                    onChange={(e) => setContactForm({...contactForm, firstName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ABDAC] focus:border-transparent transition-all"
                    placeholder="نام خود را وارد کنید"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A3C5E] mb-2">
                    نام خانوادگی
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.lastName}
                    onChange={(e) => setContactForm({...contactForm, lastName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ABDAC] focus:border-transparent transition-all"
                    placeholder="نام خانوادگی خود را وارد کنید"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1A3C5E] mb-2">
                  شماره تماس <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ABDAC] focus:border-transparent transition-all"
                  placeholder="09123456789"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1A3C5E] mb-2">
                  ایمیل
                </label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ABDAC] focus:border-transparent transition-all"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1A3C5E] mb-2">
                  پیام (اختیاری)
                </label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ABDAC] focus:border-transparent transition-all resize-none"
                  placeholder="توضیحات اضافی خود را بنویسید..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#4ABDAC] to-[#52B788] text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                ارسال درخواست
              </button>
            </form>

            <div className="mt-6 p-4 bg-gradient-to-r from-[#4ABDAC]/10 to-[#52B788]/10 rounded-lg">
              <h3 className="text-lg font-semibold text-[#1A3C5E] mb-3 text-center">اطلاعات تماس ما</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center space-x-2 space-x-reverse">
                  <Phone className="w-4 h-4 text-[#4ABDAC]" />
                  <span className="text-[#333333]">09123456789</span>
                </div>
                <div className="flex items-center justify-center space-x-2 space-x-reverse">
                  <Globe className="w-4 h-4 text-[#4ABDAC]" />
                  <a href="https://miroteam.ir" target="_blank" rel="noopener noreferrer" className="text-[#4ABDAC] hover:underline">miroteam.ir</a>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 text-center mt-4">
              پس از ارسال درخواست، در کمتر از 24 ساعت با شما تماس خواهیم گرفت.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
