"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12">
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

			<div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">

					{/* Left Column: Text Content */}
					<div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
						<div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
							{/* Status badge 1 */}
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
								className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
							>
								<span className="relative flex h-2 w-2">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
									<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
								</span>
								<span className="text-sm text-primary font-medium">Available for new projects</span>
							</motion.div>

							{/* Status badge 2 */}
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
								className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
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
							className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight"
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
							className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed text-balance"
						>
							Full Stack Developer from Malaysia, crafting elegant solutions with
							<span className="text-foreground font-medium"> Laravel</span>,
							<span className="text-foreground font-medium"> Vue 3</span>, and
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
							className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
						>
							<Button
								size="lg"
								variant="outline"
								className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto cursor-pointer"
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
							className="mt-12 flex items-center justify-center lg:justify-start gap-4"
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

					{/* Right Column: Profile Picture Placeholder */}
					<div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="relative group w-64 h-64 sm:w-92 sm:h-92 xl:w-[450px] xl:h-[450px]"
						>
							{/* Glowing background blob */}
							<div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-chart-2/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

							{/* Outer border with running gradient */}
							<div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-chart-2 to-primary p-[2px] transition-transform duration-500 group-hover:scale-[1.02]">
								{/* Inner frame */}
								<div className="w-full h-full rounded-[22px] bg-background/90 backdrop-blur-xl overflow-hidden relative flex items-center justify-center">
									{/* 
										PROFILE IMAGE CONTAINER:
										By default, it uses the public placeholder.
										To use your own picture:
										1. Place your image (e.g. "haizad.jpg") in the /public folder
										2. Update the src attribute below to "/haizad.jpg"
									*/}
									<Image
										src="/profile-picture.jpg"
										alt="Mohammad Haizad Sudirman"
										fill
										className="object-cover object-center transition-all duration-700 group-hover:scale-110"
										sizes="(max-width: 768px) 256px, (max-width: 1200px) 320px, 380px"
										priority
									/>

									{/* Outer glow ring overlap on hover */}
									<div className="absolute inset-0 rounded-[22px] border border-white/10 pointer-events-none" />
									<div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-60 pointer-events-none" />
								</div>
							</div>

							{/* Floating Tech Badge 1: Laravel */}
							{/* <motion.div
								animate={{
									y: [0, -8, 0],
								}}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="absolute -top-3 -left-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-red-500/5 cursor-default select-none"
							>
								<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
								Laravel
							</motion.div> */}

							{/* Floating Tech Badge 2: Vue 3 */}
							{/* <motion.div
								animate={{
									y: [0, 8, 0],
								}}
								transition={{
									duration: 5,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 0.5,
								}}
								className="absolute -bottom-3 -right-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-emerald-500/5 cursor-default select-none"
							>
								<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
								Vue 3
							</motion.div> */}
						</motion.div>
					</div>

				</div>

				{/* Scroll indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
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

