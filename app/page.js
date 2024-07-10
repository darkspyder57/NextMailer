"use client"

import React, { useState, useEffect, useRef } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const timeoutRef = useRef(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Clean up timeout on component unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
  
      if (response.ok) {
        setStatus("Submitted!");
        setName("");
        setEmail("");
        setMessage("");
        const submit = document.getElementById('submit-btn');
        submit.textContent = 'Success';
        submit.classList.add('success');
  
        timeoutRef.current = setTimeout(() => {
          submit.textContent = 'Send Message';
          submit.classList.remove('success');
        }, 2000);
        console.log({
          name:name,
          email:email,
          message: message
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} name="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} required />
        <input type="email" value={email} name="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} required />
        <textarea value={message} name="message" rows="4" placeholder="Your Message" onChange={(e) => setMessage(e.target.value)} required></textarea>
        <button type="submit" id="submit-btn">Send Message</button>
      </form>
    </div>
  );
}
