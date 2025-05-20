<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, text }: { title: Snippet; text: string } = $props();
</script>

<div class="px-4 md:px-32">
	<div class="grid grid-rows-[min-content_1fr] md:grid-cols-2">
		<div class="w-full flex justify-start">
			{@render title()}
		</div>

		<div class="pt-6 md:pt-0 w-full fca">
			<p class="prw">
				{text}
			</p>
		</div>
	</div>
</div>
