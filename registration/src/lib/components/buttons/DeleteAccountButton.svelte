<script lang="ts">
	import { t } from 'svelte-i18n';
	import { sendAccountDeletionMail } from '$utils/account';
	import DeleteAccountIcon from '$components/icons/DeleteAccountIcon.svelte';

	export let username: string;
</script>

<button
	type="button"
	on:click={() => sendAccountDeletionMail(username)}
	class="w-full flex items-center text-disabled-text gap-5 justify-start px-0 lg:px-2 lg:py-2 text-sm transition-colors duration-200 transform hover:bg-red-300"
>
	<div class="w-full md:w-auto">
		<DeleteAccountIcon />
	</div>

	<div class="mx-1 grow text-left">
		<div class="w-[296px] h-5 text-[#76787a] text-sm font-normal leading-tight tracking-tight">
			{$t('delete-account')}
		</div>
	</div>
</button>
