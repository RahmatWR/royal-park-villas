"use client";

import { MapPin } from "lucide-react";
import { useSimpleFade } from "../../_hooks/useAnimations";

const Location = () => {
	// Simple fade animation for content
	const { elementRef: contentRef, scopeRef } = useSimpleFade<HTMLDivElement>({
		duration: 1,
		start: "top 80%",
	});

	return (
		<section
			ref={scopeRef as React.RefObject<HTMLElement | null>}
			id="location"
			className="section-padding bg-background">
			<div
				ref={contentRef as React.RefObject<HTMLDivElement | null>}
				className="container-luxury opacity-0">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
					{/* Left Column - Text */}
					<div>
						<p className="text-label mb-6">Location</p>
						<h2 className="heading-section text-foreground mb-8">
							Jumeirah Park, Dubai
						</h2>
						<p className="text-body mb-8">
							Situated in the heart of Jumeirah Park, Royal Park Villas benefits
							from excellent connectivity to Dubai&apos;s major business
							districts, retail destinations, and leisure facilities. The
							community offers a tranquil living environment while remaining
							close to the city&apos;s vibrant urban centers.
						</p>

						<div className="space-y-6">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 flex items-center justify-center border border-border">
									<span className="text-sm font-medium text-foreground">
										10
									</span>
								</div>
								<div>
									<p className="text-foreground font-medium">
										Minutes to Dubai Marina
									</p>
									<p className="text-muted-foreground text-sm">
										Via Sheikh Zayed Road
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="w-12 h-12 flex items-center justify-center border border-border">
									<span className="text-sm font-medium text-foreground">
										15
									</span>
								</div>
								<div>
									<p className="text-foreground font-medium">
										Minutes to Mall of the Emirates
									</p>
									<p className="text-muted-foreground text-sm">
										Premier shopping destination
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="w-12 h-12 flex items-center justify-center border border-border">
									<span className="text-sm font-medium text-foreground">
										25
									</span>
								</div>
								<div>
									<p className="text-foreground font-medium">
										Minutes to Dubai International Airport
									</p>
									<p className="text-muted-foreground text-sm">
										Easy airport access
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column - Map Placeholder */}
					<div className="relative aspect-square lg:aspect-[4/5] bg-sand flex items-center justify-center">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.8235312870042!2d55.156018810629874!3d25.040062137955346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d3244fb82a3%3A0x73732b967254e19d!2sRoyal%20Park%20Villas%20Dubai%20-%20Luxury%20Society%20Living!5e0!3m2!1sen!2sid!4v1765880576755!5m2!1sen!2sid"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="rounded-lg"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Location;
