<script lang="ts">
	import { PUBLIC_WEB_IMAGE_ENDPOINT } from '$env/static/public';
	import CallToActionButton from '$lib/components/CallToActionButton.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { slideIn } from '$lib/gsapFunc';
	import { nutritionCarouselitems } from '$lib/state/appState.svelte';
	import { d5cs, gymDropdown, ics } from '$lib/types';
	import { DropDown5, Input5 } from '@djcali570/component-lib';

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let selectedGym = $state('');
	let experience = $state('');

	async function submitForm() {
		console.log('form submitted');
	}
</script>

<svelte:head>
	<title>Guerrilla Fitness - Nutrition</title>
	<meta name="description" content="Nutrition Coaching" />
	<meta property="og:title" content="Guerrilla Fitness - Nutrition" />
	<meta property="og:description" content="Nutrition Coaching" />
	<meta property="og:image" content="https://www.guerrillafitness.net/myimage.jpg" />
	<meta name="twitter:card" content="https://www.guerrillafitness.net/myimage.jpg" />
</svelte:head>

<Nav />

<main class="nav__margin bg-g-white-500">
	<section class="w-full bg-g-black-500">
		<div class="relative w-full h-[450px] md:h-[600px]">
			<img
				class="w-full h-full object-cover"
				src={`${PUBLIC_WEB_IMAGE_ENDPOINT}/nutrition_header/view?project=guerrilla&project=guerrilla`}
				alt=""
			/>
			<div
				class="absolute top-[50%] flex flex-col pl-[3rem] md:pl-[10rem] w-full md:w-[50%] gap-4"
				{@attach slideIn}
			>
				<h6 class="h_sf_r_l_u text-[1rem] md:text-[1.5rem] tracking-[0.2rem]">
					nutrition + accountability
				</h6>
				<h1 class="h_sf_b_l_u text-[3rem] md:text-[5rem] leading-[3rem] md:leading-[5rem]">
					your goals go beyond the gym
				</h1>
				<div class="x">
					<CallToActionButton title="Apply For Coaching" bgColor="#BF1E2D" width="12rem" />
				</div>
			</div>
		</div>
	</section>
	<section class="w-full bg-g-white-500">
		<div class="relative w-full md:h-[600px] flex flex-col md:grid md:grid-cols-2">
			<div class="hidden md:flex justify-start items-center">
				<div class="w-full h-[500px]">
					<img
						class="w-full h-full object-cover"
						src={`${PUBLIC_WEB_IMAGE_ENDPOINT}/nutrition_header/view?project=guerrilla&project=guerrilla`}
						alt=""
						{@attach slideIn}
					/>
				</div>
			</div>

			<div class="w-full h-full flex justify-start items-center pb-4 md:pb-0">
				<div class="px-4 md:px-[7rem] flex flex-col gap-4 pt-4 md:pt-0">
					<h2 class="h_sf_r_d_u text-[2.8rem] leading-[2.5rem]" {@attach slideIn}>
						We believe in a habit-based approach to nutrition
					</h2>
					<div class="md:hidden flex justify-start items-center">
						<div class="w-full h-[300px]">
							<img
								class="w-full h-full object-cover"
								src={`${PUBLIC_WEB_IMAGE_ENDPOINT}/nutrition_header/view?project=guerrilla&project=guerrilla`}
								alt=""
								{@attach slideIn}
							/>
						</div>
					</div>
					<p {@attach slideIn}>
						At Guerrilla, we don’t just focus on the hour you spend inside the gym. The 23 hours you
						spend outside the gym is where most people struggle to make progress toward their health
						and fitness goals. That is where our nutrition and accountability coaches can help.
					</p>
					<p {@attach slideIn}>
						At Guerrilla, we use a habit-based approach to nutrition that sets you up for success by
						working on one thing at a time.
					</p>
					<CallToActionButton title="Apply For Coaching" bgColor="#BF1E2D" width="12rem" useSlideIn={true} />
				</div>
			</div>
		</div>
	</section>
	<section class="w-full bg-g-black-500 px-4 md:px-32 pt-8">
		<Carousel items={nutritionCarouselitems} />
	</section>
	<section class="w-full bg-g-black-500 px-4 md:px-32 pt-10 pb-10">
		<div class="w-full flex justify-end items-center">
			<div class="md:w-[50%]">
				<h1 class="h_sf_b_l_u text-[2.6rem] leading-[2.6rem] text-right" {@attach slideIn}>
					At Guerrilla, We Believe Something As Fundamental As Nutrition Shouldn’t Be Complicated
				</h1>
			</div>
		</div>
	</section>
	<section class="w-full bg-g-white-500">
		<div class="relative w-full md:h-[550px] flex flex-col md:grid grid-cols-2">
			<div class="w-full h-[300px] md:h-[550px] relative">
				<img
					class="w-full h-full object-cover"
					src={`${PUBLIC_WEB_IMAGE_ENDPOINT}/dish/view?project=guerrilla&project=guerrilla`}
					alt=""
                    {@attach slideIn}
				/>
				<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4">
					<h1 class="h_sf_b_l_u text-[4rem] leading-[4rem] text-center" {@attach slideIn}>Apply for coaching</h1>
				</div>
			</div>
			<div class="flex justify-center items-center w-full">
				<div class="w-full flex flex-col gap-4 p-8">
					<Input5 title="Name (Required)" colorScheme={ics} bind:value={name}  />
					<Input5 title="Email (Required)" colorScheme={ics} bind:value={email} />
					<Input5 title="Phone (Required)" colorScheme={ics} validator="phone" bind:value={phone} />
					<DropDown5
						title="Location (Required)"
						dropdownItems={gymDropdown}
						bind:value={selectedGym}
						colorScheme={d5cs}
					/>
					<Input5
						title="Fitness Experience (Required)"
						colorScheme={ics}
						textArea={true}
						bind:value={experience}
					/>
					<CallToActionButton title="Submit" bgColor="#BF1E2D" type="btn" click={submitForm} />
				</div>
			</div>
		</div>
	</section>
	<div class="bg-g-black-500">
		<Footer />
	</div>
</main>
