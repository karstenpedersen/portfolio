<script lang="ts">
	import type { IconDefinition } from './icons';
	import IconText from './IconText.svelte';

	export let text: string = '';
	export let startIcon: IconDefinition | null = null;
	export let endIcon: IconDefinition | null = null;
	export let href = '';
	let clazz = '';
	export { clazz as class };
	export let openInNewTab = false;
</script>

<svelte:element
	this={href != '' ? 'a' : 'p'}
	{href}
	target={openInNewTab ? '_blank' : ''}
	rel={openInNewTab ? 'noopener noreferrer' : ''}
	class="flex items-center gap-2 {clazz}"
	on:click
	on:keydown={() => {}}
>
	<IconText {text} {startIcon} {endIcon} class={clazz} />
</svelte:element>

<style>
</style>
