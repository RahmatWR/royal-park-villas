import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxOptions {
	/** Starting Y position as percentage (default: -10) */
	startYPercent?: number;
	/** Ending Y position as percentage (default: 10) */
	endYPercent?: number;
	/** ScrollTrigger start position (default: "top bottom") */
	start?: string;
	/** ScrollTrigger end position (default: "bottom top") */
	end?: string;
	/** Whether the animation is scrubbed (default: true) */
	scrub?: boolean | number;
}

/**
 * Hook for creating parallax scroll effects
 * Uses fromTo() for all GSAP tweens as per architectural requirements
 */
export const useParallax = <
	T extends HTMLElement = HTMLElement,
	C extends HTMLElement = HTMLElement
>(
	options: ParallaxOptions = {}
) => {
	const {
		startYPercent = -10,
		endYPercent = 10,
		start = "top bottom",
		end = "bottom top",
		scrub = true,
	} = options;

	const elementRef = useRef<T>(null);
	const containerRef = useRef<C>(null);

	useGSAP(
		() => {
			if (!elementRef.current) return;

			gsap.fromTo(
				elementRef.current,
				{ yPercent: startYPercent },
				{
					yPercent: endYPercent,
					ease: "none",
					scrollTrigger: {
						trigger: containerRef.current || elementRef.current.parentElement,
						start,
						end,
						scrub,
					},
				}
			);
		},
		{
			scope: containerRef,
			dependencies: [startYPercent, endYPercent, start, end, scrub],
		}
	);

	return { elementRef, containerRef };
};

/**
 * Hook for creating aggressive hero parallax effects
 * Designed for full-screen hero sections with immersive motion
 */
export const useHeroParallax = <
	T extends HTMLElement = HTMLElement,
	C extends HTMLElement = HTMLElement
>(
	options: Omit<ParallaxOptions, "startYPercent" | "endYPercent"> & {
		intensity?: "subtle" | "medium" | "aggressive";
	} = {}
) => {
	const { intensity = "aggressive", ...rest } = options;

	const intensityMap = {
		subtle: { startYPercent: 0, endYPercent: 10 },
		medium: { startYPercent: 0, endYPercent: 15 },
		aggressive: { startYPercent: 0, endYPercent: 25 },
	};

	return useParallax<T, C>({
		...intensityMap[intensity],
		start: "top top",
		end: "bottom top",
		...rest,
	});
};

/**
 * Hook for image parallax with configurable offset
 * Uses larger vertical offsets for architectural, immersive feel
 */
export const useImageParallax = <
	T extends HTMLElement = HTMLElement,
	C extends HTMLElement = HTMLElement
>(
	options: ParallaxOptions = {}
) => {
	return useParallax<T, C>({
		startYPercent: -8,
		endYPercent: 8,
		...options,
	});
};

export default useParallax;
