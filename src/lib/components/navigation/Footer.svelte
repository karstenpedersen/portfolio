<script lang="ts">
	import { githubUrl, linkedInUrl, mailtoUrl, twitterUrl } from '$lib/contact.data';
	import IconLink from '../icons/IconLink.svelte';
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
		<h1 class="2xl:9xl text-6xl sm:text-8xl transition-all leading-none uppercase font-semibold">
			Karsten<br />Pedersen
		</h1>

		<div class="grid max-w-max gap-4 sm:grid-cols-2 sm:gap-y-4 sm:gap-x-6 sm:text-lg">
			<IconLink href={githubUrl} text="karstenpedersen" startIcon="github" openInNewTab />
			<IconLink href={twitterUrl} text="@KarstenFinderup" startIcon="twitter" openInNewTab />
			<IconLink href={linkedInUrl} text="Karsten Pedersen" startIcon="linkedin" openInNewTab />
			<IconLink href={mailtoUrl} text="karstenfp.all@gmail.com" startIcon="mail" />
		</div>
	</div>
</Section>

<style>
	.content {
		@apply min-h-screen mix-blend-difference gap-6 overflow-hidden grid content-center h-full;
	}
</style>
