"use client";

import { useState } from "react";
import {
  Mail,
  User,
  Building2,
  FileText,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");
    setErrorMessage("");

    try {
      setLoading(true);

      // Attempt write to Firestore
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      // Even if firestore client write encounters local rules or offline mode,
      // fallback to internal API route
      try {
        const res = await fetch("/api/contacts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          setStatus("success");
          setFormData({
            name: "",
            email: "",
            company: "",
            service: "",
            message: "",
          });
          return;
        }
      } catch (apiErr) {
        console.error("API fallback error:", apiErr);
      }

      setStatus("error");
      setErrorMessage("Unable to submit message at this moment. Please email contact@masglobalai.com directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
      {status === "success" && (
        <div className="sm:col-span-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-300 flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-emerald-400" />
          <div className="text-sm">
            <p className="font-semibold text-emerald-200">Inquiry Received</p>
            <p className="mt-1 text-emerald-300/90 text-xs">
              Thank you for reaching out. Our engineering team in Hyderabad will review your project requirements and respond within one business day under strict NDA.
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="sm:col-span-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-rose-300 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-rose-400" />
          <div className="text-sm">
            <p className="font-semibold text-rose-200">Submission Notice</p>
            <p className="mt-1 text-rose-300/90 text-xs">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* NAME */}
      <div className="relative">
        <label className="absolute left-3.5 top-2.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. John Doe"
          required
          className="w-full rounded-xl border border-slate-800 bg-slate-900/60 pl-3.5 pr-10 pt-6 pb-2.5 text-sm text-white placeholder-slate-600 focus:border-indigo-500 focus:bg-slate-900 focus:outline-none transition-colors"
        />
        <User className="absolute right-3.5 bottom-3 h-4 w-4 text-slate-500" />
      </div>

      {/* EMAIL */}
      <div className="relative">
        <label className="absolute left-3.5 top-2.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
          Work Email *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@company.com"
          required
          className="w-full rounded-xl border border-slate-800 bg-slate-900/60 pl-3.5 pr-10 pt-6 pb-2.5 text-sm text-white placeholder-slate-600 focus:border-indigo-500 focus:bg-slate-900 focus:outline-none transition-colors"
        />
        <Mail className="absolute right-3.5 bottom-3 h-4 w-4 text-slate-500" />
      </div>

      {/* COMPANY */}
      <div className="relative">
        <label className="absolute left-3.5 top-2.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
          Company / Organization
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="e.g. Acme Corporation"
          className="w-full rounded-xl border border-slate-800 bg-slate-900/60 pl-3.5 pr-10 pt-6 pb-2.5 text-sm text-white placeholder-slate-600 focus:border-indigo-500 focus:bg-slate-900 focus:outline-none transition-colors"
        />
        <Building2 className="absolute right-3.5 bottom-3 h-4 w-4 text-slate-500" />
      </div>

      {/* SERVICE */}
      <div className="relative">
        <label className="absolute left-3.5 top-2.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
          Primary Area of Interest
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-800 bg-slate-900/60 pl-3.5 pr-10 pt-6 pb-2.5 text-sm text-white focus:border-indigo-500 focus:bg-slate-900 focus:outline-none transition-colors appearance-none cursor-pointer"
        >
          <option value="" className="bg-slate-900 text-slate-400">Select capability...</option>
          <option value="AI & Machine Learning" className="bg-slate-900 text-white">AI & Machine Learning Solutions</option>
          <option value="Custom Software Development" className="bg-slate-900 text-white">Custom Software Engineering</option>
          <option value="Cloud & DevOps Architecture" className="bg-slate-900 text-white">Cloud Infrastructure & DevOps</option>
          <option value="Enterprise Web Applications" className="bg-slate-900 text-white">Enterprise Web Platforms</option>
          <option value="Intelligent OCR & Automation" className="bg-slate-900 text-white">Intelligent Document & OCR Systems</option>
          <option value="Architecture Advisory" className="bg-slate-900 text-white">Technical Architecture Advisory</option>
        </select>
        <FileText className="absolute right-3.5 bottom-3 h-4 w-4 text-slate-500 pointer-events-none" />
      </div>

      {/* MESSAGE */}
      <div className="sm:col-span-2 relative">
        <label className="absolute left-3.5 top-2.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
          Project Scope & Technical Requirements *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe your project objectives, target timeline, and tech stack requirements..."
          rows={5}
          required
          className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-3.5 pt-7 pb-3 text-sm text-white placeholder-slate-600 focus:border-indigo-500 focus:bg-slate-900 focus:outline-none transition-colors resize-none"
        />
      </div>

      {/* SUBMIT BUTTON */}
      <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
        <span className="text-xs text-slate-500">
          All inquiries are protected by standard mutual confidentiality.
        </span>
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-indigo-600/20 transition-all duration-200 active:scale-[0.98] disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Send Technical Inquiry"}
          <Send className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;