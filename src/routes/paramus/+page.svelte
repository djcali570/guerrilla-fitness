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
	import { gyms, paramusSliderImages } from '$lib/state/appState.svelte';
	import TabBar from '$lib/components/TabBar.svelte';
	import { fade } from '$lib/gsapFunc';

	// Define the valid tab keys
	type TabKey = 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';

	// Map shorthand tab names to full day names
	const dayMap: Record<TabKey, string> = {
		MON: 'Monday',
		TUE: 'Tuesday',
		WED: 'Wednesday',
		THU: 'Thursday',
		FRI: 'Friday',
		SAT: 'Saturday',
		SUN: 'Sunday'
	};

	// Type the tabs array
	let tabs: TabKey[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
	let selectedTab = $state(0);

	let schedule: ScheduleItem[] = [
		{ day: 'Monday', time: '5:30AM', scheduleType: 'Crossfit' },
		{ day: 'Monday', time: '6:30AM', scheduleType: 'Crossfit' },
		{ day: 'Monday', time: '7:30AM', scheduleType: 'Open Gym' },
		{ day: 'Monday', time: '9:00AM', scheduleType: 'Crossfit' },
		{ day: 'Monday', time: '4:30PM', scheduleType: 'Crossfit' },
		{ day: 'Monday', time: '5:30PM', scheduleType: 'Crossfit' },
		{ day: 'Monday', time: '5:30PM', scheduleType: 'Open Gym' },
		{ day: 'Tuesday', time: '5:30AM', scheduleType: 'Crossfit' },
		{ day: 'Tuesday', time: '6:30AM', scheduleType: 'Crossfit' },
		{ day: 'Tuesday', time: '7:30AM', scheduleType: 'Open Gym' },
		{ day: 'Tuesday', time: '9:00AM', scheduleType: 'Crossfit' },
		{ day: 'Tuesday', time: '12:00PM', scheduleType: 'Crossfit' },
		{ day: 'Tuesday', time: '4:00PM', scheduleType: 'Specialty', desc: 'Kids' },
		{ day: 'Tuesday', time: '5:00PM', scheduleType: 'Crossfit' },
		{ day: 'Tuesday', time: '6:00PM', scheduleType: 'Crossfit' },
		{ day: 'Wednesday', time: '5:30AM', scheduleType: 'Crossfit' },
		{ day: 'Wednesday', time: '6:30AM', scheduleType: 'Crossfit' },
		{ day: 'Wednesday', time: '7:30AM', scheduleType: 'Open Gym' },
		{ day: 'Wednesday', time: '9:00AM', scheduleType: 'Crossfit' },
		{ day: 'Wednesday', time: '4:30PM', scheduleType: 'Crossfit' },
		{ day: 'Wednesday', time: '5:30PM', scheduleType: 'Crossfit' },
		{ day: 'Wednesday', time: '5:30PM', scheduleType: 'Open Gym' },
		{ day: 'Thursday', time: '5:30AM', scheduleType: 'Crossfit' },
		{ day: 'Thursday', time: '6:30AM', scheduleType: 'Crossfit' },
		{ day: 'Thursday', time: '7:30AM', scheduleType: 'Open Gym' },
		{ day: 'Thursday', time: '9:00AM', scheduleType: 'Crossfit' },
		{ day: 'Thursday', time: '12:00PM', scheduleType: 'Crossfit' },
		{ day: 'Thursday', time: '4:00PM', scheduleType: 'Specialty', desc: 'Kids' },
		{ day: 'Thursday', time: '5:00PM', scheduleType: 'Crossfit' },
		{ day: 'Thursday', time: '6:00PM', scheduleType: 'Crossfit' },
		{ day: 'Friday', time: '5:30AM', scheduleType: 'Crossfit' },
		{ day: 'Friday', time: '6:30AM', scheduleType: 'Crossfit' },
		{ day: 'Friday', time: '7:30AM', scheduleType: 'Open Gym' },
		{ day: 'Friday', time: '9:00AM', scheduleType: 'Crossfit' },
		{ day: 'Friday', time: '4:30PM', scheduleType: 'Crossfit' },
		{ day: 'Saturday', time: '8:00AM', scheduleType: 'Crossfit' },
		{ day: 'Saturday', time: '9:00AM', scheduleType: 'Open Gym' },
		{ day: 'Saturday', time: '9:00AM', scheduleType: 'Specialty', desc: 'Mobility' },
		{ day: 'Saturday', time: '10:00AM', scheduleType: 'Crossfit' },
		{ day: 'Sunday', time: '8:00AM', scheduleType: 'Crossfit' },
		{ day: 'Sunday', time: '9:00AM', scheduleType: 'Open Gym' },
		{ day: 'Sunday', time: '9:00AM', scheduleType: 'Specialty', desc: 'Core' },
		{ day: 'Sunday', time: '10:00AM', scheduleType: 'Crossfit' }
	];

	// Helper function to filter schedule by day and type
	function getTimesForDayAndType(day: string, type: 'Crossfit' | 'Open Gym' | 'Specialty') {
		return schedule
			.filter((item) => item.day === day && item.scheduleType === type)
			.map((item) => ({
				time: item.time,
				desc: item.desc || '' // Handle undefined desc
			}));
	}

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
					Strength: dayItems.filter((item) => item.scheduleType === 'Strength'),
					Specialty: dayItems.filter((item) => item.scheduleType === 'Specialty')
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
	<title>Guerrilla Fitness - Paramus</title>
	<meta name="description" content="About our Paramus Location" />
	<meta property="og:title" content="Guerrilla Fitness - Paramus" />
	<meta property="og:description" content="About our Paramus Location" />
	<meta property="og:image" content="https://www.guerrillafitness.net/myimage.jpg" />
	<meta name="twitter:card" content="https://www.guerrillafitness.net/myimage.jpg" />
</svelte:head>

<Nav />

<main class="nav__margin">
	<section class="video__section" title="Video">
		<div class="main__video">
			<VideoPlayer
				videoSource="{PUBLIC_WEB_IMAGE_ENDPOINT}/paramus_header_video/view?project={PUBLIC_PROJECT_ID}"
				showControls={false}
			/>
			<div class="video__overlay"></div>
			<div class="overlay__content">
				<h1 class="video__title__text text-center">Guerrilla Fitness<br /> Paramus</h1>
				<p class="prwu">348 Evelyn Street, Paramus, NJ 07652</p>
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
					<li>- Parking lot and street parking</li>
					<li>- Tribe Physical Therapy</li>
				</ul>
			</div>
			<div class="pt-10">
				<!-- <p class="prw">Amenities</p> -->
				<ul class="pt-4 prw">
					<li>- Open gym hours</li>
					<li>- Showers</li>
					<li>- Communal space</li>
					<li>- Members only events</li>
					<li>- ProPath Massage</li>
				</ul>
			</div>
		</div>
	</section>
	<section class="px-4 md:px-32 md:py-16 pb-16" title="Get Started">
		<GetStarted />
	</section>
	<section class="px-4 md:px-32 md:py-16 pb-16" title="Slider">
		<ImageSlider5 imageLinks={paramusSliderImages} />
	</section>
	<section class="px-4 md:px-32 md:py-16 pb-16">
		<div class="w-full grid md:grid-cols-2 grid-cols-none grid-flow-row auto-rows-min">
			<h2 class="h2sb pb-4 md:pb-0">Schedule</h2>

			<div>
				<TabBar bind:selectedTab {tabs} minHeight={50} />
				<div class="grid grid-cols-3 gap-4 text-g-white-500 pt-4">
					<div class="flex justify-center"><h4 class="h4sr underline h-8">Crossfit</h4></div>
					<div class="flex justify-center"><h4 class="h4sr underline h-8">Open Gym</h4></div>
					<div class="flex justify-center"><h4 class="h4sr underline h-8">Specialty</h4></div>
				</div>
				<div class="grid grid-cols-3 gap-4 text-g-white-500 pt-4">
					<div class="flex flex-col items-center">
						{#each getTimesForDayAndType(dayMap[tabs[selectedTab]], 'Crossfit') as time (selectedTab + time.time)}
							<div {@attach (node) => fade(node, 0.3, false)}>{time.time}</div>
						{/each}
						{#if getTimesForDayAndType(dayMap[tabs[selectedTab]], 'Crossfit').length === 0}
							<div {@attach (node) => fade(node, 0.3, false)}>No Crossfit sessions</div>
						{/if}
					</div>
					<div class="flex flex-col items-center">
						{#each getTimesForDayAndType(dayMap[tabs[selectedTab]], 'Open Gym') as time (selectedTab + time.time)}
							<div {@attach (node) => fade(node, 0.3, false)}>{time.time}</div>
						{/each}
						{#if getTimesForDayAndType(dayMap[tabs[selectedTab]], 'Open Gym').length === 0}
							<div {@attach (node) => fade(node, 0.3, false)}>No Open Gym sessions</div>
						{/if}
					</div>
					<div class="flex flex-col items-center">
						{#each getTimesForDayAndType(dayMap[tabs[selectedTab]], 'Specialty') as time (selectedTab + time.time)}
							<div {@attach (node) => fade(node, 0.3, false)}>{time.time} | {time.desc}</div>
						{/each}
						{#if getTimesForDayAndType(dayMap[tabs[selectedTab]], 'Specialty').length === 0}
							<div {@attach (node) => fade(node, 0.3, false)}>No Specialty sessions</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="px-4 md:px-32 md:py-16 pb-16" title="Gym Details">
		<GymComponent gym={gyms[1]} />
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
