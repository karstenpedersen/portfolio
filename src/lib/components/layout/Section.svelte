<script lang="ts">
	export let id: string;
	export let light = false;
	export let wrapper = true;
	export let snap = true;
	export let padding = true;
	export let type = 'section';

	let clazz = '';
	export { clazz as class };
</script>

<svelte:element this={type} {id} class={clazz} class:light class:snap>
	{#if $$slots.background}
		<div class="absolute top-0 bottom-0 left-0 right-0">
			<slot name="background" />
		</div>
	{/if}
	<div class="content" class:wrapper class:padding>
		<slot />
	</div>
</svelte:element>

<style>
	section,
	footer {
		@apply relative w-full bg-dark text-light;
	}

	.content {
		@apply relative min-h-screen;
	}

	.light {
		@apply bg-light text-dark;
	}

	.snap {
		@apply snap-start;
	}

	.padding {
		@apply py-[100px];
	}
</style>
