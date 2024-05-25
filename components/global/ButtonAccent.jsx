import React from 'react';
import { cn } from '@/lib/utils';

const ButtonAccent = ({ className, children, ...rest }) => {
	return (
		<>
			<div
				className={cn(
					'relative inline-flex h-9 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:transform hover:scale-105 transition-transform duration-150',
					className
				)}
			>
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#00AACC_20%,#E2CBFF_100%)]" />
				<button
					{...rest}
					className={cn(
						'inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary-foreground px-3 lg:px-8 py-2 text-sm font-medium text-primary backdrop-blur-3xl',
						className
					)}
				>
					{children}
				</button>
			</div>
		</>
	);
};

export default ButtonAccent;
