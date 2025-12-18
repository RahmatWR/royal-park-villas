"use client";

import { useSimpleFade } from "../../_hooks/useFadeIn";

const Developer = () => {
	// Simple fade animation for content
	const { elementRef: contentRef, scopeRef } = useSimpleFade<HTMLDivElement>({
		duration: 1,
		start: "top 80%",
	});

	return (
		<section
			ref={scopeRef as React.RefObject<HTMLElement | null>}
			id="developer"
			className="section-padding bg-background">
			<div
				ref={contentRef as React.RefObject<HTMLDivElement | null>}
				className="container-luxury opacity-0">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
					{/* Left Column */}
					<div>
						<p className="text-label mb-6">Developer</p>
						<h2 className="heading-section text-foreground">
							Metrical Development
						</h2>
					</div>

					{/* Right Column */}
					<div className="flex flex-col gap-8">
						<p className="text-body">
							Metrical Development is a Dubai-based property development company
							focused on creating residential communities that combine
							architectural excellence with practical living solutions. With a
							portfolio spanning luxury villas and contemporary residences, the
							company has established a reputation for delivering projects that
							exceed quality expectations.
						</p>
						<p className="text-body">
							Royal Park Villas represents Metrical Development&apos;s
							commitment to thoughtful urban planning and sustainable community
							design, creating environments where families can thrive.
						</p>

						<div className="divider-line mt-4" />

						<div className="mt-4">
							<p className="text-label mb-2">Established</p>
							<p className="font-display text-2xl text-foreground">
								Dubai, UAE
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Developer;
