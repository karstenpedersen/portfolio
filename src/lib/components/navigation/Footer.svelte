<script lang="ts">
	import IconLink from '../icons/IconLink.svelte';
	import { fiFile, fiGithub, fiLinkedin, fiMail } from '../icons/icons';
	import Section from '../layout/Section.svelte';
</script>

<Section id="contact" type="footer" padding={false}>
	<!-- Background image -->
	<slot slot="background">
		<img
			src="/images/shore.gif"
			alt="Background of shore"
			class="object-cover brightness-[0.1] w-full h-screen"
		/>
	</slot>

	<!-- Content -->
	<div class="content">
		<h1
			class="2xl:9xl text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none uppercase font-semibold"
		>
			Karsten<br />Pedersen
		</h1>

		<div class="grid text-xl max-w-max gap-3 grid-cols-2 sm:gap-y-4 sm:gap-x-6">
			<IconLink href="/" text="Github" startIcon={fiGithub} />
			<IconLink href="/" text="LinkedIn" startIcon={fiLinkedin} />
			<IconLink href="/" text="Email" startIcon={fiMail} />
			<IconLink href="/" text="Resume" startIcon={fiFile} />
		</div>
	</div>
</Section>

<style>
	.content {
		@apply min-h-screen mix-blend-difference gap-3 overflow-hidden grid content-center h-full;
	}
</style>
