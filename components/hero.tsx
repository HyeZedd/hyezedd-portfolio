"use client";

import {motion} from "framer-motion";
import {ArrowDown, Github, Linkedin, Mail} from "lucide-react";
import {Button} from "@/components/ui/button";

export function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

			{/* Animated grid */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(100,200,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,200,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

			{/* Floating orbs */}
			<motion.div
				animate={{
					y: [0, -30, 0],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
			/>
			<motion.div
				animate={{
					y: [0, 30, 0],
					opacity: [0.2, 0.4, 0.2],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1,
				}}
				className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-chart-2/10 rounded-full blur-3xl"
			/>

			<div className="relative z-10 container mx-auto px-4 py-32">
				<div className="max-w-4xl mx-auto text-center">
					<div className="flex items-center justify-center gap-5">
						{/* Status badge */}
						<motion.div
							initial={{
								opacity: 0,
								y: 20,
							}}
							animate={{
								opacity: 1,
								y: 0,
							}}
							transition={{
								duration: 0.6,
							}}
							className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
						>
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
							</span>
							<span className="text-sm text-primary font-medium">Available for new projects</span>
						</motion.div>

						{/* Status badge */}
						<motion.div
							initial={{
								opacity: 0,
								y: 20,
							}}
							animate={{
								opacity: 1,
								y: 0,
							}}
							transition={{
								duration: 0.6,
							}}
							className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
						>
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
							</span>
							<span className="text-sm text-primary font-medium">Open To Work</span>
						</motion.div>
					</div>

					{/* Main heading */}
					<motion.h1
						initial={{
							opacity: 0,
							y: 20,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.6,
							delay: 0.1,
						}}
						className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance"
					>
						<span className="text-foreground">Experience </span>
						<span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">Laravel Vue</span>
						<br />
						<span className="text-foreground">Web Developer</span>
					</motion.h1>

					{/* Subtitle */}
					<motion.p
						initial={{
							opacity: 0,
							y: 20,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.6,
							delay: 0.2,
						}}
						className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance"
					>
						Full Stack Developer from Malaysia, crafting elegant solutions with
						<span className="text-foreground font-medium"> Laravel</span>,<span className="text-foreground font-medium"> Vue 3</span>, and
						<span className="text-foreground font-medium"> MySQL</span>.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						initial={{
							opacity: 0,
							y: 20,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.6,
							delay: 0.3,
						}}
						className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
					>
						{/* <Button
							size="lg"
							className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90"
							onClick={() =>
								document.getElementById("projects")?.scrollIntoView({
									behavior: "smooth",
								})
							}
						>
							Previous Projects
						</Button> */}
						<Button
							size="lg"
							variant="outline"
							className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90"
							onClick={() =>
								document.getElementById("contact")?.scrollIntoView({
									behavior: "smooth",
								})
							}
						>
							Get in Touch
						</Button>
					</motion.div>

					{/* Social Links */}
					<motion.div
						initial={{
							opacity: 0,
							y: 20,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.6,
							delay: 0.4,
						}}
						className="mt-12 flex items-center justify-center gap-4"
					>
						<a href="https://github.com/HyeZedd" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all hover:scale-110">
							<Github className="h-5 w-5" />
							<span className="sr-only">GitHub</span>
						</a>
						<a href="https://www.linkedin.com/in/mohammad-haizad-sudirman-111b4516b" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all hover:scale-110">
							<Linkedin className="h-5 w-5" />
							<span className="sr-only">LinkedIn</span>
						</a>
						<a href="mailto:izathaizad@gmail.com" className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all hover:scale-110">
							<Mail className="h-5 w-5" />
							<span className="sr-only">Email</span>
						</a>
					</motion.div>
				</div>

				{/* Scroll indicator */}
				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{
						duration: 0.6,
						delay: 0.8,
					}}
					className="absolute bottom-8 left-1/2 -translate-x-1/2"
				>
					<motion.div
						animate={{
							y: [0, 8, 0],
						}}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="flex flex-col items-center gap-2 text-muted-foreground"
					>
						<span className="text-xs uppercase tracking-widest">Scroll</span>
						<ArrowDown className="h-4 w-4" />
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
