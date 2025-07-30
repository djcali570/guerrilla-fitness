<script lang="ts">
	import { PUBLIC_PROJECT_ID, PUBLIC_WEB_IMAGE_ENDPOINT } from '$env/static/public';
	import CallToActionButton from '$lib/components/CallToActionButton.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import GetStarted from '$lib/components/GetStarted.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { slideIn } from '$lib/gsapFunc';
	import { coaches } from '$lib/state/appState.svelte';
	import { acs, type Coach } from '$lib/types';
	import { Accordion5 } from '@djcali570/component-lib';

	const contentImage = `${PUBLIC_WEB_IMAGE_ENDPOINT}/6709df20c5ef3b5c29c0/view?project=${PUBLIC_PROJECT_ID}`;
</script>

<svelte:head>
	<title>Guerrilla Fitness - Meet The Team</title>
	<meta name="description" content="About our coaches" />
	<meta property="og:title" content="Guerrilla Fitness - Meet The Team" />
	<meta property="og:description" content="About our coaches" />
	<meta property="og:image" content="{contentImage}" />
	<meta name="twitter:card" content="{contentImage}}" />
</svelte:head>

<Nav />

<main class="nav__margin bg-g-white-500">
	<section class="bg-g-black-500 p-8 md:px-24" title="Title">
		<div class="grid md:grid-cols-2 h-[200px] gap-8">
			<div class="w-full flex justify-start items-center">
				<h1 class="h1big">meet the team</h1>
			</div>			
			<div class="flex justify-end items-center">
				<div class="pr-2"><CallToActionButton title="Join Now" /></div>
				<div class="pl-2"><CallToActionButton title="Contact" link="/contact" /></div>
			</div>
		</div>
	</section>
	<section title="Team Grid">
		<div class="flex flex-col md:grid md:grid-cols-3 w-full gap-8 p-8 md:px-24">
			{#each coaches as c}
				<div class="h-full flex flex-col" {@attach slideIn}>
					<div class="w-full h-full fca flex-col">
						<img
							class="w-full h-auto object-cover aspect-[22/22] max-w-[350px] md:max-w-[400px] object-top"
							src={c.img}
							alt={c.name}
						/>

						<div class="pt-4 w-full max-w-[350px] md:max-w-[400px]">
							<div class="h_sf_r_d_u text-[3rem]">{c.name}</div>
							<Accordion5 colorScheme={acs}>
								{#snippet title()}
									<h4>Meet {c.name}</h4>
								{/snippet}
								{#snippet panel()}
									<p class="prb pb-2 whitespace-pre-wrap">{c.text}</p>
								{/snippet}
							</Accordion5>
							<hr class="border-t-gray-500" />
							{#if c.newClients}
								<p class="prb pt-2">Accepting New Clients:</p>
							{/if}
							<p class="prb" class:pt-2={!c.newClients}>{c.title}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>
	<section class="px-4 md:px-20 py-4 md:py-20" title="Join">
		<div class="bg-g-black-500 w-full py-20">
			<GetStarted title="join today" />
		</div>
	</section>
	<section class="w-full bg-g-black-500" title="footer">
		<Footer />
	</section>
</main>
