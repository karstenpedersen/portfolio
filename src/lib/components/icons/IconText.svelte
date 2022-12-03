<script lang="ts">
	import Icon from './Icon.svelte';

	export let text: string;
	export let startIcon: string = '';
	export let endIcon: string = '';
	let clazz = '';
	export { clazz as class };
</script>

<div class={clazz}>
	{#if startIcon}
		<Icon name={startIcon} />
	{/if}

	{text}

	{#if endIcon}
		<Icon name={endIcon} />
	{/if}
</div>

<style>
	div {
		@apply flex items-center gap-2;
	}
</style>
