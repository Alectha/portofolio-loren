"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Camera, ExternalLink, X } from "lucide-react";
import { useEffect } from "react";
import type { SlideOverData } from "../data/content";
import { getBgColorClass, getTextColorClass } from "./shared";

export default function SlideOver({
	isOpen,
	onClose,
	data,
}: {
	isOpen: boolean;
	onClose: () => void;
	data: SlideOverData | null;
}) {
	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, [onClose]);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && data && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						onClick={onClose}
						className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
					/>
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", damping: 25, stiffness: 200 }}
						className="fixed top-0 right-0 h-full w-full max-w-md bg-[var(--bg-base)] border-l border-[var(--glass-border)] z-50 flex flex-col shadow-2xl overflow-hidden glass-card !rounded-none !border-y-0 !border-r-0"
					>
						<div className="p-5 sm:p-6 border-b border-gray-200 flex justify-between items-start gap-4 bg-white/50 shrink-0">
							<div className="pr-0 sm:pr-8">
								{data.category && (
									<span className={`inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm uppercase tracking-wider font-extrabold mb-3 ${getTextColorClass(data.color)} bg-white border border-gray-200 shadow-sm`}>
										{data.category}
									</span>
								)}
								<h2 className="font-extrabold text-xl sm:text-2xl leading-tight text-[var(--text-primary)]">{data.title}</h2>
								{data.period && <p className="text-sm font-bold text-[var(--text-tertiary)] mt-2">{data.period}</p>}
							</div>
							<button
								type="button"
								onClick={onClose}
								className="text-[var(--text-secondary)] hover:text-black bg-white border border-gray-200 shadow-sm p-2 rounded-full transition-colors"
							>
								<X size={20} />
							</button>
						</div>

						<div className="flex-1 overflow-y-auto custom-scrollbar p-5 sm:p-6">
							<div className="mb-7 sm:mb-8">
								<h4 className="text-xs uppercase tracking-wider text-[var(--text-tertiary)] font-bold mb-3">
									Documentation
								</h4>
								<div className="flex gap-3 overflow-x-auto pb-4 custom-scrollbar snap-x">
									{(!data.docs || data.docs.length === 0) ? (
										<>
											{[1, 2, 3].map((index) => (
												<div key={index} className="w-[140px] h-[90px] rounded-xl border border-dashed border-gray-300 bg-white/50 flex items-center justify-center shrink-0 snap-start">
													<Camera className="text-gray-300" size={24} />
												</div>
											))}
										</>
									) : (
										data.docs.map((doc, index) => (
											<div key={doc || index} className="shrink-0 snap-start rounded-xl border border-gray-200 bg-white shadow-sm p-2 inline-flex items-center justify-center max-w-[320px] max-h-[220px]">
												<img src={`/images/${doc}`} alt={`Doc ${index + 1}`} className="block w-auto h-auto max-w-full max-h-[200px] object-contain" />
											</div>
										))
									)}
								</div>
							</div>

							<div className="mb-7 sm:mb-8">
								<h4 className="text-xs uppercase tracking-wider text-[var(--text-tertiary)] font-bold mb-4">
									Details
								</h4>

								{data.summary && <p className="text-[var(--text-secondary)] text-sm font-medium mb-5 sm:mb-6 leading-relaxed bg-white/60 p-4 rounded-xl border border-gray-200">{data.summary}</p>}

								{data.bullets && (
									<ul className="flex flex-col gap-3 sm:gap-4">
										{data.bullets.map((bullet) => (
											<li key={bullet} className="text-sm font-medium text-[var(--text-primary)] flex items-start gap-3">
												<span className={`mt-1.5 shrink-0 w-2 h-2 rounded-full ${getBgColorClass(data.color)}`} />
												<span className="leading-relaxed opacity-90">{bullet}</span>
											</li>
										))}
									</ul>
								)}

								{data.roles && (
									<div className="flex flex-col gap-4">
										{data.roles.map((role) => (
											<div key={role.title} className="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
												<div className="flex items-center justify-between mb-3">
													<h5 className="font-extrabold text-sm text-[var(--text-primary)]">{role.title}</h5>
												</div>
												<ul className="flex flex-col gap-2">
													{role.bullets.map((bullet) => (
														<li key={bullet} className="text-xs font-medium text-[var(--text-secondary)] flex items-start gap-2">
															<span className="text-[var(--text-tertiary)] mt-0.5">▹</span>
															<span className="leading-relaxed">{bullet}</span>
														</li>
													))}
												</ul>
											</div>
										))}
									</div>
								)}
							</div>

							{data.tags && (
								<div className="mb-6">
									<h4 className="text-xs uppercase tracking-wider text-[var(--text-tertiary)] font-bold mb-3">
										Tags
									</h4>
									<div className="flex flex-wrap gap-2">
										{data.tags.map((tag) => (
											<span key={tag} className="text-xs font-bold px-2.5 py-1 rounded bg-white border border-gray-200 text-[var(--text-secondary)] shadow-sm">
												{tag}
											</span>
										))}
									</div>
								</div>
							)}
						</div>

						{data.links && data.links.length > 0 && (
							<div className="p-5 sm:p-6 border-t border-gray-200 bg-white/80 shrink-0 flex flex-col sm:flex-row gap-3">
								{data.links.map((link) => (
									<a
										key={link.label}
										href={link.url}
										target="_blank"
										rel="noreferrer"
										className="flex-1 bg-[var(--text-primary)] text-white hover:bg-black text-sm py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 border border-[var(--glass-border)]"
									>
										{link.label} <ExternalLink size={14} />
									</a>
								))}
							</div>
						)}
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
