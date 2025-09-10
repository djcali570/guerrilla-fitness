<script lang="ts">
	import { PUBLIC_PROJECT_ID, PUBLIC_WEB_IMAGE_ENDPOINT } from '$env/static/public';
	import { slideIn } from '$lib/gsapFunc';
	import ImageCard from './ImageCard.svelte';
</script>

<h3 class="h3sr">Programs</h3>
<div class="w-full flex justify-center mt-10">
	<div class="grid grid-rows-3 gap-4 lg:gap-10 md:grid-cols-3 md:grid-rows-12 w-full lg:w-[85%]">
		<div class="md:col-start-1 md:row-span-6 h-[430px] md:h-[300px] lg:h-[430px]">
			<div class="w-full h-full" {@attach slideIn}>
				<ImageCard
					imgLink="{PUBLIC_WEB_IMAGE_ENDPOINT}/pg-01/view?project={PUBLIC_PROJECT_ID}"
					title="CROSSFIT"
					desc="Unlimited access to classes 7 days/wk"
					overlay="filter brightness-75"					
				/>
			</div>
		</div>
		<div
			class="md:col-start-2 md:row-span-6 md:row-start-3 md:row-end-9 h-[430px] md:h-[300px] lg:h-[430px]"
		>
			<div class="w-full h-full flex justify-center" {@attach (node) => slideIn(node, 0.2)}>
				<ImageCard
					imgLink="{PUBLIC_WEB_IMAGE_ENDPOINT}/pg-02/view?project={PUBLIC_PROJECT_ID}"
					title="NUTRITION"
					desc="Optimize your health with Nutrition and accountability coaching"
					overlay="filter brightness-75 object-[50%_90%]"						
				/>
			</div>
		</div>
		<div
			class="md:col-start-3 md:row-span-6 md:row-start-5 md:row-end-11 h-[430px] md:h-[300px] lg:h-[430px]"
		>
			<div class="w-full h-full flex justify-end" {@attach (node) => slideIn(node, 0.5)}>
				<ImageCard
					imgLink="{PUBLIC_WEB_IMAGE_ENDPOINT}/pg-03/view?project={PUBLIC_PROJECT_ID}"
					title="PRIVATE TRAINING"
					desc="Pursue your goals with focused 1-on-1 or small group coaching sessions"
					overlay="filter brightness-75 object-[70%_50%]"
				/>
			</div>
		</div>
	</div>
</div>
