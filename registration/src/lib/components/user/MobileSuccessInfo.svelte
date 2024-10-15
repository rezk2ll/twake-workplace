<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { t } from 'svelte-i18n';
	import MobileLogout from './MobileLogout.svelte';
	import CopyIcon from '../icons/CopyIcon.svelte';
	import { copyToClipboard } from '$utils/clipboard';
	import Toast from '../display/Toast.svelte';
	import DeleteAccountButton from '../buttons/DeleteAccountButton.svelte';

	export let firstName: string;
	export let lastName: string;
	export let username: string;
	export let phone: string | null;
	export let email: string | undefined;

	let showToast: boolean = false;

	const handleCopy = () => {
		copyToClipboard(matrixId)
			.then(() => {
				showToast = true;

				setTimeout(() => {
					showToast = false;
				}, 2000);
			})
			.catch(console.error);
	};

	$: suffix = `@${env.PUBLIC_SIGNUP_EMAIL_DOMAIN}`;
	$: matrixId = `@${username}:${env.PUBLIC_SIGNUP_EMAIL_DOMAIN}`;
</script>

<div
	class="flex flex-col space-y-4 items-center justify-center text-sm font-medium leading-5 tracking-wide text-left w-full"
>
	<div class="bg-gray-100 rounded-2xl flex flex-col gap-4 w-full p-4 pb-5">
		<div class="flex flex-row w-full gap-4">
			<img src="/images/avatar.svg" alt="avatar" class="w-12" />
			<div class="text-disabled-text text-left text-[22px] font-semibold leading-7 grow md:grow-0">
				{$t('Congratulations')},<br />{`${firstName} ${lastName}`}!
			</div>
			<div class="md:hidden">
				<MobileLogout />
			</div>
		</div>
		<div class="flex flex-col gap-0.5">
			<div class="flex space-x-5">
				<div class=" text-disabled-text text-[17px] font-normal leading-normal w-full text-left">
					{matrixId}
				</div>
				<button type="button" on:click={handleCopy} class="cursor-pointer hover:text-gray-300">
					<CopyIcon />
				</button>
			</div>
			<div class="text-left h-5 text-[#76787a] text-sm font-normal leading-tight tracking-tight">
				{$t('twake-matrix-id')}
			</div>
		</div>
		<div class="flex flex-col gap-0.5">
			<span
				class="text-[17px] not-italic font-normal leading-6 tracking-[-0.15px] text-disabled-text text-left"
			/>
			<div class="text-[#1c1b1f] text-[17px] font-normal text-left leading-normal">
				{email ?? `${username}${suffix}`}
			</div>
			<div class="w-full h-5 text-[#76787a] text-sm font-normal leading-tight tracking-tight">
				{$t('twake-mail')}
			</div>
		</div>
		{#if phone}
			<div class="flex flex-col gap-0.5">
				<span
					class="text-[17px] not-italic font-normal leading-6 tracking-[-0.15px] text-disabled-text text-left"
					>{phone}</span
				>
				<span class="text-sm font-normal leading-5 text-left text-gray-500"
					>{$t('twake-phone-number')}</span
				>
			</div>
		{/if}
		<div
			class="text-[17px] not-italic font-normal leading-6 tracking-[-0.15px] text-disabled-text text-left"
		>
			<DeleteAccountButton {username} />
		</div>
	</div>
	<div class="w-[486px] text-center text-disabled-text text-[17px] font-medium leading-normal">
		{$t('logged_twakeid_choose')}
	</div>
</div>
<Toast show={showToast}>{$t('matrix-id-copied')}</Toast>
