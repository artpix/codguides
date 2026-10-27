import type PocketBase from 'pocketbase';
import type { Locale } from '@/i18n';
import type { LocalizedPost, PostTranslation } from '@/types/pocketbase';
import { createPocketBase } from '@/lib/pocketbase/client';
import { locales } from '@/i18n/locales';
import { getPostPath } from '@/lib/paths';

const publishedFilter = 'post_id.status = "published"';

export async function getPostLanguagePaths(postId: string, client: PocketBase = createPocketBase()) {
	const translations = await client.collection<PostTranslation>('posts_translations').getFullList({
		filter: client.filter(`post_id = {:postId} && ${publishedFilter}`, { postId }),
		expand: 'languages_code',
	});
	const paths: Partial<Record<Locale, string>> = {};
	for (const translation of translations) {
		const code = normalizeLanguageCode(translation.expand?.languages_code?.code ?? translation.languages_code);
		const locale = locales.find((item) => item === code);
		if (locale && translation.slug) paths[locale] = getPostPath(locale, translation.slug);
	}
	return paths;
}

const translationsCollection = 'posts_translations';
const expand = 'languages_code,post_id.og_image,post_id.source,post_id.tags';
function normalizeLanguageCode(code: string): string {
	return code.trim().toLowerCase().split(/[-_]/)[0];
}

function localize(translation: PostTranslation): LocalizedPost {
	const post = translation.expand?.post_id;
	if (!post) {
		throw new Error(`Post ${translation.post_id} is unavailable for translation ${translation.id}`);
	}
	return { ...post, translation };
}

export async function getPosts(locale: Locale, client: PocketBase = createPocketBase()) {
	const translations = await client.collection<PostTranslation>(translationsCollection).getFullList({
		sort: '-post_id.date_created',
		filter: publishedFilter,
		expand,
	});
	return translations
		.filter((translation) => normalizeLanguageCode(translation.expand?.languages_code?.code ?? translation.languages_code) === normalizeLanguageCode(locale))
		.map(localize);
}

/** The five newest selected posts with a translation in the requested language. */
export async function getHomePosts(locale: Locale, client: PocketBase = createPocketBase()) {
	const posts = await getPosts(locale, client);
	return posts.filter((post) => post.is_featured === true).slice(0, 5);
}

/** Latest published news, independent of the homepage featured selection. */
export async function getNewsPosts(locale: Locale, client: PocketBase = createPocketBase()) {
	const posts = await getPosts(locale, client);
	return posts.filter((post) => post.expand?.tags?.some(
		(tag) => tag.name_ru?.trim().toLowerCase() === 'новости',
	)).slice(0, 3);
}

export async function getPost(slug: string, locale: Locale, client: PocketBase = createPocketBase()) {
	const translations = await client.collection<PostTranslation>(translationsCollection).getFullList({
		filter: client.filter(`slug = {:slug} && ${publishedFilter}`, { slug }),
		expand,
	});
	const translation = translations.find(
		(item) => normalizeLanguageCode(item.expand?.languages_code?.code ?? item.languages_code) === normalizeLanguageCode(locale),
	);
	if (!translation) {
		throw new Error(`Post ${slug} is unavailable for locale ${locale}`);
	}
	return localize(translation);
}
