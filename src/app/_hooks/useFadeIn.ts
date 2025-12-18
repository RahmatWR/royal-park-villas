import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeInOptions {
	/** Duration of the animation in seconds (default: 1) */
	duration?: number;
	/** Starting Y offset in pixels (default: 0 for pure fade, 40 for fade-up) */
	yOffset?: number;
	/** Delay before animation starts in seconds (default: 0) */
	delay?: number;
	/** Easing function (default: "power1.out") */
	ease?: string;
	/** ScrollTrigger start position (default: "top 80%") */
	start?: string;
	/** ScrollTrigger toggle actions (default: "play none none none") */
	toggleActions?: string;
	/** Whether to use scroll trigger (default: true) */
	useScrollTrigger?: boolean;
}

/**
 * Hook for simple fade-in animations
 * Uses fromTo() for all GSAP tweens as per architectural requirements
 */
export const useFadeIn = <T extends HTMLElement = HTMLElement>(
	options: FadeInOptions = {}
) => {
	const {
		duration = 1,
		yOffset = 0,
		delay = 0,
		ease = "power1.out",
		start = "top 80%",
		toggleActions = "play none none none",
		useScrollTrigger = true,
	} = options;

	const elementRef = useRef<T>(null);
	const scopeRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			if (!elementRef.current) return;

			gsap.fromTo(
				elementRef.current,
				{ opacity: 0, y: yOffset },
				{
					opacity: 1,
					y: 0,
					duration,
					delay,
					ease,
					...(useScrollTrigger && {
						scrollTrigger: {
							trigger: scopeRef.current || elementRef.current,
							start,
							toggleActions,
						},
					}),
				}
			);
		},
		{
			scope: scopeRef,
			dependencies: [
				duration,
				yOffset,
				delay,
				ease,
				start,
				toggleActions,
				useScrollTrigger,
			],
		}
	);

	return { elementRef, scopeRef };
};

/**
 * Hook for fade-in with vertical movement
 * Common pattern for section content reveals
 */
export const useFadeInUp = <T extends HTMLElement = HTMLElement>(
	options: Omit<FadeInOptions, "yOffset"> & { yOffset?: number } = {}
) => {
	return useFadeIn<T>({
		yOffset: 40,
		...options,
	});
};

/**
 * Hook for simple opacity fade (no movement)
 * Used for minimal, subtle reveals
 */
export const useSimpleFade = <T extends HTMLElement = HTMLElement>(
	options: Omit<FadeInOptions, "yOffset"> = {}
) => {
	return useFadeIn<T>({
		yOffset: 0,
		...options,
	});
};

interface SingleAnimationOptions {
	duration?: number;
	yOffset?: number; // untuk fade-up / fade-down
	delay?: number;
	ease?: string;
	start?: string; // scrollTrigger start
	toggleActions?: string;
	useScrollTrigger?: boolean;
}

/**
 * Hook untuk animasi fade-in sederhana
 * Satu elemen saja, scrollTrigger opsional
 */
export const useSingleAnimation = <T extends HTMLElement = HTMLElement>(
	options: SingleAnimationOptions = {}
) => {
	const {
		duration = 1,
		yOffset = 0,
		delay = 0,
		ease = "power1.out",
		start = "top 80%",
		toggleActions = "play none none none",
		useScrollTrigger = true,
	} = options;

	// Ref untuk elemen yang dianimasikan
	const elementRef = useRef<T>(null);

	useGSAP(
		() => {
			if (!elementRef.current) return;

			gsap.fromTo(
				elementRef.current,
				{ opacity: 0, y: yOffset },
				{
					opacity: 1,
					y: 0,
					duration,
					delay,
					ease,
					...(useScrollTrigger && {
						scrollTrigger: {
							trigger: elementRef.current,
							start,
							toggleActions,
						},
					}),
				}
			);
		},
		{
			dependencies: [
				duration,
				yOffset,
				delay,
				ease,
				start,
				toggleActions,
				useScrollTrigger,
			],
		}
	);

	return elementRef;
};

export default useFadeIn;
