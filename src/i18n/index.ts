import type { Locale } from '@/i18n/locales';
export { locales, type Locale } from '@/i18n/locales';

const ru = {
	'site.title': 'Codguides',
	'home.latestPosts': 'Последние статьи',
	'home.allPosts': 'Все статьи',
	'home.noPosts': 'Пока нет статей для главной.',
	'home.description': 'Проект на Astro с данными из PocketBase.',
	'home.openPosts': 'Посмотреть записи',
	'posts.title': 'Записи',
	'post.backToPosts': '??? ??????',
	'post.source': '????????',
	'posts.backHome': 'На главную',
	'posts.empty': 'В коллекции пока нет записей.',
	'posts.loadError':
		'Не удалось подключиться к PocketBase. Проверьте адрес сервера и правила доступа к коллекции posts.',
	'language.label': 'Язык',
} as const;

type TranslationKey = keyof typeof ru;


const translations: Record<Locale, Record<TranslationKey, string>> = {
	ru,
	en: {
		'site.title': 'Codguides',
		'home.latestPosts': 'Latest articles',
		'home.allPosts': 'All articles',
		'home.noPosts': 'No articles selected for the homepage yet.',
		'home.description': 'An Astro project powered by PocketBase data.',
		'home.openPosts': 'View posts',
		'posts.title': 'Posts',
		'post.backToPosts': 'All posts',
		'post.source': 'Source',
		'posts.backHome': 'Back to home',
		'posts.empty': 'There are no posts in the collection yet.',
		'posts.loadError':
			'Could not connect to PocketBase. Check the server address and the access rules for the posts collection.',
		'language.label': 'Language',
	},
	de: {
		'site.title': 'Codguides',
		'home.latestPosts': 'Neueste Artikel',
		'home.allPosts': 'Alle Artikel',
		'home.noPosts': 'Noch keine Artikel für die Startseite ausgewählt.',
		'home.description': 'Ein Astro-Projekt mit Daten aus PocketBase.',
		'home.openPosts': 'Beiträge ansehen',
		'posts.title': 'Beiträge',
		'post.backToPosts': 'Alle Beitr?ge',
		'post.source': 'Quelle',
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

export { getPath as getLocalizedPath } from '@/lib/paths';
