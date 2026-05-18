"use client";

import {AnimatedSection} from "./animations";
import {MapPin, Code2, Coffee, Sparkles} from "lucide-react";

export function About() {
	return (
		<section id="about" className="py-24 md:py-32">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					<AnimatedSection>
						<div className="flex items-center gap-3 mb-4">
							<div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
							<span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">About</span>
							<div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
						</div>
					</AnimatedSection>

					<div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mt-12">
						{/* Left column - Main content */}
						<AnimatedSection delay={0.1}>
							<div className="space-y-6">
								<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
									Passionate about crafting
									<span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent"> digital experiences</span>
								</h2>
								<div className="space-y-4 text-muted-foreground leading-relaxed">
									<p>I&apos;m a Full Stack Developer based in Malaysia with over 5 years of experience building web applications that scale. My journey in tech started with a curiosity for how things work, and it has evolved into a passion for creating elegant solutions to complex problems.</p>
									<p>I specialize in building robust backend systems with Laravel and crafting responsive, interactive frontends with Vue 3. My expertise extends to database design with MySQL, ensuring data integrity and optimal performance.</p>
									<p>In addition, I manage deployment workflows on Linux servers hosted on Google Cloud Platform (GCP), including server setup, application deployment, environment configuration, and production monitoring to ensure system stability.</p>
								</div>
							</div>
						</AnimatedSection>

						{/* Right column - Stats/Info cards */}
						<AnimatedSection delay={0.2}>
							<div className="grid grid-cols-2 gap-4">
								<div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
									<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
										<MapPin className="h-6 w-6 text-primary" />
									</div>
									<h3 className="font-semibold text-foreground">Based in</h3>
									<p className="text-muted-foreground text-sm">Kuala Lumpur, Malaysia</p>
								</div>

								<div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
									<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
										<Code2 className="h-6 w-6 text-primary" />
									</div>
									<h3 className="font-semibold text-foreground">Experience</h3>
									<p className="text-muted-foreground text-sm">5+ Years</p>
								</div>

								<div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
									<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
										<Sparkles className="h-6 w-6 text-primary" />
									</div>
									<h3 className="font-semibold text-foreground">Projects</h3>
									<p className="text-muted-foreground text-sm">8 Completed</p>
								</div>

								<div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
									<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
										<Coffee className="h-6 w-6 text-primary" />
									</div>
									<h3 className="font-semibold text-foreground">Coffee</h3>
									<p className="text-muted-foreground text-sm">Infinite cups</p>
								</div>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</div>
		</section>
	);
}
