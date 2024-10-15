<script lang="ts">
	import Logo from '$components/logo/Logo.svelte';
	import { t, locale } from 'svelte-i18n';

	$: direction = $locale === 'ar' ? 'rtl' : 'auto';
</script>

<div class="flex flex-col space-y-8 pt-20 w-full max-w-xl">
	<Logo />
	<div class="flex flex-col space-y-5 w-full">
		<h1
			dir={direction}
			class="text-4xl text-black font-semibold leading-[52px] tracking-normal text-left rtl:text-right"
		>
			{$t('logged_hero')}
		</h1>
	</div>
</div>
