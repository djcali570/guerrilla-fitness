<script lang="ts">
	import { PUBLIC_PROJECT_ID, PUBLIC_WEB_IMAGE_ENDPOINT } from '$env/static/public';
	import CallToActionButton from '$lib/components/CallToActionButton.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import GymComponent from '$lib/components/GymComponent.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Offerings from '$lib/components/Offerings.svelte';
	import VideoPlayer from '$lib/components/VideoPlayer.svelte';
	import { fade, slideIn } from '$lib/gsapFunc';
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
			/>
		</div>
		<div class="video__overlay"></div>
		<h1 class="video__title" {@attach slideIn}>Best hour of your day</h1>
	</section>
	<section class="py-24 px-4 md:px-32" {@attach (node) => slideIn(node, 0, 10)} title="Guarantee">
		<div class="grid grid-rows-[min-content_1fr] md:grid-cols-2">
			<h1 class="h3_sf_b_l_u text-5xl t05 w-full">
				The Guerrilla, <br /> Promise
			</h1>

			<div class="pt-6 md:pt-0 p__font__r">
				<div class="grid grid-cols-1 gap-6 text-white h-full">
					<p>
						Our promise is to inspire, educate, guide, and support you, to a life lived stronger and
						longer.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="pb-16 px-4 md:px-32" title="Testimonials">
		<div class="grid md:grid-cols-[40%_60%]">
			<div class="pr-4 w-full h-full flex items-center">
				<SectionTitle title="Is Guerrilla Fitness Right For You?" mobile={true} />
			</div>
			<div class="min-h-full">
				<div class="flex flex-col md:flex-none md:grid md:grid-cols-2 gap-6 text-white md:h-full">
					<div class="relative w-full h-[622px]">
						<VideoPlayer
							videoSource="{PUBLIC_WEB_IMAGE_ENDPOINT}/joanne/view?project={PUBLIC_PROJECT_ID}"
							vttSource="/vtt/joanne.vtt"
						/>
						<TestimonialTitleMobile name="Joanne" title="Member Since 2024" />
					</div>
					<div class="block md:hidden">
						<div class="flex items-center justify-start">
							<h3 class="h3_sf_b_l_u t05 text-5xl">Is Guerrilla Fitness Right For You?</h3>
						</div>
					</div>
					<div class="block md:hidden">
						<div class="flex flex-col gap-8 p_pf_r_l">
							<div>
								<p>
									1. Have you tried other fitness programs, but are looking for something new, fun,
									and challenging?
								</p>
							</div>
							<div>
								<p>
									3. Are you looking for accountability to help you stay on track toward your goals?
								</p>
							</div>
							<div>
								<p>
									2. Are you looking for support from a world-class coach to help you get in shape?
								</p>
							</div>
							<div class="block md:hidden">
								<div class="flex items-center justify-start">
									<h3 class="h3_sf_b_l_u t05 text-4xl" {@attach slideIn}>
										If you answered yes, Guerrilla Fitness is for you!
									</h3>
								</div>
							</div>
							<div>
								<CallToActionButton title="Join Now" />
							</div>
						</div>
					</div>
					<div class="relative w-full h-[622px]">
						<VideoPlayer
							videoSource="{PUBLIC_WEB_IMAGE_ENDPOINT}/cameron/view?project={PUBLIC_PROJECT_ID}"
							vttSource="/vtt/test_cameron.vtt"
							autoPlay={false}
						/>
						<TestimonialTitleMobile name="Cameron" title="Member Since 2016" />
					</div>
					<TestimonialTilteDesktop name="Joanne" title="Member Since 2024" />
					<TestimonialTilteDesktop name="Cameron" title="Member Since 2016" />
				</div>
			</div>
		</div>
	</section>
	<section class="hidden md:block px-32 pb-16" title="Answers">
		<div class="grid grid-cols-2">
			<div class="min-h-full">
				<div class="grid grid-rows-2 grid-cols-2 h-full">
					<div class="col-span-2 row-span-2 flex items-center justify-start s__font__b">
						<h2 class="h3_sf_b_l_u text-4xl w-full lg:max-w-md tracking-[0.08em]" {@attach slideIn}>
							if you answered yes, Guerrilla Fitness is for you!
						</h2>
					</div>
				</div>
			</div>

			<div class="min-h-full pl-6 p__font__r">
				<div class="grid grid-rows-2 grid-cols-2 gap-6 text-white h-full">
					<div>
						<p>
							1. Have you tried other fitness programs, but are looking for something new, fun, and
							challenging?
						</p>
					</div>
					<div>
						<p>
							3. Are you looking for accountability to help you stay on track toward your goals?
						</p>
					</div>
					<div>
						<p>2. Are you looking for support from a world-class coach to help you get in shape?</p>
					</div>
					<div {@attach slideIn}>
						<CallToActionButton />
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="pb-12 px-4 md:px-32" title="Carousel">
		<Carousel />
	</section>
	<section class="px-4 md:px-32 pb-12" title="Join">
		<div class="w-full flex flex-col">
			<div class="w-full flex justify-center text-g-white-500">
				<h4
					class="font-rama-slab uppercase text-[1.2rem]"
					style="letter-spacing: 1pt;"
					{@attach (node) => slideIn(node, 0)}
				>
					CrossFit. Nutrition. Accountability. Results.
				</h4>
			</div>
			<div class="w-full flex justify-center text-g-white-500">
				<h1
					class="h3_sf_b_l_u text-[3.2rem] md:text-[6.5rem]"
					style="letter-spacing: 1pt;"
					{@attach (node) => slideIn(node, 0.2)}
				>
					Get Started
				</h1>
			</div>
			<div class="w-full flex justify-center" {@attach (node) => slideIn(node, 0.4)}>
				<CallToActionButton title="3 Class Trial" />
			</div>
		</div>
	</section>
	<section class="px-4 md:px-32 py-16" title="Offerings">
		<Offerings />
	</section>
	<section class="px-4 md:px-32 pb-16" title="locations">
		<h4 class="s__font__r text__med text-g-white-500 uppercase mb-4">our locations</h4>
		{#each gyms as gym, i}
			<div class={i === gyms.length - 1 ? 'mb-0' : 'mb-24'}>
				<GymComponent {gym}>
					{#snippet extraContent()}
						<div class="pt-8">
							<CallToActionButton title="View Gym" link={gym.link} />
						</div>
					{/snippet}
				</GymComponent>
			</div>
		{/each}
	</section>
	<section class="px-4 md:px-32 pb-12" title="Join">
		<div class="w-full flex flex-col">
			<div class="w-full flex justify-center text-g-white-500">
				<h4 class="font-rama-slab uppercase text-[1.2rem]" style="letter-spacing: 1pt;">
					CrossFit. Nutrition. Accountability. Results.
				</h4>
			</div>
			<div class="w-full flex justify-center text-g-white-500">
				<h1 class="h3_sf_b_l_u text-[3.2rem] md:text-[6.5rem]" style="letter-spacing: 1pt;">
					Get Started
				</h1>
			</div>
			<div class="w-full flex justify-center">
				<CallToActionButton title="3 Class Trial" />
			</div>
		</div>
	</section>
	<Footer />
</main>

<style lang="postcss">
	main {
		position: relative;
		background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
		z-index: 1;
	}
	.main__video {
		position: relative;
		width: 100vw;
		height: 82vh;
	}

	.video__section {
		position: relative;
		z-index: 2;
	}
	.video__title {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		transform: translate(-50%, -50%);
		padding-left: 1rem;
		padding-right: 1rem;
		color: #feffef;
		text-transform: uppercase;
		font-family: rama-slab-bold;
		font-size: 5em;
		text-align: center;
		z-index: 3;
		line-height: 1.2;

		@media (min-width: 1024px) {
			font-size: 8em;
		}
	}
	.video__overlay {
		position: absolute;
		inset: 0px;
		background-color: black;
		opacity: 0.4;
		z-index: 2; /* Below the title but above the video */
	}
</style>
