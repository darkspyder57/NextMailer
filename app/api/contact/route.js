import { NextResponse } from 'next/server';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { transporter } from '@/app/utils/mailSender.utils';


export async function POST(req) {
    const { name, email, message } = await req.json();

    try {
      // Store data in Firebase Firestore
      const docRef = await addDoc(collection(db, 'contacts'), {
        name,
        email,
        message,
        timestamp: new Date(),
      });

      
      await transporter.sendMail({
        from: process.env.NEXT_PUBLIC_MAIL_USER,
        to: email,  // Send to the email provided by the user
        subject: 'Thank you for contacting us',
        text: `Hello ${name},\n\nThank you for reaching out to us. We have received your message:\n\n"${message}"\n\nWe will get back to you shortly.\n\nBest regards,\nYour Company`,
      });

      return NextResponse.json({
        id: docRef.id,
        message: "Message sent successfully!!!"
      });


    } catch (error) {
      console.error("Error adding document: ",error);
      return NextResponse.json({error: "Failed to send message"},
        {status: 500}
      );
    }
  } 
