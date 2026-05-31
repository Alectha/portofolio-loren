"use client";

import { ExternalLink, Mail } from "lucide-react";
import { hero } from "../data/content";
import { FadeIn } from "./shared";

export default function ContactSection() {
	return (
		<section id="contact" className="py-16 md:py-28 px-4 sm:px-6 max-w-4xl mx-auto text-center">
			<FadeIn>
				<div className="glass-card p-6 sm:p-8 md:p-20 relative overflow-hidden">
					<h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl mb-5 sm:mb-6 text-[var(--text-primary)] tracking-tight">
						Let&apos;s build something together.
					</h2>
					<p className="text-[var(--text-secondary)] text-base sm:text-lg font-medium max-w-xl mx-auto mb-8 sm:mb-10">
						Currently open to freelance projects, collaborations, and new opportunities.
					</p>

					<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
						<a
							href={`mailto:${hero.email}`}
							className="bg-[var(--text-primary)] text-white hover:bg-black px-8 py-3.5 rounded-full font-bold transition-colors flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg border border-[var(--glass-border)]"
						>
							<Mail size={18} /> Send Email
						</a>
						<a
							href={hero.instagram}
							target="_blank"
							rel="noreferrer"
							className="bg-white text-[var(--text-primary)] border border-[var(--glass-border)] hover:bg-gray-50 px-8 py-3.5 rounded-full font-bold transition-colors flex items-center gap-2 w-full sm:w-auto justify-center shadow-sm"
						>
							<ExternalLink size={18} /> Instagram
						</a>
						<a
							href={hero.linkedin}
							target="_blank"
							rel="noreferrer"
							className="bg-white text-[var(--text-primary)] border border-[var(--glass-border)] hover:bg-gray-50 px-8 py-3.5 rounded-full font-bold transition-colors flex items-center gap-2 w-full sm:w-auto justify-center shadow-sm"
						>
							<ExternalLink size={18} /> LinkedIn
						</a>
					</div>
				</div>
			</FadeIn>

			<div className="mt-14 sm:mt-20 text-sm font-bold text-[var(--text-tertiary)] text-center">
				<p>© 2026 Lauren Nugraha. It&apos;s Open Source :D</p>
			</div>
		</section>
	);
}
