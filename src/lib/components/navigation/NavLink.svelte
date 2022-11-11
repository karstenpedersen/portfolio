<script lang="ts">
	export let path: string;
	export let text: string;

	export let toggleMobileNav = () => {};
</script>

<li>
	<a href={path} on:click={toggleMobileNav}>{text}</a>
</li>

<style>
</style>
