<script lang="ts">
	let { imgLink, title, desc }: { imgLink: string; title: string; desc?: string } = $props();
</script>

<div class="w-full h-full relative max-w-full md:max-w-[350px]">
	<img src={imgLink} alt="card" class="w-full h-full object-cover" />
	<div class="w-full flex flex-col justify-center absolute bottom-[8%] px-2">
		<h1 class=" text-g-white-500 s__font__b text__title text-center leading-[3rem]">{title}</h1>
		<div class="md:hidden bg-black w-full flex justify-center py-4">
			<p class="prw text-center">{desc}</p>
		</div>
	</div>
	<div class="hidden md:w-full md:flex md:justify-center md:px-2 md:pt-2">
		<p class="text-g-white-500 text-center p__font__r p__text__m">{desc}</p>
	</div>
</div>
