<script lang="ts">
	import Section from '../layout/Section.svelte';
</script>

<Section id="hero">
	<!-- Background image -->
	<slot slot="background">
		<img
			src="/images/blackwater.gif"
			alt="Background"
			class="object-cover brightness-[0.4] w-full h-screen"
		/>
	</slot>

	<!-- Content -->
	<div class="mix-blend-difference">
		<div>
			<p class="text-3xl italic">Hi I&apos;m</p>
			<h1 class="text-5xl sm:text-6xl">Karsten<br />Pedersen</h1>
			<p class="lowercase text-gray">Designer & frontend developer</p>
		</div>

		<a href="/#me" class="uppercase absolute bottom-28">Scroll</a>
	</div>
</Section>

<style>
</style>
