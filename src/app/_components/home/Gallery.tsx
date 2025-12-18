"use client";

import Image from "next/image";
import galleryInterior from "../../_assets/gallery-interior.jpg";
import galleryAerial from "../../_assets/gallery-aerial.jpg";
import galleryPool from "../../_assets/gallery-pool.jpg";
import {
	useFadeInUp,
	useGalleryReveal,
	useImageParallax,
} from "../../_hooks/useAnimations";

const Gallery = () => {
	// Header animation
	const { elementRef: headerRef, scopeRef: headerScopeRef } =
		useFadeInUp<HTMLDivElement>({
			duration: 1,
			yOffset: 30,
			start: "top 80%",
		});

	// Image containers stagger reveal
	const { setRef: setImageContainerRef, scopeRef: imagesScopeRef } =
		useGalleryReveal<HTMLDivElement>({
			duration: 1,
			yOffset: 50,
			stagger: 0.15,
			start: "top 70%",
		});

	// Individual image parallax effects (more aggressive)
	const { elementRef: img1Ref, containerRef: container1Ref } = useImageParallax<
		HTMLImageElement,
		HTMLDivElement
	>({
		startYPercent: -8,
		endYPercent: 8,
	});
	const { elementRef: img2Ref, containerRef: container2Ref } = useImageParallax<
		HTMLImageElement,
		HTMLDivElement
	>({
		startYPercent: -8,
		endYPercent: 8,
	});
	const { elementRef: img3Ref, containerRef: container3Ref } = useImageParallax<
		HTMLImageElement,
		HTMLDivElement
	>({
		startYPercent: -8,
		endYPercent: 8,
	});

	return (
		<section id="gallery" className="section-padding bg-secondary">
			<div
				ref={headerScopeRef as React.RefObject<HTMLDivElement | null>}
				className="container-luxury">
				<div
					ref={headerRef as React.RefObject<HTMLDivElement | null>}
					className="text-center mb-16 md:mb-24 opacity-0">
					<p className="text-label mb-6">Gallery</p>
					<h2 className="heading-section text-foreground">Visual Overview</h2>
				</div>

				{/* Gallery Grid */}
				<div
					ref={imagesScopeRef as React.RefObject<HTMLDivElement>}
					className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
					{/* Large Image */}
					<div
						ref={(el) => {
							setImageContainerRef(0)(el);
							container1Ref.current = el;
						}}
						className="md:row-span-2 relative aspect-[3/4] md:aspect-auto overflow-hidden group opacity-0">
						<Image
							ref={img1Ref}
							src={galleryInterior}
							alt="Royal Park Villas interior living space"
							className="image-luxury scale-110 transition-transform duration-700 group-hover:scale-115"
						/>
						<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/60 to-transparent">
							<p className="text-cream text-sm tracking-wide">
								Interior Living Spaces
							</p>
						</div>
					</div>

					{/* Top Right Image */}
					<div
						ref={(el) => {
							setImageContainerRef(1)(el);
							container2Ref.current = el;
						}}
						className="relative aspect-[4/3] overflow-hidden group opacity-0">
						<Image
							ref={img2Ref}
							src={galleryAerial}
							alt="Royal Park Villas community aerial view"
							className="image-luxury scale-110 transition-transform duration-700 group-hover:scale-115"
						/>
						<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/60 to-transparent">
							<p className="text-cream text-sm tracking-wide">
								Community Overview
							</p>
						</div>
					</div>

					{/* Bottom Right Image */}
					<div
						ref={(el) => {
							setImageContainerRef(2)(el);
							container3Ref.current = el;
						}}
						className="relative aspect-[4/3] overflow-hidden group opacity-0">
						<Image
							ref={img3Ref}
							src={galleryPool}
							alt="Royal Park Villas pool and garden"
							className="image-luxury scale-110 transition-transform duration-700 group-hover:scale-115"
						/>
						<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/60 to-transparent">
							<p className="text-cream text-sm tracking-wide">
								Outdoor Amenities
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
