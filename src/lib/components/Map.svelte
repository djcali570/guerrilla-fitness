<script lang="ts">
	import { PUBLIC_MAPS_API_KEY } from '$env/static/public';
	import { onMount } from 'svelte';

	let { lat, lng }: { lat: number; lng: number } = $props();

	let apiKey = PUBLIC_MAPS_API_KEY;

	let center = { lat: lat, lng: lng };
	let zoom = 15;

	// Map container and map instance
	let mapContainer: HTMLDivElement | undefined;
	let map: google.maps.Map | undefined;

	onMount(() => {
		// Initialize cleanup as a no-op function
		let cleanup: () => void = () => {};

		(async () => {
			// Dynamically import the Loader to handle CommonJS module
			const { Loader } = await import('@googlemaps/js-api-loader');

			const loader = new Loader({
				apiKey,
				version: 'weekly',
				libraries: ['places']
			});

			const { AdvancedMarkerElement } = await loader.importLibrary('marker');

			try {
				// Load the Google Maps API
				const { Map } = await loader.importLibrary('maps');

				// Initialize the map
				if (mapContainer) {
					map = new Map(mapContainer, {
						center: center,
						zoom,
						mapId: 'ffb3a027c530fd1ef15bfac0',
						mapTypeControl: false,
						streetViewControl: false,
						colorScheme: 'DARK'
					});

					new AdvancedMarkerElement({
						map: map,
						position: { lat: lat, lng: lng }
					});
				}
			} catch (error) {
				console.error('Failed to load Google Maps:', error);
			}
		})();

		// Return cleanup function synchronously
		return () => {
			if (cleanup) cleanup();
		};
	});
</script>

<div bind:this={mapContainer} class="w-full h-full"></div>
