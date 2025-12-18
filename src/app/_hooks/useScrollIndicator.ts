import { useRef, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ScrollIndicatorOptions {
	dotTravel?: number;
	duration?: number;
	targetSelector?: string;
	scrollDuration?: number;
}

export const useScrollIndicator = <
	TContainer extends HTMLElement = HTMLDivElement,
	TDot extends HTMLElement = HTMLDivElement
>(
	options: ScrollIndicatorOptions = {}
) => {
	const {
		dotTravel = 8,
		duration = 1.5,
		targetSelector = "#about",
		scrollDuration = 1.2,
	} = options;

	const containerRef = useRef<TContainer>(null);
	const dotRef = useRef<TDot>(null);

	useGSAP(
		() => {
			if (!dotRef.current) return;

			gsap.fromTo(
				dotRef.current,
				{ y: 0 },
				{
					y: dotTravel,
					duration,
					ease: "power1.inOut",
					repeat: -1,
					yoyo: true,
				}
			);
		},
		{ scope: containerRef }
	);

	const handleClick = useCallback(() => {
		const target = document.querySelector(targetSelector);
		if (!target) return;

		const targetPosition = target.getBoundingClientRect().top + window.scrollY;

		gsap.to(window, {
			scrollTo: { y: targetPosition, autoKill: false },
			duration: scrollDuration,
			ease: "power1.inOut",
		});
	}, [targetSelector, scrollDuration]);

	return {
		containerRef,
		dotRef,
		handleClick,
	};
};
