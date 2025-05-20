<script lang="ts">
	let { name, title }: { name: string; title: string } = $props();
</script>

<div class="hidden md:flex md:flex-col md:w-full">
	<h4 class="flex w-full justify-center text-[.8rem] p__font__m uppercase">{title}</h4>
	<h3 class="flex w-full justify-center text-[2.5rem] s__font__b uppercase">{name}</h3>
</div>
