<script lang="ts">
	let {
		link = '/',
		title = 'Title',
		textColor = '#fefffe',
		bgColor = 'transparent',
		borderColor = '#bf1e2d',
		type = 'link',
		click = () => {}
	}: {
		link?: string;
		title?: string;
		textColor?: string;
		bgColor?: string;
		borderColor?: string;
		type?: 'link' | 'btn';
		click?: () => void;
	} = $props();
</script>

{#if type === 'link'}
	<a
		href={link}
		class="button"
		style="--bgColor: {bgColor}; --borderColor: {borderColor}; --textColor: {textColor}"
		><div class="w-full h-full flex justify-center items-center">{title}</div></a
	>
{:else}
	<button
		onclick={click}
		class="button"
		style="--bgColor: {bgColor}; --borderColor: {borderColor}; --textColor: {textColor}"
	>
		<div class="w-full h-full flex justify-center items-center">{title}</div>
	</button>
{/if}

<style lang="postcss">
	.button {
		display: flex;
		justify-items: center;
		align-items: center;
		width: 8rem;
		height: 3rem;
		font-size: 0.875rem;
		font-family: ibm-plex-regular;
		color: var(--textColor);
		background-color: var(--bgColor);
		border-color: var(--borderColor);
		border-width: 2px;
		text-transform: uppercase;
		transition-duration: 300ms;
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
	}
	.button:hover {
		filter: brightness(1.2);
	}
</style>
