const ru = {
	'site.title': 'Codguides',
	'home.description': 'Проект на Astro с данными из PocketBase.',
	'home.openPosts': 'Посмотреть записи',
	'posts.title': 'Записи',
	'posts.backHome': 'На главную',
	'posts.empty': 'В коллекции пока нет записей.',
	'posts.loadError':
		'Не удалось подключиться к PocketBase. Проверьте адрес сервера и правила доступа к коллекции posts.',
	'language.label': 'Язык',
} as const;

type TranslationKey = keyof typeof ru;

export const locales = ['ru', 'en', 'de'] as const;
export type Locale = (typeof locales)[number];

const translations: Record<Locale, Record<TranslationKey, string>> = {
	ru,
	en: {
		'site.title': 'Codguides',
		'home.description': 'An Astro project powered by PocketBase data.',
		'home.openPosts': 'View posts',
		'posts.title': 'Posts',
		'posts.backHome': 'Back to home',
		'posts.empty': 'There are no posts in the collection yet.',
		'posts.loadError':
			'Could not connect to PocketBase. Check the server address and the access rules for the posts collection.',
		'language.label': 'Language',
	},
	de: {
		'site.title': 'Codguides',
		'home.description': 'Ein Astro-Projekt mit Daten aus PocketBase.',
		'home.openPosts': 'Beiträge ansehen',
		'posts.title': 'Beiträge',
		'posts.backHome': 'Zur Startseite',
		'posts.empty': 'Die Sammlung enthält noch keine Beiträge.',
		'posts.loadError':
			'Keine Verbindung zu PocketBase möglich. Prüfe die Serveradresse und die Zugriffsregeln der Sammlung posts.',
		'language.label': 'Sprache',
	},
};

export function useTranslations(locale: Locale) {
	return (key: TranslationKey) => translations[locale][key];
}

export function getLocalizedPath(locale: Locale, path = '') {
	const cleanPath = path.replace(/^\/+|\/+$/g, '');
	const localePrefix = locale === 'ru' ? '' : `/${locale}`;

	return `${localePrefix}/${cleanPath}`.replace(/\/$/, '') || '/';
}
