<script lang="ts">
	import { PUBLIC_WEB_IMAGE_ENDPOINT } from '$env/static/public';
	import CallToActionButton from '$lib/components/CallToActionButton.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { slideIn } from '$lib/gsapFunc';
	import { d5cs, gymDropdown, ics } from '$lib/types';
	import { Dialog5, DropDown5, Input5 } from '@djcali570/component-lib';

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let selectedGym = $state('');
	let experience = $state('');
	let modalStatus = $state(false);
	let modalMessage = $state('');

	function clear() {
		name = '';
		email = '';
		phone = '';
		selectedGym = '';
		experience = '';
	}

	async function submitForm() {
		const postRequestData = new FormData();

		const data = {
			name: name,
			email: email,
			phone: phone,
			selectedGym: selectedGym,
			experience: experience
		};

		postRequestData.append('data', JSON.stringify(data));

		const response = await fetch('/api/send-nutrition-email', {
			method: 'POST',
			body: postRequestData
		});

		const responseData = await response.json();

		modalMessage = responseData.message;
		modalStatus = true;

		if (responseData.success) {
			clear();
		}
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
				class="w-full h-full object-cover filter brightness-75"
				src={`${PUBLIC_WEB_IMAGE_ENDPOINT}/nutrition-04/view?project=guerrilla&project=guerrilla`}
				alt=""
			/>
			<div
				class="absolute top-[50%] flex flex-col pl-[3rem] md:pl-[10rem] w-full md:w-[60%] gap-4"
				{@attach slideIn}
			>
				<h1 class="h_sf_b_l_u text-[3rem] md:text-[5rem] leading-[3rem] md:leading-[5rem]">
					Better Choices <br /> Better Results
				</h1>
				<h6 class="h_sf_r_l_u text-[1rem] md:text-[1.5rem] tracking-[0.2rem]">
					You don’t need a perfect diet—just a plan that works for you
				</h6>
				<div class="x">
					<CallToActionButton
						title="Apply For Coaching"
						link="#form"
						bgColor="#BF1E2D"
						width="12rem"
					/>
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
						src={`${PUBLIC_WEB_IMAGE_ENDPOINT}/nutrition-02/view?project=guerrilla&project=guerrilla`}
						alt=""
						{@attach slideIn}
					/>
				</div>
			</div>

			<div class="w-full h-full flex justify-start items-center pb-4 md:pb-0">
				<div class="px-4 md:px-[7rem] flex flex-col gap-4 pt-4 md:pt-0">
					<h2 class="h_sf_r_d_u text-[2.8rem] leading-[2.5rem]" {@attach slideIn}>
						We make healthy nutrition clear and manageable
					</h2>
					<div class="md:hidden flex justify-start items-center">
						<div class="w-full h-[300px]">
							<img
								class="w-full h-full object-cover"
								src={`${PUBLIC_WEB_IMAGE_ENDPOINT}/nutrition-02/view?project=guerrilla&project=guerrilla`}
								alt=""
								{@attach slideIn}
							/>
						</div>
					</div>
					<p {@attach slideIn}>
						A balanced approach, built around real food and sustainable habits. Fuel your training,
						support recovery to feel your best every day. We’re here to guide you toward simple
						choices that add up to big results.
					</p>

					<CallToActionButton
						title="Apply For Coaching"
						link="#form"
						bgColor="#BF1E2D"
						width="12rem"
						useSlideIn={true}
					/>
				</div>
			</div>
		</div>
	</section>

	<section class="w-full bg-g-black-500 px-4 md:px-32 pt-10 pb-10 mb-10">
		<div class="w-full flex justify-end items-center">
			<div class="">
				<h1
					class="h_sf_r_l_u text-[2.6rem] leading-[3rem] tracking-widest text-center"
					{@attach slideIn}
				>
					Fuel your training and your life with simple, sustainable nutrition habits that actually
					work.
				</h1>
			</div>
		</div>
	</section>

	<section class="w-full bg-g-white-500">
		<div class="relative w-full md:h-[550px] flex flex-col md:grid grid-cols-2">
			<div class="w-full h-[300px] md:h-[550px] relative">
				<img
					class="w-full h-full object-cover filter brightness-75"
					src={`${PUBLIC_WEB_IMAGE_ENDPOINT}/nutrition-03/view?project=guerrilla&project=guerrilla`}
					alt=""
					{@attach slideIn}
				/>
				<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4">
					<h1 class="h_sf_b_l_u text-[4rem] leading-[4rem] text-center" {@attach slideIn}>
						Apply for coaching
					</h1>
				</div>
			</div>
			<div id="form" class="flex justify-center items-center w-full">
				<div class="w-full flex flex-col gap-4 p-8">
					<Input5 title="Name (Required)" colorScheme={ics} bind:value={name} />
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

	<Dialog5 bind:modalStatus dialogType="ok">
		{#snippet title()}
			<div class="py-2">Message</div>
		{/snippet}
		{#snippet content()}
			<div class="max-w-[350px]">
				<div class="w-full h-full flex justify-center items-center px-4 p_pf_r_l text-center">
					{modalMessage}
				</div>
			</div>
		{/snippet}
	</Dialog5>
</main>
