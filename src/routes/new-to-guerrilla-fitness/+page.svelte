<script lang="ts">
	import { PUBLIC_WEB_IMAGE_ENDPOINT } from '$env/static/public';
	import CallToActionButton from '$lib/components/CallToActionButton.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import GetStarted from '$lib/components/GetStarted.svelte';
	import GymComponent from '$lib/components/GymComponent.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Offerings from '$lib/components/Offerings.svelte';
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
				class="w-full h-full object-cover filter"
				src="{PUBLIC_WEB_IMAGE_ENDPOINT}/photob/view?project=guerrilla&project=guerrilla"
				alt=""
			/>
			<div class="image__text">
				<div class="">
					<h6 class="h_sf_b_l_u text-[1.1rem] tracking-[0.3rem] text-center m-8">
						effort over everything
					</h6>
					<h1
						class="h_sf_b_l_u text-[3rem] md:text-[4.5rem] tracking-widest leading-[3rem] md:leading-[5rem] text-center"
					>
						we help people live freely through crossfit, nutrition, and accountability
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
			<div class="max-w-[22rem]">
				<h1 class="h3_sf_b_l_u text-[4rem] leading-[3.5rem] t05 w-full">
					We are more than just another gym
				</h1>
			</div>
			<div class="pt-6 md:pt-0 p__font__r">
				<div class="w-full h-full flex justify-center items-center">
					<p class="p_pf_r_l text-justify leading-[2rem]">
						At Guerrilla Fitness, we know what it takes to live a life free of limitations. It takes
						hard work, effort, and a support system that will hold you accountable when things get
						tough.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="mt-20 px-4 md:px-32" title="Our Mission">
		<div class="grid grid-rows-[min-content_1fr] md:grid-cols-2">
			<div class="max-w-[30rem] flex flex-col justify-center order-2 md:order-1">
				<h1 class="hidden md:block h3_sf_b_l_u text-[4rem] leading-[3.5rem] t05 w-full">
					Our Mission
				</h1>
				<p class="p_pf_r_l text-justify leading-[2rem] pt-8">
					At Gurrilla Fitness we empower you to become the best version of yourself through
					CrossFit, Nutrition, and Accountability. We believe in pushing ourselves beyond our limits
					and achieving our goals, and we want to help you do the same.
				</p>
			</div>
			<div class="relative w-full max-h-[40rem] order-1 md:order-2">
				<img
					class="w-full h-full object-cover filter"
					src="{PUBLIC_WEB_IMAGE_ENDPOINT}/photob/view?project=guerrilla&project=guerrilla"
					alt=""
				/>
				<div class="md:hidden absolute bottom-[20%] left-4">
					<h1 class="h3_sf_b_l_u text-[3.2rem] leading-[3.5rem] t05 w-full">Our Mission</h1>
				</div>
			</div>
		</div>
	</section>
	<section class="mt-20 px-4 md:px-32" title="How It Works">
		<div class="grid grid-rows-[min-content_1fr] md:grid-cols-2">
			<div class="relative w-full">
				<img
					class="w-full h-full object-cover filter"
					src="{PUBLIC_WEB_IMAGE_ENDPOINT}/photob/view?project=guerrilla&project=guerrilla"
					alt=""
				/>
				<div class="md:hidden absolute bottom-[20%] left-4">
					<h1 class="h3_sf_b_l_u text-[3.2rem] leading-[3.5rem] t05 w-full">How It Works</h1>
				</div>
			</div>
			<div class="w-full flex justify-center pt-8 md:pt-0">
				<div class="max-w-[30rem] flex flex-col justify-center items-start">
					<h1 class="hidden md:block h3_sf_b_l_u text-[4rem] leading-[3.5rem] t05 w-full">
						How It Works
					</h1>
					<div class="w-full">
						<Accordion5 iconWidth="2.5rem" iconHeight="2.5rem" colorScheme={acs_dark}>
							{#snippet title()}
								<h4 class="h_sf_r_l_u text-[2rem] tracking-widest pr-2">
									Talk To A Coach. Set Your Goals.
								</h4>
							{/snippet}
							{#snippet panel()}
								<p class="p_pf_r_l text-justify leading-[2rem] pt-4">
									If you fail to plan, you are planning to fail. Meet with a Guerrilla Fitness Coach
									to go over your goals, measure your biometrics, and establish your starting point.
								</p>
							{/snippet}
						</Accordion5>
						<div class="py-4">
							<hr class="border-gray-700" />
						</div>

						<Accordion5 iconWidth="2.5rem" iconHeight="2.5rem" colorScheme={acs_dark}>
							{#snippet title()}
								<h4 class="h_sf_r_l_u text-[2rem] tracking-widest pr-2">Create Your Plan.</h4>
							{/snippet}
							{#snippet panel()}
								<p class="p_pf_r_l text-justify leading-[2rem] pt-4">
									Work with our Guerrilla Fitness and Nutrition experts to create a simple and
									sustainable plan to reach your goals. Once we figure out where you want to go, we
									will work with you to set up a plan that is guaranteed to get you there.
								</p>
								<p class="p_pf_r_l text-justify leading-[2rem] pt-4">
									Everyone’s end goal is a little bit different. At Guerrilla Fitness, we don’t
									believe in a one-size-fits-all approach to health and fitness. Your plan is your
									plan. That’s why it works.
								</p>
								<p class="p_pf_r_l text-justify leading-[2rem] pt-4">
									Our workouts work because they are the perfect blend of strength and conditioning,
									using our unique take on CrossFit and over a decade of experience programming
									workouts for gyms all over the world
								</p>
							{/snippet}
						</Accordion5>
						<div class="py-4">
							<hr class="border-gray-700" />
						</div>

						<Accordion5 iconWidth="2.5rem" iconHeight="2.5rem" colorScheme={acs_dark}>
							{#snippet title()}
								<h4 class="h_sf_r_l_u text-[2rem] tracking-widest pr-2">See Amazing Results.</h4>
							{/snippet}
							{#snippet panel()}
								<p class="p_pf_r_l text-justify leading-[2rem] pt-4">
									Get ready to transform how you feel and how you look with a fitness and nutrition
									coaching program that works!
								</p>
								<p class="p_pf_r_l text-justify leading-[2rem] pt-4">
									It won’t happen overnight or even in thirty days. We are more than just another
									gym because we won’t try to sell you a quick fix or a shortcut.
								</p>
								<p class="p_pf_r_l text-justify leading-[2rem] pt-4">
									Amazing results take time. If you join us, we are in this with you for the long
									haul. We are the last gym you’ll ever need.
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
