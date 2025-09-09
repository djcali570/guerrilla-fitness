<script lang="ts">
	import { PUBLIC_WEB_IMAGE_ENDPOINT } from "$env/static/public";

	let {
		imageLinks,
		desktopHeight = 590,
		mobileHeight = 390
	}: { imageLinks: string[]; desktopHeight?: number; mobileHeight?: number } = $props();
</script>

{#if imageLinks.length > 0}
	<section style="--desktopHeight: {desktopHeight}px; --mobileHeight: {mobileHeight}px">
		<div class="card__carosuel__container">
			{#each imageLinks as image}
				<a class="card__carosuel__item" href="/" style="filter: brightness(100%);">
					<div class="w-full h-full">
						<div class="c__card">
							<img class="w-full h-full object-cover" src={`${PUBLIC_WEB_IMAGE_ENDPOINT}/${image}/view?project=guerrilla&project=guerrilla`} alt="" />
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>
{/if}

<style>
	.card__carosuel__container {
		display: flex;
		overflow-x: auto;
		scroll-padding: 1.5rem;
		scroll-snap-type: x mandatory;
		scrollbar-width: none;

		@media (min-width: 768px) {
			scroll-padding: 40px;
		}

		@media (min-width: 1024px) {
			scroll-padding: 60px;
		}

		@media (min-width: 1280px) {
			scroll-padding: 80px;
		}
	}

	.card__carosuel__item {
		display: flex;
		flex-grow: 1;
		flex-shrink: 0;
		flex-basis: calc(100% - 84px);
		max-width: calc(588px + max(80px, -800px + 50vw));
		scroll-snap-align: start;
		scroll-snap-stop: always;
		margin-left: 1rem;

		@media (min-width: 768px) {
			height: var(--mobileHeight);
			flex-basis: calc(75% - 20px);
			max-width: calc(588px + 40px);
		}

		@media (min-width: 1024px) {
			height: var(--desktopHeight);
			flex-basis: calc(50% - 8px);
		}
	}

	.card__carosuel__item:first-child {
		margin-left: 0px;

		/* @media (min-width: 768px) {
			margin-left: 40px;
		}

		@media (min-width: 1024px) {
			margin-left: 40px;
		}

		@media (min-width: 1280px) {
			margin-left: 80px;
		} */
	}

	/* .card__carosuel__item:last-child {
		margin-right: 20px;

		@media (min-width: 768px) {
			margin-right: 40px;
		}

		@media (min-width: 1024px) {
			margin-right: 40px;
		}

		@media (min-width: 1280px) {
			margin-right: 80px;
		}
	} */

	.c__card {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 0.75rem;
		overflow: hidden;
	}
</style>
