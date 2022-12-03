<script lang="ts">
	import IconLink from '../icons/IconLink.svelte';

	let clazz = '';
	export { clazz as class };
</script>

<ul class={clazz}>
	<IconLink href="/" startIcon="github" />
	<IconLink href="/" startIcon="linkedin" />
</ul>

<style>
</style>
