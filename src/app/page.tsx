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

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-[#F8F1E9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C5E] mb-4">
              چرا <span className="bg-gradient-to-r from-[#4ABDAC] to-[#52B788] bg-clip-text text-transparent">رزروپلاس</span> را انتخاب کنید؟
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              سیستم جامع مدیریت رزرواسیون با ویژگی‌های پیشرفته برای رشد کسب‌وکار شما
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-[#52B788] to-[#4ABDAC] rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A3C5E] mb-4">رزرو 24/7</h3>
              <p className="text-[#333333] leading-relaxed">امکان رزرو در هر ساعت از شبانه‌روز بدون نیاز به پشتیبانی دستی</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-[#F4A261] to-[#A8A4FF] rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A3C5E] mb-4">مدیریت خودکار</h3>
              <p className="text-[#333333] leading-relaxed">کاهش 60% زمان مدیریت با اتوماسیون کامل فرایندهای رزرو</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D1495B] to-[#F4A261] rounded-lg flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A3C5E] mb-4">پرداخت آنلاین</h3>
              <p className="text-[#333333] leading-relaxed">پرداخت امن و سریع از طریق درگاه‌های معتبر</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4ABDAC] to-[#52B788] rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A3C5E] mb-4">گزارش‌های دقیق</h3>
              <p className="text-[#333333] leading-relaxed">دسترسی به گزارش‌های جامع از عملکرد کسب‌وکار</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-[#A8A4FF] to-[#D1495B] rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A3C5E] mb-4">100% ریسپانسیو</h3>
              <p className="text-[#333333] leading-relaxed">طراحی کاملاً ریسپانسیو برای موبایل، تبلت و دسکتاپ</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-[#52B788] to-[#F4A261] rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A3C5E] mb-4">مدیریت کاربران</h3>
              <p className="text-[#333333] leading-relaxed">سیستم مدیریت کاربران با سطح‌بندی مختلف</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4ABDAC] to-[#52B788] rounded-lg flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A3C5E] mb-4">ورودی داده‌ها</h3>
              <p className="text-[#333333] leading-relaxed">امکان وارد کردن سانس‌ها به صورت دستی، تک‌تک یا دسته‌ای با فایل Excel</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-[#F4A261] to-[#A8A4FF] rounded-lg flex items-center justify-center mb-6">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A3C5E] mb-4">ورودی دسته‌ای Excel</h3>
              <p className="text-[#333333] leading-relaxed">امکان وارد کردن هزاران سانس به صورت یکجا با فایل Excel</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D1495B] to-[#F4A261] rounded-lg flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A3C5E] mb-4">تنظیمات پیشرفته</h3>
              <p className="text-[#333333] leading-relaxed">کنترل کامل بر تمام جنبه‌های سیستم: قیمت‌گذاری، تخفیف‌ها، قوانین رزرو</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-[#A8A4FF] to-[#D1495B] rounded-lg flex items-center justify-center mb-6">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A3C5E] mb-4">سیستم سطح‌بندی</h3>
              <p className="text-[#333333] leading-relaxed">مدیریت کاربران با دسترسی‌های مختلف: مدیر کل، مدیر کسب‌وکار، حسابدار، اپراتور و مشتری</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-[#52B788] to-[#4ABDAC] rounded-lg flex items-center justify-center mb-6">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A3C5E] mb-4">گزارش‌گیری جامع</h3>
              <p className="text-[#333333] leading-relaxed">خروجی گزارش‌ها در فرمت‌های مختلف: Excel، PDF، CSV. آنالیز کامل عملکرد و درآمد</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="py-20 bg-gradient-to-br from-[#F8F1E9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C5E] mb-4">
              <span className="bg-gradient-to-r from-[#4ABDAC] to-[#52B788] bg-clip-text text-transparent">مارکت‌پلیس</span> چندمنظوره
            </h2>
            <p className="text-xl text-[#333333] max-w-4xl mx-auto">
              قابلیت ایجاد یک پلتفرم جامع که چندین کسب‌وکار می‌توانند در آن حضور داشته باشند و خدمات خود را ارائه دهند
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
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
            </div>
            
            <div className="relative">
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
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-[#52B788] to-[#4ABDAC]"></div>

      {/* Admin Panel Section */}
      <section id="admin-panel" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C5E] mb-4">
              پنل مدیریت <span className="bg-gradient-to-r from-[#4ABDAC] to-[#52B788] bg-clip-text text-transparent">حرفه‌ای</span>
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              کنترل کامل بر تمام جنبه‌های سیستم رزرواسیون با رابط کاربری ساده و قدرتمند
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <NextImage
                  src="/images/admin-panel/dashboard-1.png"
                  alt="داشبورد مدیریت"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            <div className="text-right">
              <h3 className="text-2xl font-bold text-[#1A3C5E] mb-4">داشبورد مدیریت</h3>
              <p className="text-lg text-[#333333] mb-6">
                نمای کلی از تمام فعالیت‌ها و آمارهای مهم سیستم
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-[#52B788] flex-shrink-0" />
                  <span className="text-[#333333]">آمار رزروها و درآمد</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-[#52B788] flex-shrink-0" />
                  <span className="text-[#333333]">کاربران فعال</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-[#52B788] flex-shrink-0" />
                  <span className="text-[#333333]">گزارش‌های تحلیلی</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="w-5 h-5 text-[#52B788] flex-shrink-0" />
                  <span className="text-[#333333]">نمودارهای عملکرد</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-[#4ABDAC] to-[#52B788]"></div>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-[#F0F8FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C5E] mb-4">
              نظر <span className="bg-gradient-to-r from-[#4ABDAC] to-[#52B788] bg-clip-text text-transparent">مشتریان</span> ما
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto">
              بیش از 500 کسب‌وکار در سراسر کشور به رزروپلاس اعتماد کرده‌اند
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-[#F8F1E9] to-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <NextImage 
                  src="/images/industries/sports.svg" 
                  alt="علیرضا محمدی"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="mr-4">
                  <h4 className="font-semibold text-[#1A3C5E]">علیرضا محمدی</h4>
                  <p className="text-[#333333] text-sm">مدیر باشگاه ورزشی اسپرت</p>
                  <div className="flex items-center mt-1">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-[#4ABDAC] font-medium">باشگاه ورزشی</span>
                    <span className="text-sm text-[#52B788] font-bold mr-2">+45%</span>
                  </div>
                </div>
              </div>
              <p className="text-[#333333] leading-relaxed text-lg">
                "بعد از استفاده از سیستم رزرواسیون، درآمد باشگاه ما 45% افزایش یافت. سیستم بسیار کاربرپسند و پشتیبانی عالی است."
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#F8F1E9] to-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <NextImage 
                  src="/images/industries/counter.svg" 
                  alt="سارا احمدی"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="mr-4">
                  <h4 className="font-semibold text-[#1A3C5E]">سارا احمدی</h4>
                  <p className="text-[#333333] text-sm">مدیر کانتر ساعتی پاساژ</p>
                  <div className="flex items-center mt-1">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-[#4ABDAC] font-medium">کانتر ساعتی</span>
                    <span className="text-sm text-[#52B788] font-bold mr-2">+60%</span>
                  </div>
                </div>
              </div>
              <p className="text-[#333333] leading-relaxed text-lg">
                "سیستم بسیار پیشرفته و در عین حال ساده است. مشتریان ما از رزرو آنلاین راضی هستند و ما زمان بیشتری برای مدیریت بهتر داریم."
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#F8F1E9] to-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <NextImage 
                  src="/images/industries/cinema.svg" 
                  alt="حسین رضایی"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="mr-4">
                  <h4 className="font-semibold text-[#1A3C5E]">حسین رضایی</h4>
                  <p className="text-[#333333] text-sm">صاحب کمپلکس سینما</p>
                  <div className="flex items-center mt-1">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-[#4ABDAC] font-medium">سینما</span>
                    <span className="text-sm text-[#52B788] font-bold mr-2">+35%</span>
                  </div>
                </div>
              </div>
              <p className="text-[#333333] leading-relaxed text-lg">
                "سیستم به ما کمک کرد کسب‌وکار خود را به شکل حرفه‌ای مدیریت کنیم. گزارش‌های دقیق و آنالیز داده‌ها بسیار مفید است."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-[#4ABDAC] to-[#52B788]"></div>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-[#F8F1E9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3C5E] mb-4">
              <span className="bg-gradient-to-r from-[#4ABDAC] to-[#52B788] bg-clip-text text-transparent">قیمت‌های مقرون‌به‌صرفه</span>
            </h2>
            <p className="text-xl text-[#333333] max-w-3xl mx-auto mb-8">
              برای اطلاع از قیمت‌ها و دریافت مشاوره رایگان با ما تماس بگیرید
            </p>
            
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-gradient-to-r from-[#4ABDAC] to-[#52B788] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5 ml-2 inline" />
              تماس برای استعلام قیمت
            </button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-[#52B788] to-[#4ABDAC]"></div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4ABDAC] to-[#52B788]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            آماده‌اید درآمد کسب‌وکار خود را <span className="text-[#F4A261]">افزایش دهید</span>؟
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            همین امروز شروع کنید و در کمتر از 24 ساعت سیستم رزرواسیون حرفه‌ای را در اختیار داشته باشید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-white text-[#4ABDAC] px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center w-full"
            >
              <Play className="w-5 h-5 ml-2" />
              درخواست دمو رایگان
            </button>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#4ABDAC] transition-all flex items-center justify-center w-full"
            >
              <Phone className="w-5 h-5 ml-2" />
              تماس برای استعلام قیمت
            </button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-[#4ABDAC] to-[#52B788]"></div>

      {/* Footer */}
      <footer id="contact" className="bg-[#1A3C5E] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="font-bold text-2xl bg-gradient-to-r from-[#A89078] to-[#4ABDAC] bg-clip-text text-transparent mb-4">
                رزروپلاس
              </div>
              <p className="text-gray-300 mb-4">سیستم رزرواسیون چندمنظوره برای مدیریت پیشرفته کسب‌وکارها</p>
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
