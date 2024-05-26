'use client';
import React, { useState } from 'react';
import Spinner from '../global/spinner';
import { useRouter } from 'next/navigation';

import ButtonAccent from '@/components/global/ButtonAccent';
import { Textarea } from '@/components/ui/textarea';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AIchatSession } from '@/config/gemini';
import { db } from '@/config';
import { JsonForms } from '@/config/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

export default function CreateForm() {
	const [userInput, setUserInput] = useState('');
	const [loading, setLoading] = useState(false);
	const { user } = useUser();
	const router = useRouter();

	const onCreateForm = async () => {
		setLoading(true);

		const PROMPT = `Description: ${userInput} \n On the basis of description, please give form in json format with: form title, form subheading with form having Form field, form name, placeholder name, form label, fieldType, and field required in Json format.`;

		try {
			const result = await AIchatSession.sendMessage(PROMPT);
			if (result.response.text()) {
				const resp = await db
					.insert(JsonForms)
					.values({
						jsonForm: formResponse,
						createBy: user?.primaryEmailAddress
							?.emailAddress,
						createdAt: moment().format(
							'DD-MM-YYYY HH:mm:ss'
						),
					})
					.returning({ id: JsonForms.id });
				if (resp[0]?.id) {
					router.push(`/customize/${resp[0]?.id}`);
				}
			}
		} catch (error) {
			console.error('Error creating form:', error);
		} finally {
			setLoading(false);
		}
	};
	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<ButtonAccent>+ New Form</ButtonAccent>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Create a new form</DialogTitle>
						<DialogDescription>
							Type the inputs you want your form to
							have.
						</DialogDescription>
					</DialogHeader>
					<Textarea
						onChange={(e) =>
							setUserInput(e.target.value)
						}
						placeholder="Enter your form name"
						className="w-full"
					/>
					<br />
					<div className="flex">
						<Button
							disabled={loading}
							onClick={() => onCreateForm()}
							className="w-full"
						>
							{loading ? <Spinner /> : 'Create'}
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}
