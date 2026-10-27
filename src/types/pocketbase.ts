import type { RecordModel } from 'pocketbase';

/**
 * Медиа-активы
 */
export interface Media extends RecordModel {
	file?: string;
	name?: string;
	alt?: string;
	folder?: string;
}

/**
 * Путь к медиа-активу
 */
export interface MediaAssetPath {
	folder: string;
	file: string;
}

/**
 * Источники
 */
export interface Sources extends RecordModel {
	name?: string;
	url?: string;
}

/**
 * Посты
 */
export interface Tag extends RecordModel {
	color: string;
	name_ru: string;
	name_en: string;
	name_de: string;
}

export interface Post extends RecordModel {
	tags: string[];
	is_featured: boolean;
	title: string;
	slug: string;
	description: string;
	/** ID записи из связанной коллекции. */
	og_image: string;
	/** ID записи из связанной коллекции. */
	source: string;
	status: string;
	date_created: string;
	date_updated: string;
	expand?: {
		og_image?: Media;
		tags?: Tag[];
		source?: Sources;
	};
}

/**
 * Переводы постов
 */
export type PostLanguageCode = 'ru-RU' | 'de-DE' | 'en-US';

export interface PostTranslation extends RecordModel {
	/** ID записи из коллекции languages. */
	languages_code: string;
	post_id: string;
	title: string;
	slug: string;
	seo_title: string;
	seo_description: string;
	content: string;
	expand?: {
		post_id?: Post;
		languages_code?: RecordModel & { code: PostLanguageCode };
	};
}

/** Пост с переводом на запрошенный язык. */
export interface LocalizedPost extends Post {
	translation: PostTranslation;
}
