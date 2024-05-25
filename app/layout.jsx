import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Header from '@/components/global/Header';
import { ClerkProvider } from '@clerk/nextjs';

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
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<body
					className={`${inter.className} transition-color duration-200 min-h-screen`}
				>
					<Providers>
						<Header />
						<div className="pt-16">{children}</div>
					</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}
