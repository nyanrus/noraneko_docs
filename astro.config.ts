// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import { StarlightConfig } from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	//https://github.com/withastro/astro/issues/4419#issuecomment-2239981465
	vite: {
		server: {
				watch: {
						usePolling: true,
				}
		}
	},
	image: {
		service: passthroughImageService()
	},
	integrations: [
		starlight({
			title: 'Noraneko Docs',
			social: {
				github: 'https://github.com/nyanrus/noraneko',
			},
			
			sidebar: [
				{
					label: "Build",
					autogenerate: { directory: 'build' },
				},
				{
					label: 'Tech',
					autogenerate: { directory: 'tech' },
				},
			],
			favicon: "src/assets/icon_a_aq.svg",
		} satisfies StarlightConfig),
	],
});
