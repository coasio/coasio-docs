// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://coasio.github.io',
	base: '/',

	integrations: [
		starlight({
			title: 'CoAsio',
			description: 'A C++23 coroutine runtime built on Asio, with a separate scheduler for coroutine execution.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/coasio/coasio' }
			],
			customCss: ['./src/styles/custom.css'],
			components: {
				ThemeSelect: './src/components/ThemeToggle.astro',
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Introduction', slug: 'getting-started' },
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'First Task', slug: 'getting-started/first-task' },
					],
				},
				{
					label: 'Core Concepts',
					items: [
						{ label: 'Tasks & Coroutines', slug: 'concepts/tasks' },
						{ label: 'Awaiting & Spawning', slug: 'concepts/awaiting-and-spawning' },
						{ label: 'Scheduling & Work Stealing', slug: 'concepts/scheduling' },
						{ label: 'Lifetimes & Safety', slug: 'concepts/lifetimes' },
					],
				},
				{
					label: 'Guides',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'API Overview', slug: 'reference' },
						{ label: 'Error Handling', slug: 'reference/errors' },
						{ label: 'Cancellation', slug: 'reference/cancellation' },
						{ label: 'Timers & Clocks', slug: 'reference/timers' },
						{ label: 'Networking', slug: 'reference/networking' },
						{ label: 'Filesystem', slug: 'reference/filesystem' },
					],
				},
				{
					label: 'Internals',
					items: [{ autogenerate: { directory: 'internals' } }],
				},
			],
		}),
	],
});
