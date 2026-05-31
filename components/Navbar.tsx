"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = ["Home", "About", "Projects", "Experience", "Contact"];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const sectionIds = links.map((link) => link.toLowerCase());

		if (sectionIds.length === 0) {
			return;
		}

		const updateActiveSection = () => {
			const threshold = 180;
			let currentSection = sectionIds[0];

			for (const sectionId of sectionIds) {
				const section = document.getElementById(sectionId);
				if (!section) {
					continue;
				}

				const top = section.getBoundingClientRect().top;
				if (top <= threshold) {
					currentSection = sectionId;
				}
			}

			for (const linkElement of document.querySelectorAll<HTMLElement>("[data-nav-link]")) {
				const isActive = linkElement.dataset.navLink === currentSection;
				linkElement.style.setProperty("color", isActive ? "#0D9488" : "var(--text-secondary)", "important");
				linkElement.style.fontWeight = isActive ? "800" : "700";
				linkElement.style.textShadow = isActive ? "0 0 14px rgba(13, 148, 136, 0.38)" : "none";
			}
		};

		updateActiveSection();
		window.addEventListener("scroll", updateActiveSection, { passive: true });
		window.addEventListener("resize", updateActiveSection);
		const intervalId = window.setInterval(updateActiveSection, 250);

		const updateScrollProgress = () => {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
			const progress = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;
			setScrollProgress(progress);
		};

		updateScrollProgress();
		window.addEventListener("scroll", updateScrollProgress, { passive: true });
		window.addEventListener("resize", updateScrollProgress);

		return () => {
			window.removeEventListener("scroll", updateActiveSection);
			window.removeEventListener("resize", updateActiveSection);
			window.removeEventListener("scroll", updateScrollProgress);
			window.removeEventListener("resize", updateScrollProgress);
			window.clearInterval(intervalId);
		};
	}, []);

	return (
		<nav className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-4 sm:px-6 py-3 sm:py-4 flex justify-center pointer-events-none">
			<div className="w-full max-w-7xl flex items-center justify-between gap-4 pointer-events-auto">
				<a
					href="#home"
					className="glass-card shrink-0 h-12 sm:h-14 px-4 sm:px-5 sm:px-6 rounded-2xl flex items-center gap-2 sm:gap-3 border border-white/40 bg-white/60 backdrop-blur-xl shadow-[0_12px_40px_rgba(15,23,42,0.10)]"
				>
					<span className="text-xs sm:text-sm sm:text-[15px] font-extrabold tracking-tight text-[var(--text-primary)] leading-tight whitespace-nowrap">
						Lauren Portofolio
					</span>
				</a>

				<div className="hidden md:flex ml-auto">
					<div className="glass-card h-14 px-6 rounded-2xl flex items-center gap-6 lg:gap-8 border border-white/40 bg-white/55 backdrop-blur-xl shadow-[0_12px_40px_rgba(15,23,42,0.10)] whitespace-nowrap">
						{links.map((link) => (
							<a
								key={link}
								href={`#${link.toLowerCase()}`}
								data-nav-link={link.toLowerCase()}
								className="text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
							>
								{link}
							</a>
						))}
					</div>
				</div>

				<button
					type="button"
					className="md:hidden glass-card shrink-0 h-12 w-12 rounded-2xl flex items-center justify-center border border-white/40 bg-white/60 backdrop-blur-xl shadow-[0_12px_40px_rgba(15,23,42,0.10)] text-[var(--text-primary)] pointer-events-auto"
					onClick={() => setIsOpen(true)}
				>
					<Menu size={24} />
				</button>
			</div>

			<div className="fixed right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none">
				<div className="w-2.5 h-44 rounded-full border border-white/60 bg-white/35 backdrop-blur-xl shadow-[0_10px_28px_rgba(15,23,42,0.06)] p-[2px] flex items-end overflow-hidden">
					<div
						className="w-full rounded-full bg-[linear-gradient(180deg,rgba(13,148,136,0.9),rgba(13,148,136,0.35))] shadow-[0_0_14px_rgba(13,148,136,0.25)] transition-[height] duration-150 ease-out"
						style={{ height: `${Math.max(8, scrollProgress * 100)}%` }}
					/>
				</div>
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-white/92 backdrop-blur-xl z-50 p-5 sm:p-6 flex flex-col pointer-events-auto"
					>
						<div className="flex justify-between items-center mb-10 sm:mb-12 gap-4">
							<div className="glass-card px-4 py-2 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl font-extrabold text-[var(--text-primary)] shadow-[0_12px_40px_rgba(15,23,42,0.10)]">
								Lauren Portofolio
							</div>
							<button
								type="button"
								onClick={() => setIsOpen(false)}
								className="text-[var(--text-secondary)] hover:text-black"
							>
								<X size={28} />
							</button>
						</div>
						<div className="flex flex-col gap-5 sm:gap-6 text-2xl font-bold">
							{links.map((link) => (
								<a
									key={link}
									href={`#${link.toLowerCase()}`}
									onClick={() => setIsOpen(false)}
									data-nav-link={link.toLowerCase()}
									className="text-[var(--text-secondary)] hover:text-black hover:translate-x-2 transition-all"
								>
									{link}
								</a>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
