"use client"

import { motion } from "framer-motion"
import { AnimatedSection } from "./animations"
import { ExternalLink, Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Portfolio Maker",
    description: "A portfolio maker platform that allows users to create and customize their portfolios with ease. Features include wide range of templates, and seamless integration with social media platforms.",
    image: "/portfolio-maker.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: 'https://portfolio-maker.hyezedd.my/',
    githubUrl: 'https://github.com/HyeZedd/portfolio_maker',
    featured: true,
    production: true,
  },
  {
    title: "Interactive Calendar Website (Calendar2U Gallery)",
    description: "A comprehensive calendar website with public holiday, festival, and long weekend information. This project are belongs to Yuno Solutions Sdn Bhd.",
    image: "/calendar2u-gallery.png",
    technologies: ["Laravel", "Vue 3", "MySQL", "Tailwind CSS", "Redis"],
    liveUrl: "https://calendar2u.com/gallery/malaysia",
    githubUrl: null,
    featured: true,
    production: true,
  },
  {
    title: "Date Calculator",
    description: "A date calculator that allows users to calculate the difference between two dates. Features include date calculation, date difference, and more. This project are belongs to Yuno Solutions Sdn Bhd.",
    image: "/date-calculator.png",
    technologies: ["Laravel", "Vue 3", "MySQL", "Tailwind CSS"],
    liveUrl: "https://date-calculator.app/calculate/duration-between-date",
    githubUrl: null,
    featured: true,
    production: true,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Projects</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="text-center mt-8 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                Featured
                <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent"> work</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                A selection of projects that showcase my expertise in building scalable, user-centric applications.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 lg:gap-12 items-center`}
              >
                {/* Project Image */}
                <div className="flex-1 w-full">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative group rounded-2xl overflow-hidden bg-card border border-border"
                  >
                    {/* Placeholder gradient */}
                    <div className="aspect-video bg-gradient-to-br from-primary/20 via-card to-chart-2/20 flex items-center justify-center">
                      {project.image ?
                        (<img
                          src={project.image}
                          alt={project.title}
                          width={800}
                          height={600}
                          className="w-full h-auto object-cover"
                        />
                        ) :
                        (<div className="text-center p-8">
                          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                            <Globe className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="font-semibold text-foreground">{project.title}</h3>
                          <p className="text-sm text-muted-foreground mt-2">Preview coming soon</p>
                        </div>)}
                    </div>

                    {/* Hover overlay */}
                    {project.liveUrl && (
                      < div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4" >

                        <Button size="sm" variant="secondary" className="rounded-full" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>

                        <Button size="sm" variant="outline" className="rounded-full" asChild>
                          {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          )}
                        </Button>
                      </div>)}
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="flex-1 w-full">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Stats */}
                    {/* <div className="flex gap-6">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-2">
                          {key === "users" && <Users className="h-4 w-4 text-primary" />}
                          {key === "bookings" && <Calendar className="h-4 w-4 text-primary" />}
                          {key === "events" && <Calendar className="h-4 w-4 text-primary" />}
                          {key === "dataPoints" && <Globe className="h-4 w-4 text-primary" />}
                          {key === "uptime" && <Globe className="h-4 w-4 text-primary" />}
                          <span className="text-sm">
                            <span className="font-semibold text-foreground">{value}</span>{" "}
                            <span className="text-muted-foreground capitalize">{key}</span>
                          </span>
                        </div>
                      ))}
                    </div> */}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 pt-2">
                      <Button className="rounded-full" asChild>
                        {(project.liveUrl && project.production) ? (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Project
                          </a>) : (
                          <p className="text-sm text-muted-foreground mt-2">In Development</p>
                        )}
                      </Button>
                      <Button variant="outline" className="rounded-full" asChild>
                        {project.githubUrl &&
                          (<a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Source Code
                          </a>)
                        }
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
            }
          </div >
        </div >
      </div >
    </section >
  )
}
