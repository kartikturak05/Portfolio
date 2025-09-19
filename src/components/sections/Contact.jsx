import React, { useState } from "react";
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  

  const handleSubmit = (e) => {
  e.preventDefault();

  const emailData = {
    from_name: formData.name,
    reply_to: formData.email,
    subject: formData.subject,
    message: formData.message,
  };

  emailjs
    .send(
      import.meta.env.VITE_SERVICEID,
      import.meta.env.VITE_TEMPLATEID,
      emailData,
      import.meta.env.VITE_PUBLICKEY
    )
    .then(
      (result) => {
        console.log("Email successfully sent!", result.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      (error) => {
        console.error("Failed to send email", error.text);
        alert("Something went wrong, please try again.");
      }
    );
};


  return (
    <div className=" bg-black text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Contact Info */}
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-8">Reach Out</h1>
            </div>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600">
                  <Mail className="w-6 h-6 text-slate-300" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm">Email</div>
                  <a className="text-white text-lg" href="mailto:kartikturak1@gmail.com">
                    kartikturak1@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center space-x-6">
                <a className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600" href="https://www.linkedin.com/in/kartik-turak/">
                  <Linkedin className="w-6 h-6 text-slate-300" />
                </a>
                <div>
                  <div className="text-slate-400 text-sm">LinkedIn</div>
                  <div className="text-white text-lg">Kartik Turak</div>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center space-x-6">
                <a className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600" href="https://github.com/kartikturak05">
                  <Github className="w-6 h-6 text-slate-300" />
                </a>
                <div>
                  <div className="text-slate-400 text-sm">GitHub</div>
                  <div className="text-white text-lg">kartikturak05</div>
                </div>
              </div>

              {/* Twitter */}
              <div className="flex items-center space-x-6">
                <a className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600" href="https://x.com/KartikTurak05">
                  <Twitter className="w-6 h-6 text-slate-300" />
                </a>
                <div>
                  <div className="text-slate-400 text-sm">Twitter</div>
                  <div className="text-white text-lg">@KartikTurak05</div>
                </div>
              </div>
            </div>

            <div className="mt-16 space-y-2">
              <div className="text-slate-400">
                Based in Nagpur, Maharashtra, India
              </div>
              <div className="text-slate-400">
                Available for freelance opportunities and full-time positions.
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:pl-8">
            <div className="space-y-6">
              {/* Name and Email Row */}
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-slate-400 text-sm mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-slate-400 text-sm mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    required
                  ></textarea>
                </div>
              </form>

              {/* Response Time */}
              <div className="text-slate-400 text-sm">
                I'll respond within 24-48 hours
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-slate-200 transition-colors group"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
