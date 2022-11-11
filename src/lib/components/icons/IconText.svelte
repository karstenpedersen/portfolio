<script lang="ts">
	import Icon from './Icon.svelte';
	import type { IconDefinition } from './icons';

	export let text: string;
	export let startIcon: IconDefinition | null = null;
	export let endIcon: IconDefinition | null = null;
	let clazz = '';
	export { clazz as class };
</script>

<div class={clazz}>
	{#if startIcon}
		<Icon icon={startIcon} />
	{/if}

	{text}

	{#if endIcon}
		<Icon icon={endIcon} />
	{/if}
</div>

<style>
	div {
		@apply flex items-center gap-2;
	}
</style>
