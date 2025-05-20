<script lang="ts">
	let { name, title }: { name: string; title: string } = $props();
</script>

<div class="absolute top-0 right-0 md:hidden">
	<div class="w-[200px] flex flex-col justify-center items-center bg-black">
		<h4 class="h4sr">{title}</h4>
		<h2 class="h2sb">{name}</h2>
	</div>
</div>
