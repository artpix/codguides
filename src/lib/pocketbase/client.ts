import PocketBase from 'pocketbase';

const pocketBaseUrl = import.meta.env.PUBLIC_POCKETBASE_URL ?? 'http://127.0.0.1:8090';

export function createPocketBase() {
	return new PocketBase(pocketBaseUrl);
}
