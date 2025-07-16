<script lang="ts">
	import { PUBLIC_PROJECT_ID, PUBLIC_WEB_IMAGE_ENDPOINT } from '$env/static/public';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import VideoPlayer from '$lib/components/VideoPlayer.svelte';
	import { slideIn } from '$lib/gsapFunc';
	import type { MembershipCardData } from '$lib/types';
	import MembershipCard from './_components/MembershipCard.svelte';

	let mcd: MembershipCardData[] = [
		{
			price: '325',
			priceAbbv: '4wks',
			subTitle: '3 one-on-one sessions + unlimited classes',
			title: 'New To Crossfit',
			desc: 'Renews at $225 after 4 WKS',
			link: '/'
		},
		{
			price: '225',
			priceAbbv: '4wks',
			subTitle: '',
			title: 'Unlimited Classes',
			desc: 'Auto Renews After 4WKS',
			link: '/'
		}
	];
	let sessionPacks: MembershipCardData[] = [
		{
			price: '30',
			priceAbbv: '',
			subTitle: 'Montclair/Paramus & Surrounding Areas',
			title: '3 Class Trial',
			desc: 'Must show proof of residency',
			buttonTitle: 'Buy Now',
			link: '/'
		},
		{
			price: '25',
			priceAbbv: '',
			subTitle: 'Experienced Crossfitters',
			title: 'Drop In',
			desc: '',
			buttonTitle: 'Buy Now',
			link: '/'
		}
	];
	let services: MembershipCardData[] = [
		{
			subTitle: '1:1 Nutrition',
			title: 'Nutrition Coaching',
			buttonTitle: 'Get Started',
			bullets: [
				'Personalized plans with Certified Coaches',
				'Initial 1-hr Consultation: Deep dive into your goals and habits',
				'Optimize macros, crush PRs, or improve body composition',
				'Flexible 1:1 meetings to suit your needs'
			],
			link: '/'
		},
		{
			subTitle: '1:1 Training',
			title: 'personal training',
			buttonTitle: 'Get Started',
			bullets: [
				'Work 1:1 with world-class coaches',
				'Tailored sessions, precise guidance, and motivational support',
				'Perfect for all experience levels and fitness goals',
				'Single sessions and package options available'
			],
			link: '/'
		},
		{
			subTitle: '1:4-6 Training',
			title: 'Semi-private personal training',
			buttonTitle: 'Get Started',
			bullets: [
				'4-6 Individuals per session',
				'Custom tailored workouts, precise guidance, and the push you need',
				'Whether you are just starting out or looking to level up - This program is for you'
			],
			link: '/'
		}
	];
</script>

<svelte:head>
	<title>Guerrilla Fitness - Memberships</title>
	<meta name="description" content="Membership Options" />
	<meta property="og:title" content="Guerrilla Fitness - Membership Options" />
	<meta property="og:description" content="Membership Options" />
	<meta property="og:image" content="https://www.guerrillafitness.net/myimage.jpg" />
	<meta name="twitter:card" content="https://www.guerrillafitness.net/myimage.jpg" />
</svelte:head>

<Nav />

<main class="nav__margin bg-g-white-500">
	<section class="video__section h-[30vh] md:h-[25vw]">
		<VideoPlayer
			showControls={false}
			videoSource="{PUBLIC_WEB_IMAGE_ENDPOINT}/main_video/view?project={PUBLIC_PROJECT_ID}"
		/>
	</section>
	<section class="px-4 md:px-32 bg-[#fefffe]">
		<div class="flex justify-center py-10">
			<h1 class="h_sf_b_d_u text-[3rem]" {@attach slideIn}>unlimited</h1>
		</div>
		<div class="pb-10">
			<div class="grid md:grid-cols-2 gap-10">
				{#each mcd as card}
					<div class="flex justify-center items-center">
						<MembershipCard mcd={card} />
					</div>
				{/each}
			</div>
		</div>
	</section>
	<section class="px-4 md:px-32 bg-[#fefffe]">
		<div class="flex justify-center py-10">
			<h1 class="h_sf_b_d_u text-[3rem]" {@attach slideIn}>session packs</h1>
		</div>
		<div class="pb-10">
			<div class="grid md:grid-cols-2 gap-10">
				{#each sessionPacks as card}
					<div class="flex justify-center items-center">
						<MembershipCard mcd={card} />
					</div>
				{/each}
			</div>
		</div>
	</section>
	<section class="px-4 md:px-32 bg-[#fefffe]">
		<div class="flex justify-center py-10">
			<h1 class="h_sf_b_d_u text-[3rem]" {@attach slideIn}>personal services</h1>
		</div>
		<div class="pb-10">
			<div class="grid md:grid-cols-3 gap-10">
				{#each services as card}
					<div class="flex justify-center items-center">
						<MembershipCard mcd={card} />
					</div>
				{/each}
			</div>
		</div>
	</section>
	<div class="bg-g-black-500">
		<Footer />
	</div>
</main>

<style>
	.video__section {
		position: relative;
		z-index: 2;
	}
</style>
