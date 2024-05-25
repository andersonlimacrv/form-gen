'use client';
import React from 'react';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { SidebarData } from '@/constants';
import { usePathname } from 'next/navigation';
import Hamburguer from '@/components/global/Hamburguer';

export default function Sidebar() {
	const pathname = usePathname();
	const isActive = (href) => {
		return pathname === href;
	};
	const [isOpen, setIsOpen] = useState(false);
	const sidebarRef = useRef(null);
	const [isMobile, setIsMobile] = useState(
		typeof window !== 'undefined' ? window.innerWidth < 768 : false
	);

	/* 	const handleClickOutside = (event) => {
		if (
			sidebarRef.current &&
			!sidebarRef.current.contains(event.target)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []); */

	useEffect(() => {
		const updateIsOpen = () => {
			setIsOpen(isMobile ? false : true);
		};

		updateIsOpen();

		return () => {
			window.removeEventListener('resize', updateIsOpen);
		};
	}, [isMobile]);

	useEffect(() => {
		const initialCheck = () => {
			setIsMobile(window.innerWidth < 768);
		};

		window.addEventListener('resize', initialCheck);

		initialCheck();

		window.removeEventListener('resize', initialCheck);
	}, []);

	return (
		<nav
			className={`flex flex-col items-center h-[90vh] space-y-4 pt-4 mx-6 mt-6 bg-gradient-to-br from-primary-foreground/20 via-primary-foreground/50 to-primary-foreground fixed py-16 left-0 transition-translate rounded-lg border-border border-[1px] duration-300  ${
				isOpen
					? 'w-[14rem] pb-16 overflow-y-auto overflow-x-hidden'
					: 'w-[88px]'
			}`}
			aria-label="Sidebar"
			ref={sidebarRef}
		>
			<div className="">
				<Hamburguer onClick={() => setIsOpen(!isOpen)} />
			</div>
			{/* Nav items */}
			<ul
				className={`w-full pt-5 flex flex-col  gap-y-0 lg:gap-y-1 text-sm md:text-md ${
					isOpen ? '' : 'pr-3 mr-1'
				}`}
			>
				{SidebarData.map((category) => (
					<div key={category._categoryId}>
						<li
							className={`pl-4 text-[#243949] text-lg text-center font-semibold uppercase tracking-widest ${
								isOpen ? '' : 'hidden'
							}`}
						>
							{category.category}
						</li>
						{category.items.map((item, index) => (
							<li
								key={index}
								className={`w-full flex items-center gap-x-1.5 group py-1 select-none text-sm lg:text-lg 2xl:text-2xl ${
									isOpen ? 'py-0' : 'py-1'
								}`}
							>
								<div
									className={`px-1 ml-1 rounded-xl h-10 bg-transparent relative overflow-hidden ${
										isOpen
											? ''
											: 'px-[4px]'
									}`}
								>
									<div
										className={`absolute top-0 left-0 w-full h-[110%] translate-y-0 group-hover:translate-y-0 bg-accent transition-all duration-300 ${
											isActive(
												item.href
											)
												? 'translate-y-0'
												: 'translate-y-full'
										}`}
									/>
								</div>
								<Link href={item.href}>
									<div
										className={` group-active:scale-95 self-stretch px-3 py-1 rounded flex items-center space-x-3  dark:group-hover:text-white dark:hover:text-white ${
											isOpen
												? 'w-[12rem] dark:group-hover:bg-primary-foreground group-hover:bg-[#243949] hover:text-secondary'
												: 'w-24 bg-accent/10'
										}`}
									>
										<div className="text-accent/20 group-hover:text-accent ">
											{item.icon}
										</div>

										<span
											className={`capitalize pl-0 sm:pl-2 text-sm lg:text-lg  transition-all duration-200 ${
												isOpen
													? 'inline-block translate-x-0 group-hover:translate-x-1'
													: 'hidden'
											}`}
										>
											{item.title}
										</span>
									</div>
								</Link>
							</li>
						))}
					</div>
				))}
			</ul>
		</nav>
	);
}
