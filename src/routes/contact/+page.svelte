<script lang="ts">
	import CallToActionButton from '$lib/components/CallToActionButton.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { gyms } from '$lib/state/appState.svelte';
	import { d5cs, gymDropdown, ics } from '$lib/types';
	import { Dialog5, DropDown5, Input5 } from '@djcali570/component-lib';

	let name = $state('');
	let email = $state('');
	let selectedGym = $state('');
	let message = $state('');
	let modalStatus = $state(false);
	let modalMessage = $state('');
	let messageFunc = $state(() => {});

	function stripPhoneNumber(phone: string) {
		return phone.replace(/-/g, '');
	}

	function clear() {
		name = '';
		email = '';
		selectedGym = '';
		message = '';
	}

	async function sendMail() {
		const postRequestData = new FormData();

		const data = {
			name: name,
			email: email,
			selectedGym: selectedGym,
			message: message
		};

		postRequestData.append('data', JSON.stringify(data));

		const response = await fetch('/api/send-contact-email', {
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
	<title>Guerrilla Fitness - Contact Us</title>
	<meta name="description" content="Contact Us" />
	<meta property="og:title" content="Guerrilla Fitness - Contact Us" />
	<meta property="og:description" content="Contact Guerrilla Fitness" />
	<meta property="og:image" content="https://www.guerrillafitness.net/myimage.jpg" />
	<meta name="twitter:card" content="https://www.guerrillafitness.net/myimage.jpg" />
</svelte:head>

<Nav />
<main class="nav__margin bg-g-white-500 min-h-full">
	<section class="px-4 md:px-32 py-10 md:py-20">
		<div class="grid md:grid-cols-[60%_40%]">
			<div class="grid grid-rows-[min-content_1fr] px-0 md:px-6 max-w-[600px]">
				<div class="h-20 md:h-32">
					<h1 class="h_sf_b_d_u text-5xl md:text-[5rem] tracking-wider">contact us</h1>
				</div>

				<div class="flex flex-col gap-6">
					<p class="p_pf_r_d">
						Looking for more info? Fill out the form below and a member from our team will reach out
						to you shortly.
					</p>
					<Input5 title="Name (Required)" colorScheme={ics} bind:value={name} />
					<Input5 title="Email (Required)" colorScheme={ics} bind:value={email} />
					<DropDown5
						title="Location (Required)"
						dropdownItems={gymDropdown}
						bind:value={selectedGym}
						colorScheme={d5cs}
					/>
					<Input5
						title="Message"
						bind:value={message}
						colorScheme={ics}
						textArea={true}
						maxlength={255}
						showCounter={true}
					/>
					<CallToActionButton
						title="Submit"
						bgColor="#010010"
						borderColor="#010010"
						type="btn"
						click={sendMail}
					/>
				</div>
			</div>
			<div class="grid grid-rows-[min-content_1fr] px-6">
				<div class="hidden md:block h-32"></div>

				<div class="flex flex-col gap-6 pt-10 md:pt-0">
					<hr />
					<h6 class="h_sf_r_d_u text-lg tracking-widest">Our Locations</h6>
					{#each gyms as gym}
						<div class="x">
							<a href={gym.link} class="a_pf_b_d_u underline text-sm">{gym.name}</a>
							<p class="p_pf_r_g">{gym.address}</p>
							<a href={`tel:+${stripPhoneNumber(gym.phone)}`} class="p_pf_r_g">{gym.phoneDisplay}</a
							>
						</div>
					{/each}
					<hr />
					<h6 class="h_sf_r_d_u text-lg tracking-widest">Other ways to get in touch</h6>
					<a href="mailTo:info@guerrillafitness.net" class="p_pf_r_g">info@guerrillafitness.net</a>
				</div>
			</div>
		</div>
	</section>
	<section class="w-full bg-g-black-500" title="footer">
		<Footer />
	</section>

	<Dialog5 bind:modalStatus dialogType="ok" onUpdate={messageFunc}>
		{#snippet title()}
			<div class="py-2">Message</div>
		{/snippet}
		{#snippet content()}
			<div class="max-w-[350px]">
				<div class="w-full h-full flex justify-center items-center px-4 p_pf_r_l text-center">{modalMessage}</div>
			</div>
		{/snippet}
	</Dialog5>
</main>
