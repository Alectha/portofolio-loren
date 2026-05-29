"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GlassCard } from "./shared";

export default function KeyAchievements() {
	return (
		<section id="achievements" className="py-12 px-6 max-w-5xl mx-auto">
			<h3 className="font-extrabold text-2xl mb-6">Key Achievements</h3>

			<div className="grid md:grid-cols-2 gap-6">
				<GlassCard className="p-4 flex items-center justify-center">
					<div className="flex items-center gap-3">
						<Image src="/images/genbi-logo.png" alt="GenBI logo" width={40} height={40} className="w-10 h-10 object-contain" />
						<p className="mt-0 font-bold text-[var(--text-primary)]">Awardee GenBI 2026</p>
					</div>
				</GlassCard>

				<GlassCard className="p-4 flex items-center justify-center">
					<a
						href="https://journal.ibrahimy.ac.id/index.php/JIMI/article/view/8406"
						target="_blank"
						rel="noreferrer"
						className="flex items-center gap-2 text-[var(--text-primary)] font-bold hover:underline"
						aria-label="Open journal publication"
					>
						<span>Published Sinta 4 Journal</span>
						<ExternalLink size={16} />
					</a>
				</GlassCard>
			</div>
		</section>
	);
}
