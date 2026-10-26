import type { RecordModel } from 'pocketbase';

/**
 * Медиа-активы
 */
export interface Media extends RecordModel {
	file?: string;
	title?: string;
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
export interface Post extends RecordModel {
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
		source?: Sources;
	};
}

/**
 * Переводы постов
 */
export interface PostTranslations extends RecordModel {
	languages_code: string;
	post_id: string;
	title: string;
	description: string;
	seo_title: string;
	seo_description: string;
	content: string;
}
