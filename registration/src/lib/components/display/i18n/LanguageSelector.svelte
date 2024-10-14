<script lang="ts">
	import LanguageIcon from '$components/icons/LanguageIcon.svelte';
	import LanguageSelectorItem from '$components/display/i18n/LanguageSelectorItem.svelte';
	import { getLocaleDisplayName } from '$utils/i18n';
	import { showLanaguageSelector, toggleLanguageSelector, hideLanguageSelector } from '$store/i18n';
	import { locale } from 'svelte-i18n';
	import { fade } from 'svelte/transition';
	import { clickOutside } from '$utils/html';
</script>

<div
	class="relative w-full text-[#8C9CAF] text-sm font-medium cursor-pointer min-w-[164px] z-[9999]"
	use:clickOutside={hideLanguageSelector}
>
	<button
		type="button"
		class="flex items-center justify-end w-full"
		on:click={toggleLanguageSelector}
	>
		<div class="11/12 flex justify-end">
			<LanguageIcon />
		</div>
		<div class="justify-end items-center gap-2.5 flex 1/12">
			<div
				class="text-right text-[#8b9caf] text-sm font-medium leading-tight tracking-tight w-full"
			>
				{getLocaleDisplayName($locale ?? '')}
			</div>
		</div>
	</button>

	{#if $showLanaguageSelector}
		<div
			transition:fade={{ duration: 200 }}
			class="w-[164px] max-h-[280px] bg-[#f4f4f4] rounded-lg shadow flex-col justify-start items-start flex absolute mt-2"
		>
			<LanguageSelectorItem lang="en" />
			<LanguageSelectorItem lang="fr" />
			<LanguageSelectorItem lang="ru" />
			<LanguageSelectorItem lang="vi" />
			<LanguageSelectorItem lang="ar" />
		</div>
	{/if}
</div>
