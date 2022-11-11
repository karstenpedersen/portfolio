<script lang="ts">
	import { projects } from '$lib/project.data';
	import ProjectCard from '../cards/ProjectCard.svelte';
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
		{#each projects as project, i}
			<ProjectCard {project} />
		{/each}
	</div>
</Section>

<style>
</style>
