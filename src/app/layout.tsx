import type { Metadata } from 'next'
import '@/core/styles/globals.css'

import type { ChildrenType } from '@/shared/types/children'

export const metadata: Metadata = {
	title: 'Next.js Template with Biome and TailwindCSS',
	description: 'A template for building Next.js applications with Biome and TailwindCSS.',
}

export default function RootLayout({ children }: ChildrenType) {
	return (
		<html lang="en">
			<body className="antialiased">
				<div id="main-content">{children}</div>
			</body>
		</html>
	)
}
