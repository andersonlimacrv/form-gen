'use client';
import React from 'react';
import ToggleTheme from './ToggleTheme';
import Logo from './Logo';
import ButtonAccent from './ButtonAccent';
import { motion } from 'framer-motion';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
	const { user, isSignedIn } = useUser();
	return (
		<header className="fixed top-0 w-full z-10 bg-black/10 backdrop-blur-sm">
			<div className="flex items-center justify-between px-4 lg:px-16 2xl:px-36 h-16 border-b sticky">
				<div className="flex justify-center my-auto">
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6 }}
						whileHover={{ scale: 1.05 }}
					>
						<Link href="/" className="cursor-pointer">
							<Logo />
						</Link>
					</motion.div>
				</div>

				<motion.div
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.6 }}
					className="flex justify-center px-2 py-2 md:gap-x-4 gap-x-1"
				>
					{isSignedIn ? (
						<Link href="/dashboard">
							<Button variant="default">
								Dashboard
							</Button>
						</Link>
					) : (
						<Link href="/dashboard">
							<ButtonAccent>
								Get Started
							</ButtonAccent>
						</Link>
					)}
					<ToggleTheme />
					{isSignedIn && (
						<div className="flex my-auto items-center justify-center">
							<UserButton className="!cursor-pointer" />
						</div>
					)}
				</motion.div>
			</div>
		</header>
	);
}
