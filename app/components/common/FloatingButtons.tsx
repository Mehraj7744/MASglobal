"use client"
import React, { useState } from "react";
import { X, Send, PhoneCall, CheckCircle2, Headphones } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingLeadButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate API lead generation submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
      setIsOpen(false);
    }, 2500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans antialiased">
      
      {/* Expanded Interactive Action Panel */}
      {isOpen && (
        <div className="w-80 overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-primary p-4 text-primary-foreground">
            <h4 className="font-bold tracking-tight text-sm">Let&apos;s Build Something Great</h4>
            <p className="text-xs opacity-80 mt-1">Drop your email below, or message us instantly.</p>
          </div>

          {/* Panel Body */}
          <div className="p-4 space-y-4">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in duration-300">
                <CheckCircle2 className="h-10 w-10 text-emerald-500 animate-bounce" />
                <p className="mt-2 text-sm font-semibold">Inquiry Received!</p>
                <p className="text-xs text-muted-foreground mt-1">Our team will reach out within 2 hours.</p>
              </div>
            ) : (
              <>
                {/* Micro Lead Form */}
                <form onSubmit={handleSubmit} className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Get a Custom Quote
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      required
                      placeholder="Enter your business email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground outline-none focus:border-ring/50 transition-all pr-10"
                    />
                    <button
                      type="submit"
                      className="absolute right-1.5 p-1.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all"
                    >
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </form>

                <div className="relative flex items-center justify-center my-2">
                  <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border" /></div>
                  <span className="relative bg-card px-2 text-[10px] uppercase text-muted-foreground tracking-widest">Or</span>
                </div>

                {/* Instant Messaging Channels */}
                <div className="grid grid-cols-2 gap-2">
                  {/* WhatsApp Integration - Critical for high-conversion Indian/International closure */}
                  <a
                    href="https://wa.me/918862065378?text=Hello%2c+I+am+interested+in+your+services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-border bg-emerald-500/10 dark:bg-emerald-500/5 hover:bg-emerald-500/20 px-3 py-2.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 transition-all"
                  >
                    <FaWhatsapp className="h-4 w-4" />
                    WhatsApp
                  </a>

                  {/* Direct Call Route */}
                  <a
                    href="tel:+918862065378"
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-border bg-secondary hover:bg-muted px-3 py-2.5 text-xs font-semibold text-secondary-foreground transition-all"
                  >
                    <PhoneCall className="h-3.5 w-3.5 text-muted-foreground" />
                    Call Us
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Main Core Floating Core Trigger Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex h-14 items-center justify-center gap-2 rounded-full px-4 shadow-xl transition-all duration-300 active:scale-95 ${
          isOpen
            ? "w-14 bg-card text-card-foreground border border-border hover:bg-muted"
            : "w-auto bg-primary text-primary-foreground hover:shadow-primary/20 shadow-2xl"
        }`}
      >
        <div className="relative h-6 w-6 flex items-center justify-center">
          {isOpen ? (
            <X className="absolute h-5 w-5 animate-in spin-in-90 duration-200" />
          ) : (
            <Headphones className="absolute h-5 w-5 animate-in font-bold fade-in duration-200 group-hover:scale-110 transition-transform" />
          )}
        </div>
        
        {/* Expanding Pill Label (Disappears smoothly on open state) */}
        {!isOpen && (
          <span className="max-w-0 overflow-hidden text-sm font-bold tracking-wide whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease-in-out pr-1">
            Talk to an Expert
          </span>
        )}
      </button>

    </div>
  );
};

export default FloatingLeadButtons;