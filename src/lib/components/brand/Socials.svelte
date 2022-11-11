<script lang="ts">
	import IconLink from '../icons/IconLink.svelte';
	import { fiGithub, fiLinkedin } from '../icons/icons';

	let clazz = '';
	export { clazz as class };
</script>

<ul class={clazz}>
	<IconLink href="/" startIcon={fiGithub} />
	<IconLink href="/" startIcon={fiLinkedin} />
</ul>

<style>
</style>
