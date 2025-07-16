<script lang="ts">
	import { onMount } from 'svelte';
	import CallToActionButton from './CallToActionButton.svelte';
	import gsap from 'gsap';
	import type { Carousel } from '$lib/types';
	import { mainCarouselitems } from '$lib/state/appState.svelte';

	let { items = mainCarouselitems }: { items?: Carousel[] } = $props();

	let currentIndex: number = $state(0);
	let carouselContainer: HTMLElement;
	let images: HTMLElement[] = [];
	let texts: HTMLElement[] = $state([]);
	let indexes: HTMLElement[] = $state([]);

	onMount(() => {
		const imgs = gsap.context((self) => {
			if (self.selector) {
				images = self.selector('.pic');
				texts = self.selector('.text__items');
				indexes = self.selector('.index__p');

				// Set initial state
				for (let i = 1; i < images.length; i++) {
					gsap.set(images[i], { autoAlpha: 0 });
					gsap.set(texts[i], { autoAlpha: 0 });
					gsap.set(indexes[i], { autoAlpha: 0 });
				}
			}
		}, carouselContainer);

		// Start the crossFade after setting initial states
		setTimeout(() => setInterval(crossFade, 5000), 100);

		return () => {
			imgs.revert();
		};
	});

	function crossFade() {
		const prevIndex = currentIndex;
		currentIndex = (currentIndex + 1) % items.length;

		// Fade out the previous item
		gsap.to(images[prevIndex], { autoAlpha: 0 });
		gsap.to(texts[prevIndex], { autoAlpha: 0 });
		gsap.to(indexes[prevIndex], { autoAlpha: 0 });

		// Fade in the current item
		gsap.to(images[currentIndex], { autoAlpha: 1 });
		gsap.to(texts[currentIndex], { autoAlpha: 1 });
		gsap.to(indexes[currentIndex], { autoAlpha: 1 });
	}
</script>

<div>
	<div
		class="w-full flex flex-col md:flex-none md:grid md:grid-cols-2 text-white"
		bind:this={carouselContainer}
	>
		<div
			class="relative flex flex-col md:flex-none md:grid md:grid-rows-9 w-full h-[420px] md:h-[700px]"
		>
			<div class="flex justify-start pt-0 md:pt-10 md:row-span-2">
				<h1 class="s__font__b text-[3rem] leading-[3rem] tracking-wider uppercase">
					{items[currentIndex].title}
				</h1>
			</div>

			<div class="relative h-10 md:hidden">
				{#each items}
					<p class="index__p p__font__r text-[1rem] absolute right-0">
						{currentIndex + 1} / {items.length}
					</p>
				{/each}
			</div>
			<div class="w-full h-full md:row-span-6 relative pt-4">
				{#each items as item}
					<div class="text__items absolute top-0 left-0">
						<h4 class="sub__t s__font__r">
							{item.subtitle}
						</h4>
						<p class="text__p p__font__r">{item.text}</p>
						{#if item.showButton}
							<div class="pt-6"><CallToActionButton title={item.buttonText} /></div>
						{/if}
					</div>
				{/each}
			</div>

			<div class="hidden md:flex md:justify-start md:items-end">
				<div class="w-full h-full relative">
					{#each items}
						<p class="index__p p__font__r text-[1rem] absolute bottom-0 left-0">
							{currentIndex + 1} / {items.length}
						</p>
					{/each}
				</div>
			</div>
		</div>
		<div class="md:grid md:grid-rows-3 w-full h-[700px] px-0 md:pl-12 py-4">
			<div class="w-full h-full md:row-span-3">
				<div class="w-full h-full relative">
					{#each items as item}
						<img class="pic" src={item.img} alt="" />
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.pic {
		@apply absolute top-0 left-0 w-full h-full object-cover;
	}

	.sub__t {
		@apply text-[1.8rem] uppercase tracking-[0.12rem];
	}
	.text__p {
		@apply text-[1.6rem] pt-4;
	}
</style>
