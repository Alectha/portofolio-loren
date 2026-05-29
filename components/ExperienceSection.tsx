"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Briefcase, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { experience, organizations, type OrganizationRoleContent, type SlideOverData } from "../data/content";
import { FadeIn, GlassCard } from "./shared";

const AccordionItem = ({ role }: { role: OrganizationRoleContent }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border border-[#E2E8F0] rounded-xl bg-white overflow-hidden shadow-sm">
			<button
				type="button"
				className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-gray-50 transition-colors"
				onClick={(event) => {
					event.stopPropagation();
					setIsOpen(!isOpen);
				}}
			>
				<span className="font-bold text-sm text-[var(--text-primary)] pr-4">{role.title}</span>
				<ChevronDown size={16} className={`text-[var(--text-tertiary)] transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`} />
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						className="px-4 pb-4"
					>
						<ul className="flex flex-col gap-3 pt-2">
							{role.bullets.map((bullet) => (
								<li
									key={bullet}
									className="text-xs text-[var(--text-secondary)] font-medium pl-4 relative before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-[var(--text-tertiary)] before:rounded-full leading-relaxed"
								>
									{bullet}
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default function ExperienceSection({
	onOpenSlideOver,
}: {
	onOpenSlideOver: (data: SlideOverData) => void;
}) {
	const [activeTab, setActiveTab] = useState<"work" | "organization">("work");

	return (
		<section id="experience" className="py-20 md:py-24 px-6 max-w-5xl mx-auto">
			<FadeIn>
				<div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
					<h2 className="font-extrabold text-3xl md:text-4xl flex items-center gap-4 tracking-tight text-[var(--text-primary)]">
						<span className="w-8 md:w-12 h-[2px] bg-[var(--text-primary)]" /> Experience
					</h2>

					<div className="flex items-center p-1 bg-white border border-[var(--glass-border)] rounded-full shadow-sm w-fit">
						<button
							type="button"
							onClick={() => setActiveTab("work")}
							className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === "work" ? "bg-[#0F172A] text-white shadow-md" : "text-[var(--text-secondary)] hover:text-black"}`}
						>
							Work
						</button>
						<button
							type="button"
							onClick={() => setActiveTab("organization")}
							className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === "organization" ? "bg-[#0F172A] text-white shadow-md" : "text-[var(--text-secondary)] hover:text-black"}`}
						>
							Organization
						</button>
					</div>
				</div>
			</FadeIn>

			<div className="min-h-[500px]">
				<AnimatePresence mode="wait">
					{activeTab === "work" && (
						<motion.div
							key="work"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.3 }}
							className="relative border-l-2 border-gray-200 ml-3 md:ml-6 flex flex-col gap-10"
						>
							{experience.map((item, index) => (
								<FadeIn key={item.id} delay={index * 0.1}>
									<div
										className="relative pl-8 md:pl-12 group"
										onMouseOver={(e) => {
											const root = e.currentTarget as HTMLElement;
											const dot = root.querySelector('.timeline-dot');
											if (dot) dot.classList.add('dot-active');
										}}
										onMouseOut={(e) => {
											const root = e.currentTarget as HTMLElement;
											const dot = root.querySelector('.timeline-dot');
											if (dot) dot.classList.remove('dot-active');
										}}
									>
										<div
											className={`absolute -left-[7px] top-6 w-[12px] h-[12px] rounded-full ring-4 ring-white transition-all duration-300 timeline-dot ${index === 0 ? "bg-[var(--accent-teal)] shadow-[0_0_8px_var(--accent-teal)]" : "bg-gray-300"}`} />

									<GlassCard
												onClick={() => onOpenSlideOver({ ...item, title: item.company, category: item.role, type: "experience" })}
												className="p-6 md:p-8 relative overflow-hidden"
											>
											<div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2 mt-2 md:mt-0">
												<h3 className="text-xl font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent-teal)] transition-colors">
													{item.role}
												</h3>
												<span className="text-sm font-bold text-[var(--text-tertiary)] shrink-0">{item.period}</span>
											</div>

											<div className="flex flex-wrap items-center gap-2 text-[var(--accent-teal)] mb-6 text-sm font-bold">
												<Briefcase size={16} />
												{item.company}
												<span className="w-1.5 h-1.5 rounded-full bg-gray-300 mx-1" />
												<span className="text-[var(--text-secondary)]">{item.type}</span>
											</div>

											<ul className="flex flex-col gap-3 mb-6">
												{item.bullets.slice(0, 2).map((bullet) => (
													<li key={bullet} className="text-[var(--text-secondary)] text-sm font-medium flex items-start gap-3">
														<span className="text-[var(--accent-teal)] mt-1 shrink-0">
															<ChevronRight size={14} />
														</span>
														<span className="line-clamp-2 leading-relaxed">{bullet}</span>
													</li>
												))}
											</ul>

											<div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
												<div className="flex gap-2">
													{item.tags.slice(0, 2).map((tag) => (
														<span key={tag} className="text-[11px] font-bold px-2.5 py-1 rounded bg-gray-100 text-[var(--text-secondary)] border border-gray-200">
															{tag}
														</span>
													))}
												</div>
												<span className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-teal)] transition-colors flex items-center gap-1">
													View Details <ArrowRight size={14} />
												</span>
											</div>
										</GlassCard>
									</div>
								</FadeIn>
							))}
						</motion.div>
					)}

					{activeTab === "organization" && (
						<motion.div
							key="org"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.3 }}
							className="grid md:grid-cols-2 gap-6"
						>
							{organizations.map((organization, index) => (
								<FadeIn key={organization.id} delay={index * 0.1}>
									<GlassCard
										onClick={() => onOpenSlideOver({ ...organization, title: organization.org, category: organization.fullName, type: "org" })}
										className="p-6 md:p-8 h-full flex flex-col relative group"
									>
										<div className="mb-6">
											<span className="text-xs font-bold text-[var(--text-tertiary)] block mb-2">{organization.period}</span>
											<h3 className="text-2xl font-extrabold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-teal)] transition-colors">
												{organization.org}
											</h3>
											<p className="text-[var(--text-secondary)] text-sm font-bold mt-1">{organization.fullName}</p>
										</div>

										<div className="flex-grow flex flex-col gap-3 mb-6" onClick={(event) => event.stopPropagation()}>
											{organization.roles.slice(0, 2).map((role) => (
												<AccordionItem key={role.title} role={role} />
											))}
											{organization.roles.length > 2 && (
												<div className="text-xs font-bold text-[var(--text-tertiary)] text-center py-2.5 border border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
													+ {organization.roles.length - 2} more roles (click card to view)
												</div>
											)}
										</div>

										<div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
											<div className="flex flex-wrap gap-2">
												{organization.tags.slice(0, 2).map((tag) => (
													<span key={tag} className="text-[11px] font-bold px-2.5 py-1 rounded bg-gray-100 text-[var(--text-secondary)] border border-gray-200">
														{tag}
													</span>
												))}
											</div>
											<span className="text-[var(--text-tertiary)] group-hover:text-[var(--accent-teal)] transition-colors">
												<ArrowRight size={18} />
											</span>
										</div>
									</GlassCard>
								</FadeIn>
							))}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}
