"use client";

import { useRef } from "react";
import { useSingleAnimation } from "../_hooks/useFadeIn";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const footerRef = useRef<HTMLElement>(null);

	// Simple fade animation for content
	const contentRef = useSingleAnimation<HTMLDivElement>({
		duration: 1,
		start: "top 90%",
	});

	return (
		<footer ref={footerRef} className="bg-background border-t border-border">
			<div
				ref={contentRef as React.RefObject<HTMLDivElement | null>}
				className="container-luxury px-6 md:px-12 lg:px-24 py-12 md:py-16 opacity-0">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
					{/* Brand */}
					<div>
						<p className="font-display text-xl text-foreground mb-4">
							Royal Park Villas
						</p>
						<p className="text-muted-foreground text-sm leading-relaxed">
							A completed luxury residential community
							<br />
							in Jumeirah Park, Dubai.
						</p>
					</div>

					{/* Location */}
					<div>
						<p className="text-label mb-4">Location</p>
						<p className="text-muted-foreground text-sm leading-relaxed">
							Jumeirah Park
							<br />
							Dubai, United Arab Emirates
						</p>
					</div>

					{/* Developer */}
					<div>
						<p className="text-label mb-4">Developer</p>
						<p className="text-muted-foreground text-sm leading-relaxed">
							Metrical Development
							<br />
							Dubai, UAE
						</p>
					</div>
				</div>

				<div className="divider-line mt-12 mb-8" />

				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-muted-foreground text-xs">
						© {currentYear} Royal Park Villas. All rights reserved.
					</p>
					<p className="text-muted-foreground text-xs">
						Developed by Metrical Development
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
