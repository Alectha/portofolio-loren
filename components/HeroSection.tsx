"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, ExternalLink } from "lucide-react";
import { hero } from "../data/content";

const TypingText = ({ text }: { text: string }) => {
	const [displayedSecondLine, setDisplayedSecondLine] = useState("");
	const [firstLine, secondLine] = text.split("\n");

	useEffect(() => {
		let secondLineIndex = 0;
		let timerId: number | undefined;

		const typeSecondLine = () => {
			timerId = window.setInterval(() => {
				secondLineIndex += 1;
				setDisplayedSecondLine(secondLine.substring(0, secondLineIndex));

				if (secondLineIndex >= secondLine.length) {
					if (timerId) {
						window.clearInterval(timerId);
					}
				}
			}, 32);
		};

		typeSecondLine();

		return () => {
			if (timerId) {
				window.clearInterval(timerId);
			}
		};
	}, [firstLine, secondLine]);

	return (
		<span className="inline-block whitespace-pre-line leading-relaxed">
			<span>
				{firstLine}
			</span>
			<br />
			<span>
				{displayedSecondLine}
				<span className="ml-1 inline-block align-baseline w-[2px] h-[0.95em] translate-y-[0.05em] rounded-full bg-[var(--accent-teal)] shadow-[0_0_12px_var(--accent-teal)] animate-pulse" />
			</span>
		</span>
	);
};

export default function HeroSection() {
	return (
		<section id="home" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-12 max-w-6xl mx-auto relative overflow-hidden md:overflow-visible">
			<div className="grid md:grid-cols-2 gap-10 md:gap-8 items-center w-full z-10 mt-8 md:mt-0">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
					className="flex flex-col items-start text-left order-2 md:order-1"
				>
					<motion.div
						variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
						className="mb-6"
					>
						<div className="glass-card px-4 py-1.5 rounded-full inline-flex items-center gap-2 text-sm font-bold text-[var(--text-secondary)] shadow-sm">
							<span className="w-2 h-2 rounded-full bg-[var(--accent-teal)] shadow-[0_0_8px_var(--accent-teal)] animate-pulse" />
							{hero.status}
						</div>
					</motion.div>

					<motion.h1
						variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
						className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.05] mb-5 sm:mb-6 tracking-tight text-[var(--text-primary)]"
					>
						<span className="block">Hi there!</span>
						<span className="block mt-2">
							<span className="inline">I&apos;m</span>{' '}
							<span className="inline-block align-baseline bg-gradient-to-r from-[#06b6d4] via-[#0ea5a3] to-[#7c3aed] bg-clip-text text-transparent">Lauren.</span>
						</span>
					</motion.h1>

					<motion.div
						variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
						className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-lg leading-relaxed mb-8 sm:mb-10 font-medium"
					>
						<p className="text-[var(--text-primary)]">
							<TypingText text={`${hero.tagline}\n${hero.subTagline}`} />
						</p>
					</motion.div>

					<motion.div
						variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
						className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
					>
						<a
							href="#projects"
							className="bg-[var(--text-primary)] hover:bg-black text-white px-6 py-3.5 rounded-full font-bold transition-colors flex items-center justify-center gap-2 border border-[#18181B] shadow-md w-full sm:w-auto"
						>
							View Projects <ArrowRight size={18} />
						</a>
						<a
							href={hero.linkedin}
							target="_blank"
							rel="noreferrer"
							className="bg-white border border-gray-200 hover:bg-gray-50 px-6 py-3.5 rounded-full font-bold transition-colors flex items-center justify-center gap-2 shadow-sm text-[var(--text-primary)] w-full sm:w-auto"
						>
							LinkedIn <ExternalLink size={18} className="text-[var(--text-tertiary)]" />
						</a>
					</motion.div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.9, x: 20 }}
					animate={{ opacity: 1, scale: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="relative w-full max-w-[220px] sm:max-w-sm md:max-w-md mx-auto md:ml-auto order-1 md:order-2"
				>
						<div className="absolute -right-6 top-14 h-44 w-44 sm:h-56 sm:w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.22),rgba(59,130,246,0.10)_42%,transparent_72%)] blur-3xl opacity-70"></div>
						<div className="absolute right-2 bottom-0 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.40),rgba(13,148,136,0.08)_45%,transparent_75%)] blur-2xl opacity-80"></div>
						<div className="relative aspect-square md:aspect-square w-full rounded-[36%_64%_58%_42%/42%_45%_55%_58%] p-2.5 sm:p-4 bg-white/35 backdrop-blur-2xl shadow-[0_18px_60px_rgba(15,23,42,0.08)] rotate-[-2deg]">
						<div className="pointer-events-none absolute inset-0 rounded-[36%_64%_58%_42%/42%_45%_55%_58%] border border-white/15 shadow-[inset_-14px_-18px_32px_rgba(13,148,136,0.10),0_0_0_1px_rgba(255,255,255,0.08)]" />
						<div className="absolute -top-3 left-4 sm:-top-4 sm:left-8 z-20 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-extrabold text-[var(--text-primary)] shadow-[0_10px_24px_rgba(15,23,42,0.08)] border border-white/70 rotate-[3deg]">
							<span className="flex h-2.5 w-2.5 rounded-full bg-[var(--accent-teal)]" />
							welcome
						</div>
						<div className="w-full h-full rounded-[30%_70%_60%_40%/45%_40%_60%_55%] overflow-hidden bg-gray-100">
							<Image
								src="/images/foto-lauren.jpeg"
								alt="Lauren Nugraha"
								width={900}
								height={1100}
								className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 rotate-[2deg] scale-105"
								priority
							/>
						</div>
					</div>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5, duration: 1 }}
				className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-[var(--text-tertiary)] hidden md:block"
			>
				<ChevronDown size={24} />
			</motion.div>
		</section>
	);
}
