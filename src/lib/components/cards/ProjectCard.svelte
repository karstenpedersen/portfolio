<script lang="ts">
	import type { Project } from '$lib/types';
	import IconLink from '../icons/IconLink.svelte';

	export let project: Project;

	$: url = `/work/${project.id}`;
</script>

<article class="space-y-3 overflow-hidden">
	<a href={url} class="relative block h-[400px] w-full">
		<img src={project.thumbnail} alt={`${project.title} thumbnail`} class="rounded" />
	</a>
	<div class="space-y-1">
		<h3 class="text-lg normal-case">
			<a href={url} class="hover:underline">{project.title}</a>
		</h3>

		<ul class="space-x-2 text-light-gray flex items-center">
			{#each project.links as link}
				<li><IconLink href={link.url} startIcon={link.icon} openInNewTab /></li>
			{/each}
		</ul>
	</div>
</article>

<style>
</style>
