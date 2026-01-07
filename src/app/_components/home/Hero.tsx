"use client";

import { useRef } from "react";
import Image from "next/image";
import heroImage from "../../_assets/hero-villa.jpg";
import {
	useHeroParallax,
	useHeroTextReveal,
	useScrollIndicator,
} from "../../_hooks/useAnimations";

const Hero = () => {
	const sectionRef = useRef<HTMLElement>(null);

	// Aggressive parallax for hero background
	const { elementRef: imageRef, containerRef: imageContainerRef } =
		useHeroParallax<HTMLImageElement, HTMLDivElement>({
			intensity: "aggressive",
		});

	// Staggered text reveal for hero content
	const { setRef } = useHeroTextReveal<HTMLElement>(3, {
		duration: 1.2,
		yOffset: 30,
		baseDelay: 0.3,
		staggerDelay: 0.15,
	});

	// Scroll indicator with animated dot
	const {
		containerRef: scrollContainerRef,
		dotRef,
		handleClick,
	} = useScrollIndicator<HTMLButtonElement, HTMLDivElement>({
		dotTravel: 8,
		duration: 1.5,
		targetSelector: "#about",
		scrollDuration: 1.2,
	});

	return (
		<section
			ref={sectionRef}
			id="hero"
			className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
			{/* Background Image */}
			<div ref={imageContainerRef} className="absolute inset-0">
				<Image
					ref={imageRef}
					src={heroImage}
					alt="Royal Park Villas luxury exterior"
					fill
					priority
					sizes="	(max-width: 768px) 100vw,
									(max-width: 1280px) 90vw,
									70vw"
					className="image-luxury scale-100"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent" />
			</div>

			{/* Content */}
			<div className="relative z-10 container-luxury w-full px-6 md:px-12 lg:px-24 pb-16 md:pb-24 lg:pb-32">
				<div className="max-w-3xl">
					<p
						ref={setRef(0)}
						className="text-label text-cream/80 mb-4 md:mb-6 opacity-0">
						Jumeirah Park, Dubai
					</p>

					<h1
						ref={setRef(1)}
						className="heading-display text-cream mb-6 md:mb-8 opacity-0">
						Royal Park
						<br />
						Villas
					</h1>

					<p
						ref={setRef(2)}
						className="text-cream/80 text-lg md:text-xl font-light max-w-xl leading-relaxed opacity-0">
						A completed residential community offering contemporary luxury
						living in one of Dubai&apos;s most sought-after neighborhoods.
					</p>
				</div>
			</div>

			{/* Scroll indicator - Mouse shape with animated dot */}
			<button
				ref={scrollContainerRef}
				onClick={handleClick}
				className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
				aria-label="Scroll to next section">
				<div className="w-6 h-10 rounded-full border border-cream/40 flex justify-center pt-2 group-hover:border-cream/60 transition-colors duration-300">
					<div
						ref={dotRef}
						className="w-1 h-2 rounded-full bg-cream/60 group-hover:bg-cream/80 transition-colors duration-300"
					/>
				</div>
			</button>
		</section>
	);
};

export default Hero;
