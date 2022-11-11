<script lang="ts">
	import type { IconDefinition } from './icons';
	import IconText from './IconText.svelte';

	export let text: string = '';
	export let startIcon: IconDefinition | null = null;
	export let endIcon: IconDefinition | null = null;
	export let href = '';
	let clazz = '';
	export { clazz as class };
</script>

<svelte:element
	this={href != '' ? 'a' : 'p'}
	{href}
	class="flex items-center gap-2 {clazz}"
	on:click
	on:keydown={() => {}}
>
	<IconText {text} {startIcon} {endIcon} class={clazz} />
</svelte:element>

<style>
</style>
