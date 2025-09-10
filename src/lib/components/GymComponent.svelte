<script lang="ts">
	import type { Gym } from '$lib/types';
	import type { Snippet } from 'svelte';

	let { gym, showExtra = true, extraContent }: { gym: Gym; showExtra?: boolean, extraContent?: Snippet } = $props();

	function stripPhoneNumber(phone: string) {
		return phone.replace(/-/g, '');
	}
</script>

<div
	class="grid {gym.image
		? 'grid-rows-[1fr_min-content_min-content] md:grid-cols-2'
		: 'md:grid-cols-2'} h-full md:h-[600px]"
>
	<div class="flex flex-col justify-center order-2 md:order-1">
		<div>
			<h2 class="h2sb">guerrilla fitness</h2>
			<h1 class="h1sb">{gym.name}</h1>
		</div>
		<div class="prw mt-10 flex flex-col gap-1">
			<p>{gym.address}</p>
			<p class="pt-3">Text or Email:</p>
			<a href="mailTo:info@guerrillafitness.net" class="prw">{gym.email}</a>
			<a href={`tel:+${stripPhoneNumber(gym.phone)}`} class="prw">{gym.phoneDisplay}</a>
			<a href="mailTo:info@guerrillafitness.net" class="prw">info@guerrillafitness.net</a>
			{#if showExtra}
				{#if gym.access}
					<div class="pt-3">
						{#each gym.access as access}
							<p class="text-xs">{access}</p>
						{/each}
					</div>
				{/if}
				{#if gym.servicing}
					<div class="pt-3">
						{#each gym.servicing as servicing}
							<p class="text-xs max-w-[350px]">{servicing}</p>
						{/each}
					</div>
				{/if}
			{/if}
		</div>
	</div>
	{#if gym.image}
		<div class="grid md:grid-rows-[450px_150px] order-1 md:order-2">
			<div class="w-full h-[250px] md:h-full pb-5">
				<img src={gym.image} alt="card" class="w-full h-full object-cover" />
			</div>
			<div class="hidden md:block">
				<div class="w-full flex justify-center items-center bg-gray-700 h-full">
					<h2 class="h2sb">MAP HERE</h2>
				</div>
			</div>
		</div>
		<div class="block md:hidden order-3 pt-8">
			<div class="w-full flex justify-center items-center bg-gray-700 h-[230px]">
				<h2 class="h2sb">MAP HERE</h2>
			</div>
		</div>
	{:else}
		<div
			class="w-full flex justify-center items-center mt-8 md:mt-0 bg-gray-700 min-h-[270px] order-2"
		>
			<h2 class="h2sb">MAP HERE</h2>
		</div>
	{/if}
</div>
