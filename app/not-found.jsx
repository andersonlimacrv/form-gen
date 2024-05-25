import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
	return (
		<section className="flex items-center justify-center py-[20%]">
			<div className="container flex flex-col items-center h-full">
				<div className="w-full flex flex-col justify-center items-center py-16">
					<h2 className="font-extrabold text-[12rem] text-primary">
						<span className="sr-only">Error</span>404
					</h2>
					<div className="bg-accent px-2 text-sm rounded rotate-12 absolute">
						Page Not Found
					</div>
				</div>
				<div className="flex flex-col gap-6 max-w-2xl text-center h-full">
					<p className="font-semibold text-2xl md:text-3xl dark:text-gray-300">
						Sorry, we couldn't find this page.
					</p>
					<Link href={'/'}>
						<Button
							className="w-full px-auto"
							variant="outline"
						>
							Go Home
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
