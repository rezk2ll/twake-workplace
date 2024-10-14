<script lang="ts">
	import { t } from 'svelte-i18n';

	export let firstName: string;
	export let lastName: string;
</script>

<div
	class="flex flex-col space-y-4 w-full items-center justify-center text-sm font-medium leading-5 tracking-wide text-center"
>

	<div class="w-full text-center text-disabled-text text-[22px] font-semibold leading-7">
		Congratulations, <br />{`${firstName} ${lastName}`}!
	</div>

	<div class="w-full text-center text-[#98a0a8] text-base font-normal leading-normal">
		{$t('logged_twakeid_choose')}
	</div>
</div>
