import { locales, type Locale } from '@/i18n/locales';

/** Normalize an internal path, preserving its query string and fragment. */
export function normalizePath(path = ''): string {
	const [, pathname = '', suffix = ''] = path.trim().match(/^([^?#]*)(.*)$/s) ?? [];
	const segments = pathname.replace(/\\/g, '/').split('/').filter(Boolean);
	const normalized: string[] = [];
	for (const segment of segments) {
		let decoded: string;
		try {
			decoded = decodeURIComponent(segment);
		} catch {
			decoded = segment;
		}
		if (decoded === '.') continue;
		if (decoded === '..') {
			normalized.pop();
			continue;
		}
		normalized.push(encodeURIComponent(decoded));
	}
	return `/${normalized.join('/')}${suffix}`;
}

/** Build a localized internal URL for any page, replacing an existing locale prefix. */
export function getPath(locale: Locale, path = ''): string {
	const normalized = normalizePath(path);
	const [, pathname = '', suffix = ''] = normalized.match(/^([^?#]*)(.*)$/s) ?? [];
	const segments = pathname.split('/').filter(Boolean);
	if (locales.some((item) => item === segments[0])) segments.shift();
	if (locale !== 'ru') segments.unshift(locale);
	return `/${segments.join('/')}${suffix}`;
}

export function getPostPath(locale: Locale, slug: string): string {
	return getPath(locale, `posts/${encodeURIComponent(slug)}`);
}
