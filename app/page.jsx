import { Button } from '@/components/ui/button';
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="text-accent dark:text-accent font-semibold">
				text red tailwind
				<Button variant="default">Button</Button>
			</div>
		</main>
	);
}
