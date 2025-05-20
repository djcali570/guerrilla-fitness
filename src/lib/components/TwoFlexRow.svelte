<script lang="ts">
	import type { Snippet } from 'svelte';

	let { row1, row2 }: { row1: Snippet; row2: Snippet } = $props();
</script>

<section>
	<div>{@render row1()}</div>
	<div>{@render row2()}</div>
</section>

<style lang="postcss">
	section {
		@apply w-full flex flex-col lg:flex-row;
	}
	section div {
		@apply w-full;
	}
</style>
