<script lang="ts">
	import TdriveProduct from '$components/products/TdriveProduct.svelte';
	import TmailProduct from '$components/products/TmailProduct.svelte';
	import TwakeProduct from '$components/products/TwakeProduct.svelte';
	import MobileSuccessInfo from '$components/user/MobileSuccessInfo.svelte';
	import SuccessInfo from '$components/user/SuccessInfo.svelte';

	export let firstName: string;
	export let lastName: string;
	export let username: string;
	export let phone: string | null;
	export let email: string | undefined;
</script>

<div
	class="lg:space-y-5 py-10 lg:py-4 xl:py-5 bg-[#FFFBFE] md:shadow-xl lg:rounded-3xl flex flex-col space-y-5 w-full lg:w-4/5 xl:w-1/2 px-5 xl:px-10 h-full"
>
	<div
		class="flex flex-col space-y-4 w-full items-center justify-center text-sm font-medium leading-5 tracking-wide text-center"
	>
		<div class="lg:hidden w-full">
			<MobileSuccessInfo {firstName} {lastName} {username} {phone} {email} />
		</div>
		<div class="hidden lg:block w-full">
			<SuccessInfo {firstName} {lastName} />
		</div>

		<div class="flex flex-col space-y-4 w-full">
			<TwakeProduct />
			<TdriveProduct />
			<TmailProduct />
		</div>
	</div>
</div>
