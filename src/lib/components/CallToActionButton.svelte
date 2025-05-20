<script lang="ts">
let {link="/", title = 'Title'}:{link?: string; title?: string;} = $props();
</script>

<a href="{link}" class="button">{title}</a>

<style lang="postcss">
	.button {
		@apply w-32 h-12;
		@apply flex items-center justify-center;
		@apply uppercase text-g-white-500 text-sm font-ibm-plex-regular;
		@apply border-2 border-g-primary-500;
        @apply hover:bg-g-primary-500 transition-colors duration-300;
	}
</style>
