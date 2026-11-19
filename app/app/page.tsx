"use client";

import React from "react";
import {
  Briefcase,
  PenTool,
  PieChart,
  TrendingUp,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  PlusCircle,
  Check,
  Calendar,
  Zap,
  Globe,
  BrainCircuit,
  ArrowDown,
  UserCheck,
  GraduationCap,
  Award,
} from "lucide-react";

const LINK_FORM_PERTAMA =
  "https://docs.google.com/forms/d/1S0H4iJXkyhvNRjYJV0nKv6eTRM28UVU2iGn0-RqU6aM/viewform";

const divisions = [
  {
    id: "admin-bisnis",
    title: "Admin Bisnis",
    shortDesc: "Struktur, dokumen, dan kesiapan investor",
    quote: '"Struktur, dokumen, dan kesiapan investor"',
    icon: Briefcase,
    responsibilities: [
      "Merapikan & menyusun pitch deck draft & executive summary",
      "Menyiapkan dokumen pendukung investasi",
      "Mengelola timeline, versioning, dan data room awal",
      "Support administratif founder",
    ],
    requirements: [
      "Detail-oriented & rapi",
      "Kemampuan olah data menjadi dokumen terstruktur",
      "Familiar dengan Google Workspace / Notion",
    ],
    aiWorkflow: [
      "Structuring dokumen & ringkasan eksekutif",
      "Drafting laporan & notulensi",
      "Organisasi data room",
    ],
    plusPoints: [
      "Pengalaman administratif atau sekretaris proyek",
      "Paham alur dokumen fundraising startup",
    ],
  },
  {
    id: "tim-design",
    title: "Tim Design",
    shortDesc: "Visual story & clarity of idea",
    quote: '"Visual story & clarity of idea"',
    icon: PenTool,
    responsibilities: [
      "Desain pitch deck investor",
      "Visual konsep platform",
      "Grand design brand BetterLife",
      "Menyederhanakan ide kompleks menjadi visual jelas",
    ],
    requirements: [
      "Menguasai PPT / Google Slides / Figma",
      "Visual storytelling yang kuat",
      "Iteratif & cepat dalam revisi",
      "Sensitif terhadap isu mental health",
    ],
    aiWorkflow: [
      "Generasi ide visual",
      "Pembuatan moodboard",
      "Eksplorasi layout alternatif",
    ],
    plusPoints: [
      "Pernah mendesain pitch deck startup",
      "Paham branding digital product",
    ],
  },
  {
    id: "finance",
    title: "Finance",
    shortDesc: "Angka masuk akal & investor-friendly",
    quote: '"Angka masuk akal & investor-friendly"',
    icon: PieChart,
    responsibilities: [
      "Estimasi biaya awal & proyeksi 12–36 bulan",
      "Valuasi awal & unit economics",
      "Kolaborasi erat dengan tim strategi",
    ],
    requirements: [
      "Paham Cashflow, burn rate, runway",
      "Bisa menjelaskan angka ke orang non-finance",
      "Rasional & tidak overclaim",
    ],
    aiWorkflow: [
      "Simulasi skenario keuangan",
      "Sensitivity analysis",
      "Perbandingan model bisnis",
    ],
    plusPoints: ["Pengalaman di startup early-stage"],
  },
  {
    id: "business-strategy",
    title: "Business Strategy",
    shortDesc: "Validasi kelayakan & skalabilitas ide",
    quote: '"Validasi kelayakan & skalabilitas ide"',
    icon: TrendingUp,
    responsibilities: [
      "Analisa Market nasional & global",
      "Segmentasi user & Positioning BetterLife",
      "Business model & early GTM",
      "Sinkronisasi strategi dengan finance",
    ],
    requirements: [
      "Strategic thinking kuat",
      "Paham TAM, SAM, SOM",
      "Analisa competitive landscape",
      "Visioner tapi tetap rasional",
    ],
    aiWorkflow: [
      "Market research mendalam",
      "Trend analysis",
      "Growth scenario simulation",
    ],
    plusPoints: [
      "Pengalaman di Health-tech / ed-tech",
      "Pernah terlibat strategi awal startup",
    ],
  },
  {
    id: "system-it",
    title: "System IT",
    shortDesc: "MVP Development & Technical Foundation",
    quote: '"MVP Development & Technical Foundation"',
    icon: Terminal,
    responsibilities: [
      "Pengembangan website MVP (landing page + fitur dasar)",
      "Implementasi struktur halaman & user flow sederhana",
      "Integrasi form, konten dasar, dan kebutuhan teknis awal",
      "Diskusi teknis terkait struktur web yang rapi & scalable",
    ],
    requirements: [
      "Menguasai dasar frontend (HTML, CSS, JS atau framework relevan)",
      "Terbiasa bekerja berbasis proyek dan milestone",
      "Komunikatif dan bertanggung jawab pada output",
      "Memiliki pengalaman pengembangan website",
    ],
    aiWorkflow: [
      "AI Assisted Coding & Refactoring",
      "Debugging & Error Analysis",
      "Automated Documentation",
    ],
    plusPoints: [
      "Familiar dengan React / Tailwind",
      "Paham konsep dasar deployment (Vercel/Netlify)",
    ],
  },
  {
    id: "legal-compliance",
    title: "Legal & Corporate Compliance",
    shortDesc: "Kontrak, kepatuhan hukum, dan tata kelola",
    quote: '"Kontrak, kepatuhan hukum, dan tata kelola"',
    icon: ShieldCheck,
    respLabel: "FOKUS PERAN",
    reqLabel: "KUALIFIKASI WAJIB",
    responsibilities: [
      "Pengelolaan kontrak, dokumen hukum, & perjanjian kerja sama.",
      "Kepatuhan hukum, perizinan usaha, & regulasi.",
      "Perlindungan aset intelektual (HKI/merek, data, & dokumen perusahaan).",
      "Dukungan legalitas aksi korporasi & tata kelola perusahaan.",
    ],
    requirements: [
      "Memahami kontrak, regulasi bisnis, & kepatuhan hukum.",
      "Teliti, berintegritas, & bertanggung jawab penuh terhadap akurasi dokumen.",
      "Selaras dengan nilai & budaya kerja BetterLife.",
    ],
    aiWorkflow: [
      "Legal clause review & drafting",
      "Compliance checklist & regulatory mapping",
      "Structuring dokumen perjanjian & HKI",
    ],
    plusPoints: [
      "Familiar dengan regulasi startup digital / health-tech",
      "Memahami dasar perjanjian investasi & perlindungan data pribadi",
    ],
  },
];

const generalRequirements = [
  "AI digunakan strategis (bukan sekadar prompt), tapi untuk riset, analisa, dan simulasi.",
  "Mandiri & deadline-driven.",
  "Sensitif & etis terhadap isu mental health.",
  "Long-term thinking (bukan hit & run).",
];

const specificQualifications = [
  "Berusia maksimal 25 tahun (di bawah usia CEO).",
  "Bersedia bekerja full-time (sistem kerja fleksibel / online full).",
  "Tech-savvy, komunikatif, dan memiliki kepedulian tinggi terhadap isu mental health serta produktivitas.",
];

const categoryCriteria = [
  {
    category: "Category 1: Active Undergraduate Student (Age 20–21)",
    points: [
      "Currently enrolled in at least the 5th or 6th semester.",
      "Possesses solid time management skills to support core daily operations in a flexible/hybrid setup.",
    ],
  },
  {
    category: "Category 2: Fresh Graduate (Age 22–23)",
    points: [
      "Recent graduate with a minimum of 3–6 months of professional internship experience or a proven track record in strategic roles within campus organizations/committees.",
      "Ready to adapt quickly and immediately execute entry-level tasks.",
    ],
  },
  {
    category: "Category 3: Junior Professional (Age 24–25)",
    points: [
      "Minimum of 1–2 years of real-world professional work experience.",
      "Capable of working independently with tactical initiative to fill specialist/coordinator functions (based on the Performance Before Position principle).",
    ],
  },
];

const exclusiveBenefits = [
  {
    title: "Konversi Proyek & Karier",
    desc: "Seluruh proyek yang dikerjakan dapat dikonversi sebagai kredit Exclusive Paid Internship. Kandidat dengan performa terbaik berpeluang diprioritaskan untuk perpanjangan kontrak kerja profesional (PKWT).",
  },
  {
    title: "Mentorship & Pengembangan",
    desc: "Mendapatkan bimbingan langsung dari tim manajemen inti, fasilitas sertifikasi internal, serta lingkungan kerja yang mendukung kesejahteraan mental (mental wellbeing culture).",
  },
];

const timeline = [
  { step: "STEP 1", title: "Registrasi", active: true },
  { step: "STEP 2", title: "Skill Test", active: false },
  { step: "STEP 3", title: "Interview", active: false },
  { step: "STEP 4", title: "Agreement", active: false },
];

export default function Home() {
  const scrollToDivision = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    /* LATAR PALING BELAKANG: WARNA KREM (#F7F4F2) SESUAI SOP */
    <div
      style={{ backgroundColor: "#F7F4F2" }}
      className="min-h-screen w-full text-[#232323] font-[family-name:var(--font-inter)] font-normal antialiased scroll-smooth"
    >
      {/* LATAR TEKS UTAMA: KOLOM PUTIH BERSIH TERPUSAT DENGAN EFEK SHADOW PREMIUM */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 12px 42px rgba(35, 35, 35, 0.08)",
        }}
        className="max-w-md mx-auto min-h-screen overflow-hidden"
      >
        {/* HERO & OPEN POSITIONS SECTION */}
        <header className="px-6 pt-12 pb-12 border-b border-slate-100">
          {/* Badge Top */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F4F2] border border-slate-200/60 text-[11px] font-[family-name:var(--font-poppins)] font-semibold tracking-widest uppercase text-[#232323]/75">
            <span className="w-2 h-2 rounded-full bg-[#69BEEF]" />
            SEED FUNDING STAGE
          </div>

          {/* Brand Logo Resmi Utama */}
          <div className="my-10 flex flex-col items-center justify-center text-center">
            <img
              src="/logo.png"
              alt="BetterLife Logo"
              className="w-64 sm:w-72 h-auto object-contain"
            />
          </div>

          {/* Tagline */}
          <div className="space-y-1">
            <p className="text-lg font-[family-name:var(--font-poppins)] font-semibold text-slate-500">
              Mental Health Platform
            </p>
            <h1 className="text-2xl font-[family-name:var(--font-poppins)] font-bold text-[#69BEEF] tracking-tight">
              Nasional &amp; Global Stage
            </h1>
          </div>

          {/* Stage Indicator: Idea - MVP - Growth */}
          <div className="mt-8 flex items-center gap-4 text-sm font-normal">
            <span className="text-slate-400">Idea</span>
            <span className="h-[1px] w-8 bg-slate-200" />
            <span className="font-[family-name:var(--font-poppins)] font-bold text-[#69BEEF]">
              MVP
            </span>
            <span className="h-[1px] w-8 bg-slate-200" />
            <span className="text-slate-400">Growth</span>
          </div>

          {/* Team Principles (100% Online) */}
          <div className="mt-12">
            <h2 className="text-[11px] font-[family-name:var(--font-poppins)] font-semibold tracking-widest uppercase text-slate-400 mb-4">
              TEAM PRINCIPLES
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-[#F7F4F2]/75 border border-slate-100 p-4">
                <Zap className="w-5 h-5 text-[#232323] mb-3" />
                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[#232323] text-sm">
                  Builder Mindset
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Doers, not just thinkers
                </p>
              </div>

              <div className="rounded-2xl bg-[#F7F4F2]/75 border border-slate-100 p-4">
                <Globe className="w-5 h-5 text-[#69BEEF] mb-3" />
                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[#232323] text-sm">
                  100% Online
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Full remote &amp; flexible collaboration
                </p>
              </div>
            </div>
          </div>

          {/* General Requirements */}
          <div className="mt-10">
            <h2 className="text-[11px] font-[family-name:var(--font-poppins)] font-semibold tracking-widest uppercase text-slate-400 mb-4">
              GENERAL REQUIREMENTS
            </h2>
            <ul className="space-y-3.5 text-[14px] text-[#232323]/85 leading-relaxed">
              {generalRequirements.map((req) => (
                <li key={req} className="flex items-start gap-3">
                  <BrainCircuit className="w-5 h-5 text-[#69BEEF] mt-0.5 shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specific Qualifications */}
          <div className="mt-10 pt-8 border-t border-slate-100">
            <h2 className="text-[11px] font-[family-name:var(--font-poppins)] font-semibold tracking-widest uppercase text-slate-400 mb-4">
              SPECIFIC QUALIFICATIONS
            </h2>
            <ul className="space-y-3.5 text-[14px] text-[#232323]/85 leading-relaxed">
              {specificQualifications.map((qual) => (
                <li key={qual} className="flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-[#69BEEF] mt-0.5 shrink-0" />
                  <span>{qual}</span>
                </li>
              ))}
            </ul>

            {/* Subjudul: Category-Based Specific Criteria */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-4 h-4 text-[#69BEEF]" />
                <h3 className="text-xs font-[family-name:var(--font-poppins)] font-semibold tracking-wider uppercase text-[#232323]">
                  Category-Based Specific Criteria
                </h3>
              </div>

              <div className="space-y-3">
                {categoryCriteria.map((item) => (
                  <div
                    key={item.category}
                    className="rounded-2xl bg-[#F7F4F2]/75 border border-slate-100 p-4"
                  >
                    <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-[#69BEEF] text-[13px]">
                      {item.category}
                    </h4>
                    <ul className="mt-2.5 space-y-2 text-[13px] text-slate-600 leading-relaxed">
                      {item.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#69BEEF] mt-2 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Catatan & Benefit Eksklusif */}
            <div className="mt-8 rounded-2xl bg-[#BCF2F6]/35 border border-[#A0DEFF] p-5">
              <div className="flex items-center gap-2 mb-3.5">
                <Award className="w-4 h-4 text-[#69BEEF]" />
                <h3 className="text-xs font-[family-name:var(--font-poppins)] font-semibold tracking-wider uppercase text-[#69BEEF]">
                  Catatan &amp; Benefit Eksklusif
                </h3>
              </div>
              <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed">
                {exclusiveBenefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="border-l-2 border-[#69BEEF] pl-3.5"
                  >
                    <p className="font-[family-name:var(--font-poppins)] font-semibold text-[#232323]">
                      {benefit.title}
                    </p>
                    <p className="mt-1 text-slate-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* OPEN POSITIONS */}
          <div className="mt-14 pt-10 border-t border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[11px] font-[family-name:var(--font-poppins)] font-semibold tracking-widest uppercase text-[#232323]">
                OPEN POSITIONS
              </h2>
              <span className="text-xs text-slate-400">Scroll or Tap</span>
            </div>

            <div className="space-y-3">
              {divisions.map((div) => (
                <button
                  key={div.id}
                  type="button"
                  onClick={() => scrollToDivision(div.id)}
                  className="w-full text-left rounded-2xl bg-[#F7F4F2]/75 hover:bg-[#A0DEFF]/20 border border-slate-100 p-4 flex items-center justify-between gap-3 transition group cursor-pointer"
                >
                  <div>
                    <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[#232323] group-hover:text-[#69BEEF] text-[15px] transition">
                      {div.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      {div.shortDesc}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#69BEEF] group-hover:border-[#69BEEF]/40 shrink-0 transition">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* DIVISIONS DETAIL SECTION */}
        <main id="divisi" className="px-6 divide-y divide-slate-100">
          {divisions.map((div) => {
            const IconComponent = div.icon;
            return (
              <section key={div.id} id={div.id} className="py-12 scroll-mt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#BCF2F6]/50 flex items-center justify-center text-[#69BEEF]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-[family-name:var(--font-poppins)] font-semibold tracking-widest uppercase text-slate-400">
                    DIVISION
                  </span>
                </div>

                <h2 className="text-2xl font-[family-name:var(--font-poppins)] font-bold text-[#232323]">
                  {div.title}
                </h2>
                <p className="mt-1.5 text-[15px] font-[family-name:var(--font-poppins)] font-semibold text-[#69BEEF] leading-relaxed">
                  {div.quote}
                </p>

                {/* Tanggung Jawab / Fokus Peran */}
                <div className="mt-7">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="w-1 h-4 bg-[#69BEEF] rounded-full" />
                    <h3 className="text-xs font-[family-name:var(--font-poppins)] font-semibold tracking-wider uppercase text-[#232323]">
                      {div.respLabel || "TANGGUNG JAWAB"}
                    </h3>
                  </div>
                  <ul className="space-y-2.5 text-slate-600 text-[14px] leading-relaxed">
                    {div.responsibilities.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Kriteria Wajib & AI Workflow */}
                <div className="mt-7 rounded-2xl bg-[#F7F4F2]/75 border border-slate-100 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-4 h-4 text-[#232323]" />
                    <h3 className="text-xs font-[family-name:var(--font-poppins)] font-semibold tracking-wider uppercase text-[#232323]">
                      {div.reqLabel || "KRITERIA WAJIB"}
                    </h3>
                  </div>
                  <ul className="space-y-3 text-[#232323]/85 text-[14px] leading-relaxed">
                    {div.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#69BEEF] mt-0.5 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>

                  <hr className="my-5 border-slate-200/70" />

                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-slate-500" />
                    <h3 className="text-xs font-[family-name:var(--font-poppins)] font-semibold tracking-wider uppercase text-slate-500">
                      AI WORKFLOW
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {div.aiWorkflow.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 text-xs font-normal text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Nilai Tambah */}
                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-2.5">
                    <PlusCircle className="w-4 h-4 text-slate-500" />
                    <h3 className="text-xs font-[family-name:var(--font-poppins)] font-semibold tracking-wider uppercase text-slate-500">
                      NILAI TAMBAH
                    </h3>
                  </div>
                  <ul className="space-y-1.5 text-[13px] italic text-slate-500">
                    {div.plusPoints.map((plus) => (
                      <li key={plus}>+ {plus}</li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          })}
        </main>

        {/* BENEFITS & COMPENSATION (CHARCOAL #232323 PENUH DI DALAM KOLOM KARTU) */}
        <section
          style={{ backgroundColor: "#232323" }}
          className="text-white py-14 px-6"
        >
          <h2 className="text-2xl font-[family-name:var(--font-poppins)] font-bold leading-tight">
            Benefits &amp; <br />
            Compensation
          </h2>

          <div className="mt-8 border-l-2 border-[#69BEEF] pl-5">
            <h3 className="text-base font-[family-name:var(--font-poppins)] font-semibold text-white">
              Project-Based
            </h3>
            <p className="mt-2 text-sm text-white/75 leading-relaxed">
              Project-based (bukan gaji bulanan). Bagi hasil di akhir proyek.
              Besaran bagi hasil berdasarkan performa &amp; kontribusi nyata.
            </p>
          </div>

          <div className="mt-8 border-l-2 border-white/20 pl-5">
            <h3 className="text-base font-[family-name:var(--font-poppins)] font-semibold text-white">
              Performance Matrix
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm text-white/80">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#69BEEF]" />
                <span>Kualitas Output</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#69BEEF]" />
                <span>Ketepatan Waktu</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#69BEEF]" />
                <span>Efektivitas penggunaan AI</span>
              </li>
            </ul>
          </div>

          <div className="mt-9 rounded-2xl bg-white/5 border border-white/10 p-5">
            <h3 className="text-xs font-[family-name:var(--font-poppins)] font-semibold tracking-widest uppercase text-[#A0DEFF] mb-4">
              LONG TERM VALUE
            </h3>
            <ul className="space-y-2.5 text-sm text-white/85">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#69BEEF]" />
                <span>Peluang menjadi Core Team (Equity)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#69BEEF]" />
                <span>Portofolio Nyata (Startup Stage)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#69BEEF]" />
                <span>Lingkungan Mental-Health Aware</span>
              </li>
            </ul>
          </div>
        </section>

        {/* RECRUITMENT TIMELINE (STEP 1 - STEP 4 TANPA TANGGAL) */}
        <section className="px-6 py-14">
          <div className="flex items-center gap-2.5 mb-8">
            <Calendar className="w-5 h-5 text-[#69BEEF]" />
            <h2 className="text-xl font-[family-name:var(--font-poppins)] font-bold text-[#232323]">
              Recruitment Timeline
            </h2>
          </div>

          <div className="relative pl-7 border-l border-slate-200 space-y-8 ml-2">
            {timeline.map((item) => (
              <div key={item.step} className="relative">
                <span
                  className={`absolute -left-[34px] top-1.5 w-3 h-3 rounded-full ring-4 ring-white ${
                    item.active ? "bg-[#69BEEF]" : "bg-slate-300"
                  }`}
                />
                <p className="text-xs font-[family-name:var(--font-poppins)] font-semibold tracking-wider uppercase text-[#69BEEF]">
                  {item.step}
                </p>
                <p className="mt-1 text-base font-[family-name:var(--font-poppins)] font-semibold text-[#232323]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-xs italic text-slate-400">
            *Seluruh proses dilakukan secara online
          </p>
        </section>

        {/* CTA FOOTER (TOMBOL DAFTAR SEKARANG LANGSUNG KE LINK PERTAMA) */}
        <footer id="daftar" className="px-6 pb-14">
          <div className="rounded-3xl bg-[#F7F4F2] border border-slate-200/60 px-6 py-10 text-center">
            <h2 className="text-2xl font-[family-name:var(--font-poppins)] font-bold text-[#232323]">
              Ready to Build?
            </h2>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              Bergabung dengan BetterLife dan bangun masa depan kesehatan mental.
            </p>

            <div className="mt-7">
              <a
                href={https://bit.ly/betterlife_apply}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 rounded-xl bg-[#232323] text-white font-[family-name:var(--font-poppins)] font-semibold text-sm hover:bg-black transition shadow-sm"
              >
                Daftar Sekarang
              </a>
            </div>

            {/* Logo Footer (Berbeda dari Logo Utama) */}
            <div className="mt-10 flex justify-center">
              <img
                src="/logo-footer.png"
                alt="BetterLife Footer Logo"
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="mt-4 text-xs text-slate-400">
              © 2026 BetterLife Platform. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}