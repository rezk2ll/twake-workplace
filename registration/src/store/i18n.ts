import { writable } from 'svelte/store';
import { saveLocale } from '$store/preferences';

export const showLanaguageSelector = writable<boolean>(false);

/**
 * Set the current locale.
 *
 * @param lang The locale to set.
 */
export const setI18nLocale = (lang: string) => {
	saveLocale(lang);
  showLanaguageSelector.set(false);
};

/**
 * Toggle the visibility of the language selector.
 */
export const toggleLanguageSelector = () => {
  showLanaguageSelector.update(value => !value);
};

/**
 * Hide the language selector.
 */
export const hideLanguageSelector = () => {
  showLanaguageSelector.set(false);
};
