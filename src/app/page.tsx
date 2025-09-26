'use client';

import { motion, Variants, cubicBezier } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaInstagram,FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useState,useRef } from "react";



export default function Page() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  function scrollByAmount(dir: "left" | "right") {
    const el = scrollerRef.current;
    if (!el) return;
    const step = Math.min(360, Math.max(280, el.clientWidth * 0.6)); // jarak scroll
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  }

  // ====== DATA ======
    const profile = {
    name: "YASMIN NUR IZZATI",
    role: "International ICT Business Student at Telkom University",
    subtitle: "Focused on Finance, HR, and Management | Aspiring to Drive Operational Efficiency and Organizational Growth",
    email: "yasminizzati8@gmail.com",
    phone: "+62 81-3939-11455",
    location: "Bandung, Indonesia",
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/yasmin-nur-izzati-141038304/" },
      { label: "Instagram", href: "https://www.instagram.com/yasminnizzati?igsh=MWEwdXpxMGZmZjYwMA==" },
    ],
  };

  type workExperience = {
    role: string;
    company: string;
    location: string;
    date: string;
    points: string[];
    heroImage?: string;
    image?: string;
  };

  const workExperiences = [
    {
      role: "Market Research Intern",
      company: "PT PLN Indonesia Power",
      location: "Surakarta",
      date: "Jul 2025 – Present",
      points: [
        "Analyzed inventory security issues and provided recommendations to strengthen loss prevention measures.",
        "Optimized the return process by identifying bottlenecks and proposing practical solutions that streamlined workflows.",
        "Delivered contributions that had a measurable impact on warehouse efficiency and reliability while supporting daily operations.",
      ],
      heroImage: "/work/pln.png",
      image: "/work/pln.jpg" 
    },
    {
      role: "Supply Chain & Inventory Management Intern",
      company: "PT PLN (Persero)",
      location: "Surakarta",
      date: "Jul 2025 – Sep 2025",
      points: [
        "Supported end-to-end material inventory management, including recording, classification, monitoring, and control.",
        "Developed and implemented a digital reporting system using Google Forms and Google Sheets, replacing manual record-keeping and improving efficiency and data accuracy.", 
      ],
      heroImage: "/work/pln.png",
      image: "/work/pln1.jpeg" 
    },
    {
      role: "Finance & CEO Office Intern",
      company: "Edelweis Hospital",
      location: "Indonesia",
      date: "Dec 2024 – Jan 2025",
      points: [
        "Assisted the finance department with data analysis, budget tracking, and financial reporting",
        "Supported the CEO Office in project coordination, meeting preparation, and communication tasks",
        "Contributed to improving operational efficiency by organizing internal documentation and streamlining processes",
        "Engaged in cross-functional collaboration to enhance the hospital’s overall business strategies",
      ],
      heroImage: "/work/edelweiss.jpeg",
      image: "/work/edel.jpeg" 
    },
    {
      role: "Business Process Intern",
      company: "Mitra 24 Offset",
      location: "Surakarta",
      date: "Jul 2023 – Aug 2023",
      points: [
        "Designed and documented business processes to support internal workflow standardization",
        "Developed Standard Operating Procedures (SOPs) for multiple departments to enhance operational efficiency",
        "Collaborated with team leads to ensure alignment between SOPs and actual practices"
      ],
      heroImage: "/work/mitra24.jpeg",
      image: "/work/mitra.jpg" 
    },
    {
      role: "Kindergarten Teacher",
      company: "Al Faruq Kindergarten (AMS Foundation)",
      location: "Surakarta",
      date: "Aug 2021",
      points: [
        "Teaching kindergarten children at Al Faruq Kindergarten under the Akhlak Mulia Surakarta (Ams) foundation with an age range of 4-7 years for one month",
        "Creating lesson plans",
        "Facilitating learning activities",
        "Maintain weekly communication with parents to provide updates on student’s progress, share information about classroom activities and events, and discuss any concerns or questions."
      ],
      heroImage: "/work/tba.jpg",
      image: "/work/kindergarten.jpg"
    }
  ];


  // ===== ORG DATA (edit konten & gambar sesuai punya kamu) =====
  const orgExperiences = [
    {
      org: "AIESEC in Bandung",
      location: "Bandung, Indonesia",
      date: "Jul 2024",
      heroImage: "/org/aiesec-hero.jpg", // ganti filemu
      points: [
        "Delegates of SOCEP Local Project 2024",
        "Best Delegate — SOCEP Local Project 2024",
        "Business plan & career carnival participation"
      ],
      roles: [
        {
          title: "Delegates of SOCEP Local Project 2024",
          period: "Jul 2024 (1 month)",
          image: "/org/aiesec-role1.jpeg",
          bulletPoints: [
            "SOCEP integrates virtual & in-person activities to build leadership and SDG awareness. Contributed to project deliverables and collaboration."],
          skills: ["Entrepreneurship", "Marketing", "Market Research", "Leadership"]
        },
        {
          title: "Best Delegate — SOCEP 2024",
          period: "Jul 2024 (1 month)",
          image: "/org/aiesec-role2.jpeg",
          bulletPoints: [
            "Awarded Best Delegate after competitive business plan presentation and active engagement in School Career Carnival."],
          skills: ["Team Coordination", "Leadership", "Presentation"]
        }
      ]
    },
    {
      org: "BERAKSI 2023 - HIMA MBTI",
      location: "Telkom University, Bandung",
      date: "Oct–Nov 2023",
      heroImage: "/org/beraksi-hero.jpeg",
      points: [
        "Public Relations — BERAKSI",
        "MC — Sign Language Class",
        "Media & internal communication"
      ],
      roles: [
        {
          title: "Public Relations — BERAKSI 2023",
          period: "Oct–Nov 2023 (2 months)",
          image: "/org/beraksi-role1.jpeg",
          bulletPoints: [
            "Develop PR materials in accessible formats (sign language videos, subtitles, written content).",
            "Work with media to raise awareness on issues relevant to the deaf community.",
            "Promote events like Deaf Awareness Week or International Week of the Deaf.",
            "Ensure inclusive internal communications (e.g., provide sign language interpreters).",
            "Measure effectiveness and adjust strategies based on feedback and outcomes."
          ],
          skills: ["Sign Language","Communication","Public Speaking","Media Relations"]
        },
        {
          title: "Master of Ceremonies — Sign Language Class",
          period: "Oct–Nov 2023 (2 months)",
          image: "/org/beraksi-role2.jpeg",
          bulletPoints: [
            "Translate spoken language into sign language for deaf individuals and vice versa, ensuring accuracy and clarity in communication.",
            "Demonstrate fluency in both sign language and the spoken language being interpreted.",
            "Introduce each speaker, performer, or segment, providing context and background information.",
            "Monitor the event timeline to ensure each segment starts and ends on time.",
            "Understand and respect the cultural context of both the deaf and hearing participants, adapting communication to reflect cultural norms and sensitivities."],
          skills: ["MC","Sign Language","Interpersonal Communication","Public Speaking","Cross-Cultural Communication Skills"]
        },
        {
          title: "Master of Ceremonies — BERAKSI 2023",
          period: "Oct–Nov 2023 (2 months)",
          image: "/org/beraksi-role3.jpeg",
          bulletPoints: [
            "Collaborate with event organizers to understand the schedule, key details, and special requirements of the audience.",
            "Monitor the event timeline to ensure each segment starts and ends on time.",
            "Engage the audience through direct interaction, encouraging participation and responding to their cues.",
            "Ensure speakers, performers, and other participants are aware of the event format and their roles.",
            "Stablish a connection with the audience, ensuring they feel valued and included.",
          ],
          skills: ["Sign Language","Public Speaking","Performance Improvement","Communication","sign language","Public Communications","Performance Management","Public Relations"]
        }
      ]
    },
    {
      org: "LKKD FEB 2023",
      location: "Telkom University, Bandung",
      date: "Sep–Oct 2023",
      heroImage: "/org/lkkd-hero.jpg",
      points: [
        "Public Relations Staff",
        "Moderator",
        "Sponsorship liaison"
      ],
      roles: [
        {
          title: "Public Relations — LKKD FEB 2023",
          period: "Sep–Oct 2023 (2 months)",
          image: "/org/lkkd-role1.png",
          bulletPoints: [
            "Build and maintain relationships with committee and participants.",
            "Respond to media inquiries and requests for information.",
            "Ensure consistent communication within the organization.",
            "Prepare reports and presentations to demonstrate the value of PR efforts to senior management.",
            "Ensure all communications and materials align with the brand’s voice and values.",
            "Helping bridge the LKKD FEB 2023 with the sponsorship.",],
          skills: ["Public Relations", "Communication", "Media Relations"]
        },
        {
          title: "Moderator — LKKD FEB 2023",
          period: "Sep–Oct 2023 (2 months)",
          image: "/org/lkkd-role2.jpeg",
          description:
            "Opened sessions, guided discussions, kept events on time, summarized key points and coordinated follow-ups.",
          skills: ["Public Speaking", "Technical Proficiency", "Time Management"],
        }
      ]
    }
  ];
  
  const highlights = [
    {
      type: "International Award",
      title: "1st Winner - IEOM Undergraduate Student Paper Competition",
      org: "3rd Australian Conference on Industrial Engineering and Operations Management (IEOM)",
      period: "2024",
      location: "Sydney, Australia",
      cover: "/highlights/ioem.jpeg" 
    },
    {
      type: "Award",
      title: "2nd Winner - Danamon International Business Plan",
      org: "CompetitionRealms",
      period: "2024",
      location: "Jakarta, Indonesia",
      cover: "/highlights/danamon.jpeg"
    },
    {
      type: "Award",
      title: "1st Winner - Business Plan Competition",
      org: " International Fusion Fest 2024",
      period: "2024",
      location: "Bandung, Indonesia",
      cover: "/highlights/bplan.jpg"
    },
    {
      type: "International Exposure",
      title: "Student Exchange Program",
      org: "King Mongkut’s University of Technology Thonburi (KMUTT)",
      period: "2024",
      location: "Bangkok, Thailand",
      cover: "/highlights/kmutt.jpg"
    },
    {
      type: "International Exposure",
      title: "Speaker - IEOM Undergraduate Student Paper Competition ",
      org: "3rd Australian Conference on Industrial Engineering and Operations Management (IEOM)",
      period: "2024",
      location: "Sydney, Australia",
      cover: "/highlights/ioem2.jpg"
    },
  ];

    // ==== Data (edit freely) ====
  const certification = {
    title: "Lean Six Sigma Green Belt Certification",
    issuer: "NexMU",
    date: "2025",
    credentialId: "20250035",
    href: "https://drive.google.com/file/d/1jMjmQ1K63xVzFUsn6UqpdLBwf2nArChB/view?usp=sharing",
  };

  const publication = {
    title: "Commercialization Analysis of POME with AOP Nanobubble",
    venue: "3rd Australian IEOM Conference",
    location: "Sydney, Australia",
    date: "2024",
    href: "https://ieomsociety.org/proceedings/2024australia/119.pdf",
  };

  type SkillItem = {
    name: string;
    orgNote?: string;   
    badges?: string[];    
    logo?: string;       
  };

  const skills: SkillItem[] = [
    {
      name: "Team Coordination",
      badges: ["AIESEC in Bandung"],
    },
    {
      name: "Entrepreneurship",
      badges: ["AIESEC in Bandung"],
    },
    {
      name: "Marketing",
      badges: ["AIESEC in Bandung"],
    },
    {
      name: "Market Research",
      badges: ["AIESEC in Bandung"],
    },
    {
      name: "Leadership",
      badges: ["AIESEC in Bandung"],
    },
    {
      name: "Cross-Cultural Communication",
      badges: ["BERAKSI HIMA MBTI"],
    },
    {
      name: "Sign Language",
      badges: ["BERAKSI HIMA MBTI"],
    },
    {
      name: "Public Speaking",
      badges: ["BERAKSI HIMA MBTI", "LKKD FEB"],
    },
    {
      name: "Public Relations",
      badges: ["BERAKSI HIMA MBTI", "LKKD FEB"],
    },
    {
      name: "Media Relations",
      badges: ["BERAKSI HIMA MBTI", "LKKD FEB"],
    },
    {
      name: "Communication",
      badges: ["BERAKSI HIMA MBTI", "LKKD FEB"],
    },
    {
      name: "Time Management",
      badges: ["LKKD FEB"],
    },
  ];

  const [activeOrg, setActiveOrg] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedWork, setSelectedWork] = useState<workExperience | null>(null);



  // ====== ANIMATION VARIANTS ======
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) }
    },
  };

  const stagger: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    },
  };

  const cardItem: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: cubicBezier(0.33, 1, 0.68, 1) }
    },
  };

  return (
    <main className="relative min-h-screen text-[var(--foreground)] font-sans">
      {/* FULLSCREEN BACKGROUND LAYER */}
      <div className="pointer-events-none fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-[url('/26.png')] bg-cover bg-center" />
        {/* overlay opsional agar teks kebaca */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-24">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative mt-10 rounded-3xl bg-[var(--card)] p-10 shadow-2xl"
        >
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* LEFT: text */}
            <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-4">
              <motion.h1 variants={fadeUp} className="leading-tight">
                <span className="block text-4xl md:text-5xl font-heading text-white">
                  Hi👋, I’m
                </span>
                <span className="block text-7xl md:text-7xl font-heading text-[var(--highlight)] mt-2">
                  Yasmin Nur Izzati
                </span>
                
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg font-medium">
                {profile.role}
              </motion.p>
              <motion.p variants={fadeUp} className="max-w-xl text-[var(--foreground)]/80">
                {profile.subtitle}
              </motion.p>

              {/* Buttons */}
              <motion.div variants={fadeUp} className="mt-4 flex flex-wrap gap-3">
                <a href="#about" className="rounded-2xl border border-[var(--highlight)] px-5 py-3 text-sm hover:bg-[var(--highlight)] hover:text-white transition">
                  See My Work
                </a>
                <a href="#contact" className="rounded-2xl bg-[var(--highlight)] px-5 py-3 text-sm text-white hover:opacity-90 transition">
                  Let’s Collaborate
                </a>
              </motion.div>

              {/* Socials */}
              <motion.div variants={fadeUp} className="mt-6 flex gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--highlight)] text-[var(--highlight)] hover:bg-[var(--highlight)] hover:text-white transition"
                >
                  <FaEnvelope size={18} />
                </a>
                {profile.socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--highlight)] text-[var(--highlight)] hover:bg-[var(--highlight)] hover:text-white transition"
                  >
                    {s.label === "LinkedIn" && <FaLinkedin size={18} />}
                    {s.label === "Instagram" && <FaInstagram size={18} />}
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT: photo boxed */}
            <motion.div
              variants={fadeUp}
              className="relative flex justify-center md:justify-end"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[var(--card)]/60 backdrop-blur-sm p-3 ring-1 ring-white/10 shadow-2xl shadow-black/40 w-[300px] md:w-[350px]">
                <div className="overflow-hidden rounded-xl ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-black/20">
                  <img
                    src="/mimin4.jpg"
                    alt="Profile photo of Yasmin Nur Izzati"
                    className="block w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Location text */}
          <p className="mt-6 text-center md:text-right text-sm text-white/70">
            Based in {profile.location}
          </p>
        </motion.section>

        {/* About Me */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          id="about"
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          <motion.div variants={cardItem} className="card p-6">
            <h2 className="text-lg font-bold border-b-2 border-[var(--highlight)] inline-block pb-1">About Me ✨</h2>
            <p className="mt-3 text-sm text-[var(--foreground)]/80 text-justify">
              I’m a final year International ICT Business student at Telkom University, passionate about finance, management, and business transformation. With hands on experience in project management, market research, and cross functional collaboration, I excel at driving operational efficiency and delivering impactful business strategies. Through internships and academic projects, I have honed skills in data analysis, communication, and continuous improvement, always striving for excellence and integrity in every opportunity.
            </p>
          </motion.div>
          <motion.div variants={cardItem} className="card p-6">
            <h2 className="text-lg md:text-lg font-bold border-b-2 border-[var(--highlight)] inline-block pb-1">
              Education 🎓
            </h2>
            <div className="mt-4 space-y-3 text-base md:text-lg text-[var(--foreground)]/90 leading-relaxed">
              <div>
                <p className="font-semibold">Telkom University</p>
                <p className="text-sm md:text-base text-[var(--foreground)]/80">
                  August 2022 – 2026 (Expected)
                </p>
                <p className="mt-1 italic">ICT Business, GPA: 3.73/4.00</p>
                <p className="mt-1 text-sm md:text-base">
                  <span className="font-medium">Relevant Coursework:</span> Financial Management, Human Resource Management, Marketing Management, Entrepreneurship, Accounting
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Work Experience */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10"
        >
          <h2 className="text-2xl md:text-2xl font-bold text-center mb-5 border-b-4 border-[var(--highlight)] inline-block pb-2">
            Work Experiences 💼
          </h2>

          {/* SPACING_TWEAK: ubah gap-5 untuk jarak antar card */}
          <div className="grid gap-5 md:gap-3">
            {workExperiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }} // efek hover
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group cursor-pointer"
                onClick={() => setSelectedWork(exp)}
              >
                <div
                  className="
                    card p-5 md:p-6
                    transition-all duration-300
                    hover:shadow-2xl hover:shadow-black/40
                    hover:ring-1 hover:ring-[var(--highlight)]/60
                    hover:bg-[var(--card)]/70
                  "
                >
                  {/* Header (teks + thumbnail) */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      {/* ROLE */}
                      <h3 className="text-lg font-semibold text-[var(--highlight)]">
                        {exp.role}
                      </h3>

                      {/* Company & Location */}
                      <p className="text-sm md:text-base font-medium text-[var(--foreground)]/80">
                        {exp.company} — {exp.location}
                      </p>

                      {/* Date */}
                      <p className="text-xs md:text-sm text-[var(--foreground)]/60">
                        {exp.date}
                      </p>
                    </div>

                    {/* Thumbnail */}
                    {exp.heroImage && (
                      <div className="hidden md:block w-16 h-16 overflow-hidden rounded-lg ring-1 ring-white/10 bg-white/5">
                        <img
                          src={exp.heroImage}
                          alt={exp.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* "See details" kecil */}
                  <p
                    className="
                      mt-2 text-xs text-[var(--highlight)] cursor-pointer 
                      transition-colors duration-200 group-hover:text-white
                      text-right
                    "
                  >
                    See details →
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Modal Work Experience */}
        {selectedWork && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="relative bg-[var(--card)] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden ring-1 ring-white/10 shadow-xl">
              {/* Close */}
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 text-white/90 hover:text-white text-lg"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Scrollable content */}
              <div className="p-6 md:p-8 overflow-y-auto max-h-[90vh]">
                {/* Header */}
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--highlight)]">
                  {selectedWork.role}
                </h3>
                <p className="text-sm text-white/80 mb-6">
                  {selectedWork.company} — {selectedWork.location} • {selectedWork.date}
                </p>

                {/* Content grid: image + details */}
                <div className="grid gap-6 md:grid-cols-[180px,1fr] items-start">
                  {/* Image (optional) — bingkai elegan, object-contain, aspect portrait */}
                  {selectedWork.image ? (
                    <div className="overflow-hidden rounded-xl ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-black/20 shadow-lg aspect-[4/3] flex items-center justify-center">
                      <img
                        src={selectedWork.image}
                        alt={selectedWork.role}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : null}

                  {/* Details */}
                  <div>
                    {/* Bullet points */}
                    {Array.isArray(selectedWork.points) && selectedWork.points.length > 0 ? (
                      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-white/90 leading-relaxed">
                        {selectedWork.points.map((p: string, idx: number) => (
                          <li key={idx}>{p}</li>
                        ))}
                      </ul>
                    ) : selectedWork.description ? (
                      <p className="text-sm md:text-base text-white/90 leading-relaxed">
                        {selectedWork.description}
                      </p>
                    ) : null}

                    {/* Optional skills badges if kamu tambahkan nanti */}
                    {selectedWork.skills?.length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {selectedWork.skills.map((s: string, i: number) => (
                          <span
                            key={i}
                            className="rounded-full bg-white/5 px-3 py-1 text-xs ring-1 ring-white/10"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Organizational Experience */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10"
        >
          <h2 className="text-2xl md:text-2xl font-bold text-center mb-5 border-b-4 border-[var(--highlight)] inline-block pb-2">
            Organizational Experiences 👥
          </h2>

          {/* GRID 3 KARTU */}
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {orgExperiences.map((org, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.07 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group cursor-pointer h-full"
                onClick={() => { setActiveOrg(i); setShowModal(true); }}
              >
                <div
                  className="
                    card h-full flex flex-col justify-between relative
                    overflow-hidden rounded-2xl bg-[var(--card)]/70 ring-1 ring-white/10 backdrop-blur-sm p-5 md:p-6
                    transition-all duration-300
                    hover:ring-[var(--highlight)]/60 hover:shadow-2xl hover:shadow-black/40
                  "
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--highlight)]">{org.org}</h3>
                      <p className="text-xs md:text-sm text-white/70">{org.location}</p>
                      <p className="text-xs md:text-sm text-white/60">{org.date}</p>
                    </div>
                    {/* Thumbnail */}
                    <div className="hidden md:block w-16 h-16 overflow-hidden rounded-lg ring-1 ring-white/10 bg-white/5">
                      <img src={org.heroImage} alt={org.org} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Points list */}
                  <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)]/85 flex-grow">
                    {org.points.map((pt, idx) => (
                      <li key={idx}>• {pt}</li>
                    ))}
                  </ul>

                  {/* "See details" kecil */}
                  <p
                    className="
                      mt-2 text-xs text-[var(--highlight)] cursor-pointer 
                      transition-colors duration-200 group-hover:text-white
                      text-center
                    "
                  >
                    See details →
                  </p>

                  {/* Hover overlay */}
                  <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="mb-4 inline-flex items-center gap-3 rounded-full bg-[var(--highlight)] px-4 py-2 text-xs font-semibold text-white shadow-md">
                      View roles & showcase →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* MODAL DETAIL ORGANIZATION */}
        {showModal && activeOrg !== null && (
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            {/* backdrop */}
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setShowModal(false)}
            />

            {/* panel */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative z-[90] w-full max-w-3xl rounded-2xl bg-[var(--card)] ring-1 ring-white/10 flex flex-col max-h-[90vh]"
            >
              {/* tombol close */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-sm text-white hover:bg-black/80 z-10"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* scrollable content */}
              <div className="p-6 md:p-8 overflow-y-auto max-h-[90vh]">
                {/* header organisasi */}
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--highlight)]">
                  {orgExperiences[activeOrg].org}
                </h3>
                <p className="text-sm text-white/80 mb-6">
                  {orgExperiences[activeOrg].location} • {orgExperiences[activeOrg].date}
                </p>

                {/* roles */}
                <div className="grid gap-8">
                  {orgExperiences[activeOrg].roles.map((r, idx) => (
                    <div
                      key={idx}
                      className="grid gap-4 md:grid-cols-[160px,1fr] items-start"
                    >
                      {/* role image 3:4 dengan bingkai elegan */}
                      <div className="overflow-hidden rounded-xl ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-black/20 shadow-lg aspect-[4/3] flex items-center justify-center">
                        <img
                          src={r.image}
                          alt={r.title}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* role detail */}
                      <div>
                        <h4 className="text-base md:text-lg font-semibold text-white">
                          {r.title}
                        </h4>
                        <p className="text-xs md:text-sm text-white/70 mb-2">
                          {r.period}
                        </p>
                        <p className="text-sm md:text-base text-white/90 leading-relaxed">
                          {r.description}
                        </p>

                        {r.bulletPoints ? (
                          <ul className="mt-2 list-disc pl-5 space-y-1 text-sm md:text-base text-white/90">
                            {r.bulletPoints.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm md:text-base text-white/90 leading-relaxed">{r.description}</p>
                        )}


                        {/* skills badges */}
                        {r.skills?.length ? (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {r.skills.map((s, k) => (
                              <span
                                key={k}
                                className="rounded-full bg-white/5 px-3 py-1 text-xs ring-1 ring-white/10"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* ——— Highlights (Awards + International Exposure) ——— */}
        <motion.section
          id="highlights"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16"
        >
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl md:text-2xl font-bold text-center border-b-4 border-[var(--highlight)] inline-block pb-2">Highlights</h2>
            <p className="text-sm text-white/70">Awards & International Exposure</p>
            
          </div>

          {/* Horizontal scroller */}
          <div className="relative">
            {/* scroller */}
            <div
              ref={scrollerRef}
              className="
                no-scrollbar flex gap-6 overflow-x-auto pb-2
                snap-x snap-mandatory
              "
            >
              {highlights.map((w, i) => (
                <motion.article
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="
                    snap-start
                    rounded-3xl border border-white/10 bg-[var(--card)]/90 p-4
                    hover:ring-1 hover:ring-[var(--highlight)]/60 hover:shadow-2xl hover:shadow-black/40
                    transition-all duration-300
                    min-w-[260px] sm:min-w-[280px] lg:min-w-[320px]
                  "
                >
                  {/* phone mockup frame — tanpa shadow agar bersih */}
                  <div
                    className="
                      mx-auto aspect-[9/16] w-full max-w-[280px] overflow-hidden
                      rounded-[2rem] border border-white/10
                      bg-gradient-to-b from-white/10 to-black/20
                    "
                  >
                    {w.cover ? (
                      <img src={w.cover} alt={w.title} className="h-full w-full object-cover" />
                    ) : null}
                  </div>

                  {/* meta + title */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs text-white/70">
                      <span className="rounded-full bg-white/10 px-2 py-1">{w.type}</span>
                      <span>{w.period}</span>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-[var(--highlight)]">{w.title}</h3>
                    <p className="text-xs text-white/70">{w.org} • {w.location}</p>
                  </div>
                </motion.article>
              ))}
            </div>        

            {/* controls di bawah */}
            <div className="mt-4 flex justify-center gap-3">
              <button
                onClick={() => scrollByAmount("left")}
                className="rounded-full border border-[var(--highlight)] px-1 py-1 text-xs text-[var(--highlight)] hover:bg-[var(--highlight)] hover:text-white transition"
                aria-label="Scroll left"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() => scrollByAmount("right")}
                className="rounded-full border border-[var(--highlight)] px-1 py-1 text-xs text-[var(--highlight)] hover:bg-[var(--highlight)] hover:text-white transition"
                aria-label="Scroll right"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </motion.section>

        {/* section — ticket card */}        
        <motion.section
          id="credentials"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-15"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-5">
            Certification & Publication
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Certification — ticket card */}
            <motion.article
              variants={fadeUp}
              whileHover={{ y: -2, scale: 1.01 }}
              className="
                relative overflow-hidden rounded-2xl border border-dashed border-white/15
                bg-[var(--card)]/80 ring-1 ring-white/10 backdrop-blur-md
                p-5 md:p-6
              "
            >
              {/* vertical accent strip */}
              <div className="absolute inset-y-0 left-0 w-1.5 bg-[var(--highlight)]/90" />

              {/* badge on top-right */}
              <span className="absolute right-4 top-4 rounded-full bg-white/5 px-3 py-1 text-[10px] tracking-wide ring-1 ring-white/10">
                CERTIFICATION
              </span>

              <div className="flex items-start gap-4">
                {/* icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--highlight)]/15 ring-1 ring-[var(--highlight)]/30">
                  {/* use any icon lib you already imported */}
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-[var(--highlight)]">
                    <path d="M17 3H7a2 2 0 0 0-2 2v13l7-3 7 3V5a2 2 0 0 0-2-2z" />
                  </svg>
                </div>

                {/* content */}
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {certification.title}
                  </h3>
                  <p className="text-sm text-white/70">
                    {certification.issuer} • {certification.date}
                  </p>
                  <p className="mt-1 text-xs text-white/60">
                    Credential ID: <span className="text-white/80">{certification.credentialId}</span>
                  </p>

                  {/* actions */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={certification.href}
                      className="rounded-md border border-[var(--highlight)] px-3 py-1.5 text-xs font-medium text-[var(--highlight)] hover:bg-[var(--highlight)] hover:text-white transition"
                    >
                      View credential →
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Publication — ticket card */}
            <motion.article
              variants={fadeUp}
              whileHover={{ y: -2, scale: 1.01 }}
              className="
                relative overflow-hidden rounded-2xl border border-dashed border-white/15
                bg-[var(--card)]/80 ring-1 ring-white/10 backdrop-blur-md
                p-5 md:p-6
              "
            >
              {/* vertical accent strip */}
              <div className="absolute inset-y-0 left-0 w-1.5 bg-[var(--highlight)]/90" />

              {/* badge on top-right */}
              <span className="absolute right-4 top-4 rounded-full bg-white/5 px-3 py-1 text-[10px] tracking-wide ring-1 ring-white/10">
                PUBLICATION
              </span>

              <div className="flex items-start gap-4">
                {/* icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--highlight)]/15 ring-1 ring-[var(--highlight)]/30">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-[var(--highlight)]">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16l6-3 6 3V4a2 2 0 0 0-2-2z" />
                  </svg>
                </div>

                {/* content */}
                <div className="min-w-0">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {publication.title}
                  </h3>
                  <p className="text-sm text-white/70">
                    {publication.venue} • {publication.location} • {publication.date}
                  </p>

                  {/* actions */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={publication.href}
                      className="rounded-md border border-[var(--highlight)] px-3 py-1.5 text-xs font-medium text-[var(--highlight)] hover:bg-[var(--highlight)] hover:text-white transition"
                    >
                      Read paper →
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </motion.section>
        
        {/* SECTION — Skills */}

        <motion.section
          id="skills"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-15"
        >
          <h2 className="text-3xl md:text-3xl font-bold text-center mb-3">
            Skills <span className="text-[var(--highlight)]">/ Strengths</span>
          </h2>

          <p className="mb-6 text-center text-xl text-white/60">
            Built from hands on roles at AIESEC, BERAKSI HIMA MBTI, and campus projects.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {skills.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="
                  group relative rounded-2xl
                  border border-white/10 bg-[var(--card)]/80 ring-1 ring-white/10 backdrop-blur-md
                  p-4
                  hover:ring-[var(--highlight)]/60 hover:shadow-xl hover:shadow-black/40
                "
              >
                {/* Skill name */}
                <h3 className="text-sm md:xs font-semibold text-white mb-4">
                  {s.name}
                </h3>

                {/* badges */}
                {(s.badges ?? []).length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {(s.badges ?? []).map((b, k) => (
                      <span
                        key={k}
                        className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] tracking-wide ring-1 ring-white/10 text-white/70 group-hover:bg-[var(--highlight)]/20 group-hover:text-white"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}
                {/* accent strip saat hover */}
                <span className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-[var(--highlight)]/70 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.section>
      
        {/* Contact */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          id="contact"
          className="mt-16 rounded-3xl border border-white/10 bg-[#0f0f0f] p-8"
        >
          <h2 className="text-2xl font-bold border-b-2 border-[var(--highlight)] inline-block pb-1">Let’s Chat 📬</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-[var(--foreground)]/80">
                Got a project in mind? Send me a short brief and I’ll get back within 24 hours. 🚀
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[var(--foreground)]/80">
                <li>✉️ {profile.email}</li>
                <li>📞 {profile.phone}</li>
                <li>📍 {profile.location}</li>
              </ul>
            </div>
            <form
              action="https://formspree.io/f/mnngneja"
              method="POST"
              className="grid gap-3"
            >
              <input
                name="name"
                placeholder="Your Name"
                required
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--highlight)]"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--highlight)]"
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                className="h-28 rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--highlight)]"
              ></textarea>
              <button
                type="submit"
                className="rounded-xl bg-[var(--highlight)] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Send
              </button>
            </form>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center text-xs text-white/60"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            {profile.socials.map((s, i) => (
              <a key={i} href={s.href} className="hover:text-[var(--highlight)]">{s.label}</a>
            ))}
          </div>
          <p>© {new Date().getFullYear()} {profile.name}. Made with ☕ & ❤️</p>
        </motion.footer>
      </div>
    </main>
  );
}
