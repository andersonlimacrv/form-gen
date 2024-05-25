import React from 'react';
import { SignedIn } from '@clerk/nextjs';
import Sidebar from '@/components/global/Sidebar';

export default function DashboardLayout({ children }) {
	return (
		<SignedIn>
			<Sidebar />
			<div className="flex flex-col  pl-[7.5rem] pr-[1rem] lg:pl-[16.2rem] lg:pr-[3rem] 2xl:px-[18rem] py-6">
				{children}
			</div>
		</SignedIn>
	);
}
