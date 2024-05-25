'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { charVariants } from '@/lib/utils';
import { splitString } from '@/lib/utils';
import { motion } from 'framer-motion';

const heading = 'Create your form';
const heading2 = 'in just a few seconds';
const text =
	'Create personalized online forms with artificial intelligence for registrations, surveys, payments, and more — no coding needed. Gain detailed metrics and valuable insights. Try for free.';

export default function Hero() {
	const head1Chars = splitString(heading);
	const head2Chars = splitString(heading2);
	const textChars = splitString(text);
	return (
		<>
			<section className="flex flex-col lg:flex-row gap-y-2 gap-x-8 2xl:gap-x-32 w-full h-full py-[15%]">
				<div className="flex flex-col justify-center items-center w-full gap-y-4 lg:gap-y-16 px-4 lg:px-8">
					<div className="flex flex-col justify-center text-center">
						<motion.div
							initial="hidden"
							whileInView="reveal"
							transition={{
								staggerChildren: 0.015,
							}}
							className="text-3xl font-extrabold sm:text-5xl drop-shadow-lg"
						>
							{head1Chars.map((char, index) => (
								<motion.span
									variants={charVariants}
									key={index}
									transition={{
										duration: 0.4,
									}}
								>
									{char}
								</motion.span>
							))}
							<br />
							<motion.strong
								initial="hidden"
								whileInView="reveal"
								delay={2}
								transition={{
									staggerChildren: 0.05,
								}}
								className="block font-extrabold text-accent"
							>
								{head2Chars.map(
									(char, index) => (
										<motion.span
											variants={
												charVariants
											}
											key={index}
											transition={{
												duration: 0.6,
											}}
										>
											{char}
										</motion.span>
									)
								)}
							</motion.strong>
						</motion.div>
					</div>

					<div className="flex flex-col justify-center w-full px-auto">
						<motion.p
							initial="hidden"
							whileInView="reveal"
							transition={{
								staggerChildren: 0.015,
							}}
							className="text-lg text-center"
						>
							{textChars.map((char, index) => (
								<motion.span
									variants={charVariants}
									key={index}
									transition={{
										duration: 0.5,
									}}
									className="mt-4 max-w-2xl sm:text-xl/relaxed"
								>
									{char}
								</motion.span>
							))}
						</motion.p>
					</div>
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1 }}
						className="flex flex-wrap justify-center gap-4"
					>
						<Button
							variant="default"
							className="px-16 w-full lg:w-64"
						>
							+ Create AI Form
						</Button>

						<Button
							variant="outline"
							className="px-16 w-full lg:w-64"
						>
							Learn More
						</Button>
					</motion.div>
				</div>
				<motion.div
					initial={{
						scale: 0,
						y: -700,
						x: 300,
						opacity: 0,
					}}
					animate={{ scale: 1, y: 0, x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className="flex justify-center px-2 py-2 md:gap-x-4 gap-x-1"
				>
					<Image
						src="/design.png"
						alt="hero image"
						width={1200}
						height={1200}
					/>
				</motion.div>
			</section>
		</>
	);
}
