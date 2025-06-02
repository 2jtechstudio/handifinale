"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { COMPANY_PHONE } from "@/lib/constants";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const navItems = [
	{ label: "Home", path: "/" },
	{ label: "Services", path: "/services" },
	{ label: "About", path: "/about" },
	{ label: "Contact", path: "/contact" },
];

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 10);
		setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isActive = (path: string) => pathname === path;

	return (
		<header className="sticky top-0 left-0 right-0 z-50 w-full bg-[#113065] shadow-md transition-all duration-300">
			<div className="container mx-auto px-4 flex items-center justify-between h-20">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-3">
					<div className="relative h-12 w-12">
						<Image
							src="/images/handilogo.png"
							alt="H&I Construction Logo"
							fill
							className="object-contain"
							priority
						/>
					</div>
					<span className="hidden md:inline-block font-bold text-xl text-white tracking-wide">
						H & I Construction
					</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-2">
					{navItems.map((item) => (
						<Link
							key={item.path}
							href={item.path}
							className={cn(
								"px-4 py-2 rounded-md text-base font-medium transition-colors duration-200",
								isActive(item.path)
									? "bg-[#aad6ec] text-[#113065]"
									: "text-white hover:bg-[#aad6ec] hover:text-[#113065]"
							)}
						>
							{item.label}
						</Link>
					))}
					<Button
						asChild
						size="sm"
						className="ml-4 bg-white text-[#113065] hover:bg-[#aad6ec] hover:text-[#113065] rounded-xl font-semibold"
					>
						<Link href="/contact">Get a Free Estimate</Link>
					</Button>
				</nav>

				{/* Phone Number - Desktop */}
				<div className="hidden md:flex items-center ml-6">
					<a
						href={`tel:${COMPANY_PHONE.replace(/[^0-9]/g, "")}`}
						className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#aad6ec] transition-colors"
					>
						<Phone className="h-5 w-5" />
						<span>{COMPANY_PHONE}</span>
					</a>
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden relative z-10 p-2"
					aria-label="Toggle menu"
				>
					{isOpen ? (
						<X className="text-white h-7 w-7" />
					) : (
						<Menu className="text-white h-7 w-7" />
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden fixed inset-0 bg-[#113065] z-40 flex flex-col items-center justify-center">
					{navItems.map((item) => (
						<Link
							key={item.path}
							href={item.path}
							onClick={() => setIsOpen(false)}
							className={cn(
								"px-4 py-4 text-white text-2xl font-semibold rounded transition-colors w-full text-center",
								isActive(item.path)
									? "bg-[#aad6ec] text-[#113065]"
									: "hover:bg-[#aad6ec] hover:text-[#113065]"
							)}
						>
							{item.label}
						</Link>
					))}
					<Button
						asChild
						size="lg"
						className="mt-8 bg-white text-[#113065] hover:bg-[#aad6ec] hover:text-[#113065] rounded-xl w-4/5"
					>
						<Link href="/contact" onClick={() => setIsOpen(false)}>
							Get a Free Estimate
						</Link>
					</Button>
					<a
						href={`tel:${COMPANY_PHONE.replace(/[^0-9]/g, "")}`}
						className="mt-8 flex items-center gap-2 text-white hover:text-[#aad6ec] text-lg"
					>
						<Phone className="h-6 w-6" />
						<span>{COMPANY_PHONE}</span>
					</a>
				</div>
			)}
		</header>
	);
}
