
"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import {
  Lock,
  Mail,
  Loader2,
} from "lucide-react";

const LoginPage = () => {

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  // HANDLE INPUT CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // HANDLE LOGIN
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await fetch(
        "/api/admin/login",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            formData
          ),
        }
      );

      const data =
        await response.json();

      console.log(
        "API Response:",
        data
      );

      // LOGIN SUCCESS
      if (data.success) {

        const adminEmail =
          data?.admin?.email ||
          data?.email ||
          formData.email;

        // STORE EMAIL
        localStorage.setItem(
          "admin_email",
          adminEmail
        );

        console.log(
          "Stored Email:",
          adminEmail
        );

        // REDIRECT
        router.push("/admin");

      } else {

        alert(
          data.message ||
          "Invalid credentials"
        );
      }

    } catch (error) {

      console.log(error);

      alert(
        "Something went wrong"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground transition-colors">

      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-2xl">

        {/* HEADER */}
        <div className="mb-8 text-center">

          <h1 className="text-3xl font-black tracking-tight">
            Admin Login
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Secure dashboard access
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* EMAIL */}
          <div>

            <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
              Email
            </label>

            <div className="relative">

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@gmail.com"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 pl-11 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />

              <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            </div>
          </div>

          {/* PASSWORD */}
          <div>

            <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
              Password
            </label>

            <div className="relative">

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 pl-11 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />

              <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground transition-all hover:opacity-90 disabled:opacity-60"
          >

            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Logging in...
              </>
            ) : (
              "Login"
            )}

          </button>

        </form>
      </div>
    </section>
  );
};

export default LoginPage;

