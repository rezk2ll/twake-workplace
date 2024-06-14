<script lang="ts">
	import SvelteNumOtp from 'svelte-num-otp';
	export let value: string;
</script>

<SvelteNumOtp
	inputClass="ring-2 ring-[#C9C5CA] focus:outline-none focus:ring-primary flex p-[10px] justify-center items-center rounded-[4px] w-[32.5px] text-center text-[17px] font-medium tracking-[0px] focus:ring-primary appearance-none"
	wrapperClass="flex items-center justify-center gap-[8px] self-stretch [&>*:nth-child(even)]:mr-4 font-[Inter]"
	numOfInputs={6}
	onlyShowMiddleSeparator
	disableDefaultStyle
	bind:value
/>
