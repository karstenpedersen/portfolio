<script lang="ts">
	import IconLink from '../icons/IconLink.svelte';
	import { fiGithub, fiGlobe } from '../icons/icons';
	import Section from '../layout/Section.svelte';
</script>

<Section id="work" wrapper={false}>
	<div class="grid sm:grid-cols-2 gap-6 mb-12 wrapper">
		<h1>My Work</h1>
		<p class="text-gray text-lg">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, natus?
		</p>
	</div>

	<!-- TODO - MAKE SLIDER ON MOBILE -->
	<div class="flex sm:grid sm:grid-cols-2 gap-6 sm:wrapper overflow-x-auto snap-mandatory snap-x">
		{#each new Array(6) as _, i}
			<div class="snap-center relative object-cover flex-none">
				<img src="/images/blue-water.jpg" alt="Black water" class="object-cover" />
				<div class="">
					<a href="/" class="text-xl font-semibold uppercase">Title</a>
					<ul class="flex gap-4">
						<li><IconLink startIcon={fiGlobe} /></li>
						<li><IconLink startIcon={fiGithub} /></li>
					</ul>
				</div>
			</div>
		{/each}
	</div>
</Section>

<style>
</style>
