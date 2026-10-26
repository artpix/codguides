import type { RecordModel } from 'pocketbase';

export interface Post extends RecordModel {
	title: string;
	slug: string;
	content: string;
}
