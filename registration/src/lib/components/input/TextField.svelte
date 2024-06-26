<script lang="ts">
	import { clickOutside, stopTyping } from '$utils/html';
	import ErrorIcon from '$components/icons/ErrorIcon.svelte';
	import InfoIcon from '$components/icons/InfoIcon.svelte';
	import Spin from '$components/icons/SpinnerIcon.svelte';
	import Valid from '$components/icons/ValidIcon.svelte';
	import InfoTooltip from '$components/display/InfoTooltip.svelte';
	import { onMount } from 'svelte';

	export let label: string;
	export let placeholder: string;
	export let value: string;
	export let isInValid: boolean;
	export let name: string;
	export let feedback: boolean = true;
	export let onBlur: () => void = () => {};
	export let loading: boolean = false;
	export let onInput: () => void = () => {};
	export let suffix: string = '';
	export let info: boolean = false;
	export let infoTitle: string = '';
	export let infoDescription: string = '';
	export let onStopTyping: (() => void) | undefined = undefined;

	let inputRef: HTMLInputElement;
	let showInfo = false;
	const action = onStopTyping ? stopTyping : () => {};

	onMount(() => {
		if (onStopTyping) {
			inputRef.addEventListener('stopTyping', onStopTyping);
		}
	});

	$: notValid = value.length > 0 && isInValid;
</script>

<div class="relative w-full" use:clickOutside={() => (showInfo = false)}>
	{#if showInfo}
		<InfoTooltip title={infoTitle} description={infoDescription} bind:show={showInfo} />
	{/if}
	<input
		bind:this={inputRef}
		use:action
		autocomplete="off"
		required
		id={name}
		{name}
		bind:value
		{placeholder}
		on:blur={onBlur}
		on:input={onInput}
		type="text"
		class="h-[52px] rounded-[4px] ring-1 focus:outline-none px-4 peer w-full placeholder:text-transparent text-sm font-medium leading-5 tracking-[0.25px] text-left {notValid
			? 'ring-error focus:ring-error'
			: 'ring-inputOutline focus:ring-primary'}"
	/>
	<label
		for={name}
		class="absolute left-0 bg-white px-1 duration-100 ease-linear ml-1 -translate-y-2.5 translate-x-2 overflow-hidden text-ellipsis text-[12px] not-italic font-medium leading-4 tracking-[0.5px] {notValid
			? 'text-error peer-focus:text-error'
			: 'text-disabled-text peer-focus:text-primary'}">{label}</label
	>
	<span class="absolute inset-y-0 right-0 flex items-center px-1">
		{#if suffix.length > 0}
			<div
				class="p-1 focus:outline-none focus:shadow-outline overflow-hidden text-disabled-text text-ellipsis whitespace-nowrap text-[17px] font-medium leading-6 tracking-[-0.15000000596046448px] text-left"
			>
				{suffix}
			</div>
		{/if}
		{#if info && !feedback}
			<div
				class="p-1 focus:outline-none focus:shadow-outline overflow-hidden text-disabled-text text-ellipsis whitespace-nowraptext-[17px] font-medium leading-6 tracking-[-0.15000000596046448px] text-left"
			>
				{#if notValid}
					<ErrorIcon />
				{:else}
					<button
						aria-label="info"
						type="button"
						on:click={() => (showInfo = true)}
						class="flex items-center justify-center"
					>
						<InfoIcon />
					</button>
				{/if}
			</div>
		{/if}
		{#if loading}
			<div class="p-1 focus:outline-none focus:shadow-outline">
				<Spin />
			</div>
		{:else if feedback && value && notValid === false}
			<div class="p-1 focus:outline-none focus:shadow-outline">
				<Valid />
			</div>
		{/if}
	</span>
</div>
