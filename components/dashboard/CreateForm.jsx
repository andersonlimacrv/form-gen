import React from 'react';

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

export default function CreateForm() {
	return (
		<div>
			<Dialog>
				<DialogTrigger asChild>
					<ButtonAccent>+ New Form</ButtonAccent>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Create a new form</DialogTitle>
						<DialogDescription>
							<p className="">
								This action cannot be undone.
							</p>
							<br />
							<Textarea
								placeholder="Enter your form name"
								className="w-full"
							/>
							<br />
							<div className="flex gap-x-2">
								<Button
									variant="destructive"
									className="w-full"
								>
									Cancel
								</Button>
								<Button className="w-full">
									Create
								</Button>
							</div>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
}
