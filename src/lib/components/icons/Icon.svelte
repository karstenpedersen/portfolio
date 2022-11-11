<script lang="ts">
	import type { IconDefinition } from './icons';

	export let icon: IconDefinition;

	export let fill = 'none';
	export let stroke = 'currentColor';

	let clazz = '';
	export { clazz as class };
</script>

<svg
	class={clazz}
	width="24"
	height="24"
	viewBox="0 0 24 24"
	stroke-width="2"
	{fill}
	{stroke}
	xmlns="http://www.w3.org/2000/svg"
>
	{#each icon.tags as tag}
		<svelte:element this={tag.tag} {...tag.props} />
	{/each}
</svg>

<style>
	svg {
		position: relative;
		display: inline-block;
	}
</style>
