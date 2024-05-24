import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Header from '@/components/global/Header';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export const metadata = {
	title: 'Create your Form.',
	description:
		'This is a form generator. Using power of Artifical Intelligence, combine with awesome UI personalization.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.className} transition-color duration-200`}
			>
				<Providers>
					<Header />
					<div className="max-w-6xl mx-auto pt-24">
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
