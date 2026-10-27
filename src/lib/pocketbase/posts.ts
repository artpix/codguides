import type PocketBase from 'pocketbase';
import type { Locale } from '../../i18n';
import type { LocalizedPost, PostTranslation } from '../../types/pocketbase';
import { createPocketBase } from './client';

const translationsCollection = 'posts_translations';
const expand = 'languages_code,post_id.og_image,post_id.source';
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
		expand,
	});
	return translations
		.filter((translation) => normalizeLanguageCode(translation.expand?.languages_code?.code ?? translation.languages_code) === normalizeLanguageCode(locale))
		.map(localize);
}

export async function getPost(slug: string, locale: Locale, client: PocketBase = createPocketBase()) {
	const translations = await client.collection<PostTranslation>(translationsCollection).getFullList({
		filter: client.filter('slug = {:slug}', { slug }),
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
