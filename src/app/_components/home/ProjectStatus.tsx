"use client";

import { CheckCircle } from "lucide-react";
import { useSimpleFade } from "../../_hooks/useAnimations";

import { AnimatedCounter } from "../ui/animated-counter";

const ProjectStatus = () => {
	// Simple fade animation for content
	const { elementRef: contentRef, scopeRef } = useSimpleFade<HTMLDivElement>({
		duration: 1,
		start: "top 80%",
	});

	return (
		<section
			ref={scopeRef as React.RefObject<HTMLElement | null>}
			id="status"
			className="section-padding bg-charcoal">
			<div
				ref={contentRef as React.RefObject<HTMLDivElement | null>}
				className="container-luxury opacity-0">
				<div className="text-center max-w-2xl mx-auto">
					<div className="flex items-center justify-center gap-3 mb-8">
						<CheckCircle className="w-6 h-6 text-accent" strokeWidth={1.5} />
						<p className="text-label text-cream/70">Project Status</p>
					</div>

					<h2 className="heading-section text-cream mb-6">
						Completed Community
					</h2>

					<p className="text-cream/70 text-lg leading-relaxed">
						Royal Park Villas is a fully completed residential community. All
						residences have been delivered and the community is now home to
						families enjoying contemporary living in Jumeirah Park.
					</p>

					<div className="divider-line bg-cream/20 mt-16 mb-12" />

					<div className="grid grid-cols-3 gap-8">
						<div>
							<div className="font-display text-3xl md:text-4xl text-cream">
								<AnimatedCounter end={100} suffix="%" />
							</div>
							<p className="text-label text-cream/60 mt-2">Completed</p>
						</div>
						<div>
							<p className="font-display text-3xl md:text-4xl text-cream">
								<AnimatedCounter end={48} />
							</p>
							<p className="text-label text-cream/60 mt-2">Residences</p>
						</div>
						<div>
							<p className="font-display text-3xl md:text-4xl text-cream">
								<AnimatedCounter end={2024} duration={1} />
							</p>
							<p className="text-label text-cream/60 mt-2">Handover</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectStatus;
