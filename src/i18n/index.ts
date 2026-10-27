import type { Locale } from '@/i18n/locales';
export { locales, type Locale } from '@/i18n/locales';

const ru = {
	'nav.home': 'Главная',
	'nav.main': 'Основная навигация',
	'nav.footer': 'Навигация в подвале',
	'home.noNews': 'Новостей пока нет.',
	'home.toolsTitle': 'Полезные инструменты',
	'home.tools.speedups.title': 'Калькулятор ускорений',
	'home.tools.speedups.description': 'Рассчитайте время ускорений для строительства, исследований и обучения войск.',
	'home.tools.resources.title': 'Калькулятор ресурсов',
	'home.tools.resources.description': 'Планируйте развитие города и оценивайте необходимые ресурсы.',
	'home.tools.troops.title': 'Расчёт войск',
	'home.tools.troops.description': 'Рассчитайте численность армии и ресурсы для обучения войск.',
	'home.newsTitle': 'Новости игры',
	'home.newsPlaceholder': 'Здесь будут новости игры: обновления, события и технические работы.',
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
		'nav.home': 'Home',
		'nav.main': 'Main navigation',
		'nav.footer': 'Footer navigation',
		'home.noNews': 'No news yet.',
		'home.toolsTitle': 'Useful tools',
		'home.tools.speedups.title': 'Speedup calculator',
		'home.tools.speedups.description': 'Calculate speedup time for building, research, and troop training.',
		'home.tools.resources.title': 'Resource calculator',
		'home.tools.resources.description': 'Plan your city development and estimate the resources required.',
		'home.tools.troops.title': 'Troop calculator',
		'home.tools.troops.description': 'Calculate army size and resources for troop training.',
		'home.newsTitle': 'Game news',
		'home.newsPlaceholder': 'Game updates, events, and maintenance news will appear here.',
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
		'nav.home': 'Startseite',
		'nav.main': 'Hauptnavigation',
		'nav.footer': 'Fußnavigation',
		'home.noNews': 'Noch keine Nachrichten.',
		'home.toolsTitle': 'Nützliche Werkzeuge',
		'home.tools.speedups.title': 'Beschleunigungsrechner',
		'home.tools.speedups.description': 'Berechne Beschleunigungszeiten für Bau, Forschung und Truppenausbildung.',
		'home.tools.resources.title': 'Ressourcenrechner',
		'home.tools.resources.description': 'Plane die Stadtentwicklung und schätze die benötigten Ressourcen.',
		'home.tools.troops.title': 'Truppenrechner',
		'home.tools.troops.description': 'Berechne die Armeestärke und Ressourcen für die Truppenausbildung.',
		'home.newsTitle': 'Spielneuigkeiten',
		'home.newsPlaceholder': 'Hier erscheinen Neuigkeiten zu Updates, Events und Wartungsarbeiten.',
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
