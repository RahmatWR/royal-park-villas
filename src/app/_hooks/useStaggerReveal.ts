import { useRef, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StaggerRevealOptions {
	/** Duration of each item's animation in seconds (default: 0.8) */
	duration?: number;
	/** Starting Y offset in pixels (default: 40) */
	yOffset?: number;
	/** Stagger delay between items in seconds (default: 0.1) */
	stagger?: number;
	/** Easing function (default: "power1.out") */
	ease?: string;
	/** ScrollTrigger start position (default: "top 70%") */
	start?: string;
	/** ScrollTrigger toggle actions (default: "play none none none") */
	toggleActions?: string;
}

/**
 * Hook for staggered reveal animations on multiple elements
 * Uses fromTo() for all GSAP tweens as per architectural requirements
 */
export const useStaggerReveal = <T extends HTMLElement = HTMLElement>(
	options: StaggerRevealOptions = {}
) => {
	const {
		duration = 0.8,
		yOffset = 40,
		stagger = 0.1,
		ease = "power1.out",
		start = "top 70%",
		toggleActions = "play none none none",
	} = options;

	const elementsRef = useRef<(T | null)[]>([]);
	const scopeRef = useRef<HTMLElement>(null);

	// Helper to create ref callback for array items
	const setRef = useCallback((index: number) => {
		return (el: T | null) => {
			elementsRef.current[index] = el;
		};
	}, []);

	useGSAP(
		() => {
			const validElements = elementsRef.current.filter(Boolean);
			if (validElements.length === 0) return;

			gsap.fromTo(
				validElements,
				{ opacity: 0, y: yOffset },
				{
					opacity: 1,
					y: 0,
					duration,
					stagger,
					ease,
					scrollTrigger: {
						trigger: scopeRef.current,
						start,
						toggleActions,
					},
				}
			);
		},
		{
			scope: scopeRef,
			dependencies: [duration, yOffset, stagger, ease, start, toggleActions],
		}
	);

	return { elementsRef, scopeRef, setRef };
};

/**
 * Hook for card reveal animations
 * Optimized for grid layouts with cards
 */
export const useCardReveal = <T extends HTMLElement = HTMLElement>(
	options: Omit<StaggerRevealOptions, "yOffset" | "stagger"> & {
		yOffset?: number;
		stagger?: number;
	} = {}
) => {
	return useStaggerReveal<T>({
		yOffset: 40,
		stagger: 0.1,
		duration: 0.8,
		...options,
	});
};

/**
 * Hook for image gallery reveal animations
 * Slightly larger offset and stagger for more dramatic effect
 */
export const useGalleryReveal = <T extends HTMLElement = HTMLElement>(
	options: StaggerRevealOptions = {}
) => {
	return useStaggerReveal<T>({
		yOffset: 50,
		stagger: 0.15,
		duration: 1,
		...options,
	});
};

export default useStaggerReveal;
