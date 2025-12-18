import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealOptions {
	/** Duration of the animation in seconds (default: 1.2) */
	duration?: number;
	/** Starting Y offset in pixels (default: 30) */
	yOffset?: number;
	/** Base delay before animation starts in seconds (default: 0.3) */
	baseDelay?: number;
	/** Delay between each element in seconds (default: 0.15) */
	staggerDelay?: number;
	/** Easing function (default: "power1.out") */
	ease?: string;
	/** Whether to use scroll trigger (default: false - for hero sections) */
	useScrollTrigger?: boolean;
	/** ScrollTrigger start position (default: "top 80%") */
	start?: string;
}

/**
 * Hook for staggered text reveal animations
 * Designed for hero sections with multiple text elements
 * Uses fromTo() for all GSAP tweens as per architectural requirements
 */
export const useTextReveal = <T extends HTMLElement = HTMLElement>(
	elementCount: number,
	options: TextRevealOptions = {}
) => {
	const {
		duration = 1.2,
		yOffset = 30,
		baseDelay = 0.3,
		staggerDelay = 0.15,
		ease = "power1.out",
		useScrollTrigger = false,
		start = "top 80%",
	} = options;

	const elementsRef = useRef<(T | null)[]>(Array(elementCount).fill(null));
	const scopeRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			elementsRef.current.forEach((el, index) => {
				if (!el) return;

				const animationConfig: gsap.TweenVars = {
					opacity: 1,
					y: 0,
					duration,
					delay: baseDelay + index * staggerDelay,
					ease,
				};

				if (useScrollTrigger) {
					animationConfig.scrollTrigger = {
						trigger: scopeRef.current,
						start,
						toggleActions: "play none none none",
					};
				}

				gsap.fromTo(el, { opacity: 0, y: yOffset }, animationConfig);
			});
		},
		{
			scope: scopeRef,
			dependencies: [
				duration,
				yOffset,
				baseDelay,
				staggerDelay,
				ease,
				useScrollTrigger,
				start,
			],
		}
	);

	// Helper to set ref by index
	const setRef = (index: number) => (el: T | null) => {
		elementsRef.current[index] = el;
	};

	return { elementsRef, scopeRef, setRef };
};

/**
 * Hook for hero text reveal
 * Pre-configured for hero sections without scroll trigger
 */
export const useHeroTextReveal = <T extends HTMLElement = HTMLElement>(
	elementCount: number,
	options: Omit<TextRevealOptions, "useScrollTrigger"> = {}
) => {
	return useTextReveal<T>(elementCount, {
		useScrollTrigger: false,
		...options,
	});
};

/**
 * Hook for section header reveal
 * Pre-configured for section headers with scroll trigger
 */
export const useSectionHeaderReveal = <T extends HTMLElement = HTMLElement>(
	options: Omit<TextRevealOptions, "useScrollTrigger"> = {}
) => {
	return useTextReveal<T>(1, {
		useScrollTrigger: true,
		duration: 1,
		yOffset: 30,
		baseDelay: 0,
		...options,
	});
};

export default useTextReveal;
