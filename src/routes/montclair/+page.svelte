<script lang="ts">
	import { PUBLIC_PROJECT_ID, PUBLIC_WEB_IMAGE_ENDPOINT } from '$env/static/public';
	import CallToActionButton from '$lib/components/CallToActionButton.svelte';
	import ColumnTitleandText from '$lib/components/ColumnTitleandText.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import GetStarted from '$lib/components/GetStarted.svelte';
	import GymComponent from '$lib/components/GymComponent.svelte';
	import ImageSlider5 from '$lib/components/ImageSlider5.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Offerings from '$lib/components/Offerings.svelte';
	import VideoPlayer from '$lib/components/VideoPlayer.svelte';
	import type { ScheduleItem, scheduleType, weekday } from '$lib/types';
	import { gyms } from '$lib/state/appState.svelte';

	let sliderImages: string[] = [
		'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
		'https://images.unsplash.com/photo-1519681393784-d120267933ba',
		'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df',
		'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
		'https://images.unsplash.com/photo-1742301039878-3ec6e0d15078'
	];

	let schedule: ScheduleItem[] = [
		{ day: 'Monday', time: '5:30AM', scheduleType: 'Crossfit' },
		{ day: 'Monday', time: '7:00AM', scheduleType: 'Crossfit' },
		{ day: 'Monday', time: '6:30PM', scheduleType: 'Strength' },
		{ day: 'Tuesday', time: '5:30AM', scheduleType: 'Crossfit' },
		{ day: 'Tuesday', time: '5:30AM', scheduleType: 'Crossfit' },
		{ day: 'Tuesday', time: '7:00AM', scheduleType: 'Crossfit' },
		{ day: 'Wednesday', time: '5:30AM', scheduleType: 'Crossfit' },
		{ day: 'Wednesday', time: '3:30PM', scheduleType: 'Open Gym' },
		{ day: 'Wednesday', time: '6:30PM', scheduleType: 'Strength' },
		{ day: 'Thursday', time: '6:30PM', scheduleType: 'Crossfit' },
		{ day: 'Wednesday', time: '5:30AM', scheduleType: 'Crossfit' }
	];

	const days: weekday[] = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday'
	];

	// Group schedule items by day and schedule type
	const groupedByDay = days.reduce(
		(acc, day) => {
			const dayItems = schedule.filter((item) => item.day === day);
			if (dayItems.length > 0) {
				acc[day] = {
					Crossfit: dayItems.filter((item) => item.scheduleType === 'Crossfit'),
					'Open Gym': dayItems.filter((item) => item.scheduleType === 'Open Gym'),
					Strength: dayItems.filter((item) => item.scheduleType === 'Strength')
				};
			}
			return acc;
		},
		{} as Record<weekday, Record<scheduleType, ScheduleItem[]>>
	);

	// Get unique days that have schedules
	const activeDays = days.filter((day) => groupedByDay[day]);

	// Calculate the maximum number of time slots for each day
	const maxSlotsPerDay = activeDays.reduce(
		(acc, day) => {
			const crossfitCount = groupedByDay[day]?.Crossfit?.length || 0;
			const openGymCount = groupedByDay[day]?.['Open Gym']?.length || 0;
			const strengthCount = groupedByDay[day]?.Strength?.length || 0;
			acc[day] = Math.max(crossfitCount, openGymCount, strengthCount, 1); // Ensure at least 1 slot
			return acc;
		},
		{} as Record<weekday, number>
	);
</script>

<svelte:head>
	<title>Guerrilla Fitness - Montclair</title>
	<meta name="description" content="About our Montclair Location" />
	<meta property="og:title" content="Guerrilla Fitness - Montclair" />
	<meta property="og:description" content="About our Montclair Location" />
	<meta property="og:image" content="https://www.guerrillafitness.net/myimage.jpg" />
	<meta name="twitter:card" content="https://www.guerrillafitness.net/myimage.jpg" />
</svelte:head>

<Nav />

<main class="nav__margin">
	<section class="video__section" title="Video">
		<div class="main__video">
			<VideoPlayer
				videoSource="{PUBLIC_WEB_IMAGE_ENDPOINT}/montclair_header_video/view?project={PUBLIC_PROJECT_ID}"
				showControls={false}
			/>
			<div class="video__overlay"></div>
			<div class="overlay__content">
				<p class="prwu">Effort Over Everything</p>
				<h1 class="video__title__text text-center">Guerrilla Crossfit<br /> Montclair</h1>
				<p class="prwu">19 Elm Street, Montclair, NJ 07042</p>
				<div class="pt-8"><CallToActionButton title="Join Now" /></div>
			</div>
		</div>
	</section>
	<section class="pt-16" title="Crossfit">
		<ColumnTitleandText
			text="Thrive in an atmosphere where people encourage and motivate each other in every class as they work toward their individual goals together."
		>
			{#snippet title()}
				<h1 class="h1sb">best hour<br />of your day.</h1>
			{/snippet}
		</ColumnTitleandText>
	</section>
	<section class="px-4 md:px-32 py-16" title="Offerings">
		<Offerings />
	</section>
	<section class="px-4 md:px-32 md:py-16 pb-16" title="Features">
		<div
			class="w-full grid grid-rows-[min-content_1fr_1fr] md:grid-cols-3 border-t-0 md:border-t-[1px] border-g-white-500"
		>
			<div class="pt-0 md:pt-10 border-b-[1px] md:border-b-0">
				<h3 class="h3sr pb-4 md:pb-0">Features</h3>
			</div>
			<div class="pt-10">
				<!-- <p class="prw">Offerings</p> -->
				<ul class="pt-4 prw">
					<li>- Open 7 days a week</li>
					<li>- Convenient and accessible schedule</li>
					<li>- 1-on-1 & small group personal training</li>
				</ul>
			</div>
			<div class="pt-10">
				<!-- <p class="prw">Amenities</p> -->
				<ul class="pt-4 prw">
					<li>- Open gym hours</li>
					<li>- Showers</li>
					<li>- Communal space</li>
					<li>- Members only events</li>
				</ul>
			</div>
		</div>
	</section>
	<section class="hidden md:block px-4 md:px-32 md:py-16 pb-16" title="Get Started">
		<GetStarted />
	</section>
	<section class="px-4 md:px-32 md:py-16 pb-16" title="Slider">
		<ImageSlider5 imageLinks={sliderImages} />
	</section>
	<section class="px-4 md:px-32 md:py-16 pb-16" title="Schedule">
		<div class="w-full grid md:grid-cols-2 grid-cols-none grid-flow-row auto-rows-min">
			<h2 class="h2sb pb-4 md:pb-0">Schedule</h2>
			<div class="grid grid-cols-4 gap-4">
				<!-- Weekday Column -->
				<div class="grid grid-flow-row auto-rows-min">
					<div class="h4sr h-8"></div>
					<!-- Spacer for header alignment -->
					{#each activeDays as day}
						{#each Array(maxSlotsPerDay[day]) as _, i}
							<div class="h4sr min-h-[1.5rem] flex items-start">
								{#if i === 0}
									{day}
								{:else}
									&nbsp;
								{/if}
							</div>
						{/each}
						<div class="h4sr">&nbsp;</div>
					{/each}
				</div>

				<!-- Crossfit Column -->
				<div class="grid grid-flow-row auto-rows-min">
					<h4 class="h4sr underline h-8">Crossfit</h4>
					{#each activeDays as day}
						{#if groupedByDay[day]?.Crossfit?.length}
							{#each groupedByDay[day].Crossfit as item}
								<div class="h4sr min-h-[1.5rem]">{item.time}</div>
							{/each}
							<!-- Fill remaining slots with non-empty divs -->
							{#each Array(maxSlotsPerDay[day] - groupedByDay[day].Crossfit.length) as _}
								<div class="h4sr min-h-[1.5rem]">&nbsp;</div>
							{/each}
						{:else}
							<!-- Ghost entries for days with no Crossfit -->
							{#each Array(maxSlotsPerDay[day]) as _}
								<div class="h4sr min-h-[1.5rem]">&nbsp;</div>
							{/each}
						{/if}
						<div class="h4sr">&nbsp;</div>
					{/each}
				</div>

				<!-- Open Gym Column -->
				<div class="grid grid-flow-row auto-rows-min">
					<h4 class="h4sr underline h-8">Open Gym</h4>
					{#each activeDays as day}
						{#if groupedByDay[day]?.['Open Gym']?.length}
							{#each groupedByDay[day]['Open Gym'] as item}
								<div class="h4sr min-h-[1.5rem]">{item.time}</div>
							{/each}
							<!-- Fill remaining slots with non-empty divs -->
							{#each Array(maxSlotsPerDay[day] - groupedByDay[day]['Open Gym'].length) as _}
								<div class="h4sr min-h-[1.5rem]">&nbsp;</div>
							{/each}
						{:else}
							<!-- Ghost entries for days with no Open Gym -->
							{#each Array(maxSlotsPerDay[day]) as _}
								<div class="h4sr min-h-[1.5rem]">&nbsp;</div>
							{/each}
						{/if}
						<div class="h4sr">&nbsp;</div>
					{/each}
				</div>

				<!-- Strength Column -->
				<div class="grid grid-flow-row auto-rows-min">
					<h4 class="h4sr underline h-8">Strength</h4>
					{#each activeDays as day}
						{#if groupedByDay[day]?.Strength?.length}
							{#each groupedByDay[day].Strength as item}
								<div class="h4sr min-h-[1.5rem]">{item.time}</div>
							{/each}
							<!-- Fill remaining slots with non-empty divs -->
							{#each Array(maxSlotsPerDay[day] - groupedByDay[day].Strength.length) as _}
								<div class="h4sr min-h-[1.5rem">&nbsp;</div>
							{/each}
						{:else}
							<!-- Ghost entries for days with no Strength -->
							{#each Array(maxSlotsPerDay[day]) as _}
								<div class="h4sr min-h-[1.5rem]">&nbsp;</div>
							{/each}
						{/if}
						<div class="h4sr">&nbsp;</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
	<section class="px-4 md:px-32 md:py-16 pb-16" title="Gym Details">
		<GymComponent gym={gyms[0]} />
	</section>
	<Footer />
</main>

<style lang="postcss">
	.video__section {
		position: relative;
		z-index: 2;
	}
	.main__video {
		position: relative;
		width: 100vw;
		height: 82vh;
	}
	.video__overlay {
		position: absolute;
		inset: 0px;
		background-color: black;
		opacity: 0.4;
		z-index: 2; /* Below the title but above the video */
	}
	.overlay__content {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		transform: translate(-50%, -50%);
		z-index: 3;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 1.5em;
	}
	.h4sr {
		min-height: 1.5rem; /* Ensure ghost entries occupy space */
	}
</style>
