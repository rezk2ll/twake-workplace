<script lang="ts">
	export let input: null | HTMLInputElement = null;
	export let index: number;
	export let value: string;
	export let codes: string[];
	export let inputs: (null | HTMLInputElement)[];
	export let nostyle: boolean;
	export let className: string;
	export let style: string;
	export let placeholder: string;

	function shiftFocus(forward: boolean = true) {
		if (forward) {
			if (index < inputs.length - 1) {
				(inputs[index + 1] as HTMLInputElement).focus();
			}
		} else {
			if (index > 0) {
				(inputs[index - 1] as HTMLInputElement).focus();
			}
		}
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.ctrlKey && event.key === 'z') {
			event.preventDefault();
		}

		if (event.key === 'ArrowRight' && index < inputs.length - 1) {
			(inputs[index + 1] as HTMLInputElement).focus();
		} else if (event.key === 'ArrowLeft' && index > 0) {
			(inputs[index - 1] as HTMLInputElement).focus();
		} else if (event.key === 'Backspace' && value === '') {
			shiftFocus(false);
		}
	}

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		const inputValue = target.value.replace(/[^0-9]/g, '');

		if (target.value !== inputValue) {
			target.value = inputValue;
		}

		if (inputValue.length > 0) {
			codes = codes.map((code, i) => {
				if (i < index) {
					return code === '' ? ' ' : code;
				} else if (i === index) {
					return inputValue[0];
				}
				return code;
			});

			if (inputValue.length >= 1) {
				shiftFocus();
			}
		}

		if (!inputValue) {
			const length = codes.length;
			const filteredCodes = codes.filter((_, i) => i !== index);
			codes = [...filteredCodes, ...Array(length - filteredCodes.length).fill('')];
		}

		if (index === inputs.length - 1 && inputValue.length > 1) {
			target.value = inputValue[0];
		}
	}

	function handlePaste(event: ClipboardEvent) {
		event.preventDefault();
		const paste = event.clipboardData?.getData('text');
		if (!paste) return;

		const numericPasteValue = paste.replace(/[^0-9]/g, '').slice(0, codes.length - index);
		const updatedCodes = [...codes];
		for (let i = 0; i < numericPasteValue.length; i++) {
			if (index + i < updatedCodes.length) {
				updatedCodes[index + i] = numericPasteValue[i];
			}
		}

		codes = updatedCodes.slice(0, codes.length);

		const newFocusIndex = index + numericPasteValue.length - 1;
		if (newFocusIndex < inputs.length) {
			(inputs[newFocusIndex] as HTMLInputElement).focus();
		}
	}

	function validateNumericInput(event: KeyboardEvent) {
		if (
			!/^[0-9]$/.test(event.key) &&
			!event.ctrlKey &&
			!['Backspace', 'ArrowLeft', 'ArrowRight'].includes(event.key)
		) {
			event.preventDefault();
		}
	}
</script>

<input
	class={`${nostyle ? '' : 'default-input'} ${className}`}
	bind:this={input}
	on:keydown={handleKeyDown}
	on:input={handleInput}
	on:paste={handlePaste}
	on:keypress={validateNumericInput}
	inputmode="numeric"
	pattern="[0-9]*"
	{style}
	{value}
	{placeholder}
/>

<style>
	.default-input {
		width: 30px;
		height: 40px;
		text-align: center;
		border: 1px solid black;
		margin: 0;
	}
</style>
