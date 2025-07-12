import type { Metadata } from 'next';
import { Figtree, Nunito, Urbanist } from 'next/font/google';
import './globals.css';

const figtree = Figtree({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
	variable: '--font-figtree',
});

const nunito = Nunito({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
	variable: '--font-nunito',
});

const urbanist = Urbanist({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
	variable: '--font-urbanist',
});

export const metadata: Metadata = {
	title: 'Fametonic',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const fontVariables = [
		figtree.variable,
		nunito.variable,
		urbanist.variable,
	].join(' ');

	return (
		<html lang="en">
			<body className={`${fontVariables} antialiased`}>{children}</body>
		</html>
	);
}
