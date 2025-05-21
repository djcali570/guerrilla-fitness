<script lang="ts">
	import { PUBLIC_WEB_IMAGE_ENDPOINT } from '$env/static/public';
	import ImageCard from './ImageCard.svelte';
</script>

<h3 class="h3sr">Offerings</h3>
<div class="grid grid-rows-3 gap-3 md:gap-0 md:grid-cols-3 md:grid-rows-12">
	<div class="md:col-start-1 md:row-span-6 h-[430px]">
		<div class="w-full h-full">
			<ImageCard
				imgLink="{PUBLIC_WEB_IMAGE_ENDPOINT}/photoa/view?project=guerrilla&project=guerrilla"
				title="CROSSFIT"
				desc="Unlimited access to 40+ CrossFit classes per week"
			/>
		</div>
	</div>
	<div class="md:col-start-2 md:row-span-6 md:row-start-3 md:row-end-9 h-[430px]">
		<div class="w-full h-full flex justify-center">
			<ImageCard
				imgLink="{PUBLIC_WEB_IMAGE_ENDPOINT}/photob/view?project=guerrilla&project=guerrilla"
				title="NUTRITION"
				desc="Dial in your nutrition with Nutrition and Accountability coaching"
			/>
		</div>
	</div>
	<div class="md:col-start-3 md:row-span-6 md:row-start-5 md:row-end-11 h-[430px]">
		<div class="w-full h-full flex justify-end">
			<ImageCard
				imgLink="{PUBLIC_WEB_IMAGE_ENDPOINT}/photoc/view?project=guerrilla&project=guerrilla"
				title="PRIVATE TRAINING"
				desc="Work towards specific goals with private personal training"
			/>
		</div>
	</div>
</div>
