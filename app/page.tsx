"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function Portfolio() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    sectionsRef.current.forEach((section) => {
      if (section) {
        section.classList.add('fade-in')
        observer.observe(section)
      }
    })

    // Mouse follower effect
    const cursor = document.createElement('div')
    cursor.className = 'cursor-follower'
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
    `
    document.body.appendChild(cursor)

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      observer.disconnect()
      document.removeEventListener('mousemove', handleMouseMove)
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor)
      }
    }
  }, [])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="min-h-screen" style={{background: '#000000', color: '#ffffff'}}>{/* Force true black background with white text */}
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 p-4 md:p-6 z-50">
        <div className="flex items-center justify-center gap-3 md:gap-6 text-xs md:text-sm flex-wrap">
          <span className="text-accent">.is()</span>
          <a href="#work" className="nav-item" onClick={(e) => handleNavClick(e, '#work')}>.work()</a>
          <a href="#about" className="nav-item" onClick={(e) => handleNavClick(e, '#about')}>.about()</a>
          <a href="#contact" className="nav-item" onClick={(e) => handleNavClick(e, '#contact')}>.contact()</a>
          <div className="flex gap-2">
            <a href="https://github.com/samarth3301" target="_blank" rel="noopener noreferrer" className="nav-item">
              <Github className="w-3 h-3 md:w-4 md:h-4" />
            </a>
            <a href="https://linkedin.com/in/samarth3301" target="_blank" rel="noopener noreferrer" className="nav-item">
              <Linkedin className="w-3 h-3 md:w-4 md:h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Left side indicator */}
      <div className="hidden md:block fixed left-0 top-1/2 -translate-y-1/2 w-12 bg-muted text-muted-foreground text-xs writing-mode-vertical text-center py-4 z-40">
        Website
      </div>  

      {/* Main content */}
      <main className="flex items-center justify-center min-h-screen px-4 md:px-6">
        <div className="max-w-4xl text-left w-full">
          {/* Terminal prompt */}
          <div className="mb-6 md:mb-8">
            <span className="text-accent text-base md:text-lg">&gt;</span>
            <span className="text-muted-foreground ml-2 text-base md:text-lg">whoami</span>
          </div>

          {/* Main heading */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-4">
              <span className="text-foreground">samarth</span>
              <span className="text-accent">.is()</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-2">Samarth Mahapatra</p>
            <p className="text-accent text-base md:text-lg">Backend Developer & System Architect</p>
          </div>

          {/* Description */}
          <div className="mb-6 md:mb-8 text-muted-foreground max-w-2xl">
            <p className="text-base md:text-lg leading-relaxed mb-4">
              Building scalable systems and products for <span className="text-accent font-semibold">50k+ users</span>.
            </p>
            <p className="mb-4 md:mb-6 text-sm md:text-base">
              I specialize in backend architecture, system design, and full-stack development. 
              Currently founding <span className="text-accent">43labs</span> and contributing to <span className="text-accent">zerops</span>.
            </p>
            
            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-accent">4+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-accent">50k+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Users</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-accent">2025</div>
                <div className="text-xs md:text-sm text-muted-foreground">Active</div>
              </div>
            </div>
            
            {/* Current status */}
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm">Available for new projects</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex gap-3 md:gap-4 mb-6 md:mb-8 flex-wrap">
            <a href="#work" className="btn text-sm md:text-base" onClick={(e) => handleNavClick(e, '#work')}>
              View My Work
            </a>
            <a href="#contact" className="btn-outline text-sm md:text-base" onClick={(e) => handleNavClick(e, '#contact')}>
              Let's Talk
            </a>
            <a href="mailto:samarplayz1337@gmail.com" className="nav-item flex items-center gap-2 text-sm md:text-base">
              <Mail className="w-3 h-3 md:w-4 md:h-4" />
              Quick Email
            </a>
          </div>

          {/* Cursor */}
          <div className="flex items-center">
            <span className="text-accent text-base md:text-lg">&gt;</span>
            <div className="cursor ml-1"></div>
          </div>
        </div>
      </main>

      {/* Work section */}
      <section ref={addToRefs} id="work" className="px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
            <span className="text-accent">.work()</span>
          </h2>
          
          <div className="grid gap-4 md:gap-6 sm:grid-cols-1 lg:grid-cols-2">
            <div className="card animate-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Founder</h3>
                  <p className="text-accent text-sm">43labs • 2025</p>
                </div>
                <a href="https://x.com/43labs_" target="_blank" rel="noopener noreferrer" className="link">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-muted-foreground mb-4">
                vibecoding products for 50k+ users
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-muted rounded">TypeScript</span>
                <span className="px-2 py-1 bg-muted rounded">Next.js</span>
                <span className="px-2 py-1 bg-muted rounded">React Native</span>
                <span className="px-2 py-1 bg-muted rounded">Expo</span>
              </div>
            </div>

            <div className="card animate-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Solo Builder</h3>
                  <p className="text-accent text-sm">holdxpay • 2025</p>
                </div>
                <a href="https://holdxpay.com/" target="_blank" rel="noopener noreferrer" className="link">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-muted-foreground mb-4">
                gig platform for 2k users
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-muted rounded">TypeScript</span>
                <span className="px-2 py-1 bg-muted rounded">Next.js</span>
                <span className="px-2 py-1 bg-muted rounded">PayU</span>
              </div>
            </div>

            <div className="card animate-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
                  <p className="text-accent text-sm">zerops • 2025</p>
                </div>
                <a href="https://zerops.io/" target="_blank" rel="noopener noreferrer" className="link">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-muted-foreground mb-4">
                full stack dev + technical writing & creating starter dev recipes
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-muted rounded">TypeScript</span>
                <span className="px-2 py-1 bg-muted rounded">GoLang</span>
                <span className="px-2 py-1 bg-muted rounded">Elixir</span>
              </div>
            </div>

            <div className="card animate-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Founding Engineer</h3>
                  <p className="text-accent text-sm">delemate • 2024</p>
                </div>
                <a href="https://delemate.com/" target="_blank" rel="noopener noreferrer" className="link">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-muted-foreground mb-4">
                shipments app with tracking, deliveries, payments & chatting for 6k+ users
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-muted rounded">TypeScript</span>
                <span className="px-2 py-1 bg-muted rounded">React Native</span>
                <span className="px-2 py-1 bg-muted rounded">MERN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section ref={addToRefs} id="about" className="px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
            <span className="text-accent">.about()</span>
          </h2>
          
          <div className="grid gap-8 md:gap-12 lg:grid-cols-3">
            {/* Background */}
            <div className="lg:col-span-2 fade-in">
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-accent">Background</h3>
              <div className="space-y-3 md:space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  Hey there! I'm Samarth, a backend developer and system architect with a passion for 
                  building scalable, high-performance systems that can handle real-world complexity.
                </p>
                <p>
                  My journey started with curiosity about how systems work at scale. Today, I've built 
                  products serving over 50,000+ users, managed real-time systems processing thousands 
                  of transactions, and architected solutions that have scaled from MVPs to production-ready platforms.
                </p>
                <p>
                  I thrive in the intersection of technology and product, where clean code meets user impact. 
                  Whether it's optimizing database queries for millisecond response times or designing 
                  microservices that can handle sudden traffic spikes, I love solving complex technical challenges.
                </p>
              </div>
              
              <div className="mt-6 md:mt-8">
                <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-accent">Tech Stack</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {[
                    "Node.js", "Python", "TypeScript", "PostgreSQL", "Redis", "Docker",
                    "AWS", "Kubernetes", "GraphQL", "MongoDB", "React", "Next.js"
                  ].map((tech) => (
                    <div key={tech} className="bg-card border border-border rounded-lg p-2 md:p-3 text-center hover:border-accent/50 transition-colors">
                      <span className="text-xs md:text-sm font-mono">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="fade-in">
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-accent">Quick Stats</h3>
              <div className="space-y-4 md:space-y-6">
                {[
                  { label: "Years Experience", value: "4+" },
                  { label: "Users Served", value: "50K+" },
                  { label: "Projects Delivered", value: "15+" },
                  { label: "Coffee Consumed", value: "∞" }
                ].map((stat) => (
                  <div key={stat.label} className="border-l-2 border-accent pl-3 md:pl-4">
                    <div className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section ref={addToRefs} id="contact" className="px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
            <span className="text-accent">.contact()</span>
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="fade-in">
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-accent">Let's Build Together</h3>
              <div className="space-y-3 md:space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  I'm always excited to work on interesting projects and collaborate with 
                  talented people. Whether you have a startup idea, need technical consultation, 
                  or want to discuss potential opportunities, I'd love to hear from you.
                </p>
                <p>
                  I'm particularly interested in:
                </p>
                <ul className="space-y-1 md:space-y-2 list-disc list-inside text-xs md:text-sm">
                  <li>Backend architecture and system design</li>
                  <li>Scalable product development</li>
                  <li>Early-stage startup technical leadership</li>
                  <li>Open source contributions</li>
                  <li>Technical writing and mentorship</li>
                </ul>
              </div>
            </div>
            
            <div className="fade-in">
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-accent">Get In Touch</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="card animate-card p-4 md:p-6">
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                    <div>
                      <h4 className="font-semibold text-sm md:text-base">Email</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">Best for project discussions</p>
                    </div>
                  </div>
                  <a href="mailto:samarplayz1337@gmail.com" className="btn w-full justify-center text-xs md:text-sm">
                    Send Email
                  </a>
                </div>
                
                <div className="card animate-card p-4 md:p-6">
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                    <div>
                      <h4 className="font-semibold text-sm md:text-base">LinkedIn</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">Professional networking</p>
                    </div>
                  </div>
                  <a href="https://linkedin.com/in/samarth3301" target="_blank" rel="noopener noreferrer" className="btn-outline w-full justify-center text-xs md:text-sm">
                    Connect on LinkedIn
                  </a>
                </div>
                
                <div className="card animate-card p-4 md:p-6">
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <Github className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                    <div>
                      <h4 className="font-semibold text-sm md:text-base">GitHub</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">Check out my code</p>
                    </div>
                  </div>
                  <a href="https://github.com/samarth3301" target="_blank" rel="noopener noreferrer" className="btn-outline w-full justify-center text-xs md:text-sm">
                    View GitHub
                  </a>
                </div>
              </div>
              
              <div className="mt-4 md:mt-6 p-3 md:p-4 border border-accent/20 rounded-lg">
                <p className="text-xs md:text-sm text-muted-foreground text-center">
                  <span className="text-accent">Response time:</span> Usually within 24 hours
                </p>
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
                Backend developer building scalable systems and products that matter. 
                Always learning, always building.
              </p>
              <div className="flex gap-3 md:gap-4">
                <a href="https://github.com/samarth3301" target="_blank" rel="noopener noreferrer" className="nav-item">
                  <Github className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a href="https://linkedin.com/in/samarth3301" target="_blank" rel="noopener noreferrer" className="nav-item">
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a href="mailto:samarplayz1337@gmail.com" className="nav-item">
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-accent text-sm md:text-base">Navigation</h4>
              <div className="space-y-1 md:space-y-2">
                <a href="#work" className="block text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base" onClick={(e) => handleNavClick(e, '#work')}>Work</a>
                <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base" onClick={(e) => handleNavClick(e, '#about')}>About</a>
                <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-accent text-sm md:text-base">Current</h4>
              <div className="space-y-1 md:space-y-2 text-muted-foreground text-xs md:text-sm">
                <div>Building at <span className="text-accent">43labs</span></div>
                <div>Contributing to <span className="text-accent">zerops</span></div>
                <div>Location: <span className="text-foreground">India</span></div>
                <div>Status: <span className="text-green-400">Available for projects</span></div>
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
  )
}
