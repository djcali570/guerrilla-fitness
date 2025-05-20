<script lang="ts">
	import IconChevRight from '$lib/icons/IconChevRight.svelte';
	import { links, menuActions } from '$lib/state/appState.svelte';
	import type { link } from '$lib/types';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	const menu = menuActions();
	let subMenu = $state(false);
	let activeSubmenu = $state<link | null>(null);

	let topLine = $derived(menu.menuStatus ? 'topLine-open' : 'topLine-closed');
	let bottomLine = $derived(menu.menuStatus ? 'bottomLine-open' : 'bottomLine-closed');

	function handleSublink(selectedLink: link) {
		subMenu = true;
		activeSubmenu = selectedLink;
	}

	function handleBack() {
		subMenu = false;
	}
</script>

<button
	aria-label="Toggle Menu"
	class="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center hover:scale-110 rounded-full transition-all"
	onclick={menu.updateStatus}
>
	<div class="flex flex-col items-start">
		<hr class="w-4 border-[1px] mb-2 transition-all {topLine}" />
		<hr class="w-6 border-[1px] transition-all {bottomLine}" />
	</div>
</button>

{#if menu.menuStatus}
	<div
		class="w-[100vw] h-full fixed top-[80px] left-0 bg-black text-white"
		transition:fly={{ y: 50, duration: 300 }}
	>
		<div class="h-[calc(100vh-80px)] w-[100vw] min-w-[100vw] relative">
			{#if !subMenu}
				<div
					class="flex flex-col gap-5 justify-center items-start px-10 w-full h-full absolute top-0 left-0"
					in:fly={{ x: -100, duration: 300, easing: quintOut, delay: 400 }}
					out:fly={{ x: -100, duration: 300, easing: quintOut }}
				>
					{#each links as link}
						<div class="flex items-center">
							{#if link.sublinks}
								<button onclick={() => handleSublink(link)}>
									<p class="p_pf_r_l text-2xl uppercase pr-2">{link.title}</p>
								</button>
							{:else}
								<a href={link.href} class="p_pf_r_l text-2xl uppercase pr-2">{link.title}</a>
							{/if}
							{#if link.sublinks}
								<div class="w-6 h-6 text-gray-500">
									<IconChevRight />
								</div>
							{/if}
						</div>
					{/each}
				</div>
			{:else if activeSubmenu}
				<div
					class="flex flex-col gap-5 justify-center items-start px-10 w-full h-full absolute top-0 left-0"
					in:fly={{ x: 100, duration: 300, easing: quintOut, delay: 300 }}
					out:fly={{ x: 100, duration: 300, easing: quintOut }}
					onoutroend={() => {
						if (!subMenu) activeSubmenu = null;
					}}
				>
					<button onclick={handleBack}>
						<div class="flex items-center">
							<div class="w-6 h-6 text-gray-500 rotate-180">
								<IconChevRight />
							</div>
							<p class="p_pf_r_l text-2xl uppercase pl-2">Back</p>
						</div>
					</button>
					{#each activeSubmenu.sublinks || [] as link}
						<a href={link.href} class="p_pf_r_l text-2xl uppercase pr-2">{link.title}</a>
					{/each}
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.topLine-open {
		transform: rotate(45deg) translate(4px, 3px);
		width: 24px;
	}

	.topLine-closed {
		transform: rotate(0deg);
		width: 16px;
	}

	.bottomLine-open {
		transform: rotate(-45deg) translate(4px, -3px);
		width: 24px;
	}

	.bottomLine-closed {
		transform: rotate(0deg);
	}
</style>
