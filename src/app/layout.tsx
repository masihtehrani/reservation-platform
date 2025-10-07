import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'

const vazir = Vazirmatn({
  subsets: ['arabic'],
  variable: '--font-vazir',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'رزروپلاس - سیستم رزرواسیون چندمنظوره | خرید سیستم رزرواسیون | پلتفرم رزرو | افزایش 40% درآمد',
  description: 'خرید سیستم رزرواسیون حرفه‌ای برای باشگاه‌های ورزشی، سینما، تئاتر، کانترهای ساعتی. پلتفرم رزرو آنلاین با پنل مدیریت پیشرفته. افزایش 40% درآمد با مدیریت پیشرفته رزروها.',
  keywords: 'خرید سیستم رزرواسیون, سیستم رزرواسیون, پلتفرم رزرو, رزرو آنلاین, مدیریت باشگاه, سینما, تئاتر, کانتر ساعتی, افزایش درآمد, پنل مدیریت, نرم‌افزار رزرواسیون, سیستم رزرو, پلتفرم رزرواسیون, رزرواسیون آنلاین, مدیریت رزرو, سیستم رزرواسیون باشگاه, سیستم رزرواسیون سینما, سیستم رزرواسیون تئاتر, رزرواسیون پیشرفته, پنل مدیریت رزرو',
  authors: [{ name: 'رزروپلاس' }],
  creator: 'رزروپلاس',
  publisher: 'رزروپلاس',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://reservplus.ir'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'رزروپلاس - سیستم رزرواسیون چندمنظوره',
    description: 'سیستم رزرواسیون چندمنظوره برای هر نوع کسب‌وکاری. افزایش 40% درآمد با مدیریت پیشرفته رزروها.',
    url: 'https://reservplus.ir',
    siteName: 'رزروپلاس',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'رزروپلاس - سیستم رزرواسیون چندمنظوره',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'رزروپلاس - سیستم رزرواسیون چندمنظوره',
    description: 'سیستم رزرواسیون چندمنظوره برای هر نوع کسب‌وکاری. افزایش 40% درآمد با مدیریت پیشرفته رزروها.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </head>
      <body className={`${vazir.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}