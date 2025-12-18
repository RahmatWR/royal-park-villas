"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
	end: number;
	duration?: number;
	suffix?: string;
	prefix?: string;
	decimals?: number;
	className?: string;
}

export const AnimatedCounter = ({
	end,
	duration = 2,
	suffix = "",
	prefix = "",
	decimals = 0,
	className = "",
}: AnimatedCounterProps) => {
	const [count, setCount] = useState(0);
	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});
	const hasAnimated = useRef(false);

	useEffect(() => {
		if (inView && !hasAnimated.current) {
			hasAnimated.current = true;
			let startTime: number | null = null;
			const startValue = 0;

			const animate = (currentTime: number) => {
				if (!startTime) startTime = currentTime;
				const progress = Math.min(
					(currentTime - startTime) / (duration * 1000),
					1
				);

				// Easing function for smooth animation
				const easeOutQuart = 1 - Math.pow(1 - progress, 4);
				const currentCount = startValue + (end - startValue) * easeOutQuart;

				setCount(currentCount);

				if (progress < 1) {
					requestAnimationFrame(animate);
				} else {
					setCount(end);
				}
			};

			requestAnimationFrame(animate);
		}
	}, [inView, end, duration]);

	const displayValue =
		decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();

	return (
		<span ref={ref} className={className}>
			{prefix}
			{displayValue}
			{suffix}
		</span>
	);
};
