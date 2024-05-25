import React from 'react';
import { SignedIn } from '@clerk/nextjs';
import Sidebar from '@/components/global/Sidebar';

export default function DashboardLayout({ children }) {
	return (
		<SignedIn>
			<Sidebar />
			<div className="flex flex-col max-w-screen-2xl px-40 lg:px-72 py-6">
				{children}
			</div>
		</SignedIn>
	);
}
