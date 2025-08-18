import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, MessageCircle, Github, Linkedin, Mail, Terminal, Code2, Database } from "lucide-react"
import BackgroundParticles from "@/components/background-particles"

export default function Portfolio() {
  const workExperience = [
    {
      role: "Founder",
      type: "Contract",
      company: "43labs",
      year: 2025,
      location: "Remote",
      url: "https://x.com/43labs_",
      description: "vibecoding products for 50k+ users",
      stack: ["Typescript", "Nextjs", "React Native", "Expo", "PayU"],
    },
    {
      role: "Solo Builder",
      type: "Contract",
      company: "holdxpay",
      year: 2025,
      location: "Remote",
      url: "https://holdxpay.com/",
      description: "gig platform for 2k users",
      stack: ["Typescript", "Nextjs", "PayU"],
    },
    {
      role: "Solo Builder",
      type: "Contract",
      company: "bharat tenders",
      year: 2025,
      location: "Remote",
      url: "https://bharattenders.co/",
      description: "procurement & bidding for goods + services",
      stack: ["Typescript", "Nextjs", "PayU"],
    },
    {
      role: "Software Engineer",
      type: "Intern",
      company: "zerops",
      year: 2025,
      location: "Remote",
      url: "https://zerops.io/",
      description: "full stack dev + technical writing & creating starter dev recipes (SDKs)",
      stack: ["Typescript", "GoLang", "Elixir"],
    },
    {
      role: "Founding Engineer",
      type: "Part-time",
      company: "delemate",
      year: 2024,
      location: "Remote",
      url: "https://delemate.com/",
      description: "shipments app with tracking, deliveries, payments & chatting for 6k+ users",
      stack: ["Typescript", "React Native", "Expo", "MERN"],
    },
    {
      role: "Technical Co-Founder",
      type: "Part-time",
      company: "toornify",
      year: 2024,
      location: "Remote",
      url: "https://toornify.com/",
      description: "managing tournaments for organizers & gamers",
      stack: ["Typescript", "Nextjs"],
    },
    {
      role: "Bot Dev",
      type: "Intern",
      company: "znotes",
      year: 2023,
      location: "Remote",
      url: "https://znotes.org/",
      description: "moderation, logging & economy systems for a 43k+ discord",
      stack: ["Typescript", "Discord.js"],
    },
  ]

  const projects = [
    {
      name: "ArcadeFi",
      description: "retro games & AI",
      repo: "https://github.com/dinxsh/arcade-fi",
      stack: ["typescript", "nextjs", "AI"],
    },
    {
      name: "aarogya",
      description: "self care & fitness app",
      repo: "https://github.com/dinxsh/aarogya",
      stack: ["typescript", "react native", "expo"],
    },
    {
      name: "vnn",
      description: "visualize & train neural networks",
      repo: "https://github.com/dinxsh/vnn",
      stack: ["go", "webassembly", "tensorflow"],
    },
    {
      name: "minotes",
      description: "customizable notion with AI",
      repo: "https://github.com/dinxsh/minotes",
      stack: ["typescript", "react native", "expo"],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <BackgroundParticles />

      <div className="relative z-10">
        {/* Terminal Header */}
        <div className="w-full bg-card/50 backdrop-blur-sm border-b border-border">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm font-mono">
              <Terminal className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">samarth@portfolio:~$</span>
              <span className="text-foreground terminal-cursor">whoami</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center pt-20 pb-12 px-4">
          <div className="text-center mb-12 max-w-4xl">
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <img
                  src="/backend-developer-headshot.png"
                  alt="Samarth Mahapatra"
                  className="w-full h-full rounded-full border-2 border-accent/30 glow-on-hover transition-all duration-300"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                Samarth Mahapatra
              </h1>
              <p className="text-xl text-muted-foreground mb-6 font-mono">
                <Database className="inline w-5 h-5 mr-2 text-accent" />
                building scalable backend systems
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button asChild className="bg-accent hover:bg-accent/90 text-white font-medium px-6 py-2 glow-on-hover">
                  <a href="https://x.com/samarth_0310" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Let's Chat
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-accent/30 text-foreground hover:bg-accent/10 bg-transparent"
                >
                  <a href="https://github.com/samarth3301" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Work Section */}
          <div className="w-full max-w-6xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-accent" />
                <h2 className="text-2xl font-bold font-mono">./work</h2>
              </div>
              <div className="h-px bg-gradient-to-r from-accent to-transparent flex-1"></div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {workExperience.map((job, index) => (
                <Card
                  key={index}
                  className="bg-card/80 backdrop-blur-sm border-border hover:border-accent/30 transition-all duration-300 group glow-on-hover"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h3 className="text-foreground font-semibold text-lg group-hover:text-accent transition-colors">
                          {job.role}
                        </h3>
                        <Badge className="bg-accent/20 text-accent border-accent/30 text-xs">{job.type}</Badge>
                      </div>
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4 font-mono">
                      <span className="text-accent font-medium">{job.company}</span>
                      <span>•</span>
                      <span>{job.year}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{job.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {job.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-muted-foreground border-border hover:border-accent/50 hover:text-accent transition-colors text-xs font-mono"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="w-full max-w-6xl mt-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-accent" />
                <h2 className="text-2xl font-bold font-mono">./projects</h2>
              </div>
              <div className="h-px bg-gradient-to-r from-accent to-transparent flex-1"></div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-card/80 backdrop-blur-sm border-border hover:border-accent/30 transition-all duration-300 group glow-on-hover"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-foreground font-semibold text-lg group-hover:text-accent transition-colors font-mono">
                        {project.name}
                      </h3>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-muted-foreground border-border hover:border-accent/50 hover:text-accent transition-colors text-xs font-mono"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="w-full max-w-6xl mt-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-accent" />
                <h2 className="text-2xl font-bold font-mono">./connect</h2>
              </div>
              <div className="h-px bg-gradient-to-r from-accent to-transparent flex-1"></div>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground mb-6 text-lg">Ready to build something amazing together?</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild className="bg-accent hover:bg-accent/90 text-white glow-on-hover">
                    <a href="mailto:samarplayz1337@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Me
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-accent/30 text-foreground hover:bg-accent/10 bg-transparent"
                  >
                    <a href="https://linkedin.com/in/samarth3301" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="w-full max-w-6xl mt-16 text-center">
            <div className="text-muted-foreground font-mono text-sm">
              <span className="text-accent">contact@samarthdev.me:~$</span> echo "Built with ❤️ and lots of ☕"
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
