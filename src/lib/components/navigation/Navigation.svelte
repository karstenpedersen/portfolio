<script lang="ts">
	import NavLink from './NavLink.svelte';

	export let toggleMobileNav = () => {};
	let clazz = '';
	export { clazz as class };
</script>

<nav>
	<ul class={clazz}>
		<NavLink text="About" path="#me" {toggleMobileNav} />
		<NavLink text="Work" path="#work" {toggleMobileNav} />
		<NavLink text="Contact" path="#contact" {toggleMobileNav} />
	</ul>
</nav>

<style>
</style>
