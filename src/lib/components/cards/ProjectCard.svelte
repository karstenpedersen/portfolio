<script lang="ts">
	import type { Project } from '$lib/types';

	export let project: Project;

	$: url = `/work/${project.id}`;
</script>

<article class="space-y-3 overflow-hidden w-full">
	<a href={url} class="relative block h-[400px] w-full overflow-hidden rounded">
		<img
			src={project.thumbnail}
			alt={`${project.title} thumbnail`}
			class="object-cover h-full w-full"
		/>
	</a>
	<div class="space-y-1">
		<h3 class="text-lg normal-case">
			<a href={url} class="hover:underline">{project.title}</a>
		</h3>
		<ul class="space-x-2 text-gray flex items-center">
			{#each project.tags as tag, i}
				<li>
					{tag}
				</li>
				{#if i < project.tags.length - 1}
					<span class="inline-block w-[3px] aspect-square bg-gray rounded-full" />
				{/if}
			{/each}
		</ul>
	</div>
</article>

<style>
</style>
