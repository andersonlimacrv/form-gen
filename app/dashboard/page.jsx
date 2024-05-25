import React from 'react';
import CreateForm from '@/components/dashboard/CreateForm';

export default function Dashboard() {
	return (
		<>
			<div className="flex justify-between w-full">
				<h1>Dashboard</h1>
				<CreateForm />
			</div>
		</>
	);
}
