<script lang="ts">
	import CallToActionButton from './CallToActionButton.svelte';
	let { title = 'Get Started' }: { title?: string } = $props();
</script>

<div class="w-full flex flex-col">
	<div class="w-full flex justify-center">
		<h4 class="h4sr" style="letter-spacing: 1pt;">CrossFit. Nutrition. Accountability. Results.</h4>
	</div>
	<div class="w-full flex justify-center py-6 md:py-8">
		<h1 class="video__title__text">{title}</h1>
	</div>
	<div class="w-full flex justify-center">
		<CallToActionButton title="3 Class Trial" />
	</div>
</div>
