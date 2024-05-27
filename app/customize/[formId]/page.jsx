'use client';
import React, { useEffect, useState } from 'react';
import { db } from '@/config';
import { JsonForms } from '@/config/schema';
import { and, eq } from 'drizzle-orm';
import { useUser } from '@clerk/nextjs';
import { TiArrowLeftOutline } from 'react-icons/ti';
import { useRouter } from 'next/navigation';
import FormUi from '@/components/customize/FormUi';
import { Card } from '@/components/ui/card';

export default function CustomizeForm({ params }) {
	const { user } = useUser();
	const [jsonForm, setJsonForm] = useState('');

	const router = useRouter();

	useEffect(() => {
		if (user) {
			getFormData();
		}
	}, [user]);

	const getFormData = async () => {
		try {
			const result = await db
				.select()
				.from(JsonForms)
				.where(
					and(
						eq(JsonForms.id, params?.formId),
						eq(
							JsonForms.createBy,
							user?.primaryEmailAddress
								?.emailAddress
						)
					)
				);
			if (result.length > 0) {
				setJsonForm(JSON.parse(result[0].jsonForm));
			} else {
				console.error('No form data found');
			}
		} catch (error) {
			console.error('Error fetching form data:', error);
		}
	};
	return (
		<div className="">
			<button
				onClick={() => router.back()}
				className="flex items-center gap-2 py-4 cursor-pointer hover:transform lg:hover:-translate-x-6 hover:-translate-x-4 hover:font-bold transition-transform duration-200 w-[5rem]"
			>
				<TiArrowLeftOutline className="w-6 h-6 text-accent" />
				<p className="text-gray-400 italic inline-block">
					back
				</p>
			</button>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-1 py-2 h-full">
				<Card>Controller</Card>
				<Card className="lg:col-span-2">
					<FormUi jsonForm={jsonForm} />
				</Card>
			</div>
		</div>
	);
}
