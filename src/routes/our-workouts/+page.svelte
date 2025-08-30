<script lang="ts">
	import { PUBLIC_WEB_IMAGE_ENDPOINT } from '$env/static/public';
	import CallToActionButton from '$lib/components/CallToActionButton.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import GetStarted from '$lib/components/GetStarted.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { slideIn } from '$lib/gsapFunc';
</script>

<svelte:head>
	<title>Guerrilla Fitness - Our Workouts</title>
	<meta name="description" content="Guerrilla Fitness Workouts" />
	<meta property="og:title" content="Guerrilla Fitness - Our Workouts" />
	<meta property="og:description" content="Guerrilla Fitness Workouts" />
	<meta property="og:image" content="https://www.guerrillafitness.net/myimage.jpg" />
	<meta name="twitter:card" content="https://www.guerrillafitness.net/myimage.jpg" />
</svelte:head>

<Nav />

<main class="nav__margin bg-g-black-500">
	<section class="w-full bg-g-black-500">
		<div class="relative w-full h-[450px] md:h-[700px]">
			<img
				class="w-full h-full object-cover object-top"
				src={`${PUBLIC_WEB_IMAGE_ENDPOINT}/workouts/view?project=guerrilla&project=guerrilla`}
				alt=""
			/>
			<div class="video__overlay"></div>
			<div class="overlay__content" {@attach slideIn}>
				<h1 class="video__title__text text-center">workout with purpose</h1>
				<p class="prwu">Own Your Health</p>
				<div class="pt-8"><CallToActionButton title="Join Now" /></div>
			</div>
		</div>
	</section>
	<section class="p-12 md:p-32">
		<div class="w-full flex flex-col justify-center items-center" {@attach slideIn}>
			<h1 class="video__title__text text-center">WORKOUTS THAT REALLY WORK</h1>
			<p class="p_pf_r_l text-g-white-500 pt-8 w-full md:w-[50%] text-[1.3rem] md:text-[1.8rem]">
				At Guerrilla Fitness, every workout is built on proven principles of strength, conditioning,
				and smart programming. We focus on proper technique, progressive training, and balanced
				intensity—ensuring you get stronger, move better, and build lasting fitness. Our workouts
				work because they’re coached with purpose, tailored to your abilities, and designed for
				results that last a lifetime.
			</p>
		</div>
	</section>

	<section class="py-32">
		<div class="flex flex-col md:grid grid-cols-2 md:h-[400px]">
			<div class="relative w-full h-[300px] md:h-[400px]">
				<img
					class="w-full h-full object-cover"
					src={`${PUBLIC_WEB_IMAGE_ENDPOINT}/workout1/view?project=guerrilla&project=guerrilla`}
					alt=""
					{@attach slideIn}
				/>
				<div
					class="absolute transform -translate-x-1/2 translate-y-[-30%] left-1/2 md:hidden bg-g-black-500 w-[90%]"
					{@attach slideIn}
				>
					<h1
						class="h_sf_r_l_u text-[3rem] md:text-[4rem] leading-[3rem] md:leading-[4rem] text-left pt-8 px-8"
					>
						STRENGTH TRAINING – SIMPLIFIED
					</h1>
					<p
						class="p_pf_r_l text-g-white-500 w-full md:w-[50%] text-[1rem] md:text-[1.2rem] text-left px-8 py-8"
					>
						At Guerrilla Fitness, strength training isn’t about lifting the heaviest weight or
						competing with anyone else—it’s about learning to move well, getting stronger at your
						own pace, and building a foundation for lifelong health. Think squats, presses, and
						deadlifts. We start with the basics, teach you proper technique, and progress gradually
						so you feel confident and capable every step of the way. Strength is the key to
						everything—more energy, better mobility, fewer injuries, and the ability to do more of
						what you love, for years to come.
					</p>
				</div>
			</div>
			<div class="hidden md:flex justify-center w-full">
				<div class="flex flex-col justify-center pt-8 md:pt-0 px-8 md:px-0 w-3/4" {@attach slideIn}>
					<h1
						class="h_sf_r_l_u text-[3rem] md:text-[4rem] leading-[3rem] md:leading-[4rem] text-left"
					>
						STRENGTH TRAINING – SIMPLIFIED
					</h1>
					<p
						class="p_pf_r_l text-g-white-500 pt-8 md:w-[80%] text-[1rem] md:text-[1.2rem] text-left"
					>
						At Guerrilla Fitness, strength training isn’t about lifting the heaviest weight or
						competing with anyone else—it’s about learning to move well, getting stronger at your
						own pace, and building a foundation for lifelong health. Think squats, presses, and
						deadlifts. We start with the basics, teach you proper technique, and progress gradually
						so you feel confident and capable every step of the way. Strength is the key to
						everything—more energy, better mobility, fewer injuries, and the ability to do more of
						what you love, for years to come.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="py-32">
		<div class="flex flex-col md:grid grid-cols-2 md:h-[400px]">
			<div class="hidden md:flex justify-center w-full">
				<div class="flex flex-col justify-center pt-8 md:pt-0 px-8 md:px-0 w-3/4" {@attach slideIn}>
					<h1
						class="h_sf_r_l_u text-[3rem] md:text-[4rem] leading-[3rem] md:leading-[4rem] text-left"
					>
						Conditioning
					</h1>
					<p
						class="p_pf_r_l text-g-white-500 pt-8 md:w-[80%] text-[1rem] md:text-[1.2rem] text-left"
					>
						The conditioning portion of our workouts is designed to designed to work hand-in-hand
						with the strength segment. This is where we focus on improving your heart and lung
						health, boosting stamina, and building the ability to keep moving with energy and
						efficiency. It’s always scaled to your current fitness level, so you can work at a pace
						that challenges you without feeling overwhelmed—helping you get fitter, faster, and
						stronger over time.
					</p>
				</div>
			</div>
			<div class="relative w-full h-[300px] md:h-[400px]">
				<img
					class="w-full h-full object-cover"
					src={`${PUBLIC_WEB_IMAGE_ENDPOINT}/workout2/view?project=guerrilla&project=guerrilla`}
					alt=""
					{@attach slideIn}
				/>
				<div
					class="absolute transform -translate-x-1/2 translate-y-[-30%] left-1/2 md:hidden bg-g-black-500 w-[90%]"
					{@attach slideIn}
				>
					<h1
						class="h_sf_r_l_u text-[3rem] md:text-[4rem] leading-[3rem] md:leading-[4rem] text-left pt-8 px-8"
					>
						Conditioning
					</h1>
					<p
						class="p_pf_r_l text-g-white-500 w-full md:w-[50%] text-[1rem] md:text-[1.2rem] text-left px-8 py-8"
					>
						The conditioning portion of our workouts is designed to designed to work hand-in-hand
						with the strength segment. This is where we focus on improving your heart and lung
						health, boosting stamina, and building the ability to keep moving with energy and
						efficiency. It’s always scaled to your current fitness level, so you can work at a pace
						that challenges you without feeling overwhelmed—helping you get fitter, faster, and
						stronger over time.
					</p>
				</div>
			</div>
		</div>
	</section>
	
	<section class="py-32">
		<GetStarted />
	</section>
	<section class="w-full bg-g-black-500">
		<div class="relative w-full h-[450px] md:h-[600px]">
			<img
				class="w-full h-full object-cover object-top"
				src={`${PUBLIC_WEB_IMAGE_ENDPOINT}/workout4/view?project=guerrilla&project=guerrilla`}
				alt=""
			/>
			<div class="video__overlay"></div>
			<div class="overlay__content" {@attach slideIn}>
				<h1 class="video__title__text text-center">Rate of Perceived Exertion</h1>
			</div>
		</div>
	</section>
	<Footer />
</main>

<style>
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
	.video__overlay {
		position: absolute;
		inset: 0px;
		background-color: black;
		opacity: 0.4;
		z-index: 2; /* Below the title but above the video */
	}
</style>
