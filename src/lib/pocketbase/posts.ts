import type PocketBase from 'pocketbase';
import type { Post } from '../../types/pocketbase';
import { createPocketBase } from './client';

export async function getPosts(client: PocketBase = createPocketBase()) {
	return client.collection<Post>('posts').getFullList({
		sort: '-date_created',
	});
}

export async function getPost(slug: string, client: PocketBase = createPocketBase()) {
	return client.collection<Post>('posts').getFirstListItem(
		client.filter('slug = {:slug}', { slug }),
	);
}
