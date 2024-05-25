import React from 'react';

function FormHero() {
	return (
		<>
			<div className="flex flex-col w-full">
				<div className="rounded-lg max-w-4xl mx-auto bg-secondary-foreground shadow-lg relative z-20 hidden md:block">
					<div className="h-10 bg-secondary-foreground rounded-t-lg border-b border-muted-foreground" />
					<div className="flex" style={{ height: 550 }}>
						<div className="w-32 bg-gray-200 p-6 overflow-hidden rounded-bl-lg">
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
								<div className="w-2/3 px-4">
									<div className="flex flex-wrap -mx-4 mb-10">
										<div className="w-1/4 px-4">
											<div className="text-center mb-10 bg-white shadow rounded-lg p-6">
												<div className="w-10 h-10 rounded-full bg-green-600 mb-4 mx-auto" />
												<div className="h-2 rounded-full bg-gray-200" />
											</div>
										</div>
										<div className="w-1/4 px-4">
											<div className="text-center mb-10 bg-white shadow rounded-lg p-6">
												<div className="w-10 h-10 rounded-full bg-blue-600 mb-4 mx-auto" />
												<div className="h-2 rounded-full bg-gray-200" />
											</div>
										</div>
										<div className="w-1/4 px-4">
											<div className="text-center mb-10 bg-white shadow rounded-lg p-6">
												<div className="w-10 h-10 rounded-full bg-orange-400 mb-4 mx-auto" />
												<div className="h-2 rounded-full bg-gray-200" />
											</div>
										</div>
										<div className="w-1/4 px-4">
											<div className="text-center mb-10 bg-white shadow rounded-lg p-6">
												<div className="w-10 h-10 rounded-full bg-blue-800 mb-4 mx-auto" />
												<div className="h-2 rounded-full bg-gray-200" />
											</div>
										</div>
									</div>
									<div className="h-32 percentage mb-10 pt-2">
										<div className="h-4 bg-gray-200 w-64 mb-4 block" />
										<div className="h-4 bg-gray-200 w-32 mb-4 block" />
										<div className="h-4 bg-gray-200 w-40 mb-4 block" />
										<div className="h-4 bg-gray-200 w-20 mb-4 block" />
									</div>
									<div className="w-full flex flex-wrap mb-6">
										<div className="w-1/2">
											<div className="flex items-center">
												<div className="h-8 w-8 rounded-full bg-gray-200 mr-4" />
												<div>
													<div className="h-2 w-16 bg-gray-200 mb-1 rounded-full" />
													<div className="h-2 w-10 bg-gray-100 rounded-full" />
												</div>
											</div>
										</div>
										<div className="w-1/2">
											<div className="flex items-center">
												<div className="h-8 w-8 rounded-full bg-gray-200 mr-4" />
												<div>
													<div className="h-2 w-16 bg-gray-200 mb-1 rounded-full" />
													<div className="h-2 w-10 bg-gray-100 rounded-full" />
												</div>
											</div>
										</div>
									</div>
									<div className="w-full flex flex-wrap">
										<div className="w-1/2">
											<div className="flex items-center">
												<div className="h-8 w-8 rounded-full bg-gray-200 mr-4" />
												<div>
													<div className="h-2 w-16 bg-gray-200 mb-1 rounded-full" />
													<div className="h-2 w-10 bg-gray-100 rounded-full" />
												</div>
											</div>
										</div>
										<div className="w-1/2">
											<div className="flex items-center">
												<div className="h-8 w-8 rounded-full bg-gray-200 mr-4" />
												<div>
													<div className="h-2 w-16 bg-gray-200 mb-1 rounded-full" />
													<div className="h-2 w-10 bg-gray-100 rounded-full" />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="w-1/3 px-4">
									<div className="rounded-lg shadow-lg p-6">
										<div className="block w-12 h-2 rounded-full bg-gray-200 mb-6" />
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
												<div className="block h-2 rounded-full bg-gray-200" />
											</div>
											<div className="w-1/3 px-2">
												<div className="block h-2 rounded-full bg-gray-200" />
											</div>
											<div className="w-1/3 px-2">
												<div className="block h-2 rounded-full bg-gray-200" />
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
									<div className="text-right flex justify-end">
										<div className="rounded-lg h-8 w-20 px-4 bg-gray-200 mr-2" />
										<div className="rounded-lg h-8 w-20 px-4 bg-accent" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default FormHero;
