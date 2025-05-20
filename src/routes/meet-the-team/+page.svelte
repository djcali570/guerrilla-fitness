<script lang="ts">
	import CallToActionButton from '$lib/components/CallToActionButton.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { acs } from '$lib/types';
	import { Accordion5 } from '@djcali570/component-lib';
	import type { Accordion5ColorScheme } from '@djcali570/component-lib';

	// Define coach type
	interface Coach {
		name: string;
		img: string;
		text: string;
		title: string;
		newClients: boolean;
	}

	let coaches: Coach[] = [
		{
			name: 'Emily',
			img: 'https://images.squarespace-cdn.com/content/v1/609aebc633b51e385cbaecb2/77e16544-9f44-4856-a7ac-f29b4f60da6a/Emily.jpg?format=2500w',
			text: 'Howdy friends! I’ve been doing CrossFit since 2012 and coaching since 2013. CrossFit showed me camaraderie and confidence, which are key things I aim to teach and share with others. Coaching is a beautiful balance of education, motivation, and accountability. For anyone on the fence thinking about changing their lifestyle habits, I say go for it and we’re here to help! Regardless of the time I coach, I will bring energy like I’ve just had a double shot of espresso.',
			title: 'Coach',
			newClients: true
		},
		{
			name: 'Karen',
			img: 'https://images.squarespace-cdn.com/content/v1/609aebc633b51e385cbaecb2/77e16544-9f44-4856-a7ac-f29b4f60da6a/Emily.jpg?format=2500w',
			text: 'Emily is a fool',
			title: 'Personal Training',
			newClients: false
		},
		{
			name: 'Stinky',
			img: 'https://images.squarespace-cdn.com/content/v1/609aebc633b51e385cbaecb2/77e16544-9f44-4856-a7ac-f29b4f60da6a/Emily.jpg?format=2500w',
			text: 'Emily sucks a ?',
			title: 'Nutrition Specialist',
			newClients: true
		}
	];
</script>

<svelte:head>
	<title>Guerrilla Fitness - Meet The Team</title>
	<meta name="description" content="About our coaches" />
	<meta property="og:title" content="Guerrilla Fitness - Meet The Team" />
	<meta property="og:description" content="About our coaches" />
	<meta property="og:image" content="https://www.guerrillafitness.net/myimage.jpg" />
	<meta name="twitter:card" content="https://www.guerrillafitness.net/myimage.jpg" />
</svelte:head>

<Nav />

<main class="nav__margin bg-g-white-500">
	<section class="bg-g-black-500">
		<div class="grid md:grid-cols-2 h-[200px]">
			<div class="w-full fca">
				<h1 class="h1big">meet the team</h1>
			</div>
			<div class="fca">
				<div class="pr-2"><CallToActionButton title="Join Now" /></div>
				<div class="pl-2"><CallToActionButton title="Contact" /></div>
			</div>
		</div>
	</section>
	<section>
		<div class="flex flex-col md:flex-row md:justify-evenly w-full gap-8 p-8">
			{#each coaches as c}
				<div class="h-full flex flex-col">
					<div class="w-full h-full fca flex-col">
						<img
							class="w-full h-auto object-cover aspect-[22/24] max-w-[350px]"
							src={c.img}
							alt={c.name}
						/>
						<div class="pt-4 w-full max-w-[350px]">
							<Accordion5 title={`Meet ${c.name}`} colorScheme={acs}>
								{#snippet panel()}
									<p class="prb pb-2">{c.text}</p>
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

	<div>Some other data</div>
</main>
