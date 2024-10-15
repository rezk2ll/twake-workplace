<script lang="ts">
	import { redirectUrl as redirectUrlStore } from '$store';
	import type { PageData } from './$types';
	import SuccessCard from '$components/landing/SuccessCard.svelte';
	import LoggedUser from '$components/user/LoggedUser.svelte';
	import LoggedHero from '$components/landing/LoggedHero.svelte';
	import MobileLogout from '$src/lib/components/user/MobileLogout.svelte';

	export let data: PageData;

	$: ({ phone = '', email, firstName = '', lastName = '', username = '' } = data);
	$: redirectUrlStore.set(data.redirectUrl);
</script>

<div class="w-full h-full lg:h-fit bg-white md:bg-transparent">
	<div class="relative flex flex-col h-full lg:space-y-5">
		<div class="hidden md:block md:absolute lg:hidden top-7 right-9">
			<MobileLogout />
		</div>
		<div
			class="w-full md:h-full h-auto md:px-[120px] lg:px-8 xl:px-[155px] 3xl:px-72 4xl:px-96 md:pt-[131px] lg:py-4"
		>
			<div class="h-5 w-full hidden lg:flex justify-end py-8">
				<div class="min-w-56 w-56">
					<LoggedUser {username} {firstName} {lastName} />
				</div>
			</div>
			<div class="w-full h-full">
				<div
					class="flex flex-col-reverse lg:flex-row-reverse w-full lg:pt-9 items-center justify-center lg:justify-normal lg:items-baseline"
				>
					<SuccessCard {firstName} {lastName} {phone} {username} {email} />
					<div class="hidden lg:flex w-full items-start justify-start">
						<LoggedHero />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
