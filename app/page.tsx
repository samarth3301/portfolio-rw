"use client";

import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        section.classList.add("fade-in");
        observer.observe(section);
      }
    });

    // Mouse follower effect
    const cursor = document.createElement("div");
    cursor.className = "cursor-follower";
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, rgba(124, 58, 237, 0.6) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: all 0.1s ease;
      mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      observer.disconnect();
      document.removeEventListener("mousemove", handleMouseMove);
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "#000000", color: "#ffffff" }}
    >
      {/* Force true black background with white text */}

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 p-4 md:p-6 z-50">
        <div className="flex items-center justify-center gap-3 md:gap-6 text-xs md:text-sm flex-wrap">
          <span className="text-accent">.dev()</span>
          <a
            href="#work"
            className="nav-item"
            onClick={(e) => handleNavClick(e, "#work")}
          >
            .work()
          </a>
          <a
            href="#about"
            className="nav-item"
            onClick={(e) => handleNavClick(e, "#about")}
          >
            .about()
          </a>
          <a
            href="#contact"
            className="nav-item"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            .contact()
          </a>
          <div className="flex gap-2">
            <a
              href="https://github.com/samarth3301"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item"
            >
              <Github className="w-3 h-3 md:w-4 md:h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/samarth0316"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item"
            >
              <Linkedin className="w-3 h-3 md:w-4 md:h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Left side indicator */}

      {/* Main content */}
      <main className="flex items-center justify-center min-h-screen px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-left w-full">
          {/* Terminal prompt */}
          <div className="mb-6 md:mb-8">
            <span className="text-accent text-base md:text-lg">&gt;</span>
            <span className="text-muted-foreground ml-2 text-base md:text-lg">
              whoami
            </span>
          </div>

          <div className="grid gap-8 md:gap-12 lg:grid-cols-3">
            {/* Left content - Main info */}
            <div className="lg:col-span-2">
              {/* Main heading */}
              <div className="mb-6 md:mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-4">
                  <span className="text-foreground">samarth</span>
                  <span className="text-accent">.dev()</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-2">
                  Samarth Mahapatra
                </p>
                <p className="text-accent text-base md:text-lg">
                  Backend Developer, DevOps Engineer & CTO @ Techsolace
                </p>
              </div>

              {/* Description */}
              <div className="mb-6 md:mb-8 text-muted-foreground">
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  Building scalable systems and products for{" "}
                  <span className="text-accent font-semibold">50k+ users</span>.
                </p>
                <p className="mb-4 md:mb-6 text-sm md:text-base">
                  I specialize in backend architecture, system designs and
                  scalability.
                </p>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-accent">
                      2+
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      Companies
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-accent">
                      100k+
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      Users
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-accent">
                      2025
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      Active
                    </div>
                  </div>
                </div>

                {/* Current status */}
                <div className="flex items-center gap-2 mb-4 md:mb-6">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs md:text-sm">
                    Available for new projects
                  </span>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex gap-3 md:gap-4 mb-6 md:mb-8 flex-wrap">
                <a
                  href="#work"
                  className="btn text-sm md:text-base"
                  onClick={(e) => handleNavClick(e, "#work")}
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="btn-outline text-sm md:text-base"
                  onClick={(e) => handleNavClick(e, "#contact")}
                >
                  Let's Talk
                </a>
                <a
                  href="mailto:samarplayz1337@gmail.com"
                  className="nav-item flex items-center gap-2 text-sm md:text-base"
                >
                  <Mail className="w-3 h-3 md:w-4 md:h-4" />
                  Quick Email
                </a>
              </div>
            </div>

            {/* Right content - Profile picture */}
            <div className="lg:col-span-1 flex items-center justify-center lg:justify-end">
              <div className="relative group">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-2xl overflow-hidden border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-purple-500/10 hover:border-accent/50 transition-all duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Samarth Mahapatra - Profile"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />

                  {/* Status indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-foreground">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Work section */}
      <section ref={addToRefs} id="work" className="min-h-screen flex items-center justify-center px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-6xl mx-auto text-left w-full">
          {/* Terminal prompt */}
          <div className="mb-6 md:mb-8">
            <span className="text-accent text-base md:text-lg">&gt;</span>
            <span className="text-muted-foreground ml-2 text-base md:text-lg">cat work_experience.log</span>
          </div>

          {/* Section heading */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 md:mb-12">
            <span className="text-accent">.work()</span>
          </h2>

          <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
            {/* Card 1 - Techsolace */}
            <div className="group relative overflow-hidden border border-border rounded-xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-accent/50">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <span className="text-accent font-bold text-lg">TS</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-1 text-foreground">Chief Technology Officer</h3>
                      <p className="text-accent text-sm font-mono">Techsolace • Jun 2024 - Present</p>
                    </div>
                  </div>
                  <a
                    href="https://techsolace.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors group"
                  >
                    <ExternalLink className="w-5 h-5 text-accent group-hover:rotate-12 transition-transform" />
                  </a>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Leading technical strategy and system architecture for products serving 50k+ users.
                  Managing engineering teams and overseeing full-stack delivery from concept to production.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-muted-foreground">System Architecture & DevOps</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-muted-foreground">Team Leadership & Strategy</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-muted-foreground">Scalable Infrastructure</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "Python", "Docker", "AWS", "Kubernetes"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-mono border border-accent/20 hover:bg-accent/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2 - Freelancing */}
            <div className="group relative overflow-hidden border border-border rounded-xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-emerald-500/50">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-emerald-400 font-bold text-lg">FL</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-1 text-foreground">Freelance Developer</h3>
                      <p className="text-emerald-400 text-sm font-mono">Multiple Startups • 2022 - Jun 2024</p>
                    </div>
                  </div>
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <span className="text-emerald-400 font-bold text-sm">10+</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Built ecommerce platforms, real-time chat systems, and upgraded infrastructure for multiple startups.
                  Specialized in full-stack development and system optimization for growing businesses.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-muted-foreground">Ecommerce Platform Development</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-muted-foreground">Real-time Chat Systems</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-muted-foreground">Infrastructure Upgrades</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Node.js", "React", "MongoDB", "WebSocket", "Redis"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-mono border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About section */}
      {/* About section */}
      <section ref={addToRefs} id="about" className="min-h-screen flex items-center justify-center px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto text-left w-full">
          {/* Terminal prompt */}
          <div className="mb-6 md:mb-8">
            <span className="text-accent text-base md:text-lg">&gt;</span>
            <span className="text-muted-foreground ml-2 text-base md:text-lg">cat about_me.txt</span>
          </div>

          {/* Section heading */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 md:mb-12">
            <span className="text-accent">.about()</span>
          </h2>

          <div className="grid gap-8 md:gap-12 lg:grid-cols-3">
            {/* Background */}
            <div className="lg:col-span-2 fade-in">
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Background
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-base md:text-lg">
                      Hey, I'm Samarth — a backend and DevOps developer who loves solving hard system-level problems.
                    </p>
                    <p>
                      Currently serving as <span className="text-accent font-semibold">CTO @ Techsolace</span> where I build and scale products.
                    </p>
                    <p>
                      Freelance engineer for startups like <span className="text-foreground">Plentycred</span>, <span className="text-foreground">MarutiBakers</span>,
                      <span className="text-foreground">QuickOPD</span>, and <span className="text-foreground">Grave</span>.
                    </p>
                    <p>
                      I enjoy working where clean code meets product impact: optimizing DB queries to millisecond-level,
                      designing distributed systems for scale, and deploying production-ready infrastructure with Docker/Kubernetes.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    Tech Arsenal
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { name: "C++", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
                      { name: "Python", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
                      { name: "TypeScript", color: "bg-blue-600/20 text-blue-300 border-blue-600/30" },
                      { name: "JavaScript", color: "bg-yellow-600/20 text-yellow-300 border-yellow-600/30" },
                      { name: "GoLang", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
                      { name: "Java", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
                    ].map((tech) => (
                      <div
                        key={tech.name}
                        className={`${tech.color} border rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 group cursor-pointer`}
                      >
                        <span className="font-mono font-semibold group-hover:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Infrastructure & Tools
                  </h4>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {[
                      "Docker", "Kubernetes", "AWS", "Redis",
                      "PostgreSQL", "MongoDB", "GraphQL", "REST APIs",
                      "Kafka", "Prisma", "Firebase", "Vercel"
                    ].map((tool) => (
                      <div
                        key={tool}
                        className="bg-accent/10 border border-accent/20 rounded-lg p-3 text-center hover:bg-accent/20 transition-colors group"
                      >
                        <span className="text-accent text-xs md:text-sm font-mono group-hover:text-white transition-colors">
                          {tool}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats & Achievements */}
            <div className="fade-in space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Quick Stats
                </h3>
                <div className="space-y-6">
                  {[
                    { label: "Years Experience", value: "4+", icon: "🚀", color: "text-blue-400" },
                    { label: "Users Served", value: "100K+", icon: "👥", color: "text-green-400" },
                    { label: "Projects Delivered", value: "30+", icon: "⚡", color: "text-yellow-400" },
                    { label: "Coffee Consumed", value: "∞", icon: "☕", color: "text-orange-400" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="group bg-card/50 border border-border rounded-xl p-4 hover:border-accent/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{stat.icon}</span>
                        <div>
                          <div className={`text-2xl md:text-3xl font-bold ${stat.color}`}>
                            {stat.value}
                          </div>
                          <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  Currently
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">Building at <span className="text-accent">Techsolace</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">Location: <span className="text-foreground">India</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">Status: <span className="text-green-400">Available for select projects</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact section */}
      <section ref={addToRefs} id="contact" className="min-h-screen flex items-center justify-center px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto text-left w-full">
          {/* Terminal prompt */}
          <div className="mb-6 md:mb-8">
            <span className="text-accent text-base md:text-lg">&gt;</span>
            <span className="text-muted-foreground ml-2 text-base md:text-lg">ping samarth</span>
          </div>

          {/* Section heading */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 md:mb-12">
            <span className="text-accent">.contact()</span>
          </h2>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="fade-in space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Let's Build Together
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-base md:text-lg">
                    I'm always excited to work on interesting projects and collaborate with talented people.
                    Whether you have a startup idea, need technical consultation, or want to discuss potential opportunities, I'd love to hear from you.
                  </p>

                  <div>
                    <p className="text-foreground font-semibold mb-3">I'm particularly interested in:</p>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        "Backend architecture and system design",
                        "Scalable product development",
                        "Early-stage startup technical leadership",
                        "Open source contributions",
                        "Technical writing and mentorship"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  Response Info
                </h4>
                <div className="bg-card/50 border border-accent/20 rounded-xl p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-muted-foreground">Response time: <span className="text-accent">Usually within 24 hours</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-muted-foreground">Timezone: <span className="text-foreground">IST (UTC+5:30)</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-muted-foreground">Availability: <span className="text-green-400">Open for select projects</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-in">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Get In Touch
              </h3>

              <div className="space-y-6">
                {/* Email Card */}
                <div className="group relative overflow-hidden border border-border rounded-xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-accent/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">Email</h4>
                        <p className="text-sm text-muted-foreground">Best for project discussions</p>
                      </div>
                    </div>
                    <a
                      href="mailto:samarplayz1337@gmail.com"
                      className="btn w-full justify-center group-hover:scale-105 transition-transform"
                    >
                      Send Email
                    </a>
                  </div>
                </div>

                {/* LinkedIn Card */}
                <div className="group relative overflow-hidden border border-border rounded-xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-blue-500/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Linkedin className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">LinkedIn</h4>
                        <p className="text-sm text-muted-foreground">Professional networking</p>
                      </div>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/samarth0310/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline w-full justify-center border-blue-500/30 text-blue-400 hover:bg-blue-500/20 group-hover:scale-105 transition-all"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                {/* GitHub Card */}
                <div className="group relative overflow-hidden border border-border rounded-xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-gray-400/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center">
                        <Github className="w-6 h-6 text-gray-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">GitHub</h4>
                        <p className="text-sm text-muted-foreground">Check out my code</p>
                      </div>
                    </div>
                    <a
                      href="https://github.com/samarth3301"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline w-full justify-center border-gray-500/30 text-gray-400 hover:bg-gray-500/20 group-hover:scale-105 transition-all"
                    >
                      View GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 md:px-6 py-6 md:py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="md:col-span-2">
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">
                <span className="text-foreground">samarth</span>
                <span className="text-accent">.is()</span>
              </h3>
              <p className="text-muted-foreground mb-3 md:mb-4 max-w-md text-sm md:text-base">
                Backend developer building scalable systems and products that
                matter. Always learning, always building.
              </p>
              <div className="flex gap-3 md:gap-4">
                <a
                  href="https://github.com/samarth3301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-item"
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/samarth0310/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-item"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a href="mailto:samarplayz1337@gmail.com" className="nav-item">
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-accent text-sm md:text-base">
                Navigation
              </h4>
              <div className="space-y-1 md:space-y-2">
                <a
                  href="#work"
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base"
                  onClick={(e) => handleNavClick(e, "#work")}
                >
                  Work
                </a>
                <a
                  href="#about"
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base"
                  onClick={(e) => handleNavClick(e, "#about")}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base"
                  onClick={(e) => handleNavClick(e, "#contact")}
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-accent text-sm md:text-base">
                Current
              </h4>
              <div className="space-y-1 md:space-y-2 text-muted-foreground text-xs md:text-sm">
                <div>
                  Building at <span className="text-accent">techsolace</span>
                </div>
                <div>
                  Location: <span className="text-foreground">India</span>
                </div>
                <div>
                  Status:{" "}
                  <span className="text-green-400">Available for projects</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
            <p className="text-muted-foreground text-xs md:text-sm text-center md:text-left">
              © 2025 Samarth Mahapatra. Built with Next.js, TypeScript & love.
            </p>
            <p className="text-muted-foreground text-xs md:text-sm">
              Last updated: September 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
