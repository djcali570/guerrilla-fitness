<script lang="ts">
	import { PUBLIC_PROJECT_ID, PUBLIC_WEB_IMAGE_ENDPOINT } from '$env/static/public';
	import CallToActionButton from '$lib/components/CallToActionButton.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import GetStarted from '$lib/components/GetStarted.svelte';
	import GymComponent from '$lib/components/GymComponent.svelte';
	import Map from '$lib/components/Map.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Offerings from '$lib/components/Offerings.svelte';
	import VideoPlayer from '$lib/components/VideoPlayer.svelte';
	import { slideIn } from '$lib/gsapFunc';
	import { gyms } from '$lib/state/appState.svelte';
	import SectionTitle from './_components/SectionTitle.svelte';
	import TestimonialTilteDesktop from './_components/TestimonialTilteDesktop.svelte';
	import TestimonialTitleMobile from './_components/TestimonialTitleMobile.svelte';

	let logo = `${PUBLIC_WEB_IMAGE_ENDPOINT}/6709df20c5ef3b5c29c0/view?project=${PUBLIC_PROJECT_ID}`;
</script>

<svelte:head>
	<title>Guerrilla Fitness - Home Page</title>
	<meta name="description" content="Best hour of your day." />
	<meta property="og:title" content="Guerrilla Fitness - Home Page" />
	<meta property="og:description" content="Best hour of your day." />
	<meta property="og:image" content={logo} />
	<meta name="twitter:card" content={logo} />
</svelte:head>

<Nav />

<main class="nav__margin">
	<section class="video__section">
		<div class="main__video">
			<VideoPlayer
				videoSource="{PUBLIC_WEB_IMAGE_ENDPOINT}/main_video/view?project={PUBLIC_PROJECT_ID}"
				showControls={false}
			/>
			<div class="video__overlay"></div>
			<div class="overlay__content">
				<h1
					class="h_sf_b_l_u text-[5rem] md:text-[8rem] leading-[5rem] md:leading-[8rem] text-center"
				>
					we make people strong
				</h1>
				<p class="md:hidden p_pf_b_l_u text-[1rem] md:text-[1.5rem] text-center px-4">
					From your first class to your best lift, our mission is simple. <br /> Build strength that
					lasts a lifetime
				</p>
				<p class="hidden md:block p_pf_b_l_u text-[1rem] md:text-[1.5rem] text-center">
					From your first class to your best lift, our mission is simple.<br />Build strength that
					lasts a lifetime
				</p>

				<div class="pt-8"><CallToActionButton title="Join Now" link="/memberships" /></div>
			</div>
		</div>
	</section>
	<section
		class="py-24 px-4 md:px-8 lg:px-32"
		{@attach (node) => slideIn(node, 0, 10)}
		title="Guarantee"
	>
		<div class="grid grid-rows-[min-content_1fr] md:grid-cols-2">
			<h1 class="h3_sf_b_l_u text-5xl t05 w-full">
				The Guerrilla <br /> Promise
			</h1>

			<div class="pt-6 md:pt-0 p__font__r">
				<div class="grid grid-cols-1 gap-6 text-white h-full">
					<p class="p_pf_r_l text-xl">
						Our promise is to inspire, educate, guide, and support you, to a life lived stronger and
						longer.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="pb-16 px-4 md:px-8 lg:px-32" title="Testimonials">
		<div class="grid md:grid-cols-[40%_60%]">
			<div class="pr-4 w-full h-full flex items-center">
				<SectionTitle title="Just Show Up!" mobile={true} />
			</div>
			<div class="min-h-full">
				<div class="flex flex-col md:flex-none md:grid md:grid-cols-2 gap-6 text-white md:h-full">
					<div class="relative w-full h-[622px]">
						<VideoPlayer
							videoSource="{PUBLIC_WEB_IMAGE_ENDPOINT}/joanne/view?project={PUBLIC_PROJECT_ID}"
							vttSource="/vtt/joanne.vtt"
						/>
						<TestimonialTitleMobile name="Joanne" title="Member Since 2019" />
					</div>
					<div class="block md:hidden">
						<div class="flex items-center justify-start">
							<h3 class="h3_sf_b_l_u t05 text-5xl">Just Show Up!</h3>
						</div>
					</div>
					<div class="relative w-full h-[622px]">
						<VideoPlayer
							videoSource="{PUBLIC_WEB_IMAGE_ENDPOINT}/andrew/view?project={PUBLIC_PROJECT_ID}"
							vttSource="/vtt/andrew.vtt"
							autoPlay={false}
						/>
						<TestimonialTitleMobile name="Andrew" title="Member Since 2016" />
					</div>
					<TestimonialTilteDesktop name="Joanne" title="Member Since 2024" />
					<TestimonialTilteDesktop name="Andrew" title="Member Since 2016" />
				</div>
			</div>
		</div>
	</section>
	<section class="pb-12 px-4 md:px-8 lg:px-32" title="Carousel">
		<Carousel />
	</section>
	<section class="px-4 md:px-32 pb-12">
		<GetStarted />
	</section>
	<section class="px-4 md:px-8 lg:px-32 py-16" title="Offerings">
		<Offerings />
	</section>
	<section class="px-4 md:px-8 lg:px-32 pb-16" title="locations">
		<h4 class="s__font__r text__med text-g-white-500 uppercase mb-4">our locations</h4>
		{#each gyms as gym, i}
			<div class={i === gyms.length - 1 ? 'mb-0' : 'mb-24'}>
				<GymComponent {gym} showExtra={false}>
					{#snippet extraContent()}
						<div class="pt-8">
							<CallToActionButton title="View Gym" link={gym.link} />
						</div>
					{/snippet}
				</GymComponent>
			</div>
		{/each}
	</section>
	<section class="px-4 md:px-8 lg:px-32 pb-12">
		<GetStarted />
	</section>
	<section>
		<Map lat={-34.397} lng={150.644} />
	</section>
	<Footer />
</main>

<style lang="postcss">
	main {
		position: relative;
		background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
		z-index: 1;
	}
	.video__section {
		position: relative;
		z-index: 2;
	}
	.main__video {
		position: relative;
		width: 100vw;
		height: 82vh;
	}
	.video__overlay {
		position: absolute;
		inset: 0px;
		background-color: black;
		opacity: 0.4;
		z-index: 2; /* Below the title but above the video */
	}
	.overlay__content {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		transform: translate(-50%, -50%);
		z-index: 3;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 1.5em;
	}
</style>
