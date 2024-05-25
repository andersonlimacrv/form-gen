'use client';
import React from 'react';
import { motion } from 'framer-motion';

function FormHero() {
	return (
		<>
			<motion.div
				initial={{
					scale: 0,
					y: 700,
					x: 0,
					opacity: 0,
					rotate: 180,
				}}
				animate={{
					scale: 1,
					y: 0,
					x: 0,
					opacity: 1,
					rotate: 0,
				}}
				transition={{ duration: 1 }}
			>
				<div className="rounded-lg max-w-4xl mx-auto bg-secondary-foreground shadow-lg">
					<div className="h-10 bg-secondary-foreground opacity-20 rounded-t-lg border-b border-muted-foreground" />
					<div className="flex h-[550px]">
						<div className="w-32 bg-gradient-to-br from-muted-foreground to-secondary-foreground p-6 overflow-hidden rounded-bl-lg">
							<div className="text-center mb-10">
								<div className="w-10 h-10 rounded-full bg-accent mb-4 mx-auto" />
								<div className="h-2 rounded-full bg-accent" />
							</div>
							<div className="text-center mb-10">
								<div className="w-10 h-10 rounded-full bg-muted-foreground mb-4 mx-auto" />
								<div className="h-2 rounded-full bg-muted-foreground" />
							</div>
							<div className="text-center mb-10">
								<div className="w-10 h-10 rounded-full bg-muted-foreground mb-4 mx-auto" />
								<div className="h-2 rounded-full bg-muted-foreground" />
							</div>
							<div className="text-center">
								<div className="w-10 h-10 rounded-full bg-muted-foreground mb-4 mx-auto" />
								<div className="h-2 rounded-full bg-muted-foreground" />
							</div>
						</div>
						<div className="flex-1 py-6 px-8">
							<div className="flex flex-wrap -mx-4">
								<div className="w-2/3 px-4 sm:mx-auto">
									<div className="flex flex-wrap -mx-4 md:mb-10 mb-1">
										<div className="md:w-1/4 md:px-4 px-[1px]">
											<div className="text-center mb-10 bg-gradient-to-br from-muted-foreground to-secondary-foreground shadow rounded-lg p-6">
												<div className="h-4 w-10 md:h-10 rounded-full bg-cyan-500 mb-4 mx-auto" />
												<div className="h-2 rounded-full bg-muted" />
											</div>
										</div>
										<div className="md:w-1/4 md:px-4 px-[1px]">
											<div className="text-center mb-10 bg-gradient-to-br from-muted-foreground to-secondary-foreground shadow rounded-lg p-6">
												<div className="h-4 w-10 md:h-10 rounded-full bg-violet-600 mb-4 mx-auto" />
												<div className="h-2 rounded-full bg-muted" />
											</div>
										</div>
										<div className="md:w-1/4 md:px-4 px-[1px]">
											<div className="text-center mb-10 bg-gradient-to-br from-muted-foreground to-secondary-foreground shadow rounded-lg p-6">
												<div className="h-4 w-10 md:h-10 rounded-full bg-rose-800 mb-4 mx-auto" />
												<div className="h-2 rounded-full bg-muted" />
											</div>
										</div>
										<div className="md:w-1/4 md:px-4 px-[1px]">
											<div className="text-center mb-10 bg-gradient-to-br from-muted-foreground to-secondary-foreground shadow rounded-lg p-6">
												<div className="h-4 w-10 md:h-10 rounded-full bg-pink-500 mb-4 mx-auto" />
												<div className="h-2 rounded-full bg-muted" />
											</div>
										</div>
									</div>
									<div className="md:h-32 percentage md:mb-10 mb-1 pt-2">
										<div className="h-4 bg-muted w-64 mb-4 block rounded-full" />
										<div className="h-4 bg-muted w-32 mb-4 block rounded-full" />
										<div className="h-4 bg-muted w-40 mb-4 block rounded-full" />
										<div className="h-4 bg-muted w-20 mb-4 block rounded-full" />
									</div>
									<div className="w-full flex flex-wrap mb-6">
										<div className="w-full md:w-1/2 ">
											<div className="flex items-center">
												<div className="h-8 w-8 rounded-full bg-muted mr-4" />
												<div>
													<div className="h-2 w-16 bg-muted mb-1 rounded-full" />
													<div className="h-2 w-10 bg-muted rounded-full" />
												</div>
											</div>
										</div>
										<div className="w-1/2 hidden md:flex">
											<div className="flex items-center">
												<div className="h-8 w-8 rounded-full bg-muted mr-4" />
												<div>
													<div className="h-2 w-16 bg-muted mb-1 rounded-full" />
													<div className="h-2 w-10 bg-muted rounded-full" />
												</div>
											</div>
										</div>
									</div>
									<div className="w-full hidden md:flex flex-wrap ">
										<div className="w-1/2">
											<div className="flex items-center">
												<div className="h-8 w-8 rounded-full bg-muted mr-4" />
												<div>
													<div className="h-2 w-16 bg-muted mb-1 rounded-full" />
													<div className="h-2 w-10 bg-muted rounded-full" />
												</div>
											</div>
										</div>
										<div className="w-1/2">
											<div className="flex items-center">
												<div className="h-8 w-8 rounded-full bg-muted mr-4" />
												<div>
													<div className="h-2 w-16 bg-muted mb-1 rounded-full" />
													<div className="h-2 w-10 bg-muted rounded-full" />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="w-1/3 px-4 hidden md:block">
									<div className="rounded-lg shadow-lg p-6">
										<div className="block w-12 h-2 rounded-full bg-muted mb-6" />
										<svg
											height={150}
											width={150}
											viewBox="0 0 20 20"
											className="mx-auto mb-12"
										>
											<circle
												r={10}
												cx={10}
												cy={10}
												fill="#00acac"
											/>
											<circle
												r={5}
												cx={10}
												cy={10}
												fill="transparent"
												stroke="#243949"
												strokeWidth={
													10
												}
												strokeDasharray="11 31.4"
												transform="rotate(-90) translate(-20)"
											/>
										</svg>
										<div className="flex flex-wrap -mx-2 mb-10">
											<div className="w-1/3 px-2">
												<div className="block h-2 rounded-full bg-muted" />
											</div>
											<div className="w-1/3 px-2">
												<div className="block h-2 rounded-full bg-muted" />
											</div>
											<div className="w-1/3 px-2">
												<div className="block h-2 rounded-full bg-muted" />
											</div>
										</div>
									</div>
									<div className="flex justify-between my-10">
										<div>
											<div className="h-2 w-10 bg-muted-foreground rounded-full mb-2" />
											<div className="h-2 w-16 bg-muted-foreground rounded-full mb-2" />
											<div className="h-2 w-8 bg-muted-foreground rounded-full" />
										</div>
										<div>
											<div className="ml-auto h-2 w-5 bg-muted-foreground rounded-full mb-2" />
											<div className="ml-auto h-2 w-6 bg-muted-foreground rounded-full mb-2" />
											<div className="ml-auto h-2 w-8 bg-muted-foreground rounded-full" />
										</div>
									</div>
									<div className="text-right flex justify-end gap-x-4">
										<div className="rounded-lg h-8 w-20 px-4 bg-accent" />
										<div className="rounded-lg h-8 w-20 px-4 bg-muted" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
}

export default FormHero;
