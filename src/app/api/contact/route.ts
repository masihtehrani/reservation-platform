import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, message, timestamp, source } = body;

    // Validate required fields
    if (!firstName || !lastName || !phone) {
      return NextResponse.json(
        { error: 'نام، نام خانوادگی و شماره تماس الزامی است' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
درخواست تماس جدید از وب‌سایت رزروپلاس

اطلاعات تماس:
- نام: ${firstName} ${lastName}
- شماره تماس: ${phone}
- ایمیل: ${email || 'ارسال نشده'}
- پیام: ${message || 'پیام خاصی ارسال نشده'}

اطلاعات فنی:
- زمان: ${timestamp}
- منبع: ${source}
- IP: ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'نامشخص'}
- User Agent: ${request.headers.get('user-agent') || 'نامشخص'}

لطفاً در اسرع وقت با این مشتری تماس بگیرید.
    `;

    // Send email using Nodemailer (you need to install: npm install nodemailer)
    // For now, we'll use a simple email service
    const emailData = {
      to: 'info@miroteam.ir',
      subject: `درخواست تماس جدید از ${firstName} ${lastName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>')
    };

    // Log the email data (in production, send actual email)
    console.log('Email to be sent:', emailData);
    
    // In production, you would send the email here
    // Example with Nodemailer:
    // const transporter = nodemailer.createTransporter({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS
    //   }
    // });
    // await transporter.sendMail(emailData);

    return NextResponse.json(
      { 
        success: true, 
        message: 'درخواست با موفقیت ارسال شد' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'خطا در پردازش درخواست' },
      { status: 500 }
    );
  }
}
