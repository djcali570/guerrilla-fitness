<script lang="ts">
	import { PUBLIC_WEB_IMAGE_ENDPOINT } from '$env/static/public';
	import CallToActionButton from '$lib/components/CallToActionButton.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import GetStarted from '$lib/components/GetStarted.svelte';
	import GymComponent from '$lib/components/GymComponent.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Offerings from '$lib/components/Offerings.svelte';
	import { fade, slideIn } from '$lib/gsapFunc';
	import { gyms } from '$lib/state/appState.svelte';
	import { acs_dark } from '$lib/types';
	import { Accordion5 } from '@djcali570/component-lib';
</script>

<svelte:head>
	<title>Guerrilla Fitness - New To Guerrilla Fitness</title>
	<meta name="description" content="New To Guerrilla Fitness" />
	<meta property="og:title" content="Guerrilla Fitness - New To Guerrilla Fitness" />
	<meta property="og:description" content="New To Guerrilla Fitness" />
	<meta property="og:image" content="https://www.guerrillafitness.net/myimage.jpg" />
	<meta name="twitter:card" content="https://www.guerrillafitness.net/myimage.jpg" />
</svelte:head>

<Nav />

<main class="nav__margin">
	<section title="Page Image">
		<div class="relative w-[100vw] h-[82vh]">
			<img
				class="w-full h-full object-cover filter object-[50%_28%]"
				src="{PUBLIC_WEB_IMAGE_ENDPOINT}/new-crossfit-header/view?project=guerrilla&project=guerrilla"
				alt=""
			/>
			<div class="image__text" {@attach slideIn}>
				<div class="">
					<h1
						class="h_sf_b_l_u text-[3rem] md:text-[4.5rem] tracking-widest leading-[3rem] md:leading-[5rem] text-center"
					>
						LIVE STRONGER AND HEALTHIER THROUGH SOUND TRAINING AND NUTRITION
					</h1>
					<div class="flex justify-center m-8">
						<CallToActionButton title="Join Now" />
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="mt-20 px-4 md:px-32" title="More Than A Gym">
		<div class="grid grid-rows-[min-content_1fr] md:grid-cols-2">
			<div class="max-w-[32rem]">
				<h1 class="h3_sf_b_l_u text-[4rem] leading-[3.5rem] t05 w-full" {@attach slideIn}>
					GUERRILLA FITNESS STANDS APART
				</h1>
			</div>
			<div class="pt-6 md:pt-0 p__font__r">
				<div class="w-full h-full flex justify-center items-center">
					<p class="p_pf_r_l text-xl" {@attach fade}>
						We get to know you. Listen to your story and focus on your goals. Your journey is ours,
						and we are with you every step of the way.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="mt-20 px-4 md:px-32" title="Our Mission">
		<div class="grid grid-rows-[min-content_1fr] md:grid-cols-2">
			<div class="max-w-[30rem] flex flex-col justify-center order-2 md:order-1">
				<h1
					class="hidden md:block h3_sf_b_l_u text-[4rem] leading-[3.5rem] t05 w-full"
					{@attach (node) => slideIn(node, 0)}
				>
					Our Mission
				</h1>
				<p class="p_pf_r_l text-xl pt-8" {@attach (node) => slideIn(node, 0.3)}>
					Our mission is to build strong, healthy, capable people through expert coaching, smart
					programming, and a supportive community. Helping you move well, live fully, and stay
					resilient for life.
				</p>
			</div>
			<div class="relative w-full max-h-[40rem] order-1 md:order-2">
				<img
					class="w-full h-full object-cover"
					src="{PUBLIC_WEB_IMAGE_ENDPOINT}/sled/view?project=guerrilla&project=guerrilla"
					alt=""
					{@attach (node) => slideIn(node, 0.5)}
				/>
				<div class="md:hidden absolute bottom-[20%] left-4">
					<h1
						class="h3_sf_b_l_u text-[3.2rem] leading-[3.5rem] t05 w-full"
						{@attach (node) => slideIn(node, 0)}
					>
						Our Mission
					</h1>
				</div>
			</div>
		</div>
	</section>
	<section class="mt-20 px-4 md:px-32" title="How It Works">
		<div class="grid grid-rows-[min-content_1fr] md:grid-cols-2">
			<div class="relative w-full">
				<img
					class="w-full h-full object-cover"
					src="{PUBLIC_WEB_IMAGE_ENDPOINT}/how-it-works/view?project=guerrilla&project=guerrilla"
					alt=""
					{@attach (node) => slideIn(node, 0.5)}
				/>
				<div class="md:hidden absolute bottom-[20%] left-4">
					<h1 class="h3_sf_b_l_u text-[3.2rem] leading-[3.5rem] t05 w-full">How It Works</h1>
				</div>
			</div>
			<div class="w-full flex justify-center pt-8 md:pt-0">
				<div class="max-w-[30rem] flex flex-col justify-center items-start">
					<h1
						class="hidden md:block h3_sf_b_l_u text-[4rem] leading-[3.5rem] t05 w-full pb-4"
						{@attach slideIn}
					>
						How It Works
					</h1>
					<div class="w-full" {@attach (node) => slideIn(node, 0.5)}>
						<Accordion5 iconWidth="2.5rem" iconHeight="2.5rem" colorScheme={acs_dark}>
							{#snippet title()}
								<h4 class="h_sf_r_l_u text-[2rem] tracking-widest pr-2">Try a few classes</h4>
							{/snippet}
							{#snippet panel()}
								<p class="p_pf_r_l text-xl pt-4">
									Trial classes serve two important purposes:
								</p>
								<ul class="text-xl">
									<li class="p_pf_r_l py-2">
										1. You get to experience our coaching firsthand, feel the energy of our
										community, and see what the workouts are all about.
									</li>
									<li class="p_pf_r_l py-2">
										2. We get to learn about you. Where you are in your fitness journey, what you
										are looking for, and how we can best guide you toward your goals. It’s a two way
										introduction built to set you up for success.
									</li>
								</ul>
							{/snippet}
						</Accordion5>
						<div class="py-4">
							<hr class="border-gray-700" />
						</div>

						<Accordion5 iconWidth="2.5rem" iconHeight="2.5rem" colorScheme={acs_dark}>
							{#snippet title()}
								<h4 class="h_sf_r_l_u text-[2rem] tracking-widest pr-2">Choose your membership</h4>
							{/snippet}
							{#snippet panel()}
								<p class="p_pf_r_l text-xl pt-4">
									After your trial classes, we’ll follow up to talk about your experience and answer
									any questions. Based on that, and what we learned about you and where you are at,
									we’ll help guide you toward the membership option that fits you best.
								</p>
								<p class="p_pf_r_l text-xl pt-4">
									Our goal is to ensure you get started in the way that sets you up for long term
									success.
								</p>
							{/snippet}
						</Accordion5>
						<div class="py-4">
							<hr class="border-gray-700" />
						</div>

						<Accordion5 iconWidth="2.5rem" iconHeight="2.5rem" colorScheme={acs_dark}>
							{#snippet title()}
								<h4 class="h_sf_r_l_u text-[2rem] tracking-widest pr-2">Get lasting results</h4>
							{/snippet}
							{#snippet panel()}
								<p class="p_pf_r_l text-xl pt-4">
									Transform how you feel in your body with a proven fitness and nutrition program.
									We don’t promise quick fixes, but we do promise our committment to you. It’s not
									just about reaching your goals; it’s about who you become in the process. We are
									here to support and challenge you every step of the way, to become your best self.
								</p>
								<p class="p_pf_r_l text-xl pt-4">
									Just show up. Trust the process. Good things will happen!
								</p>
							{/snippet}
						</Accordion5>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="mt-20 px-4 md:px-32" title="Get Started">
		<GetStarted />
	</section>
	<section class="mt-20 px-4 md:px-32" title="Offerings">
		<Offerings />
	</section>
	<section class="mt-20 px-4 md:px-32" title="Our Locations">
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
	<section class="my-20 px-4 md:px-32" title="Get Started">
		<GetStarted />
	</section>
	<Footer />
</main>

<style>
	.filter {
		filter: brightness(60%) contrast(80%);
	}
	.image__text {
		width: 100%;
		max-width: 60rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
