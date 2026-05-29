"use client";

import { ArrowRight } from "lucide-react";
import { projects, type SlideOverData } from "../data/content";
import { FadeIn, GlassCard, getTextColorClass } from "./shared";

export default function ProjectsSection({
	onOpenSlideOver,
}: {
	onOpenSlideOver: (data: SlideOverData) => void;
}) {
	return (
		<section id="projects" className="py-20 md:py-24 px-6 max-w-5xl mx-auto">
			<FadeIn>
				<h2 className="font-extrabold text-3xl md:text-4xl mb-12 flex items-center gap-4 tracking-tight text-[var(--text-primary)]">
					Projects <span className="w-8 md:w-12 h-[2px] bg-[var(--text-primary)]" />
				</h2>
			</FadeIn>

			<div className="grid md:grid-cols-2 gap-6">
				{projects.map((project, index) => (
					<FadeIn key={project.id} delay={index * 0.1} className={index === 0 ? "md:col-span-2" : ""}>
						<GlassCard
							onClick={() => onOpenSlideOver({ ...project, type: "project" })}
							className="p-6 md:p-8 h-full flex flex-col group"
						>
							<div className="flex justify-between items-start mb-6">
								<div className={`px-3 py-1 rounded-full text-xs font-extrabold bg-white border border-[#E2E8F0] shadow-sm ${getTextColorClass(project.color)}`}>
									{project.category}
								</div>
								<span className="text-xs font-bold text-[var(--text-tertiary)]">{project.period}</span>
							</div>

							<h3 className="font-extrabold text-2xl md:text-3xl mb-3 text-[var(--text-primary)] group-hover:text-[var(--accent-teal)] transition-colors">
								{project.title}
							</h3>
							<p className="text-[var(--text-secondary)] text-sm font-medium leading-relaxed mb-6 flex-grow">
								{project.summary}
							</p>

							<div className="flex flex-wrap gap-2 mb-8">
								{project.tags.slice(0, 3).map((tag) => (
									<span key={tag} className="text-[11px] font-bold px-2.5 py-1 rounded bg-gray-100 text-[var(--text-secondary)] border border-gray-200">
										{tag}
									</span>
								))}
								{project.tags.length > 3 && (
									<span className="text-[11px] font-bold px-2.5 py-1 text-[var(--text-tertiary)]">
										+{project.tags.length - 3}
									</span>
								)}
							</div>

							<div className="flex items-center justify-between text-sm font-bold text-[var(--text-primary)] border-t border-gray-200 pt-4">
								View Details
								<ArrowRight size={16} className="text-[var(--text-tertiary)] group-hover:text-[var(--accent-teal)] group-hover:translate-x-1 transition-all" />
							</div>
						</GlassCard>
					</FadeIn>
				))}
			</div>
		</section>
	);
}
