import Image from "next/image";

import logoImage from "../_assets/royal-park-villas-logo-gold.webp";

export default function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
			<div className="container-luxury flex items-center justify-between h-16 md:h-20 px-6 md:px-12 lg:px-24">
				<a
					href="#hero"
					className="font-display text-lg md:text-xl tracking-wide text-foreground">
					<Image src={logoImage} alt="Logo" height={100} width={100} />
				</a>

				<nav className="hidden md:flex items-center gap-8">
					<a
						href="#about"
						className="text-label hover:text-foreground transition-colors">
						About
					</a>
					<a
						href="#highlights"
						className="text-label hover:text-foreground transition-colors">
						Highlights
					</a>
					<a
						href="#location"
						className="text-label hover:text-foreground transition-colors">
						Location
					</a>
					<a
						href="#gallery"
						className="text-label hover:text-foreground transition-colors">
						Gallery
					</a>
					<a
						href="#developer"
						className="text-label hover:text-foreground transition-colors">
						Developer
					</a>
				</nav>

				<div className="md:hidden">
					<span className="text-label">Menu</span>
				</div>
			</div>
		</header>
	);
}
