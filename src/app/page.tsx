'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  CreditCard, 
  BarChart3, 
  Smartphone, 
  Users, 
  Star,
  Play,
  Globe,
  Building2,
  Film,
  Theater,
  Dumbbell,
  Shield,
  Zap,
  CheckCircle,
  Phone,
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
import { useState, useEffect, useCallback, useMemo } from 'react';
import NextImage from 'next/image';

export default function ReservationPlatform() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false);
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
      // ارسال ایمیل به سرور
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
        // Reset form
        setContactForm({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: ''
        });
        
        // Close modal
        setIsContactModalOpen(false);
        
        // Show success message
        alert('درخواست شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.');
      } else {
        throw new Error('خطا در ارسال درخواست');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      
      // Fallback: ارسال ایمیل ساده
      const emailBody = `
نام: ${contactForm.firstName} ${contactForm.lastName}
شماره تماس: ${contactForm.phone}
ایمیل: ${contactForm.email}
پیام: ${contactForm.message}
زمان: ${new Date().toLocaleString('fa-IR')}
منبع: وب‌سایت رزروپلاس
      `;
      
      const mailtoLink = `mailto:info@miroteam.ir?subject=درخواست تماس از وب‌سایت رزروپلاس&body=${encodeURIComponent(emailBody)}`;
      window.open(mailtoLink);
      
      // Reset form
      setContactForm({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
      });
      
      // Close modal
      setIsContactModalOpen(false);
      
      alert('درخواست شما آماده ارسال شد. لطفاً ایمیل را تأیید کنید.');
    }
  };

  const testimonials = [
    {
      name: "علیرضا محمدی",
      role: "مدیر باشگاه ورزشی اسپرت",
      content: "بعد از استفاده از سیستم رزرواسیون، درآمد باشگاه ما 45% افزایش یافت. سیستم بسیار کاربرپسند و پشتیبانی عالی است.",
      rating: 5,
      image: "/images/industries/sports.svg",
      business: "باشگاه ورزشی",
      revenue: "+45%"
    },
    {
      name: "سارا احمدی", 
      role: "مدیر کانتر ساعتی پاساژ",
      content: "سیستم بسیار پیشرفته و در عین حال ساده است. مشتریان ما از رزرو آنلاین راضی هستند و ما زمان بیشتری برای مدیریت بهتر داریم.",
      rating: 5,
      image: "/images/industries/counter.svg",
      business: "کانتر ساعتی",
      revenue: "+60%"
    },
    {
      name: "حسین رضایی",
      role: "صاحب کمپلکس سینما",
      content: "سیستم به ما کمک کرد کسب‌وکار خود را به شکل حرفه‌ای مدیریت کنیم. گزارش‌های دقیق و آنالیز داده‌ها بسیار مفید است.",
      rating: 5,
      image: "/images/industries/cinema.svg",
      business: "سینما",
      revenue: "+35%"
    },
    {
      name: "مریم کریمی",
      role: "مدیر تئاتر شهر",
      content: "با این سیستم، مدیریت بلیت‌ها و رزرو صندلی‌ها بسیار آسان شده. مشتریان راضی‌تر هستند و ما درآمد بیشتری داریم.",
      rating: 5,
      image: "/images/industries/theater.svg",
      business: "تئاتر",
      revenue: "+50%"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "رزرو 24/7",
      description: "امکان رزرو در هر ساعت از شبانه‌روز بدون نیاز به پشتیبانی دستی. مشتریان می‌توانند به راحتی زمان مورد نظر را انتخاب و رزرو کنند.",
      color: "from-[#52B788] to-[#4ABDAC]"
    },
    {
      icon: Zap,
      title: "مدیریت خودکار",
      description: "کاهش 60% زمان مدیریت با اتوماسیون کامل فرایندهای رزرو، پرداخت، ارسال یادآوری‌ها و گزارش‌گیری خودکار.",
      color: "from-[#F4A261] to-[#A8A4FF]"
    },
    {
      icon: CreditCard,
      title: "پرداخت آنلاین",
      description: "پرداخت امن و سریع از طریق درگاه‌های معتبر. کاهش نفرات حاضر نشده تا 80% با پیش‌پرداخت آنلاین.",
      color: "from-[#D1495B] to-[#F4A261]"
    },
    {
      icon: BarChart3,
      title: "گزارش‌های دقیق",
      description: "دسترسی به گزارش‌های جامع از عملکرد کسب‌وکار، میزان اشغال، درآمد و رفتار مشتریان برای تصمیم‌گیری بهتر.",
      color: "from-[#4ABDAC] to-[#52B788]"
    },
    {
      icon: Smartphone,
      title: "100% ریسپانسیو",
      description: "طراحی کاملاً ریسپانسیو و بهینه‌شده برای استفاده در موبایل، تبلت و دسکتاپ. تجربه کاربری یکسان در تمام دستگاه‌ها.",
      color: "from-[#A8A4FF] to-[#D1495B]"
    },
    {
      icon: Users,
      title: "مدیریت کاربران پیشرفته",
      description: "سیستم مدیریت کاربران با سطح‌بندی مختلف. حسابدار، مدیر، اپراتور و مشتری هر کدام دسترسی‌های مخصوص خود را دارند.",
      color: "from-[#52B788] to-[#F4A261]"
    },
    {
      icon: Database,
      title: "ورودی داده‌ها",
      description: "امکان وارد کردن سانس‌ها به صورت دستی، تک‌تک یا دسته‌ای با فایل Excel. مدیریت آسان و سریع داده‌های حجیم.",
      color: "from-[#4ABDAC] to-[#52B788]"
    },
    {
      icon: Globe,
      title: "مارکت‌پلیس چندمنظوره",
      description: "قابلیت ایجاد مارکت‌پلیس برای چندین کسب‌وکار. هر باشگاه، سینما، تئاتر یا پاساژ می‌تواند پروفایل خود را مدیریت کند.",
      color: "from-[#F4A261] to-[#A8A4FF]"
    },
    {
      icon: Upload,
      title: "ورودی دسته‌ای Excel",
      description: "امکان وارد کردن هزاران سانس به صورت یکجا با فایل Excel. صرفه‌جویی در زمان و کاهش خطای انسانی.",
      color: "from-[#4ABDAC] to-[#52B788]"
    },
    {
      icon: Settings,
      title: "تنظیمات پیشرفته",
      description: "کنترل کامل بر تمام جنبه‌های سیستم: قیمت‌گذاری، تخفیف‌ها، قوانین رزرو و محدودیت‌های زمانی.",
      color: "from-[#F4A261] to-[#A8A4FF]"
    },
    {
      icon: Crown,
      title: "سیستم سطح‌بندی",
      description: "مدیریت کاربران با دسترسی‌های مختلف: مدیر کل، مدیر کسب‌وکار، حسابدار، اپراتور و مشتری.",
      color: "from-[#D1495B] to-[#F4A261]"
    },
    {
      icon: Download,
      title: "گزارش‌گیری جامع",
      description: "خروجی گزارش‌ها در فرمت‌های مختلف: Excel، PDF، CSV. آنالیز کامل عملکرد و درآمد.",
      color: "from-[#52B788] to-[#4ABDAC]"
    },
    {
      icon: Shield,
      title: "امنیت بالا",
      description: "سیستم امنیتی پیشرفته با رمزگذاری داده‌ها و پشتیبان‌گیری خودکار. حفاظت از اطلاعات مشتریان.",
      color: "from-[#4ABDAC] to-[#52B788]"
    }
  ];

  const industries = [
    { 
      icon: Dumbbell, 
      name: "باشگاه‌های ورزشی", 
      color: "from-[#D1495B] to-[#F4A261]",
      description: "مدیریت زمین‌های ورزشی، کلاس‌ها و رزرواسیون",
      examples: ["زمین تنیس", "استخر", "سالن بدنسازی", "کلاس‌های گروهی"],
      image: "/images/industries/sports.svg"
    },
    { 
      icon: Building2, 
      name: "کانترهای ساعتی", 
      color: "from-[#4ABDAC] to-[#52B788]",
      description: "رزرو کانترها و فضاهای کاری ساعتی",
      examples: ["کانتر پاساژ", "اتاق جلسه", "فضای کاری مشترک", "استودیو"],
      image: "/images/industries/counter.svg"
    },
    { 
      icon: Film, 
      name: "سینما", 
      color: "from-[#A8A4FF] to-[#D1495B]",
      description: "مدیریت بلیت‌ها و رزرو صندلی‌ها",
      examples: ["سالن سینما", "تئاتر", "کنسرت", "نمایشگاه"],
      image: "/images/industries/cinema.svg"
    },
    { 
      icon: Theater, 
      name: "تئاتر", 
      color: "from-[#F4A261] to-[#A8A4FF]",
      description: "رزرو صندلی‌ها و مدیریت رویدادها",
      examples: ["سالن تئاتر", "کنسرت", "نمایش", "رویدادهای فرهنگی"],
      image: "/images/industries/theater.svg"
    },
    { 
      icon: Globe, 
      name: "سایر کسب‌وکارها", 
      color: "from-[#52B788] to-[#4ABDAC]",
      description: "هر نوع کسب‌وکاری که نیاز به رزرواسیون دارد",
      examples: ["رستوران", "هتل", "سالن عروسی", "مراکز آموزشی"],
      image: "/images/industries/other.svg"
    }
  ];

  const adminFeatures = [
    {
      title: "داشبورد مدیریت",
      description: "نمای کلی از تمام فعالیت‌ها و آمارهای مهم سیستم",
      image: "/images/admin-panel/dashboard-1.png",
      features: ["آمار رزروها و درآمد", "کاربران فعال", "گزارش‌های تحلیلی", "نمودارهای عملکرد"]
    },
    {
      title: "مدیریت رزروها",
      description: "کنترل کامل بر تمام رزروها و زمان‌بندی‌ها",
      image: "/images/admin-panel/dashboard-2.png",
      features: ["تقویم رزرو", "مدیریت سانس‌ها", "تایید/لغو رزرو", "ارسال یادآوری"]
    },
    {
      title: "مدیریت کاربران",
      description: "کنترل دسترسی‌ها و مدیریت مشتریان با سطح‌بندی",
      image: "/images/admin-panel/dashboard-3.png",
      features: ["لیست کاربران", "سطوح دسترسی", "مدیریت ادمین‌ها", "فعال/غیرفعال کردن"]
    },
    {
      title: "گزارش‌گیری و آنالیز",
      description: "آنالیز کامل عملکرد و درآمد با جزئیات دقیق",
      image: "/images/admin-panel/dashboard-4.png",
      features: ["گزارش‌های مالی", "آمار استفاده", "تحلیل مشتریان", "خروجی Excel"]
    }
  ];

  const stats = [
    { number: "500+", label: "کسب‌وکار فعال", icon: Building2 },
    { number: "50K+", label: "رزرو ماهانه", icon: Calendar },
    { number: "99.9%", label: "آپتایم سیستم", icon: Shield },
    { number: "40%", label: "افزایش درآمد", icon: TrendingUp }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % adminFeatures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [adminFeatures.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F1E9] via-white to-[#F0F0F0]">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-[#A89078]/20"
      >
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
            <motion.button 
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
              className="bg-gradient-to-r from-[#52B788] to-[#4ABDAC] text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              <a href="https://miroteam.ir" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Phone className="w-4 h-4 ml-2" />
                تماس با تیم
              </a>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A89078]/10 via-transparent to-[#4ABDAC]/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-right"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="block text-[#1A3C5E]">خرید سیستم رزرواسیون</span>
                <span className="block bg-gradient-to-r from-[#4ABDAC] to-[#52B788] bg-clip-text text-transparent">
                  پلتفرم رزرو حرفه‌ای
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-[#333333] leading-relaxed">
                <strong>نرم‌افزار رزرواسیون</strong> چندمنظوره برای هر نوع کسب‌وکاری که نیاز به <strong>رزرو آنلاین</strong> دارد. 
                از باشگاه‌های ورزشی تا سینما، تئاتر و کانترهای ساعتی.
                <br />
                <span className="font-semibold text-[#4ABDAC]">افزایش 40% درآمد</span> با <strong>سیستم رزرواسیون هوشمند</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button 
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
                  className="bg-gradient-to-r from-[#52B788] to-[#4ABDAC] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="flex items-center justify-center w-full"
                  >
                    <Play className="w-5 h-5 ml-2" />
                    مشاهده دمو سیستم
                  </button>
                </motion.button>
                <motion.button 
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
                  className="border-2 border-[#4ABDAC] text-[#4ABDAC] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#4ABDAC] hover:text-white transition-all"
                >
                  <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="flex items-center justify-center w-full"
                  >
                    <Phone className="w-5 h-5 ml-2" />
                    تماس برای استعلام قیمت
                  </button>
                </motion.button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: { 
                        duration: 0.6, 
                        delay: index * 0.1,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }
                    }}
                    className="bg-white rounded-xl p-4 shadow-lg"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-[#4ABDAC] to-[#52B788] rounded-lg flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-[#52B788]">{stat.number}</div>
                    <div className="text-sm text-[#333333]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut"
            }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C5E] mb-4">
              برای <span className="bg-gradient-to-r from-[#4ABDAC] to-[#52B788] bg-clip-text text-transparent">هر کسب‌وکاری</span>
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              سیستم رزرواسیون ما برای انواع مختلف کسب‌وکارها طراحی شده است
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut"
              }
            }}
            viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { 
                    duration: 0.3, 
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-[#F8F1E9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                duration: 0.8, 
                ease: "easeOut",
                type: "spring",
                stiffness: 200,
                damping: 20
              }
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C5E] mb-4">
              چرا <span className="bg-gradient-to-r from-[#4ABDAC] to-[#52B788] bg-clip-text text-transparent">رزروپلاس</span> را انتخاب کنید؟
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              سیستم جامع مدیریت رزرواسیون با ویژگی‌های پیشرفته برای رشد کسب‌وکار شما
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut"
              }
            }}
            viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A3C5E] mb-4">{feature.title}</h3>
                <p className="text-[#333333] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                duration: 0.8, 
                ease: "easeOut",
                type: "spring",
                stiffness: 200,
                damping: 20
              }
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C5E] mb-4">
              <span className="bg-gradient-to-r from-[#4ABDAC] to-[#52B788] bg-clip-text text-transparent">مارکت‌پلیس</span> چندمنظوره
            </h2>
            <p className="text-xl text-[#333333] max-w-4xl mx-auto">
              قابلیت ایجاد یک پلتفرم جامع که چندین کسب‌وکار می‌توانند در آن حضور داشته باشند و خدمات خود را ارائه دهند
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-[#F8F1E9] to-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#4ABDAC] to-[#52B788] rounded-lg flex items-center justify-center ml-4">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A3C5E]">مدیریت چندین کسب‌وکار</h3>
                </div>
                <p className="text-[#333333] leading-relaxed">
                  هر باشگاه، سینما، تئاتر یا پاساژ می‌تواند پروفایل اختصاصی خود را داشته باشد و سانس‌های خود را مدیریت کند.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-[#F8F1E9] to-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#F4A261] to-[#A8A4FF] rounded-lg flex items-center justify-center ml-4">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A3C5E]">سطح‌بندی کاربران</h3>
                </div>
                <p className="text-[#333333] leading-relaxed">
                  سیستم مدیریت کاربران با دسترسی‌های مختلف: مدیر کل، مدیر کسب‌وکار، حسابدار، اپراتور و مشتری.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-[#F8F1E9] to-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#D1495B] to-[#F4A261] rounded-lg flex items-center justify-center ml-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A3C5E]">ورودی داده‌ها</h3>
                </div>
                <p className="text-[#333333] leading-relaxed">
                  امکان وارد کردن سانس‌ها به صورت دستی، تک‌تک یا دسته‌ای با فایل Excel برای مدیریت آسان داده‌های حجیم.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#4ABDAC] to-[#52B788] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">مثال‌های کاربردی</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Dumbbell className="w-6 h-6" />
                    <span>چندین باشگاه ورزشی در یک پلتفرم</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Film className="w-6 h-6" />
                    <span>مجموعه‌ای از سینماها و تئاترها</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Building2 className="w-6 h-6" />
                    <span>کانترهای ساعتی در پاساژها</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Theater className="w-6 h-6" />
                    <span>سالن‌های کنسرت و نمایش</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Globe className="w-6 h-6" />
                    <span>هر نوع کسب‌وکاری که نیاز به رزرو دارد</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Admin Panel Section */}
      <section id="admin-panel" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                duration: 0.8, 
                ease: "easeOut",
                type: "spring",
                stiffness: 200,
                damping: 20
              }
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C5E] mb-4">
              پنل مدیریت <span className="bg-gradient-to-r from-[#4ABDAC] to-[#52B788] bg-clip-text text-transparent">حرفه‌ای</span>
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              کنترل کامل بر تمام جنبه‌های سیستم رزرواسیون با رابط کاربری ساده و قدرتمند
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <NextImage
                  src={adminFeatures[currentFeature].image}
                  alt={adminFeatures[currentFeature].title}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            <div className="text-right">
              <h3 className="text-2xl font-bold text-[#1A3C5E] mb-4">
                {adminFeatures[currentFeature].title}
              </h3>
              <p className="text-lg text-[#333333] mb-6">
                {adminFeatures[currentFeature].description}
              </p>
              <div className="space-y-3">
                {adminFeatures[currentFeature].features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center space-x-3 space-x-reverse"
                  >
                    <CheckCircle className="w-5 h-5 text-[#52B788] flex-shrink-0" />
                    <span className="text-[#333333]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 space-x-reverse">
            {adminFeatures.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeature(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentFeature 
                    ? 'bg-[#4ABDAC] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-[#F8F1E9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                duration: 0.8, 
                ease: "easeOut",
                type: "spring",
                stiffness: 200,
                damping: 20
              }
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C5E] mb-4">
              <span className="bg-gradient-to-r from-[#4ABDAC] to-[#52B788] bg-clip-text text-transparent">قیمت‌های مقرون‌به‌صرفه</span>
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto mb-8">
              برای اطلاع از قیمت‌ها و دریافت مشاوره رایگان با ما تماس بگیرید
            </p>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
              onClick={() => setIsContactModalOpen(true)}
              className="bg-gradient-to-r from-[#4ABDAC] to-[#52B788] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5 ml-2 inline" />
              تماس برای استعلام قیمت
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                duration: 0.8, 
                ease: "easeOut",
                type: "spring",
                stiffness: 200,
                damping: 20
              }
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C5E] mb-4">
              نظر <span className="bg-gradient-to-r from-[#4ABDAC] to-[#52B788] bg-clip-text text-transparent">مشتریان</span> ما
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              بیش از 500 کسب‌وکار در سراسر کشور به رزروپلاس اعتماد کرده‌اند
            </p>
          </motion.div>
          
          <motion.div 
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-[#F8F1E9] to-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <NextImage 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="mr-4">
                  <h4 className="font-semibold text-[#1A3C5E]">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-[#333333] text-sm">{testimonials[currentTestimonial].role}</p>
                  <div className="flex items-center mt-1">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-[#4ABDAC] font-medium">{testimonials[currentTestimonial].business}</span>
                    <span className="text-sm text-[#52B788] font-bold mr-2">{testimonials[currentTestimonial].revenue}</span>
                  </div>
                </div>
              </div>
              <p className="text-[#333333] leading-relaxed text-lg">
                &ldquo;{testimonials[currentTestimonial].content}&rdquo;
              </p>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial 
                    ? 'bg-[#4ABDAC] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4ABDAC] to-[#52B788]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                duration: 0.8, 
                ease: "easeOut",
                type: "spring",
                stiffness: 200,
                damping: 20
              }
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              آماده‌اید درآمد کسب‌وکار خود را <span className="text-[#F4A261]">افزایش دهید</span>؟
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              همین امروز شروع کنید و در کمتر از 24 ساعت سیستم رزرواسیون حرفه‌ای را در اختیار داشته باشید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
                className="bg-white text-[#4ABDAC] px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="flex items-center justify-center w-full"
                >
                  <Play className="w-5 h-5 ml-2" />
                  درخواست دمو رایگان
                </button>
              </motion.button>
              <motion.button 
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#4ABDAC] transition-all"
              >
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="flex items-center justify-center w-full"
                >
                  <Phone className="w-5 h-5 ml-2" />
                  تماس برای استعلام قیمت
                </button>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1A3C5E] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-2xl bg-gradient-to-r from-[#A89078] to-[#4ABDAC] bg-clip-text text-transparent mb-4">
                رزروپلاس
              </div>
              <p className="text-gray-300 mb-4">سیستم رزرواسیون چندمنظوره برای مدیریت هوشمند کسب‌وکارها</p>
              <div className="flex space-x-4 space-x-reverse">
                <a href="https://miroteam.ir" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="mailto:info@miroteam.ir" className="text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">دسترسی سریع</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">خانه</a></li>
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">ویژگی‌ها</a></li>
                <li><a href="#admin-panel" className="text-gray-300 hover:text-white transition-colors">پنل مدیریت</a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">قیمت‌ها</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">مشتریان</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">اطلاعات تماس</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <MapPin className="w-4 h-4 text-[#4ABDAC]" />
                  <span className="text-gray-300">تهران، ایران</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Globe className="w-4 h-4 text-[#4ABDAC]" />
                  <a href="https://miroteam.ir" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">miroteam.ir</a>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Phone className="w-4 h-4 text-[#4ABDAC]" />
                  <span className="text-gray-300">09123456789</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Mail className="w-4 h-4 text-[#4ABDAC]" />
                  <span className="text-gray-300">info@miroteam.ir</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">شبکه‌های اجتماعی</h3>
              <div className="flex space-x-4 space-x-reverse">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">اینستاگرام</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">تلگرام</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 رزروپلاس. تمامی حقوق محفوظ است.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              این سیستم توسط <a href="https://miroteam.ir" target="_blank" rel="noopener noreferrer" className="text-[#4ABDAC] hover:text-white transition-colors">@miroteam.ir</a> طراحی و توسعه یافته است.
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsContactModalOpen(false)}
          >
            <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.4, 
                ease: "easeOut",
                type: "spring",
                stiffness: 300,
                damping: 30
              }
            }}
            exit={{ 
              scale: 0.8, 
              opacity: 0, 
              y: 50,
              transition: { duration: 0.2, ease: "easeIn" }
            }}
              className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
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
                <div className="grid grid-cols-2 gap-4">
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

                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    transition: { duration: 0.1 }
                  }}
                  className="w-full bg-gradient-to-r from-[#4ABDAC] to-[#52B788] text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  ارسال درخواست
                </motion.button>
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
