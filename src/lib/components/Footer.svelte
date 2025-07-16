<script>
	import { slideIn } from '$lib/gsapFunc';
	import IconFacebook from '$lib/icons/IconFacebook.svelte';
	import IconInstagram from '$lib/icons/IconInstagram.svelte';
	import IconYouTube from '$lib/icons/IconYouTube.svelte';
	import CallToActionButton from './CallToActionButton.svelte';
</script>

<div class="w-full py-8">
	<div class="grid grid-cols-2 md:grid-cols-5 grid-flow-row auto-rows-min text-g-white-500">
		<div class="grid grid-rows-2 pl-4 md:pl-0" {@attach (node) => slideIn(node, 0.1)}>
			<div class="flex justify-start items-center md:justify-center">
				<h4 class="h4sr">get started</h4>
			</div>
			<div class="flex justify-start items-center md:justify-center pb-4">
				<CallToActionButton title="3 Class Trial" />
			</div>
		</div>
		<div class="grid grid-rows-2" {@attach (node) => slideIn(node, 0.2)}>
			<div class="fsc">
				<h4 class="h4sr">about</h4>
			</div>
			<ul class="fss flex-col pb-4">
				<li class="x">
					<a href="/" class="a__pr">New to Guerrilla Fitness</a>
				</li>
				<a href="/" class="a__pr">3 Trial Class</a>
			</ul>
		</div>
		<div class="grid auto-rows-min md:grid-rows-2 pl-4 md:pl-0 pt-10 md:pt-0" {@attach (node) => slideIn(node, 0.3)}>
			<div class="fsc">
				<h4 class="h4sr">locations</h4>
			</div>
			<ul class="flex items-start justify-start flex-col pb-4">
				<li><a href="/montclair" class="a__pr">Montclair</a></li>
				<li><a href="/paramus" class="a__pr">Paramus</a></li>
			</ul>
		</div>
		<div class="grid auto-rows-min md:grid-rows-2 pt-10 md:pt-0" {@attach (node) => slideIn(node, 0.4)}>
			<div class="fsc">
				<h4 class="h4sr">contact</h4>
			</div>
			<ul class="fss flex-col pb-4">
				<li>
					<a href="mailto:info@guerrillafitness.net" class="a__pr">info@guerrillafitness.net</a>
				</li>
				<li><a href="tel:+19733376538" class="a__pr">Montclair | 1-973-337-6538</a></li>
				<li><a href="tel:+12019675000" class="a__pr">Paramus | 1-201-967-5000</a></li>
			</ul>
		</div>
		<div class="fca gap-4 col-span-2 md:col-span-1 pt-10 md:pt-0" {@attach (node) => slideIn(node, 0.5)}>
			<div
				class="fca size-10 rounded-full text-g-white-500 border-g-white-500 border-[2px] hover:border-g-white-700 duration-300 hover:text-g-white-700"
			>
				<a
					href="https://www.instagram.com/guerrillafitnesscrossfit/"
					class="size-[28px]"
					title="Follow us on Instagram"
					target="_blank"
					rel="noopener noreferrer"
				>
					<IconInstagram />
				</a>
			</div>
			<div
				class="fca size-10 rounded-full text-g-white-500 border-g-white-500 border-[2px] hover:border-g-white-700 duration-300 hover:text-g-white-700"
			>
				<a
					href="https://www.instagram.com/guerrillafitnesscrossfit/"
					class="size-[28px]"
					title="Follow us on Instagram"
					target="_blank"
					rel="noopener noreferrer"
				>
					<IconYouTube />
				</a>
			</div>
			<div
				class="fca size-10 rounded-full text-g-white-500 border-g-white-500 border-[2px] hover:border-g-white-700 duration-300 hover:text-g-white-700"
			>
				<a
					href="https://www.facebook.com/GuerrillaFitnessHQ"
					class="size-[28px]"
					title="Follow us on Facebook"
					target="_blank"
					rel="noopener noreferrer"
				>
					<IconFacebook />
				</a>
			</div>
		</div>
	</div>
</div>
