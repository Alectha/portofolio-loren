export type ColorName = "teal" | "purple" | "amber";

export interface HeroContent {
	name: string;
	tagline: string;
	taglineHighlights: string[];
	subTagline: string;
	subHighlights: string[];
	status: string;
	location: string;
	email: string;
	linkedin: string;
	instagram?: string;
	currentPortfolio: string;
}

export interface SkillContent {
	label: string;
	color: ColorName;
}

export interface AboutContent {
	bio: string;
	gpa: string;
	university: string;
	degree: string;
	period: string;
	skills: SkillContent[];
	achievements: string[];
	languages: {
		lang: string;
		level: string;
	}[];
}

export interface ProjectContent {
	id: string;
	title: string;
	category: string;
	period: string;
	tags: string[];
	summary: string;
	bullets: string[];
	docs: string[];
	links: {
		label: string;
		url: string;
	}[];
	color: ColorName;
}

export interface ExperienceContent {
	id: string;
	company: string;
	role: string;
	type: string;
	period: string;
	bullets: string[];
	docs: string[];
	tags: string[];
	color: ColorName;
}

export interface OrganizationRoleContent {
	title: string;
	bullets: string[];
}

export interface OrganizationContent {
	id: string;
	org: string;
	fullName: string;
	period: string;
	roles: OrganizationRoleContent[];
	docs: string[];
	tags: string[];
	color: ColorName;
}

export interface SlideOverLink {
	label: string;
	url: string;
}

export interface SlideOverData {
	title: string;
	category?: string;
	period?: string;
	summary?: string;
	bullets?: string[];
	roles?: OrganizationRoleContent[];
	tags?: string[];
	links?: SlideOverLink[];
	docs?: string[];
	color?: ColorName;
	type?: "project" | "experience" | "org";
}

export const hero: HeroContent = {
	name: "Lauren Nugraha",
	tagline: "I turn ideas into digital products that matter —",
	taglineHighlights: ["digital products"],
	subTagline: "through design, strategy, and human connection.",
	subHighlights: ["human connection"],
	status: "Open to opportunities",
	location: "Tasikmalaya, Indonesia",
	email: "rennugraha221@gmail.com",
	linkedin: "https://www.linkedin.com/in/lauren-nugraha/",
	instagram: "https://www.instagram.com/laurennugrha/",
	currentPortfolio: "https://laurennugrha.framer.website/",
};

export const about: AboutContent = {
	bio: "A 6th semester Information Systems student specializing in Digital Business with strong interests in product development and artificial intelligence. Experienced in developing digital product concepts, exploring market opportunities, and building mobile application prototypes. Passionate about leveraging technology to create innovative digital solutions and user-centered products.",
	gpa: "3.82 / 4.0",
	university: "Siliwangi University – Tasikmalaya, Indonesia",
	degree: "Bachelor of Information Systems — Digital Business Specialization",
	period: "Aug 2023 – Present",
	skills: [
		{ label: "UI/UX Design", color: "purple" },
		{ label: "IT Product Development", color: "teal" },
		{ label: "Social Media Marketing", color: "amber" },
		{ label: "Content Strategy", color: "purple" },
		{ label: "Market Research", color: "teal" },
	],
	achievements: [
		"Awardee GenBI 2026",
		"Published Article Sinta 4 Journal",
		"Published Article Sinta 5 Journal",
	],
	languages: [
		{ lang: "Indonesia", level: "Fluent" },
		{ lang: "English", level: "Intermediate" },
	],
};

export const projects: ProjectContent[] = [
	{
		id: "boxlyy",
		title: "Strategic Marketing – Boxlyy",
		category: "Digital Marketing",
		period: "Mar 2026 – May 2026",
		tags: ["Content Marketing", "TikTok", "Instagram", "Brand Strategy"],
		summary:
			"Designed and implemented a comprehensive content marketing strategy, including marketing funnel execution and targeted audience segmentation.",
		bullets: [
			"Designed and implemented a comprehensive content marketing strategy, including marketing funnel execution and targeted audience segmentation.",
			"Planned brand identity, product concepts, market positioning, target audience segmentation, and emotional branding strategies focused on Gen Z and Millennials.",
			"Designed integrated digital marketing campaigns across Instagram and TikTok, including marketing funnel strategy, content planning, and customer conversion flows.",
			"Implemented content marketing, campaign strategies, and performance evaluations using insights, social media analytics, and consumer behavior analysis.",
		],
		docs: [
			"project-boxlyy-01.png",
			"project-boxlyy-02.png",
			"project-boxlyy-03.jpeg",
			"project-boxlyy-04.jpeg",
			"project-boxlyy-05.jpeg",
		],
		links: [],
		color: "amber",
	},
	{
		id: "levelme",
		title: "Product Development – LevelMe",
		category: "Mobile Gamified Habit Tracker",
		period: "Feb 2026 – May 2026",
		tags: ["React Native", "Figma", "Gamification", "Market Research"],
		summary:
			"Designed product concept and gamification system to increase user motivation and long-term engagement.",
		bullets: [
			"Designed the product concept and gamification system, integrating features such as XP points, levelling, rewards, streak tracking, and challenges to increase user motivation and long-term engagement.",
			"Conducted market research and opportunity analysis within the productivity and self-improvement app market to validate the product idea and potential user needs.",
			"Built the mobile application prototype using React Native, demonstrating the core functionality of the gamified habit tracking system.",
		],
		docs: ["project-levelme-01.jpeg","project-levelme-02.jpeg","project-levelme-03.jpeg","project-levelme-04.jpeg"],
		links: [{ label: "Figma Prototype", url: "#" }],
		color: "teal",
	},
	{
		id: "famlypay",
		title: "Fintech Product Development – FamlyPay",
		category: "Mobile Application Prototype",
		period: "Jan 2026 – May 2026",
		tags: ["React Native", "Figma", "Fintech", "UX Research"],
		summary:
			"Conceptualized and designed FamlyPay, a fintech application aimed at enabling secure, seamless, and user-friendly digital transactions.",
		bullets: [
			"Conceptualized and designed FamlyPay, a fintech application aimed at enabling secure, seamless, and user-friendly digital transactions.",
			"Conducted market research and feasibility analysis to define the product's target market, business model, and monetization strategy within the digital payment's ecosystem.",
			"Built the mobile application prototype using React Native, demonstrating the product's core features and functionality.",
		],
		docs: [
			"project-famlypay-01.jpeg",
			"project-famlypay-02.jpeg",
			"project-famlypay-03.jpeg",
			"project-famlypay-04.jpeg",
		],
		links: [{ label: "Figma Prototype", url: "" }],
		color: "purple",
	},
	{
		id: "connectlab",
		title: "Product Design – ConnectLab",
		category: "Collaborative Project Management Platform",
		period: "Sep 2025 – Dec 2025",
		tags: ["Figma", "Design Thinking", "Usability Testing", "SUS"],
		summary:
			"Applied Design Thinking methodology to understand user needs and design a solution that improves collaboration.",
		bullets: [
			"Applied the Design Thinking methodology to understand user needs and design a solution that improves collaboration, task organization, and communication among team members.",
			"Designed the UI/UX prototype using Figma, creating user flows, wireframes, and interactive prototypes that focus on usability and intuitive project management features.",
			"Conducted usability testing using the System Usability Scale (SUS), achieving a Grade B, indicating good usability and positive user acceptance of the product concept.",
		],
		docs: ["project-connectlab-01.png","project-connectlab-02.png","project-connectlab-03.jpg"],
		links: [{ label: "Figma Prototype", url: "https://www.figma.com/proto/k3Ju9mOeX8Tj3PHfmAii0r/Conneclab?node-id=414-8534&t=YHJBUwUSQiDroEP3-1" }],
		color: "teal",
	},
	{
		id: "ra-admission",
		title: "Web-Base Student Admission System",
		category: "RA Almukhtarulbayyan",
		period: "Mar 2025 – May 2025",
		tags: ["Laravel", "PHP", "Full-Stack", "CRUD"],
		summary:
			"Developed a full-stack student registration platform for a kindergarten using Laravel framework.",
		bullets: [
			"Developed a full-stack student registration platform for a kindergarten using Laravel framework.",
			"Implemented full CRUD functionality for applicant data management and designed a user-friendly interface for parents and administrators.",
		],
		docs: [],
		links: [{ label: "GitHub", url: "#" }],
		color: "amber",
	},
];

export const experience: ExperienceContent[] = [
	{
		id: "vinix",
		company: "PT Vinix Seven Aurum",
		role: "Digital Business",
		type: "Remote, Indonesia",
		period: "Feb 2026 – Present",
		bullets: [
			"Conducted business analysis and evaluated digital business opportunities for external companies.",
			"Developed a digital startup product concept, including business model canvas, business plan, and pitch deck.",
			"Designed product prototypes, pricing strategies, and operational business plans.",
			"Created social media marketing content and copywriting to support product branding and promotion.",
			"Collaborated with teams in digital business development and product strategy initiatives.",
		],
		docs: ["experience-vinix-01.jpeg", "experience-vinix-02.jpeg"],
		tags: ["Business Analysis", "Product Strategy", "Copywriting"],
		color: "teal",
	},
	{
		id: "mansur",
		company: "Mansur Exercise Point",
		role: "Social Media Marketing & Content Editing",
		type: "Part Time, Indonesia",
		period: "Jan 2026 – Present",
		bullets: [
			"Designed and developed localized content strategies tailored to the gym's specific geographic area and local target market.",
			"Created engaging promotional content for TikTok, including carousel posts and short-form videos.",
			"Achieved over 49,000 views on a single video, successfully driving an increase in offline customer visits to the gym.",
		],
		docs: ["experience-mansur-01.jpeg", "experience-mansur-02.png"],
		tags: ["TikTok", "Content Strategy", "Video Editing"],
		color: "purple",
	},
	{
		id: "sakata",
		company: "Sakata Innovation Center",
		role: "Co-Facilitator",
		type: "Tasikmalaya, Indonesia",
		period: "Jul 2025 – Dec 2025",
		bullets: [
			"Served as a Co-Facilitator in the Coding & Artificial Intelligence program at Sakata Innovation Center.",
			"Facilitated learning sessions across three training classes and served as the primary coordinator for one class with 27 teacher participants.",
			"Contributed as an event designer, responsible for designing event banners and participant ID cards to support visual identity and ensure smooth event execution.",
		],
		docs: ["experience-sakata-01.jpeg", "experience-sakata-02.jpg"],
		tags: ["Facilitation", "AI Education", "Event Design"],
		color: "amber",
	},
	{
		id: "cikara",
		company: "Cikara Studio — Global Game Jam 2026",
		role: "Event Operations Team",
		type: "Tasikmalaya, Indonesia",
		period: "Jan 2026 – Feb 2026",
		bullets: [
			"Designed key event visual assets, including the main backdrop and idle screen display.",
			"Served as the primary point of contact for participants, handling coordination, communication, and participant support throughout the event.",
			"Assisted in managing participant flow, schedules, and technical needs during the 48-hour event.",
		],
		docs: ["experience-cikara-01.jpeg","experience-cikara-02.jpeg","experience-cikara-03.jpeg"],
		tags: ["Event Ops", "Visual Design", "Coordination"],
		color: "teal",
	},
	{
		id: "wanvis",
		company: "Wanvis Studio",
		role: "Video Content Producer",
		type: "Banjar, Indonesia",
		period: "May 2022 – Jul 2022",
		bullets: [
			"Developed storyboards outlining video scenes, camera placement, timing, angles, and transitions, while collaborating with the video editor to supervise the editing process, including visual effects, music, and required assets.",
		],
		docs: [],
		tags: ["Storyboarding", "Video Production"],
		color: "purple",
	},
];

export const organizations: OrganizationContent[] = [
	{
		id: "hmsi",
		org: "Himpunan Mahasiswa Sistem Informasi (HMSI)",
		fullName: "Siliwangi University",
		period: "Mar 2025 – Dec 2025",
		roles: [
			{
				title: "Staff Of KOMINFO",
				bullets: [
					"Contributed to the design of content and the development of information delivery strategies for the organization.",
					"Participated in managing the organization's public communication through HMSI digital media channels.",
					"Served as the person in charge of the organization's podcast agenda, producing three long-form episodes discussing educational and relevant topics for Information Systems students.",
				],
			},
			{
				title: "Coordinator of Event – Sivolution 3.0",
				bullets: [
					"Developed concepts and prepared rundowns for multiple events, ensuring each program was well-structured and aligned with the objectives of the organizing team.",
					"Coordinated a Sivolution national seminar as a major event, managing the event flow and operations while facilitating participation from approximately 150 attendees to ensure the program ran smoothly.",
				],
			},
			{
				title: "Field Coordinator – REBIZ (Ready Business)",
				bullets: [
					"Led coordination forums and technical meetings with all division heads to align execution strategies and monitor progress.",
					"Organized and managed various divisions to ensure synchronized operations and effective teamwork.",
					"Acted as the primary decision-maker during field operations to handle problem-solving and resolve real-time technical issues.",
				],
			},
			{
				title: "Coordinator of Publication, Documentation & Design – OMBUS SI 2025",
				bullets: [
					"Led the creative direction for visual content, including developing design concepts, planning social media content, and directing the production of video teaser and after movie for the event.",
					"Involved in managing the Instagram account as the main information platform for new student orientation (PKKMB) activities, achieving a cumulative reach of up to 100,000 views within one month.",
				],
			},
		],
		docs: ["experience-hmsi-01.jpeg","experience-hmsi-02.jpeg","experience-hmsi-03.jpeg","experience-hmsi-04.jpeg","experience-hmsi-05.jpeg","experience-hmsi-06.jpeg","experience-hmsi-sivolution-01.jpeg"],
		tags: ["Leadership", "Event Management", "Content Strategy"],
		color: "teal",
	},
	{
		id: "teman-ambiss",
		org: "Teman Ambiss",
		fullName: "Remote, Indonesia",
		period: "Aug 2024 – Mar 2025",
		roles: [
			{
				title: "Staff Of Skill Development",
				bullets: [
					"Contributed to the development of concepts and draft content related to skill development, which were published weekly on Teman Ambiss social media platforms.",
					"Participated in the planning and organization of six online webinars aimed at audiences interested in improving their skills, with over 400 total participants, and served as a moderator in several sessions.",
				],
			},
		],
		docs: ["experience-teman-ambis-01.jpeg"],
		tags: ["Community", "Webinar", "Content Creation"],
		color: "amber",
	},
];
