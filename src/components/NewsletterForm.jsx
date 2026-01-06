"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  async function onSubmit(e) {
    e.preventDefault();

    try {
      setStatus("loading");

      // mock de envio
      await new Promise((r) => setTimeout(r, 400));

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <form
        className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center"
        onSubmit={onSubmit}
      >
        <label className="sr-only" htmlFor="newsletter-email">
          Seu email
        </label>

        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu email"
          className="h-9 w-full rounded-md bg-white/5 px-3 text-sm text-white placeholder:text-white/35 border border-white/10 outline-none focus:ring-2 focus:ring-white/15"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="h-9 w-full sm:w-auto shrink-0 rounded-md bg-white/10 px-4 text-xs font-semibold text-white/85 border border-white/10 hover:bg-white/14 transition disabled:opacity-60"
        >
          {status === "loading" ? "Enviando..." : "Inscrever"}
        </button>
      </form>

      {status === "success" && (
        <p className="mt-3 text-[10px] text-white/60">Inscrição confirmada.</p>
      )}

      {status === "error" && (
        <p className="mt-3 text-[10px] text-white/60">
          Não foi possível inscrever agora. Tente novamente.
        </p>
      )}
    </>
  );
}
