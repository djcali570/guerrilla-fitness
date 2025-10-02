<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let {
		tabs,
		minHeight = 32,
		selectedTab = $bindable(),
		bgColor = 'bg-g-black-600',
		indicatorColor = 'bg-g-primary-500',
		textColor = 'text-g-white-500',
		selectedTextColor = 'text-g-white-500'
	}: {
		tabs: string[];
		minHeight?: number;
		selectedTab: number;
		bgColor?: string;
		indicatorColor?: string;
		textColor?: string;
		selectedTextColor?: string;
	} = $props();

	let indicator: HTMLElement | null;
	let lastLocation: number = 0;
	let indicatorHeight: number = 0;
	const id = generateRandomString();

	function tabChange(index: number) {
		selectedTab = index;
		const to = index * (100 / tabs.length);

		slideIndicator(lastLocation, to);
		lastLocation = to;
	}

	onMount(() => {
		indicator = document.querySelector(`#air-tab-indicator-${id}`);
		const tabContainer = document.querySelector(`#air-tab-container-${id}`);

		if (tabContainer) {
			indicatorHeight = tabContainer?.getBoundingClientRect().height;
		}
	});

	function slideIndicator(from: number, to: number) {
		gsap.fromTo(
			indicator,
			{ left: `${from}%`, ease: 'power4.out' },
			{ left: `${to}%`, ease: 'power4.out' }
		);
	}

	/**
	 * Generate a random string so that each
	 * picker will have a unique id in the dom
	 */
	function generateRandomString() {
		const length = 6;
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		let result = '';
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * characters.length);
			result += characters.charAt(randomIndex);
		}

		return result;
	}
</script>

<div id="air-tab-{id}" class="air-tab-wrapper">
	<div
		id="air-tab-container-{id}"
		class="air__tab__container {bgColor} {textColor}"
		style="min-height: {minHeight}px;"
	>
		{#each tabs as tab, index}
			<button
				onclick={() => tabChange(index)}
				class="air__tab__item transition-colors duration-500 z-20 cursor-pointer {selectedTab ===
				index
					? selectedTextColor
					: ''}">{tab}</button
			>
		{/each}
	</div>
	<div
		id="air-tab-indicator-{id}"
		class="air__tab__indicator {indicatorColor}"
		style="width: {100 / tabs.length}%; min-height: {minHeight}px;"
	></div>
</div>

<style>
	.air__tab__container {
		position: relative;
		display: grid;
		grid-auto-columns: minmax(0px, 1fr);
		grid-auto-flow: column;
		border-radius: 0.75rem
	}

	.air__tab__container button:first-child {
		border-top-left-radius: 0.75rem;
		border-bottom-left-radius: 0.75rem;
	}

	.air__tab__container button:last-child {
		border-top-right-radius: 0.75rem;
		border-bottom-right-radius: 0.75rem;
	}

	.air__tab__container button {
		background-image: linear-gradient(to bottom, rgba(255 255 255/0.02), rgba(255 255 255/0));
		padding: 4px 4px;
	}
	.air__tab__indicator {
		position: absolute;
		top: 0;
		border-radius: 0.75rem;
		background-image: linear-gradient(to bottom, rgba(255 255 255/0.02), rgba(255 255 255/0));
	}
	.air-tab-wrapper {
		position: relative;
	}
	.air__tab__item {
		padding: 4px 4px;
	}
</style>
