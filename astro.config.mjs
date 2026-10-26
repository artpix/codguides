// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	i18n: {
		locales: ['ru', 'en', 'de'],
		defaultLocale: 'ru',
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
