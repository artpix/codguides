export const locales = ['ru', 'en', 'de'] as const;
export type Locale = (typeof locales)[number];
