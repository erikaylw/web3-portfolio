"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socials = [
    {
      name: "Twitter / X",
      handle: "@boahamncook",
      url: "https://x.com/boahamncook",
      icon: "𝕏",
    },
    {
      name: "Telegram",
      handle: "t.me/baelcalls",
      url: "https://t.me/baelcalls",
      icon: "✈",
    },
  ];

  const projects = [
    {
      title: "Content Creation — Twitter / X",
      desc: "Crypto & finance content with 25K+ tweets, 4.5K followers. Verified account (@boahamncook). Daily market analysis, DeFi education, tax breakdowns, and alpha threads.",
      tags: ["Crypto", "DeFi", "Market Analysis", "Threads"],
      stat: "4.5K+",
      statLabel: "Followers",
    },
    {
      title: "Telegram Signal Channel",
      desc: "Curated crypto signals and market insights delivered to subscribers via t.me/baelcalls.",
      tags: ["Signals", "Alpha", "Community"],
      stat: "Active",
      statLabel: "Channel",
    },
    {
      title: "DeFi — LP Operations",
      desc: "Running Unicrit LP bot on Ethereum/BSC/Base. Meridian Solana DLMM operations. Liquidity provisioning and yield optimization across chains.",
      tags: ["DeFi", "Liquidity", "Solana", "EVM"],
    },
  ];

  const experiences = [
    {
      role: "Account Manager & Community",
      company: "Bitget Wallet",
      period: "Feb 2025 — Present",
      desc: "Indonesia Moderator for one of the largest non-custodial Web3 wallets (60M+ users). Handling user support, app-related issues, cross-project collaborations, and KOL partnerships across the Indonesian market.",
      tags: ["Community", "Account Management", "KOL", "Web3"],
      active: true,
    },
    {
      role: "Business Development",
      company: "MEVX",
      period: "Apr 2025 — Jul 2025",
      desc: "Multi-chain memecoin trading platform. Content creation, cross-platform promotion, and KOL collaboration to drive brand awareness in the Indonesian crypto scene.",
      tags: ["Business Development", "Memecoin", "KOL"],
      active: false,
    },
    {
      role: "Business Development Intern",
      company: "Tevau",
      period: "Nov 2025 — Jan 2026",
      desc: "Drove brand awareness through strategic social media campaigns. Negotiated KOL collaborations across crypto, finance, and lifestyle verticals. Created educational content around crypto cards, USDT spending, and stock trading. Tracked campaign KPIs and optimized content strategy.",
      tags: ["Business Development", "KOL", "Social Media", "Content"],
      active: false,
    },
    {
      role: "Bitget Wallet Builder",
      company: "Bitget Wallet",
      period: "2025",
      desc: "Ambassador program participant. Onboarding users to Web3 through the Bitget Wallet ecosystem.",
      tags: ["Ambassador", "Onboarding", "Web3"],
      active: false,
    },
  ];

  return (
    <>
      {/* Scanline overlay */}
      <div className="scanline" />

      {/* Main container */}
      <div className="bg-grid relative min-h-dvh">
        {/* Header / Nav */}
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <span className="font-mono text-sm tracking-widest text-neon-green">
              $ justitia --portfolio
            </span>
            <nav className="hidden items-center gap-8 sm:flex">
              <a
                href="#work"
                className="font-mono text-xs text-text-muted transition-colors hover:text-neon-cyan"
              >
                // projects
              </a>
              <a
                href="#experience"
                className="font-mono text-xs text-text-muted transition-colors hover:text-neon-cyan"
              >
                // experience
              </a>
              <a
                href="#social"
                className="font-mono text-xs text-text-muted transition-colors hover:text-neon-cyan"
              >
                // connect
              </a>
            </nav>
            <span className="flex h-2 w-2 rounded-full bg-neon-green shadow-[0_0_8px_#00ff41]" />
          </div>
        </header>

        {/* HERO */}
        <section className="relative flex min-h-dvh flex-col items-center justify-center px-6 pb-20 pt-24">
          {/* Terminal badge */}
          <div
            className={`mb-8 font-mono text-xs uppercase tracking-[0.3em] text-neon-green ${
              mounted ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0s", animationFillMode: "forwards" }}
          >
            <span className="text-neon-magenta">user</span>@
            <span className="text-neon-cyan">web3</span>
            <span className="text-text-muted">:~$ </span>
            <span className="cursor-blink">whoami</span>
          </div>

          {/* Main headline */}
          <h1
            className={`relative max-w-4xl text-center font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl ${
              mounted ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <div className="mb-4">justitia</div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-2xl sm:text-3xl md:text-4xl">
              <span className="inline-block rounded-sm border border-neon-magenta/40 bg-neon-magenta/5 px-4 py-1 font-mono text-sm tracking-wider text-neon-magenta sm:text-base">
                Business Development
              </span>
              <span className="text-text-muted text-lg">+</span>
              <span className="inline-block rounded-sm border border-neon-cyan/40 bg-neon-cyan/5 px-4 py-1 font-mono text-sm tracking-wider text-neon-cyan sm:text-base">
                Community Moderator
              </span>
            </div>
          </h1>

          {/* Subtitle */}
          <p
            className={`mt-8 max-w-xl text-center font-mono text-sm leading-relaxed text-text-muted ${
              mounted ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <span className="text-neon-green">Web3 native</span> building in
            public. Content that cuts through the noise.
            <br />
            DeFi, memecoins, and the culture.
          </p>

          {/* CTA */}
          <div
            className={`mt-10 flex flex-col items-center gap-4 sm:flex-row ${
              mounted ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <a
              href="https://x.com/boahamncook"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-sm border border-neon-green/60 px-8 py-3 font-mono text-sm uppercase tracking-widest text-neon-green transition-all hover:bg-neon-green/10 hover:shadow-[0_0_30px_rgba(0,255,65,0.15)]"
            >
              <span className="relative z-10">VIEW CONTENT</span>
              <span className="relative z-10 text-lg">→</span>
            </a>
            <a
              href="https://t.me/baelcalls"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-sm border border-border px-8 py-3 font-mono text-sm uppercase tracking-widest text-text-muted transition-all hover:border-cyan-800 hover:text-neon-cyan"
            >
              <span>JOIN TELEGRAM</span>
              <span className="text-lg">→</span>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
                scroll down
              </span>
              <div className="h-8 w-[1px] bg-gradient-to-b from-text-muted to-transparent" />
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="work" className="border-t border-border px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-magenta">
                // 001
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                what i{" "}
                <span className="text-neon-green glitch-text" data-text="build">
                  build
                </span>
              </h2>
              <p className="mt-3 max-w-lg font-mono text-sm text-text-muted">
                Products and platforms I contribute to.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <div
                  key={project.title}
                  className={`group relative border border-border bg-bg-card p-8 transition-all hover:border-neon-green/30 hover:bg-bg-hover ${
                    mounted ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${0.2 + i * 0.15}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="absolute -top-px -right-px h-8 w-8 border-t border-r border-neon-green/20" />

                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <h3 className="mb-3 font-display text-xl font-bold tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mb-6 font-mono text-sm leading-relaxed text-text-muted">
                        {project.desc}
                      </p>
                    </div>

                    <div>
                      {project.stat && (
                        <div className="mb-4 border-t border-border pt-4">
                          <span className="font-mono text-2xl font-bold text-neon-cyan">
                            {project.stat}
                          </span>
                          <span className="ml-2 font-mono text-xs text-text-muted">
                            {project.statLabel}
                          </span>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-sm border border-border bg-bg px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="border-t border-border px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-yellow">
                // 002
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                where i've{" "}
                <span
                  className="text-neon-cyan glitch-text"
                  data-text="worked"
                >
                  worked
                </span>
              </h2>
              <p className="mt-3 max-w-lg font-mono text-sm text-text-muted">
                Web3 roles that shaped the journey.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-neon-magenta via-neon-cyan to-neon-green sm:left-6" />

              {experiences.map((exp, i) => (
                <div
                  key={`${exp.company}-${exp.role}`}
                  className={`relative mb-12 pl-8 sm:pl-16 last:mb-0 ${
                    mounted ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${0.2 + i * 0.15}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-[-5px] top-1.5 h-3 w-3 rounded-full border-2 sm:left-[19px] ${
                      exp.active
                        ? "border-neon-green bg-neon-green shadow-[0_0_12px_#00ff41]"
                        : "border-text-muted bg-bg"
                    }`}
                  />

                  {/* Card */}
                  <div className="group border border-border bg-bg-card p-6 transition-all hover:border-neon-green/20 hover:bg-bg-hover">
                    <div className="mb-1 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <span
                          className={`font-mono text-xs font-bold uppercase tracking-wider ${
                            exp.active ? "text-neon-green" : "text-text-muted"
                          }`}
                        >
                          {exp.role}
                        </span>
                        <h3 className="mt-1 font-display text-xl font-bold tracking-tight">
                          {exp.company}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-text-muted">
                        {exp.period}
                      </span>
                    </div>

                    <p className="mt-4 font-mono text-sm leading-relaxed text-text-muted">
                      {exp.desc}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-sm border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider ${
                            exp.active
                              ? "border-neon-green/30 text-neon-green"
                              : "border-border text-text-muted"
                          }`}
                        >
                          {tag}
                          {exp.active && (
                            <span className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-neon-green shadow-[0_0_6px_#00ff41] flicker" />
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOCIAL */}
        <section
          id="social"
          className="border-t border-border px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
                // 003
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                find me{" "}
                <span
                  className="text-neon-magenta glitch-text"
                  data-text="onchain"
                >
                  onchain
                </span>
              </h2>
              <p className="mt-3 max-w-lg font-mono text-sm text-text-muted">
                Hit me up for collabs. No paid promos.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {socials.map((social, i) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between border border-border bg-bg-card p-8 transition-all hover:border-neon-green/30 hover:bg-bg-hover ${
                    mounted ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${0.3 + i * 0.15}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{social.icon}</span>
                      <div>
                        <h3 className="font-display text-lg font-bold">
                          {social.name}
                        </h3>
                        <p className="font-mono text-sm text-neon-green">
                          {social.handle}
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="text-2xl text-text-muted transition-all group-hover:translate-x-1 group-hover:text-neon-green">
                    →
                  </span>
                </a>
              ))}

              <div
                className={`flex items-center justify-between border border-border bg-bg-card p-8 sm:col-span-2 ${
                  mounted ? "animate-fade-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: "0.6s",
                  animationFillMode: "forwards",
                }}
              >
                <div>
                  <h3 className="font-display text-lg font-bold">DM policy</h3>
                  <p className="mt-1 font-mono text-sm text-text-muted">
                    Open for collabs & opportunities.
                    <br />
                    Business Development & Moderation inquiries welcome.
                  </p>
                </div>
                <span className="hidden font-mono text-[10px] uppercase tracking-widest text-neon-magenta sm:block">
                  // always
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-border px-6 py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <span className="font-mono text-xs tracking-widest text-neon-green">
                $ justitia --portfolio
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                built with next.js
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                // deployed onchain
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                web3 native
              </span>
              <span className="inline-block h-2 w-2 rounded-full bg-neon-green shadow-[0_0_8px_#00ff41] flicker" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
