'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ImSpinner } from 'react-icons/im';

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
import { createFormPrompt } from '@/config/prompts';
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
		try {
			const PROMPT = createFormPrompt({ userInput });
			if (PROMPT) {
				const result = await AIchatSession.sendMessage(PROMPT);
				const responseText = result.response.text();

				if (responseText) {
					const respID = await insertDB({
						jsonTxt: responseText,
					});

					if (respID) {
						router.push(`/customize/${respID}`);
					}
				}
			}
		} catch (error) {
			console.error('Error creating form:', error);
		} finally {
			setLoading(false);
		}
	};

	const insertDB = async ({ jsonTxt }) => {
		const resp = await db
			.insert(JsonForms)
			.values({
				jsonForm: jsonTxt,
				createBy: user?.primaryEmailAddress?.emailAddress,
				createdAt: moment().format('DD-MM-YYYY HH:mm:ss'),
			})
			.returning({ id: JsonForms.id });
		return resp[0]?.id;
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
						placeholder="Enter a description for your form..."
						className="w-full"
					/>
					<br />
					<div className="flex">
						<Button
							disabled={loading}
							onClick={() => onCreateForm()}
							className="w-full"
						>
							{loading ? (
								<ImSpinner className="animate-spin text-accent" />
							) : (
								'Create'
							)}
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}
