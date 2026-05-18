"use client"

import { motion } from "framer-motion"
import { AnimatedSection } from "./animations"
import { Briefcase, Calendar, ExternalLink } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer (Laravel)",
    company: "Yuno Solution Sdn Bhd",
    location: "Petaling Jaya, Malaysia",
    period: "Aug 2022 - May 2026",
    description: "Develop and maintain full-stack web applications using Laravel and Vue.js, including MySQL database design and optimization, deployment and maintenance on Google Cloud Platform (VM), production support (bug fixing and change requests), and implementation of SEO best practices to ensure performance, scalability, and security.",
    technologies: ["Laravel", "Vue 3", "MySQL", "Redis", "GCP", "Linux", "SEO", "Git"],
    link: "https://yunosolutions.com/",
  },
  {
    title: "Full Stack Developer (ASP.NET) - Internship",
    company: "DHL Asia Pacific Shared Services Sdn Bhd",
    location: "Damansara Utama, Selangor, Malaysia",
    period: "Jan 2022 - Jul 2022",
    description: "Maintained and enhanced ASP.NET web applications during internship, including implementing change requests, resolving support tickets and bugs, and deploying applications to production servers.",
    technologies: ["ASP.NET", "C#", "Microsoft Windows Server", "Microsoft SQL Server", "Visual Basic", "Git"],
    link: "https://www.linkedin.com/company/dhlapssc/",
  },
  {
    title: "Web Developer - Freelance",
    company: "House of CBT",
    location: "Kuala Lumpur, Malaysia",
    period: "May 2021 - Jul 2022",
    description: "Designed and developed a corporate website and internal management system for administration and therapist training, implemented client-driven features and change requests, and handled full deployment via cPanel including hosting setup and production release.",
    technologies: ["PHP", "MySQL", "Git", "cPanel", "Bootstrap"],
    link: "#",
  },
  {
    title: "Preventive Monitoring Staff - Part-time",
    company: "CET Development SDN BHD",
    location: "Kuala Lumpur, Malaysia",
    period: "Feb 2021 - Apr 2021",
    description: "Performed preventive maintenance and monitoring of IT equipment (PCs, laptops, printers) at Hospital Kuala Lumpur, including system cleaning, virus checks, basic hardware inspections, and documentation of device specifications and asset records.",
    technologies: ["Computer Hardware", "Hardware Cleaning", "Hardware Troubleshooting"],
    link: "#",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Experience</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="text-center mt-8 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                My professional
                <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent"> journey</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                A timeline of my career growth and the amazing teams I&apos;ve had the privilege to work with.
              </p>
            </div>
          </AnimatedSection>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10" />

                {/* Content card */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{exp.title}</h3>
                          <a 
                            href={exp.link}
                            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                          >
                            {exp.company}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
