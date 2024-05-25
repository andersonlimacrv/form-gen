import { Button } from '@/components/ui/button';
import ButtonAccent from '@/components/global/ButtonAccent';
import Hero from '@/components/Hero/Hero';
import HeroForm from '@/components/Hero/FormHero';

export default function Home() {
	return (
		<main className="flex flex-col bg-transparent max-w-screen-2xl mx-auto px-4 ">
			<Hero />
			<HeroForm />
		</main>
	);
}
