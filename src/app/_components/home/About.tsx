"use client";

import { useRef } from "react";
import { useFadeInUp } from "../../_hooks/useAnimations";

const About = () => {
	const sectionRef = useRef<HTMLElement>(null);

	// Left column animation
	const { elementRef: leftColRef, scopeRef: leftScopeRef } =
		useFadeInUp<HTMLDivElement>({
			duration: 1,
			yOffset: 40,
			start: "top 80%",
		});

	// Right column animation (delayed)
	const { elementRef: rightColRef, scopeRef: rightScopeRef } =
		useFadeInUp<HTMLDivElement>({
			duration: 1,
			yOffset: 40,
			delay: 0.2,
			start: "top 80%",
		});

	return (
		<section
			ref={sectionRef}
			id="about"
			className="section-padding bg-background">
			<div className="container-luxury">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
					{/* Left Column */}
					<div
						ref={leftScopeRef as React.RefObject<HTMLDivElement | null>}
						className="m-0 p-0">
						<div
							ref={leftColRef as React.RefObject<HTMLDivElement | null>}
							className="opacity-0">
							<p className="text-label mb-6">About the Project</p>
							<h2 className="heading-section text-foreground">
								Contemporary Living in Jumeirah Park
							</h2>
						</div>
					</div>

					{/* Right Column */}
					<div
						ref={rightScopeRef as React.RefObject<HTMLDivElement | null>}
						className="m-0 p-0">
						<div
							ref={rightColRef as React.RefObject<HTMLDivElement | null>}
							className="flex flex-col gap-8 opacity-0">
							<p className="text-body">
								Royal Park Villas is a completed residential development located
								in Jumeirah Park, one of Dubai&apos;s premier family-oriented
								communities. The project features thoughtfully designed villas
								that blend modern architectural principles with functional
								living spaces.
							</p>
							<p className="text-body">
								Each residence is crafted to maximize natural light and outdoor
								connectivity, with private gardens, contemporary interiors, and
								premium finishes throughout. The community is designed to
								provide residents with a peaceful retreat while maintaining
								convenient access to Dubai&apos;s key destinations.
							</p>

							<div className="divider-line mt-4" />

							<div className="grid grid-cols-2 gap-8 mt-4">
								<div>
									<p className="text-3xl md:text-4xl font-display text-foreground">
										2024
									</p>
									<p className="text-label mt-2">Year Completed</p>
								</div>
								<div>
									<p className="text-3xl md:text-4xl font-display text-foreground">
										48
									</p>
									<p className="text-label mt-2">Residences</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
