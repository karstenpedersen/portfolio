<script lang="ts">
	import IconLink from '$lib/components/icons/IconLink.svelte';
</script>

<header class="wrapper">
	<h1
		class="2xl:9xl text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none uppercase font-semibold"
	>
		Karsten<br />Pedersen
	</h1>

	<div class="grid text-xl max-w-max gap-3 grid-cols-2 sm:gap-y-4 sm:gap-x-6">
		<IconLink href="/" text="Github" startIcon="github" />
		<IconLink href="/" text="LinkedIn" startIcon="linkedin" />
		<IconLink href="/" text="Email" startIcon="mail" />
		<IconLink href="/" text="Resume" startIcon="download" />
	</div>
</header>

<style>
	header {
		@apply min-h-screen mix-blend-difference gap-3 overflow-hidden grid content-center h-full;
	}
</style>
