"use client"

import { motion } from "framer-motion"
import { AnimatedSection } from "./animations"

const techStack = {
  backend: [
    { name: "Laravel", icon: "🔴", proficiency: 80 },
    { name: "PHP", icon: "🐘", proficiency: 80 },
    { name: ".NET", icon: "🟢", proficiency: 35 },
  ],
  frontend: [
    { name: "Vue 3", icon: "💚", proficiency: 80 },
    { name: "Tailwind CSS", icon: "🎨", proficiency: 80 },
  ],
  database: [
    { name: "MySQL", icon: "🐬", proficiency: 70 },
    { name: "Redis", icon: "🔴", proficiency: 45 },
  ],
  tools: [
    { name: "Git", icon: "📦", proficiency: 60 },
    { name: "GCP", icon: "☁️", proficiency: 70 },
    { name: "Linux", icon: "🐧", proficiency: 65 },
  ],
}

function TechCard({ name, proficiency, delay }: { name: string; proficiency: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{proficiency}%</span>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full"
        />
      </div>
    </motion.div>
  )
}

function CategorySection({ title, technologies, baseDelay }: { title: string; technologies: typeof techStack.backend; baseDelay: number }) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{title}</h3>
      <div className="space-y-3">
        {technologies.map((tech, index) => (
          <TechCard
            key={tech.name}
            name={tech.name}
            proficiency={tech.proficiency}
            delay={baseDelay + index * 0.05}
          />
        ))}
      </div>
    </div>
  )
}

export function TechStack() {
  return (
    <section id="tech" className="py-24 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Tech Stack</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="text-center mt-8 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                Technologies I
                <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent"> work with</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                A curated selection of technologies and tools that I use to bring ideas to life.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CategorySection title="Backend" technologies={techStack.backend} baseDelay={0.1} />
            <CategorySection title="Frontend" technologies={techStack.frontend} baseDelay={0.2} />
            <CategorySection title="Database" technologies={techStack.database} baseDelay={0.3} />
            <CategorySection title="DevOps & Tools" technologies={techStack.tools} baseDelay={0.4} />
          </div>
        </div>
      </div>
    </section>
  )
}
