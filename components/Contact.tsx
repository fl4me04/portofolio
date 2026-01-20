"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Copy, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const myEmail = "fl4mes04@gmail.com";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: "", email: "", message: "" });

      setTimeout(() => setIsSent(false), 3000);
    }, 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-32 px-4 max-w-7xl mx-auto relative z-20 scroll-mt-15 md:scroll-mt-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-0"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Connect.
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
            Have a project in mind or just want to discuss the latest tech?
            I&apos;m always open to new opportunities and interesting
            conversations.
          </p>

          <div className="space-y-4 md:space-y-6">
            <div
              onClick={handleCopyEmail}
              className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 cursor-pointer transition-all active:scale-95"
            >
              <div className="p-3 rounded-full bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Mail me at</p>
                <p className="text-white font-medium text-base md:text-lg break-all">
                  {myEmail}
                </p>
              </div>
              <div className="text-gray-500 group-hover:text-white transition-colors">
                {copied ? (
                  <CheckCircle size={20} className="text-green-500" />
                ) : (
                  <Copy size={20} />
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="p-3 rounded-full bg-purple-500/20 text-purple-400">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Based in</p>
                <p className="text-white font-medium text-base md:text-lg">
                  Jakarta, Indonesia
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl"
        >
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white placeholder-gray-600 transition-all text-sm md:text-base"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white placeholder-gray-600 transition-all text-sm md:text-base"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white placeholder-gray-600 transition-all resize-none text-sm md:text-base"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSent}
              className={`w-full py-3 md:py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                isSent
                  ? "bg-green-500 text-white cursor-default"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] text-white"
              }`}
            >
              {isSubmitting ? (
                <span className="animate-pulse">Sending...</span>
              ) : isSent ? (
                <>
                  Sent Successfully <CheckCircle size={20} />
                </>
              ) : (
                <>
                  Send Message <Send size={20} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
