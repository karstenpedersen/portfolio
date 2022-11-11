<script lang="ts">
	import Logo from '../brand/Logo.svelte';
	import Socials from '../brand/Socials.svelte';
	import Icon from '../icons/Icon.svelte';
	import { fiMenu } from '../icons/icons';
	import Navigation from './Navigation.svelte';

	let lastScrollY = 0;
	let scrollY = 0;
	let innerWidth = 0;
	let showMobileNav = false;
	let body: HTMLBodyElement | undefined;

	$: smallScreen = innerWidth <= 1280;
	$: hide = checkVisibility(scrollY) && smallScreen;
	$: background = scrollY > 10 && smallScreen;
	$: {
		if (body) {
			body.style.setProperty('--scroll-padding', smallScreen ? 'var(--header-height)' : '0');
		}
	}

	const checkVisibility = (newScrollY: number) => {
		let shouldHide = newScrollY > lastScrollY && newScrollY > 90;
		lastScrollY = newScrollY;

		return shouldHide;
	};

	const toggleMobileNav = () => {
		showMobileNav = !showMobileNav;
	};
</script>

<!-- Bind values -->
<svelte:body bind:this={body} />
<svelte:window bind:scrollY bind:innerWidth />

<header class:hide class:background>
	<Logo />
	<div class="hidden items-center gap-4 md:flex">
		<Navigation
			class="flex gap-10 text-right text-lg font-semibold  xl:absolute xl:top-8 xl:right-10 xl:flex-col xl:gap-4"
			{toggleMobileNav}
		/>
		<span class="inline-block h-4 w-[2px] rounded-full bg-gray xl:hidden" />
		<Socials class="flex gap-4 text-xl xl:hidden" />
	</div>

	<button on:click={toggleMobileNav} class="flex flex-col items-end gap-3 md:hidden text-3xl">
		<Icon icon={fiMenu} />
	</button>
</header>

<style>
	header {
		@apply items-center xl:mix-blend-difference transition-all z-50 px-[2.5vw] right-0 h-[var(--header-height)] flex justify-between fixed top-0 left-0;
	}

	.hide {
		@apply -translate-y-full;
	}

	.background {
		@apply bg-dark;
	}
</style>
