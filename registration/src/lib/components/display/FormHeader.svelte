<script lang="ts">
	import NavigateBack from '$components/buttons/NavigateBack.svelte';
	import AppLogo from '$components/logo/AppLogo.svelte';
	import { activeTab, registrationStep, rewindRegistrationStep } from '$store';

	export let show: boolean = true;

	$: showNavigation =
		$registrationStep !== 'home' && $registrationStep !== 'confirmed' && $activeTab !== 'login';
</script>

<div class="flex flex-row">
	<NavigateBack handler={rewindRegistrationStep} show={showNavigation} />
	{#if show}
		<div class="flex p-0 flex-col justify-center items-center self-stretch w-full">
			<div class="flex w-full p-[12px] pt-[30px] flex-col items-center gap-[10px]">
				<AppLogo />
			</div>
		</div>
	{/if}
</div>
