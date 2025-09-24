<script lang="ts">
	import { PUBLIC_PROJECT_ID, PUBLIC_WEB_IMAGE_ENDPOINT } from '$env/static/public';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import VideoPlayer from '$lib/components/VideoPlayer.svelte';
	import { slideIn } from '$lib/gsapFunc';
	import type { MembershipCardData } from '$lib/types';
	import { BottomSheet5, Dialog5 } from '@djcali570/component-lib';
	import MembershipCard from './_components/MembershipCard.svelte';

	let modalStatus = $state(false);
	let selectedCard: MembershipCardData = $state({});

	let mcd: MembershipCardData[] = [
		{
			price: '325',
			priceAbbv: '4wks',
			subTitle: '3 one-on-one sessions + unlimited classes',
			title: 'New To Crossfit',
			desc: 'Renews at $225 after 4 WKS',
			link: 'https://guerrillafitness.wodify.com/OnlineSalesPage/Main?q=ReviewPurchase%7COnlineMembershipId%3D286036%26LocationId%3D508%26OnlineMembershipPaymentOptionId%3D1249140',
			link2:
				'https://guerrillafitness.wodify.com/OnlineSalesPage/Main?q=Memberships%7CLocationId%3D10397%26IsClassesView%3DTrue',
			recommended: true
		},
		{
			price: '225',
			priceAbbv: '4wks',
			subTitle: '',
			title: 'Unlimited Classes',
			desc: 'Auto Renews After 4WKS',
			link: 'https://guerrillafitness.wodify.com/OnlineSalesPage/Main?q=ReviewPurchase%7COnlineMembershipId%3D46052%26LocationId%3D508%26OnlineMembershipPaymentOptionId%3D1158038',
			link2:
				'https://guerrillafitness.wodify.com/OnlineSalesPage/Main?q=Memberships%7CLocationId%3D10397%26IsClassesView%3DTrue'
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
			link: 'https://guerrillafitness.wodify.com/OnlineSalesPage/Main?q=ReviewPurchase%7COnlineMembershipId%3D239221%26LocationId%3D508%26OnlineMembershipPaymentOptionId%3D930443',
			link2:
				'https://guerrillafitness.wodify.com/OnlineSalesPage/Main?q=Memberships%7CLocationId%3D10397%26IsClassesView%3DTrue'
		},
		{
			price: '30',
			priceAbbv: '',
			subTitle: 'Experienced Crossfitters',
			title: 'Drop In',
			desc: '',
			buttonTitle: 'Buy Now',
			link: 'https://guerrillafitness.wodify.com/OnlineSalesPage/Main?q=Classes%7COnlineMembershipId%3D3618%26LocationId%3D508',
			link2:
				'https://guerrillafitness.wodify.com/OnlineSalesPage/Main?q=Memberships%7CLocationId%3D10397%26IsClassesView%3DTrue'
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
			link: 'https://guerrillafitness.wodify.com/OnlineSalesPage/Main?q=Memberships%7CLocationId%3D508%26IsClassesView%3DTrue',
			link2:
				'https://guerrillafitness.wodify.com/OnlineSalesPage/Main?q=Memberships%7CLocationId%3D10397%26IsClassesView%3DTrue'
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
			link: 'https://guerrillafitness.wodify.com/OnlineSalesPage/Main?q=Memberships%7CLocationId%3D508%26IsClassesView%3DTrue',
			link2:
				'https://guerrillafitness.wodify.com/OnlineSalesPage/Main?q=Memberships%7CLocationId%3D10397%26IsClassesView%3DTrue'
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
			link: 'https://guerrillafitness.wodify.com/OnlineSalesPage/Main?q=Memberships%7CLocationId%3D508%26IsClassesView%3DTrue',
			link2:
				'https://guerrillafitness.wodify.com/OnlineSalesPage/Main?q=Memberships%7CLocationId%3D10397%26IsClassesView%3DTrue'
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
	<section class="video__section">
		<div class="main__video">
			<VideoPlayer
				showControls={false}
				videoSource="{PUBLIC_WEB_IMAGE_ENDPOINT}/main_video/view?project={PUBLIC_PROJECT_ID}"
			/>
		</div>
		<div class="video__overlay"></div>
	</section>
	<section class="flex justify-center items-center flex-col px-4 md:px-32 py-4 bg-[#fefffe]">
		<p class="p_pf_r_d text-center">Your membership may qualify for HSA/FSA reimbursement.</p>
		<p class="p_pf_r_d text-center pt-1">
			Choose your membership location to check for eligibility: <a
				class="underline"
				href="https://app.truemed.com/crossfit/qualify/tm_qual_gzf8c9k1xl" target="_blank">Montclair</a
			>
			|
			<a class="underline" href="https://app.truemed.com/crossfit/qualify/tm_qual_8ca0xhoatf"
				target="_blank">Paramus</a
			>
		</p>
	</section>
	<section class="px-4 md:px-32 bg-[#fefffe]">
		<div class="flex justify-center py-10">
			<h1 class="h_sf_b_d_u text-[3rem]" {@attach slideIn}>unlimited</h1>
		</div>
		<div class="pb-10">
			<div class="grid md:grid-cols-2 gap-10">
				{#each mcd as card}
					<div class="flex justify-center items-center">
						<MembershipCard mcd={card} buttonType="btn" />
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
						<MembershipCard mcd={card} buttonType="btn" />
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
						<MembershipCard mcd={card} buttonType="btn" />
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
	.main__video {
		height: 30vh;
	}

	@media (min-width: 768px) {
		.main__video {
			height: 25vw;
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
