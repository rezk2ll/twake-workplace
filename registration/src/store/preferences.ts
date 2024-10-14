import { persisted } from 'svelte-persisted-store';
import { locale } from 'svelte-i18n';
import { get } from 'svelte/store';

/**
 * Store for the user's preferences.
 */
export const preferences = persisted('preferences', {
	locale: get(locale)
});

/**
 * Set the user preferred locale.
 *
 * @param locale The locale to set.
 */
export const saveLocale = (lang: string): void => {
	preferences.update((preferences) => ({
		...preferences,
		locale: lang
	}));

	locale.set(lang);
};
