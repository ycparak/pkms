<script lang="ts">
	import { getAngleDifference, normalizeAngle, setUserSelect } from '$lib/functions';
  import { fade, scale } from 'svelte/transition';
  import { sineInOut } from 'svelte/easing';
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';

	// Props
	export let isPrototype = false;

	// Constants
  const offset = 90;
	const menuItems = [
    { icon: 'floppy-disk', label: 'Save' },
		{ icon: 'arrow-left', label: 'Back' },
    { icon: 'arrow-clockwise', label: 'Reload' },
    { icon: 'printer', label: 'Print' },
		{ icon: 'arrow-right', label: 'Forward' },
    { icon: 'cursor-click', label: 'Inspect' },
  ]

	// Variables
	let screenWidth : number;
	let screenHeight : number;
	let holdingMouse = true;
  let selected: number | null = null;
	let clickCoords: [number, number] | null = null;
	let mouseCoords: [number, number] | null = null;
	let innerEl: HTMLElement | null = null;
	let easedRingAngle = spring(-1, {
		stiffness: 0.06,
		damping: 0.3,
	});
  let [skew, top, left, ringAngleOffset, ringPercent] = [30, 62, 59, 120, 83.2];

	onMount(() => {
		clickCoords = [window.innerWidth / 2, window.innerHeight / 2];
	});

	// Reactive values
  $: selected = (function getMouseSelection() {
		if (clickCoords === null || mouseCoords === null || !innerEl) return null;

		const [clickX, clickY] = clickCoords;
		const [mouseX, mouseY] = mouseCoords;
		const dx = mouseX - clickX;
		const dy = mouseY - clickY;

		const distance = Math.sqrt(dx * dx + dy * dy);
		const innerRadius = innerEl.getBoundingClientRect().width / 2;
		if (distance < innerRadius) return null;

		const angle = Math.atan2(dy, dx) * (180 / Math.PI);
		const normalizedAngle = normalizeAngle(angle - offset);
		const stepAngle = 360 / menuItems.length;

		return Math.floor(normalizedAngle / stepAngle);
	})();

	$: ringAngle = (function getRingAngle(): number | null {
		if (selected === null) return null;

		const newAngle = normalizeAngle((360 / menuItems.length) * selected - ringAngleOffset);
		if (ringAngle === null) return newAngle;
		const oldAngle = normalizeAngle(ringAngle || 0);

		const diff = getAngleDifference(oldAngle, newAngle);

		return ringAngle + diff;
	})();

	$: {
		if (selected === null) {
			// When nothing is selected, the angle should be reset.
			easedRingAngle.set(-1, { hard: true });
		} else if ($easedRingAngle === -1) {
			// Coming from a reset state, no need to animate, just show the new angle.
			easedRingAngle.set(ringAngle || 0, { hard: true });
		} else {
			// Otherwise, we want to animate to the new angle.
			easedRingAngle.set(ringAngle || 0);
		}
	}

  $: style = [
		`--skew: ${skew}deg`,
		`--top: ${top}%`,
		`--left: ${left}%`,
		`--mouseX: ${clickCoords ? clickCoords[0] : 0}px`,
		`--mouseY: ${clickCoords ? clickCoords[1] : 0}px`,
		`--selectedAngle: ${$easedRingAngle}deg`,
		`--ringPercent: ${ringPercent}%`,
	].join(';');

  function getItemStyle(i: number) {
		const rotate = (360 / menuItems.length) * i - offset;
		return `--rotate: ${rotate}deg`;
	}

  // Event Handlers
  function onTouchStart(e: TouchEvent) {
		const el = e.target as HTMLElement;
		if (!['bg', 'explainer'].includes(el.id)) return;
		clickCoords = [e.touches[0].clientX, e.touches[0].clientY];
		setUserSelect(document.body, 'none');
	}

  function onTouchMove(e: TouchEvent) {
    mouseCoords = [e.touches[0].clientX, e.touches[0].clientY];
  }

  function onTouchEnd() {
    clickCoords = null;
		mouseCoords = null;
		setUserSelect(document.body, 'initial');
  }

	function onMouseDown(e: MouseEvent) {
		const el = e.target as HTMLElement;
		if (!['bg', 'explainer'].includes(el.id) || holdingMouse) return;
		holdingMouse = true;
		clickCoords = [e.clientX, e.clientY];
		document.body.style.cursor = 'move';
		setUserSelect(document.body, 'none');
	}

  function onMouseMove(e: MouseEvent) {
    mouseCoords = [e.clientX, e.clientY];
  }

  function onMouseUp() {
		holdingMouse = false;
    clickCoords = null;
    mouseCoords = null;
    document.body.style.cursor = 'initial';
    setUserSelect(document.body, 'initial');
  }
</script>

<section id="bg" class="dark" class:preview={!isPrototype}>
	<div id="explainer" class="content">
		{#if !holdingMouse}
			<p transition:fade={{ duration: 150 }}>Hold and rotate from anywhere</p>
		{/if}

		{#if clickCoords}
			<div
				class="radial-menu-wrapper"
				{style}
				transition:scale={{ start: 0.9, duration: 150, easing: sineInOut }}>
				<div class="ring" data-has-selected={selected !== null} />
				<ul class="radial-menu">
					{#each menuItems.slice(0, menuItems.length) as item, i}
						<li class="item" style={getItemStyle(i)} data-selected={selected === i}>
							<i class={`ph ph-${item.icon}`} />
						</li>
					{/each}
				</ul>
				<div class="inner" bind:this={innerEl}>
					{#if selected !== null}
						<span class="label">{menuItems[selected].label}</span>
					{/if}
				</div>
			</div>
		{/if}
	</div>
</section>

<svelte:window
  on:touchstart={onTouchStart}
	on:touchmove={onTouchMove}
	on:touchend={onTouchEnd}
	on:mousedown={onMouseDown}
	on:mousemove={onMouseMove}
	on:mouseup={onMouseUp}
/>

<style lang="scss">
	$wrapper: #131419;
	$bg: #1a1b20;
	$border: #27282d;
	$highlight: #868f97;
	$text: #868f97;
	$text-highlight: #d8bbc3;
	section {
		display: grid;
		place-items: center;
		position: relative;
    background-color: $wrapper;
    height: 100%;
    width: 100%;
    margin: 0 auto;

		&.preview {
			position: relative;
			width: 100%;
			height: 90%;
			border-radius: 20px;
			overflow: hidden;
			box-shadow: var(--shadow-lg);
		}

		p {
			@include interface-type-sm;
			color: var(--color-text-accent);
			user-select: none;
			pointer-events: none;
		}
  }


	$size-num: 250px;
	$size: toRem($size-num);

	.radial-menu-wrapper {
		position: absolute;
		top: var(--mouseY);
		left: var(--mouseX);
		translate: -50% -50%;
		color: $text;
		z-index: 999;
	}

	.ring {
		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.025), 0 4px 12px rgba(0, 0, 0, 0.05), 0 8px 36px rgba(0, 0, 0, 0.1);

		$ring-size-num: $size-num + 24px;
		$ring-size: toRem($ring-size-num);
		width: $ring-size;
		height: $ring-size;

		background-color: $bg;
		border-radius: 100%;

		&[data-has-selected='true'] {
			background: conic-gradient(
				from var(--selectedAngle),
				$bg var(--ringPercent),
				#d0c5ea 0,
				#ddb2a1 100%
			);
		}

		&::after {
			content: '';
			background-color: $wrapper;
			border-radius: 100%;
			position: absolute;
			top: 50%;
			left: 50%;
			translate: -50% -50%;

			$gap-size: toRem($ring-size-num - 16px);
			width: $gap-size;
			height: $gap-size;
		}
	}

	.radial-menu {
		position: relative;
		overflow: hidden;

		background-color: $border;
		border-radius: 9999px;

		width: $size;
		height: $size;
	}

	.inner {
		background-color: $wrapper;
		border: 1px solid $border;
		border-radius: 9999px;

		position: absolute;
		left: 50%;
		top: 50%;
		translate: -50% -50%;

		$innerSize: calc(0.5 * $size);
		$innerSizeCirc: calc(0.5 * $size - 10px);
		width: $innerSize;
		height: $innerSize;

		&::after {
			// inner circle
			content: '';
			background-color: $wrapper;
			border: 1px solid $border;
			border-radius: 9999px;
			position: absolute;
			top: 50%;
			left: 50%;
			translate: -50% -50%;
			width: $innerSizeCirc;
			height: $innerSizeCirc;
		}
	}

	.label {
		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		z-index: 999;
		color: $text;
		font-size: toRem(13px);
		letter-spacing: -0.01em;
	}

	.item {
		display: block;
		$itemSize: toRem(150px);
		width: $itemSize;
		height: $itemSize;

		position: absolute;
		bottom: 50%;
		right: 50%;

		background-color: $bg;
		border-right: 1px solid $border;

		transform-origin: 100% 100% 0px;
		transform: rotate(var(--rotate)) skew(var(--skew));

		transition: background 200ms ease;

		&[data-selected='true'] {
			background-color: $border;
			color: $text-highlight;
		}

		i {
			position: absolute;
			top: var(--top);
			left: var(--left);
			transform: skew(calc(var(--skew) * -1)) rotate(calc(var(--rotate) * -1));
			font-size: toRem(18px);
		}
	}
</style>