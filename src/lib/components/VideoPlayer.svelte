<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let {
		videoSource,
		vttSource = undefined,
        autoPlay = true,
		mute = true,
		showControls = true,
		fit = 'cover',        
	}: {
		videoSource: string;
		vttSource?: string | undefined;
        autoPlay?: boolean;
		mute?: boolean;
		showControls?: boolean;
		fit?: 'cover' | 'contain' | 'fill' | 'none';
	} = $props();

	let videoRef: HTMLVideoElement | undefined = $state(undefined);
	let isHovered: boolean = $state(false);
	let status: boolean = $state(autoPlay);
	let muted: boolean | null | undefined = $state(mute);
	let time = $state(0);
	let duration = $state(0);
	let hideControlsTimeout: number | null = $state(null);
	let vRatio: number = $state(0);
	let vHeight: number = $state(0);
	let vWidth: number = $state(0);
	const id = generateRandomString();

	onMount(() => {
		const checkLoaded = () => {
			if (videoRef && videoRef.videoWidth > 0 && videoRef.videoHeight > 0) {
				// Video has loaded enough to have dimensions
				vRatio = Math.round((videoRef.videoHeight / videoRef.videoWidth) * 100 * 100) / 100;
				vHeight = videoRef.videoHeight;
				vWidth = videoRef.videoWidth;
			} else {
				// If not loaded yet, check again after a short delay
				setTimeout(checkLoaded, 50);
			}
		};
		checkLoaded(); // Initial check
	});

	$effect(() => {
		if (videoRef) {
			videoRef.addEventListener('mousemove', handleMouseMove);
			return () => videoRef?.removeEventListener('mousemove', handleMouseMove); // Cleanup effect
		}
	});

	// Functions
	function togglePlay() {
		if (videoRef) {
			if (videoRef.paused) {
				videoRef.play();
				status = true;
			} else {
				videoRef.pause();
				status = false;
			}
		}
	}

	function toggleMute() {
		muted = !muted;
		if (videoRef) {
			videoRef.muted = muted;
		}
	}

	function startHideControlsTimer() {
		if (hideControlsTimeout) {
			clearTimeout(hideControlsTimeout);
		}
		hideControlsTimeout = setTimeout(() => {
			isHovered = false;
		}, 3000);
	}

	function handleMouseMove() {
		if (!isHovered) {
			isHovered = true;
		}
		startHideControlsTimer();
	}

	function formatTime(time: number) {
		if (isNaN(time)) return '...';

		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);

		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	}

	function toggleFullScreen() {
		//@ts-ignore
		if (!document.fullscreenElement && !document.webkitFullscreenElement) {
			if (videoRef?.requestFullscreen) {
				videoRef.requestFullscreen();
				//@ts-ignore
			} else if (videoRef?.webkitRequestFullscreen) {
				// Safari
				//@ts-ignore
				videoRef.webkitRequestFullscreen();
			}
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
				//@ts-ignore
			} else if (document.webkitExitFullscreen) {
				// Safari
				//@ts-ignore
				document.webkitExitFullscreen();
			}
		}
	}

	function seekTime(e: any) {
		const div = e.currentTarget;

		function seek(e: any) {
			const { left, width } = div.getBoundingClientRect();
			let p = (e.clientX - left) / width;
			if (p < 0) p = 0;
			if (p > 1) p = 1;
			time = p * duration;
		}

		seek(e);

		window.addEventListener('pointermove', seek);

		window.addEventListener(
			'pointerup',
			() => {
				window.removeEventListener('pointermove', seek);
			},
			{
				once: true
			}
		);
	}

	/**
	 * Generate a random string so that each
	 * picker will have a unique id in the dom
	 */
	function generateRandomString() {
		const length = 6;
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		let result = '';
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * characters.length);
			result += characters.charAt(randomIndex);
		}

		return result;
	}
</script>

<!-- Main Container -->
<div
	id="video-container-{id}"
	class="video-container"
	style="--vRatio: {vRatio}%; --vHeight:{vHeight}px; --vWidth: {vWidth}px"
	role="region"
	aria-label="Video Player"
	onmouseenter={startHideControlsTimer}
	onmouseleave={() => {
		isHovered = false;
		if (hideControlsTimeout) {
			clearTimeout(hideControlsTimeout);
		}
	}}
>
	<!-- Video Element -->
	<video
		id="video-{id}"
		src={videoSource}
		bind:this={videoRef}
		bind:currentTime={time}
		bind:duration
		autoplay={autoPlay}
		{muted}
		loop
		playsinline
		style="object-fit: {fit};"
	>
		{#if vttSource}
			<track kind="captions" src={vttSource} srclang="en" label="English" default />
		{/if}
	</video>
	{#if showControls}
		{#if isHovered || !status}
			<div class="time" transition:fly={{ y: 20 }}>
				<div class="w-full grid grid-cols-3">
					<div>
						<span>{formatTime(time)}</span><span class="px-2">/</span><span
							>{duration ? formatTime(duration) : '--:--'}</span
						>
					</div>
					<div></div>
					<div class="flex justify-end items-center">
						<button
							onclick={toggleMute}
							aria-label="Speaker Control"
							onmouseenter={() => (isHovered = true)}
							><div class="w-8 h-8">
								{#if muted}
									<svg viewBox="0 0 200 200" fill="currentColor">
										<path
											d="M100.2,114.3v29.3l-17.3-17.4c-3.8-3.8-9-6-14.4-6H49.3c-5.6,0-10.2-4.5-10.2-10.2V89.8c0-5.6,4.5-10.2,10.2-10.2h16.2
	L55.4,69.5h-6C38.1,69.5,29,78.6,29,89.8v20.3c0,11.2,9.1,20.3,20.3,20.3h19.1c2.7,0,5.3,1.1,7.2,3l23.9,23.9c4,4,10.9,1.2,10.9-4.5
	v-28.4L100.2,114.3z M99.5,42.7L78.2,64l7.2,7.2l14.8-14.8V86l10.2,10.2v-49C110.3,41.5,103.5,38.7,99.5,42.7z M134.8,66.6
	c-1.6-2.3-4.7-3-7.1-1.4c-2.3,1.6-2.9,4.7-1.4,7c0,0,0,0.1,0.1,0.1c6.5,9.5,9.6,18.7,9.6,27.6c0,5.8-1.3,11.8-4,17.9l7.6,7.6
	c4.3-8.3,6.6-16.8,6.6-25.5C146.2,88.6,142.3,77.5,134.8,66.6z M149.4,45.5c-2-1.9-5.2-1.9-7.2,0.2c-1.9,2-1.9,5.2,0.2,7.2
	c6.1,5.8,10.7,13.1,13.8,21.2c3.1,8.1,4.7,17,4.7,26c0,13.2-3.4,26.2-10,36.7l7.4,7.4c3-4.5,5.5-9.4,7.4-14.5
	c3.6-9.4,5.3-19.5,5.3-29.6C171,79.9,164,59.3,149.4,45.5z M167.5,167.5c-2,2-5.1,2-7.1,0l-12.2-12.2l-6.9-6.9l-14.1-14.1l-0.5-0.5
	l0,0l-16.4-16.4l-10.2-10.2L62.4,69.5L32.5,39.6c-2-2-2-5.1,0-7.1c1-1,2.2-1.5,3.5-1.5c1.3,0,2.6,0.5,3.5,1.5l127.9,127.9
	C169.5,162.4,169.5,165.5,167.5,167.5z"
										/>
									</svg>
								{:else}
									<svg viewBox="0 0 200 200" fill="currentColor">
										<path
											d="M110.3,47.2c0-5.7-6.8-8.5-10.8-4.5L75.6,66.5c-1.9,1.9-4.5,3-7.2,3H49.3C38.1,69.5,29,78.6,29,89.8v20.3
               c0,11.2,9.1,20.3,20.3,20.3h19.1c2.7,0,5.3,1.1,7.2,3l23.9,23.9c4,4,10.8,1.2,10.8-4.5V47.2z M82.8,73.7l17.4-17.4v87.3l-17.4-17.4
               c-3.8-3.8-9-6-14.4-6H49.3c-5.6,0-10.2-4.6-10.2-10.2V89.8c0-5.6,4.6-10.2,10.2-10.2h19.1C73.8,79.7,79,77.5,82.8,73.7 M134.8,66.6
               c-1.6-2.3-4.7-2.9-7.1-1.4c-2.3,1.6-2.9,4.7-1.4,7.1c0,0,0,0.1,0.1,0.1c6.5,9.5,9.6,18.7,9.6,27.6c0,8.9-3.1,18.1-9.6,27.6
               c-1.6,2.3-1.1,5.5,1.2,7.1c2.3,1.6,5.5,1.1,7.1-1.2c0,0,0-0.1,0.1-0.1c7.4-10.8,11.4-22,11.4-33.4C146.2,88.6,142.3,77.5,134.8,66.6
                M149.4,45.5c-2-1.9-5.3-1.9-7.2,0.2c-1.9,2-1.9,5.3,0.2,7.2l0,0c12.1,11.6,18.4,29.2,18.4,47.1s-6.3,35.6-18.4,47.1
               c-2,1.9-2.1,5.2-0.2,7.2c1.9,2,5.2,2.1,7.2,0.2l0,0C164,140.7,171,120.1,171,100S164,59.4,149.4,45.5"
										/>
									</svg>
								{/if}
							</div></button
						>

						<button onclick={toggleFullScreen} class="fullscreen" aria-label="Toggle Full Screen">
							<div class="w-8 h-8">
								<!-- SVG for full screen icon -->
								<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
									<path
										d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
									/>
								</svg>
							</div>
						</button>
					</div>
				</div>

				<div class="slider" onpointerdown={seekTime}>
					<div class="progress" style="--progress: {time / duration}%"></div>
				</div>
			</div>
			<button onclick={togglePlay} class="playpause" onmouseenter={() => (isHovered = true)}>
				{#if status}
					<div class="w-8 h-8">
						<svg viewBox="0 0 200 200" fill="currentColor">
							<path
								d="M79.4,171h-7.6c-1.9,0-3.4-1.5-3.4-3.4V32.4c0-1.9,1.5-3.4,3.4-3.4h7.6c1.9,0,3.4,1.5,3.4,3.4v135.3
	C82.8,169.5,81.3,171,79.4,171z M128.2,171h-7.6c-1.9,0-3.4-1.5-3.4-3.4V32.4c0-1.9,1.5-3.4,3.4-3.4h7.6c1.9,0,3.4,1.5,3.4,3.4
	v135.3C131.6,169.5,130,171,128.2,171z"
							/>
						</svg>
					</div>
				{:else}
					<div class="w-8 h-8">
						<svg viewBox="0 0 200 200" fill="currentColor">
							<path d="M47,100V29l61.5,35.5L170,100l-61.5,35.5L47,171V100z" />
						</svg>
					</div>
				{/if}
			</button>
		{/if}
	{/if}
</div>

<style lang="postcss">
	.video-container {
		@apply relative w-full h-full overflow-hidden;
	}

	video {
		@apply absolute top-0 left-0 w-full h-full;
	}

	.playpause {
		@apply absolute flex justify-center items-center w-20 h-20;
		@apply top-1/2 left-1/2;
		@apply cursor-pointer z-10 transition-all duration-300;
		@apply translate-x-[-50%] translate-y-[-50%];
		@apply rounded-full text-white border-g-primary-500 border-2 bg-[rgba(0,0,0,0.5)] hover:bg-g-primary-500;
	}

	.time {
		@apply w-full absolute flex flex-col bottom-0 left-0 items-center gap-2 px-4 text-white text-sm;
	}

	.slider {
		@apply w-full h-2 rounded-lg overflow-hidden bg-gray-600 mb-4;
	}

	.progress {
		@apply h-full bg-white;
		width: calc(100 * var(--progress));
	}

	video::-webkit-media-text-track-display {
		@apply px-12 pb-16 text-lg;
	}

	::cue-region {
		background-color: green; /* If supported, could give a box for all cues */
	}
</style>
