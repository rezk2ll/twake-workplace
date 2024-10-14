/**
 * Returns the name of the language corresponding to the given locale.
 *
 * @param locale The locale to get the language name for.
 * @returns {string} The name of the language corresponding to the given locale.
 * @example
 * getLanguageName('fr') // => 'Français'
 * getLanguageName('unknown') // => 'English' (default)
 */
export const getLanguageName = (locale: string): string => {
	if (locale === 'fr') {
		return 'Français';
	}

	if (locale === 'ar') {
		return 'العربية';
	}

	if (locale === 'vi') {
		return 'Tiếng Việt';
	}

	if (locale === 'ru') {
		return 'Русский';
	}

	return 'English';
};

/**
 * Returns the flag emoji corresponding to the given locale.
 *
 * @param locale The locale to get the flag for.
 * @returns {string} The flag emoji corresponding to the given locale.
 */
export const getFlagFromLocale = (locale: string): string => {
	if (locale === 'fr') {
		return '🇫🇷';
	}

	if (locale === 'ar') {
		return '🇸🇦';
	}

	if (locale === 'vi') {
		return '🇻🇳';
	}

	if (locale === 'ru') {
		return '🇷🇺';
	}

	return '🇺🇸';
};

/**
 * Returns the display name of the locale corresponding to the given locale.
 *
 * @param locale The locale to get the display name for.
 * @returns {string} The display name of the locale corresponding to the given locale.
 */
export const getLocaleDisplayName = (locale: string): string => {
	if (locale === 'fr') {
		return 'FR';
	}

	if (locale === 'ar') {
		return 'AR';
	}

	if (locale === 'vi') {
		return 'VN';
	}

	if (locale === 'ru') {
		return 'РУ';
	}

	return 'EN';
};
