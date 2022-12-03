<script lang="ts">
	import Section from '../layout/Section.svelte';
</script>

<Section id="me" wrapper={false} light>
	<div class="flex gap-8 md:gap-20 relative max-w-[70rem] mx-auto h-full">
		<img
			src="/images/blue-water.jpg"
			alt="Black water"
			class="hidden sm:block w-[100%] min-h-[50px] object-cover"
		/>
		<div class="flex flex-col mx-[2.5vw] md:mr-[2.5vw] md:ml-0">
			<h1>About Me</h1>
			<div class="space-y-10 mb-20" />
			<a href="/" class="bg-dark text-light pt-2 pb-1 px-6 w-max uppercase font-semibold"
				>See Resume</a
			>
		</div>
	</div>
</Section>

<style>
</style>
