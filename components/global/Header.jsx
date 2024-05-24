import React from 'react';
import ToggleTheme from './ToggleTheme';
import Logo from './Logo';
export default function Header() {
	return (
		<header className="fixed top-0 w-full z-10 bg-gray-900/5 backdrop-blur-sm shadow">
			<div className="flex items-center justify-between px-8 lg:px-16 2xl:px-36 h-16 border-b sticky">
				<div className="flex justify-center my-auto">
					<Logo />
				</div>

				<div className="flex justify-center px-2 py-2 gap-x-4">
					<ToggleTheme />
				</div>
			</div>
		</header>
	);
}
