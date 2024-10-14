import { browser } from '$app/environment';
import { preferences } from '$store/preferences';
import { init, register } from 'svelte-i18n';
import { get } from 'svelte/store';

register('en', () => import('./en.json'));
register('fr', () => import('./fr.json'));
register('ru', () => import('./ru.json'));
register('vi', () => import('./vi.json'));
register('ar', () => import('./ar.json'));

const fallbackLocale = 'en';

init({
	fallbackLocale,
	initialLocale: browser ? get(preferences).locale  : fallbackLocale
});
