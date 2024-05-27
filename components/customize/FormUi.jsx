'use client';
import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';

import { ImSpinner6 } from 'react-icons/im';

export default function FormUi({ jsonForm }) {
	const [formData, setFormData] = useState(jsonForm);

	useEffect(() => {
		setFormData(jsonForm);
	}, [jsonForm]);
	console.log('formDATA FROM: ', formData);

	return (
		<div className="p-2 lg:p-8 2xl:p-16 mx-auto lg:w-[600px] 2xl:w-[800px] w-full h-full min-h-[500x]">
			{formData ? (
				<div className="flex flex-col gap-y-2 dark:border-white/60 border-black/60 rounded-md border p-8 2xl:p-24">
					<h2 className="text-center text-xl font-bold">
						{formData.formTitle}
					</h2>
					<p className="text-center text-gray-400">
						{formData.formSubheading}
					</p>

					{formData?.formFields?.map((field, index) => (
						<div
							key={index}
							className="flex flex-col gap-y-2 p-2"
						>
							{renderField(field)}
						</div>
					))}
				</div>
			) : (
				<div className="flex justify-center items-center w-full h-full">
					<ImSpinner6 className="text-accent w-10 h-10 animate-spin" />
				</div>
			)}
		</div>
	);

	function renderField(field) {
		if (field?.fieldType === 'select') {
			return (
				<div className="inline-block">
					<Label
						className="capitalize"
						htmlFor={field?.fieldName}
					>
						{field?.fieldLabel}
					</Label>
					<Select>
						<SelectTrigger className="w-full">
							<SelectValue
								placeholder={
									field?.fieldPlaceholder
								}
							/>
						</SelectTrigger>
						<SelectContent>
							{field?.fieldOptions.map(
								(option, index) => (
									<SelectItem
										key={index}
										value={option}
									>
										{option}
									</SelectItem>
								)
							)}
						</SelectContent>
					</Select>
				</div>
			);
		} else if (field?.fieldType === 'checkbox') {
			return (
				<div className="inline-flex items-center">
					<Label htmlFor={field?.fieldName}>
						{field?.fieldLabel}
					</Label>
					<Checkbox
						className="mx-4"
						name={field?.fieldName}
					/>
				</div>
			);
		} else if (field?.fieldType === 'radio') {
			return (
				<RadioGroup name={field?.fieldName} className="mx-auto">
					<Label htmlFor={field?.fieldName}>
						{field?.fieldPlaceholder}
					</Label>
					{field?.options?.map((option, index) => (
						<div
							key={index}
							className="flex items-center space-x-2"
						>
							<RadioGroupItem
								value={option.label}
								id={option.label}
								name={field?.fieldName}
							/>
							<Label
								htmlFor={option.label}
								className="capitalize"
							>
								{option.label}
							</Label>
						</div>
					))}
				</RadioGroup>
			);
		} else if (field?.fieldType === 'textarea') {
			return (
				<div className="space-y-1">
					<Label
						className="capitalize"
						htmlFor={field?.fieldName}
					>
						{field?.fieldLabel}
					</Label>
					<Textarea
						placeholder={field?.fieldPlaceholder}
						name={field?.fieldName}
						className="min-h-24"
					/>
				</div>
			);
		} else {
			return (
				<div className="space-y-1">
					<Label
						className="capitalize"
						htmlFor={field?.fieldName}
					>
						{field?.fieldLabel}
					</Label>
					<Input
						type={field?.fieldType}
						placeholder={field?.fieldPlaceholder}
						name={field?.fieldName}
					/>
				</div>
			);
		}
	}
}
