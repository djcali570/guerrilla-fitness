<script lang="ts">
	import CallToActionButton from '$lib/components/CallToActionButton.svelte';
	import { fade, slideIn } from '$lib/gsapFunc';
	import type { MembershipCardData } from '$lib/types';

	let { mcd }: { mcd: MembershipCardData } = $props();
</script>

<div class="w-full h-full bg-[#f4f5f2]">
	<div class="relative p-6 flex flex-col h-full">
		{#if mcd.price}
			<div class="w-full flex justify-end">
				<h2 class="h_pf_b_d_u text-[2rem]" {@attach fade}>
					${mcd.price}
					<span
						>{#if mcd.priceAbbv}
							/ {mcd.priceAbbv}
						{/if}</span
					>
				</h2>
			</div>
		{/if}
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
					<p class="pfr text-[#525353] whitespace-pre-line">{mcd.desc}</p>
				{/if}
			</div>
		</div>
		<div class="absolute bottom-0 right-0">
			<CallToActionButton
				textColor="#FFF"
				title={mcd.buttonTitle ? mcd.buttonTitle : 'Join Now'}
				link={mcd.link}
				useSlideIn={true}
			/>
		</div>
	</div>
</div>
