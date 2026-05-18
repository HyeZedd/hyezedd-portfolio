"use client"

import { motion } from "framer-motion"
import { AnimatedSection } from "./animations"
import { Code2, Database, Layers, Rocket, Shield, Zap } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "End-to-end web application development using Laravel and Vue 3. From database design to polished user interfaces.",
    features: ["Custom web applications", "API development", "Frontend interfaces", "Database architecture"],
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Expert PostgreSQL database design and optimization. Ensuring data integrity, performance, and scalability.",
    features: ["Schema design", "Query optimization", "Performance tuning"],
  },
  // {
  //   icon: Layers,
  //   title: "System Architecture",
  //   description: "Designing scalable, maintainable software architectures that grow with your business needs.",
  //   features: ["Microservices", "API design", "Cloud architecture", "Technical documentation"],
  // },
  // {
  //   icon: Rocket,
  //   title: "MVP Development",
  //   description: "Rapid prototype and MVP development for startups. Get your idea to market quickly with a solid foundation.",
  //   features: ["Rapid prototyping", "Iterative development", "Scalable codebase", "Launch support"],
  // },
  {
    icon: Shield,
    title: "Code Review & Audit",
    description: "Comprehensive code reviews and security audits to identify issues and improve code quality.",
    features: ["Code review", "Performance review", "Best practices", "Refactoring recommendations"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your existing applications with targeted optimizations and modern best practices.",
    features: ["Load time optimization", "Caching strategies", "Database tuning", "SEO improvements"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Services</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="text-center mt-8 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                How I can
                <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent"> help you</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Offering comprehensive development services tailored to your specific needs and goals.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
