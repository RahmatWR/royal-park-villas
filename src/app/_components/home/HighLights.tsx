"use client";

import { Home, Droplets, Trees, Car, Shield, Sun } from "lucide-react";
import { useFadeInUp, useCardReveal } from "../../_hooks/useAnimations";

const highlights = [
	{
		icon: Home,
		title: "Contemporary Design",
		description:
			"Modern architectural language with clean lines and generous proportions.",
	},
	{
		icon: Sun,
		title: "Natural Light",
		description:
			"Floor-to-ceiling windows designed to maximize daylight throughout.",
	},
	{
		icon: Droplets,
		title: "Private Pools",
		description:
			"Select residences feature private swimming pools and outdoor terraces.",
	},
	{
		icon: Trees,
		title: "Landscaped Gardens",
		description: "Mature landscaping with native plants and manicured lawns.",
	},
	{
		icon: Car,
		title: "Covered Parking",
		description: "Dedicated covered parking spaces for each residence.",
	},
	{
		icon: Shield,
		title: "24/7 Security",
		description: "Gated community with round-the-clock security services.",
	},
];

const Highlights = () => {
	// Header animation
	const { elementRef: headerRef, scopeRef: headerScopeRef } =
		useFadeInUp<HTMLDivElement>({
			duration: 1,
			yOffset: 30,
			start: "top 80%",
		});

	// Card stagger animation
	const { setRef: setCardRef, scopeRef: cardsScopeRef } =
		useCardReveal<HTMLDivElement>({
			duration: 0.8,
			yOffset: 40,
			stagger: 0.1,
			start: "top 70%",
		});

	return (
		<section id="highlights" className="section-padding bg-secondary">
			<div
				ref={headerScopeRef as React.RefObject<HTMLDivElement | null>}
				className="container-luxury">
				<div
					ref={headerRef as React.RefObject<HTMLDivElement | null>}
					className="text-center mb-16 md:mb-24 opacity-0">
					<p className="text-label mb-6">Project Highlights</p>
					<h2 className="heading-section text-foreground max-w-2xl mx-auto">
						Designed for Modern Living
					</h2>
				</div>

				<div
					ref={cardsScopeRef as React.RefObject<HTMLDivElement>}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
					{highlights.map((item, index) => (
						<div
							key={index}
							ref={setCardRef(index)}
							className="p-8 bg-background border border-border hover:border-primary/30 transition-colors opacity-0">
							<item.icon
								className="w-8 h-8 text-brand mb-6"
								strokeWidth={1.5}
							/>
							<h3 className="font-display text-xl md:text-2xl text-foreground mb-3">
								{item.title}
							</h3>
							<p className="text-body text-sm md:text-base">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Highlights;
