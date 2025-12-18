"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

import logoImage from "../_assets/royal-park-villas-logo-gold.webp";

const navLinks = [
	{ href: "#about", label: "About" },
	{ href: "#highlights", label: "Highlights" },
	{ href: "#location", label: "Location" },
	{ href: "#gallery", label: "Gallery" },
	{ href: "#developer", label: "Developer" },
];

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleNavClick = () => {
		setIsOpen(false);
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
			<div className="container-luxury flex items-center justify-between h-16 md:h-20 px-6 md:px-12 lg:px-24">
				<Link
					href="#hero"
					className="font-display text-lg md:text-xl tracking-wide text-foreground">
					<Image src={logoImage} alt="Logo" height={100} width={100} />
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-label hover:text-foreground transition-colors">
							{link.label}
						</Link>
					))}
				</nav>

				{/* Mobile Navigation */}
				<div className="md:hidden">
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<button
								className="p-2 text-foreground hover:text-foreground/80 transition-colors cursor-pointer"
								aria-label="Open menu">
								<Menu className="w-5 h-5" />
							</button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="w-full sm:w-80 bg-background border-l border-border p-0">
							<div className="flex flex-col h-full">
								{/* Mobile Header */}
								<div className="flex items-center justify-between h-16 px-6 border-b border-border">
									<span className="font-display text-lg tracking-wide text-foreground">
										Royal Park Villas
									</span>
								</div>

								{/* Mobile Nav Links */}
								<nav className="flex-1 flex flex-col justify-center px-6">
									<ul className="space-y-6">
										{navLinks.map((link) => (
											<li key={link.href}>
												<Link
													href={link.href}
													onClick={handleNavClick}
													className="block font-display text-2xl tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300">
													{link.label}
												</Link>
											</li>
										))}
									</ul>
								</nav>

								{/* Mobile Footer */}
								<div className="px-6 py-8 border-t border-border">
									<p className="text-xs text-muted-foreground tracking-wider uppercase">
										Jumeirah Park, Dubai
									</p>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
};

export default Header;
