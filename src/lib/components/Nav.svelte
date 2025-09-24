<script lang="ts">
	import CallToActionButton from './CallToActionButton.svelte';
	import MenuButton from './MenuButton.svelte';
	import { links } from '$lib/state/appState.svelte';
	import { PUBLIC_PROJECT_ID, PUBLIC_WEB_IMAGE_ENDPOINT } from '$env/static/public';
	import { guerrillaColorScheme } from '$lib/colors';

	let activeItem: string | null = $state(null);

	function setActiveItem(title: string): void {
		activeItem = title;
	}
	function checkHideSubmenu(event: MouseEvent) {
		const target = event.target as HTMLElement;
		// Only hide if the mouse is not over the nav item or one of its submenu items
		if (!target.closest('.nav__item') && !target.closest('.submenu')) {
			activeItem = null;
		}
	}
</script>

<nav
	class="nav__container"
	onmouseleave={checkHideSubmenu}
	style="--primary: {guerrillaColorScheme['g-primary'][500]}; --black: {guerrillaColorScheme[
		'g-black'
	][500]}"
>
	<div class="nav__menu">
		<div class="nav__leading">
			<a href="/" class="hidden sm:block w-[180px]">
				<img
					src={`${PUBLIC_WEB_IMAGE_ENDPOINT}/6709df20c5ef3b5c29c0/view?project=${PUBLIC_PROJECT_ID}`}
					alt="Guerrilla Fitness Logo"
				/></a
			>
		</div>
		<div class="nav__center">
			<div class="sm:hidden flex items-center justify-center h-full">
				<a href="/" class="w-[180px]">
					<img
						src={`${PUBLIC_WEB_IMAGE_ENDPOINT}/6709df20c5ef3b5c29c0/view?project=${PUBLIC_PROJECT_ID}`}
						alt=""
					/></a
				>
			</div>

			<ul class="relative hidden sm:flex items-center justify-start h-full">
				{#each links as link}
					<li class="nav__item">
						<a href={link.href} onmouseenter={() => setActiveItem(link.title)}>{link.title}</a>
						{#if activeItem === link.title && link.sublinks}
							<div class="submenu shadow-lg" role="menu">
								{#each link.sublinks as sublink}
									<a href={sublink.href} role="menuitem">{sublink.title}</a>
								{/each}
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
		<div class="nav__actions">
			<div class="block sm:hidden"><MenuButton /></div>
			<div class="hidden sm:block"><CallToActionButton title="3 Class Trial" link="/memberships"/></div>
		</div>
	</div>
</nav>

<style lang="postcss">
	nav {
		display: flex;
	}
	.nav__item {
		position: relative;
	}
	.nav__item a {
		position: relative;
		display: block;
		padding-inline: 1rem;
		padding-block: 0.5rem;
		font-family: ibm-plex-medium;
		color: #fff;
		font-size: 14px;
		text-transform: uppercase;
	}
	.nav__item a:hover {
		color: var(--primary);
		transition-duration: 500ms;
	}
	.submenu {
		position: absolute;
		left: 0;
		display: block;
		width: 15rem;
		color: #fff;
		background: #000;
		text-align: left;
		border-radius: 0.375rem;
		overflow: hidden;
		transition-duration: 700ms;
		z-index: 1000;
	}
	.nav__item:hover .submenu {
		display: block;
	}
	.submenu a {
		display: block;
		padding-inline: 1rem;
		padding-block: 0.5rem;
		color: #fff;
	}

	.submenu a:hover {
		background-color: var(--black);
	}
</style>
