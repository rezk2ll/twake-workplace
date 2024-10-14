import { browser } from '$app/environment';
import { getLocaleFromNavigator, locale, waitLocale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';
import '$lib/i18n';
import logger from '$services/logger';
import { get } from 'svelte/store';
import { preferences } from '$store/preferences';

export const load: LayoutLoad = async () => {
	if (browser) {
		const detectedLocale = getLocaleFromNavigator();
		logger.info(`Detected locale from browser: ${detectedLocale}`);

		const userLanguage = get(preferences).locale;

		locale.set(userLanguage ?? detectedLocale);
	}

	await waitLocale();
};
