<script lang="ts">
	import { slideIn } from "$lib/gsapFunc";

	let { title, mobile }: { title: string; mobile: boolean } = $props();
	let displayStyle = mobile ? 'hidden md:block min-h-full' : 'test';
</script>

<div class={displayStyle} {@attach slideIn}>
	<div class="grid grid-cols-1 h-full">
		<div class="flex items-center justify-start">
			<h2 class="h2sb pb-8 md:pb-0">{title}</h2>
		</div>
	</div>
</div>
