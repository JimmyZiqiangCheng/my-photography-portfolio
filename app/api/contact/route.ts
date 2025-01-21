import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Log environment variable status (don't log the actual value)
    console.log('Email password exists:', !!process.env.EMAIL_PASSWORD);
    console.log('Email password length:', process.env.EMAIL_PASSWORD?.length);

    if (!process.env.EMAIL_PASSWORD) {
      throw new Error('EMAIL_PASSWORD is not defined in environment variables');
    }

    console.log('Creating transport...'); // Debug log
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'chengziqiang@gmail.com',
        pass: process.env.EMAIL_PASSWORD
      },
      debug: true, // Add debug option
      logger: true // Add logger option
    });

    console.log('Verifying transport...'); // Debug log
    try {
      await transporter.verify();
      console.log('Transport verified successfully'); // Debug log
    } catch (verifyError: any) {
      console.error('Transport verification failed:', {
        message: verifyError.message,
        code: verifyError.code,
        response: verifyError.response,
        stack: verifyError.stack
      });
      throw verifyError;
    }

    const mailOptions = {
      from: '"Contact Form" <chengziqiang@gmail.com>',
      to: 'chengziqiang@gmail.com',
      subject: `Contact Form: ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `<h3>New Contact Form Submission</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong></p><p>${message}</p>`
    };

    console.log('Attempting to send mail with options:', {
      ...mailOptions,
      auth: 'REDACTED' // Don't log auth details
    });

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Mail sent successfully:', info);
      return NextResponse.json({ message: 'Email sent successfully', info }, { status: 200 });
    } catch (sendError: any) {
      console.error('Send mail error:', {
        message: sendError.message,
        code: sendError.code,
        response: sendError.response,
        stack: sendError.stack
      });
      return NextResponse.json({
        error: 'Failed to send email',
        details: sendError.message,
        code: sendError.code
      }, { status: 500 });
    }
  } catch (error: any) {
    console.error('General error:', {
      message: error.message,
      code: error.code,
      response: error.response,
      stack: error.stack
    });
    return NextResponse.json({
      error: 'Server error',
      details: error.message,
      code: error.code
    }, { status: 500 });
  }
} 