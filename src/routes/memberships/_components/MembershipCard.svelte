<script lang="ts">
	import CallToActionButton from '$lib/components/CallToActionButton.svelte';
	import { fade, slideIn } from '$lib/gsapFunc';
	import type { MembershipCardData } from '$lib/types';
	import { Dialog5 } from '@djcali570/component-lib';

	let {
		mcd,
		buttonType
	}: {
		mcd: MembershipCardData;
		buttonType: 'link' | 'btn';
	} = $props();

	let currentCard: MembershipCardData = $state(mcd);
	let modalStatus: boolean = $state(false);

	function updateCard(card: MembershipCardData) {
		currentCard = card;
	}
</script>

<div class="w-full h-full bg-[#f4f5f2]">
	<div class="relative p-6 flex flex-col h-full">
		{#if mcd.recommended}
			<p
				class="bg-g-primary-500 p_pf_r_l_u text-sm absolute top-0 left-0 w-full  h-7 p-1"
			>
				Recommended
			</p>
		{/if}
		<!-- {#if mcd.price}
			<div class="w-full flex justify-end pt-2">
				<h2 class="h_pf_b_d_u text-[2rem]" {@attach fade}>
					${mcd.price}
					<span
						>{#if mcd.priceAbbv}
							/ {mcd.priceAbbv}
						{/if}</span
					>
				</h2>
			</div>
		{/if} -->
		<div class="py-12">
			<div class="w-full flex justify-start md:h-8">
				<h2 class="h_pf_b_d_u text-[0.8rem] md:text-[1.2rem]" style="white-space: pre-line;">
					{mcd.subTitle}
				</h2>
			</div>
			<div class="w-full flex justify-start">
				<h1
					class="h_sf_b_d_u text-[2.3rem] md:text-[3rem] leading-[3rem]"
					style="letter-spacing: 2pt;"
					{@attach slideIn}
				>
					{mcd.title}
				</h1>
			</div>
			<div class="w-full flex justify-start pt-4" {@attach fade}>
				{#if mcd.bullets}
					<ul class="pfr text-[#525353] list-outside list-disc pl-4">
						{#each mcd.bullets as bullet}
							<li class="py-1">{bullet}</li>
						{/each}
					</ul>
				{:else}
					<!-- <p class="pfr text-[#525353] whitespace-pre-line">{mcd.desc}</p> -->
				{/if}
			</div>
		</div>
		<div class="absolute bottom-0 right-0">
			<CallToActionButton
				textColor="#FFF"
				title={mcd.buttonTitle ? mcd.buttonTitle : 'Join Now'}
				link={mcd.link}
				useSlideIn={true}
				type={buttonType}
				click={() => {
					updateCard(mcd);
					modalStatus = true;
				}}
			/>
		</div>
	</div>
</div>

<Dialog5 bind:modalStatus dialogType="ok" okButtonText="Cancel">
	{#snippet title()}
		<div class="py-2">Gym Selection</div>
	{/snippet}
	{#snippet content()}
		<div class="max-w-[350px]">
			<div
				class="w-full h-full flex flex-col justify-center items-center px-4 p_pf_r_l text-center"
			>
				<div>Please Select a gym</div>

				<div class="flex gap-2 pt-4">
					<CallToActionButton title="Montclair" link={currentCard.link} />
					<CallToActionButton title="Paramus" link={currentCard.link2} />
				</div>
			</div>
		</div>
	{/snippet}
</Dialog5>
