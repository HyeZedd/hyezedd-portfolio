"use client";

import {useState} from "react";
import {motion} from "framer-motion";
import {AnimatedSection} from "./animations";
import {Mail, Send, Github, Linkedin, MapPin, MessageSquare} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

export function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setIsSubmitting(false);
		setFormState({name: "", email: "", message: ""});
		// In a real app, you'd handle the form submission here
	};

	return (
		<section id="contact" className="py-24 md:py-32 relative">
			{/* Background decoration */}
			<div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-5xl mx-auto">
					<AnimatedSection>
						<div className="flex items-center gap-3 mb-4">
							<div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
							<span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Contact</span>
							<div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
						</div>
					</AnimatedSection>

					<AnimatedSection delay={0.1}>
						<div className="text-center mt-8 mb-16">
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
								Let&apos;s work
								<span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent"> together</span>
							</h2>
							<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can bring your ideas to life.</p>
						</div>
					</AnimatedSection>

					<div className="flex flex-col gap-12">
						{/* Contact Info */}
						<motion.div initial={{opacity: 0, x: -30}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 0.6}} className="flex flex-col justify-center items-center  space-y-8">
							<div className="flex flex-col justify-center items-center w-[70%]">
								<h3 className="text-xl font-semibold text-foreground mb-4">Get in touch</h3>
								<p className="text-muted-foreground leading-relaxed text-center">Whether you have a question, a project proposal, or just want to say hi, feel free to reach out. I&apos;ll get back to you as soon as possible.</p>
							</div>

							<div className="space-y-4 w-[70%]  lg:w-[50%]">
								<a href="mailto:izathaizad@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group">
									<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
										<Mail className="h-5 w-5 text-primary" />
									</div>
									<div>
										<div className="text-sm text-muted-foreground">Email</div>
										<div className="font-medium text-foreground">izathaizad@gmail.com</div>
									</div>
								</a>

								<div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
									<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
										<MapPin className="h-5 w-5 text-primary" />
									</div>
									<div>
										<div className="text-sm text-muted-foreground">Location</div>
										<div className="font-medium text-foreground">Kuala Lumpur, Malaysia</div>
									</div>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center">
								<div className="text-sm text-muted-foreground mb-3">Connect with me</div>
								<div className="flex gap-3">
									<a href="https://github.com/HyeZedd" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-card border border-border hover:border-primary/30 text-muted-foreground hover:text-foreground transition-all hover:scale-110">
										<Github className="h-5 w-5" />
										<span className="sr-only">GitHub</span>
									</a>
									<a href="https://linkedin.com/in/mohammad-haizad-sudirman-111b4516b" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-card border border-border hover:border-primary/30 text-muted-foreground hover:text-foreground transition-all hover:scale-110">
										<Linkedin className="h-5 w-5" />
										<span className="sr-only">LinkedIn</span>
									</a>
									<a href="mailto:izathaizad@gmail.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-card border border-border hover:border-primary/30 text-muted-foreground hover:text-foreground transition-all hover:scale-110">
										 <Mail className="h-5 w-5" />
										<span className="sr-only">Email</span>
									</a>
								</div>
							</div>
						</motion.div>

						{/* Contact Form */}
						{/* <motion.div initial={{opacity: 0, x: 30}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 0.6}} className="lg:col-span-3">
							<form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border">
								<div className="space-y-6">
									<div className="grid sm:grid-cols-2 gap-4">
										<div className="space-y-2">
											<label htmlFor="name" className="text-sm font-medium text-foreground">
												Name
											</label>
											<Input id="name" placeholder="Your name" value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} required className="bg-background border-border focus:border-primary" />
										</div>
										<div className="space-y-2">
											<label htmlFor="email" className="text-sm font-medium text-foreground">
												Email
											</label>
											<Input id="email" type="email" placeholder="your@email.com" value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} required className="bg-background border-border focus:border-primary" />
										</div>
									</div>

									<div className="space-y-2">
										<label htmlFor="message" className="text-sm font-medium text-foreground">
											Message
										</label>
										<Textarea id="message" placeholder="Tell me about your project..." value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})} required rows={6} className="bg-background border-border focus:border-primary resize-none" />
									</div>

									<Button type="submit" size="lg" className="w-full rounded-xl" disabled={isSubmitting}>
										{isSubmitting ? (
											<span className="flex items-center gap-2">
												<motion.div animate={{rotate: 360}} transition={{duration: 1, repeat: Infinity, ease: "linear"}} className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full" />
												Sending...
											</span>
										) : (
											<span className="flex items-center gap-2">
												<Send className="h-4 w-4" />
												Send Message
											</span>
										)}
									</Button>
								</div>
							</form>
						</motion.div> */}
					</div>
				</div>
			</div>
		</section>
	);
}
