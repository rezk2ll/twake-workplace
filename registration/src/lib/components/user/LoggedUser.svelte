<script lang="ts">
	import Logout from '$components/icons/LogoutIcon.svelte';
	import Avatar from '$components/icons/AvatarIcon.svelte';
	import { t } from 'svelte-i18n';
	import { clickOutside } from '$utils/html';
	import DeleteAccountButton from '../buttons/DeleteAccountButton.svelte';

	export let username: string;
	export let firstName: string;
	export let lastName: string;

	let open = false;

	const toggle = () => {
		open = !open;
	};
</script>

<div
	class="flex flex-col gap-2 w-full"
	use:clickOutside={() => {
		open = false;
	}}
>
	<button
		aria-label="user menu"
		type="button"
		class="flex flex-row space-x-2 items-center justify-center"
		on:click={toggle}
	>
		<Avatar />
		<div class="flex flex-col gap-0">
			<h1 class=" text-[15px] font-semibold leading-5 tracking-normal text-left text-black">
				{`${firstName} ${lastName}`}
			</h1>
			<span class="text-[13px] font-normal leading-4 tracking-normal text-left text-gray-500"
				>@{username}</span
			>
		</div>
	</button>
	<div
		data-sveltekit-preload-data="off"
		class="flex flex-col gap-1 z-20 mt-1 overflow-hidden bg-white rounded-md shadow-xl {open
			? 'block'
			: 'hidden'}"
	>
		<a
			href="/logout"
			class="flex items-center gap-5 justify-start p-2.5 text-sm transition-colors duration-200 transform hover:bg-gray-100"
		>
			<Logout />

			<div class="mx-1 grow text-left">
				<h1 class="text-sm font-semibold">{$t('Logout')}</h1>
			</div>
		</a>
		<DeleteAccountButton {username} />
	</div>
</div>
