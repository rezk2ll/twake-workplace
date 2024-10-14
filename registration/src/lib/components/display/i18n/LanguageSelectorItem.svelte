<script lang="ts">
	import { setI18nLocale } from '$src/store/i18n';
	import { getFlagFromLocale, getLanguageName } from '$utils/i18n';
	import { locale } from 'svelte-i18n';

	export let lang: string;

	$: language = getLanguageName(lang);
	$: isActive = $locale?.toLocaleLowerCase() === lang.toLocaleLowerCase();
	$: flag = getFlagFromLocale(lang);

	const setLocale = () => {
		setI18nLocale(lang);
	};
</script>

<button
	type="button"
	on:click={setLocale}
	class="self-stretch pl-4 pr-6 py-4 max-h-14 justify-start items-start gap-3 inline-flex hover:bg-[#e5ebf3] rounded transition duration-100 ease-in"
>
	<div class="w-6 flex-col justify-center items-center gap-2.5 inline-flex">
		<div class="text-center text-black text-xl font-medium leading-normal">
			{flag}
		</div>
	</div>
	<div
		class="text-center {isActive
			? 'text-primary'
			: 'text-disabled-text'} text-[17px] font-medium leading-normal"
	>
		{language}
	</div>
</button>
