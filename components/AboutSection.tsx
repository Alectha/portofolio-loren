"use client";

import { useEffect, useState } from "react";
import { Award } from "lucide-react";
import { about } from "../data/content";
import { FadeIn, GlassCard, getBgColorClass } from "./shared";

function GpaCountUp({ active }: { active: boolean }) {
	const target = 3.82;
	const targetStr = target.toFixed(2);

	const [digits, setDigits] = useState<string[]>(targetStr.split("").map((c) => (c === "." ? "." : "0")));
	const [scales, setScales] = useState<number[]>(targetStr.split("").map(() => 1));

	useEffect(() => {
		if (!active) return;
		const chars = targetStr.split("");

		const totalDuration = 4000; // slower overall
		const stagger = 450; // ms delay between digit starts
		const intervalMs = 30;

		const timers: number[] = [];

		function easeOutCubic(t: number) {
			return 1 - Math.pow(1 - t, 3);
		}

		chars.forEach((ch, idx) => {
			if (ch === ".") return;
			const targetDigit = parseInt(ch, 10);
			const startDelay = idx * stagger;
			const digitDuration = Math.max(500, totalDuration - startDelay);
			const start = performance.now() + startDelay;

			const id = window.setInterval(() => {
				const elapsed = performance.now() - start;
				if (elapsed < 0) return;
				const progress = Math.min(elapsed / digitDuration, 1);
				const eased = easeOutCubic(progress);
				const current = Math.round(targetDigit * eased);

				setDigits((prev) => {
					const copy = [...prev];
					copy[idx] = String(current);
					return copy;
				});

				setScales((prev) => {
					const copy = [...prev];
					copy[idx] = 1 + (1 - eased) * 0.08; // subtle pop at start
					return copy;
				});

				if (progress >= 1) {
					window.clearInterval(id);
				}
			}, intervalMs);

			timers.push(id);
		});

		// ensure final render exactly matches target
		const finishTimer = window.setTimeout(() => {
			setDigits(chars.map((c) => c));
			setScales(chars.map(() => 1));
			timers.forEach((t) => window.clearInterval(t));
		}, totalDuration + chars.length * stagger + 100);

		return () => {
			timers.forEach((t) => window.clearInterval(t));
			window.clearTimeout(finishTimer);
			setScales(chars.map(() => 1));
		};
	}, [active, targetStr]);

	return (
		<span aria-hidden="true" className="inline-flex items-baseline gap-0 whitespace-nowrap">
			{digits.map((d, i) => (
				<span
					key={i}
					style={{ transform: `scale(${scales[i]})`, display: "inline-block", transition: "transform 120ms linear" }}
				>
					{d}
				</span>
			))}
		</span>
	);
}

function EducationCard() {
	const [shouldAnimate] = useState(true);

	return (
		<GlassCard className="p-5 sm:p-6">
			<div className="flex flex-col gap-1">
				<span className="text-[var(--text-tertiary)] text-xs font-bold mb-1 uppercase tracking-wider">
					Education
				</span>
				<h4 className="font-extrabold text-xl leading-tight text-[var(--text-primary)]">
					{about.university}
				</h4>
				<p className="text-[var(--text-secondary)] text-sm mt-2 font-medium leading-relaxed">
					{about.degree}
				</p>
				<div className="flex items-center gap-2 mt-4 text-[var(--accent-teal)] font-bold bg-[#CCFBF1] w-fit px-3 py-1.5 rounded-full text-sm border border-[#99F6E4]">
					<Award size={16} /> GPA <GpaCountUp active={shouldAnimate} />
				</div>
			</div>
		</GlassCard>
	);
}

export default function AboutSection() {
	return (
		<section id="about" className="py-16 md:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
			<FadeIn>
				<h2 className="font-extrabold text-3xl md:text-4xl mb-10 md:mb-12 flex items-center gap-4 tracking-tight text-[var(--text-primary)]">
					<span className="w-8 md:w-12 h-[2px] bg-[var(--text-primary)]" /> About Me
				</h2>
			</FadeIn>

			<div className="grid md:grid-cols-12 gap-8 md:gap-10">
				<div className="md:col-span-7 flex flex-col gap-7 md:gap-8">
					<div className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
						<p>{about.bio}</p>
					</div>

					<FadeIn delay={0.2}>
						<h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-4">
							Area of Expertise
						</h3>
						<div className="flex flex-wrap gap-2.5">
							{about.skills.map((skill) => (
								<div
									key={skill.label}
									className="glass-card px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 border-[var(--glass-border)]"
								>
									<span className={`w-2 h-2 rounded-full ${getBgColorClass(skill.color)}`} />
									{skill.label}
								</div>
							))}
						</div>
					</FadeIn>

					<FadeIn delay={0.3}>
						<h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-4">
							Languages
						</h3>
						<div className="flex flex-wrap gap-3 sm:gap-4">
							{about.languages.map((language) => (
								<div
									key={language.lang}
									className="text-[var(--text-secondary)] text-xs sm:text-sm font-bold flex items-center gap-2 bg-white border border-[#E2E8F0] px-3 py-1.5 rounded-md shadow-sm"
								>
									<span className="text-[var(--text-primary)]">{language.lang}</span>
									<span className="w-1 h-1 rounded-full bg-[var(--text-tertiary)]" />
									{language.level}
								</div>
							))}
						</div>
					</FadeIn>
				</div>

				<div className="md:col-span-5 flex flex-col gap-4 sm:gap-5">
					<FadeIn delay={0.4}>
						<EducationCard />
					</FadeIn>

					{/* Key Achievements moved to separate section */}
				</div>
			</div>
		</section>
	);
}
