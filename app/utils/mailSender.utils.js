import nodemailer from 'nodemailer'
export const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_MAIL_HOST,
    port: process.env.NEXT_PUBLIC_MAIL_PORT,
    secure: false,
    auth:{
        user: process.env.NEXT_PUBLIC_MAIL_USER,
        pass: process.env.NEXT_PUBLIC_MAIL_PASS
    }
});