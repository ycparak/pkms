<script lang="ts">
  import { fade, scale } from 'svelte/transition';
  import { getAngleDifference, normalizeAngle, setUserSelect } from '$lib/functions';
  import { sineInOut } from 'svelte/easing';
	import { spring } from 'svelte/motion';

	export let isPrototype = false;

  const ITEM_OFFSET = 90;
  const menuItems = [
    { icon: 'arrow-left', label: 'Back' },
    { icon: 'arrow-clockwise', label: 'Reload' },
    { icon: 'printer', label: 'Print' },
    { icon: 'arrow-right', label: 'Forward' },
    { icon: 'floppy-disk', label: 'Save' },
    { icon: 'cursor-click', label: 'Inspect' },
  ]

  let holdingMouse = false;
  let selected: number | null = null;
	let clickCoords: [number, number] | null = null;
	let mouseCoords: [number, number] | null = null;
	let innerEl: HTMLElement | null = null;
	let easedRingAngle = spring(-1, {
		stiffness: 0.04,
		damping: 0.19,
	});
  let [skew, top, left, ringAngleOffset, ringPercent] = [30, 66, 63, 120, 83.2];

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
		const normalizedAngle = normalizeAngle(angle - ITEM_OFFSET);
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
		const rotate = (360 / menuItems.length) * i - ITEM_OFFSET;
		return `--rotate: ${rotate}deg`;
	}

  // Event Handlers
  function onTouchStart(e: TouchEvent) {
		const el = e.target as HTMLElement;
		if (!['BODY', 'HTML', 'MAIN'].includes(el.tagName)) return;
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
		if (!['BODY', 'HTML', 'MAIN'].includes(el.tagName)) return;
		clickCoords = [e.clientX, e.clientY];
		document.body.style.cursor = 'move';
		setUserSelect(document.body, 'none');
    holdingMouse = true;
	}

  function onMouseMove(e: MouseEvent) {
    mouseCoords = [e.clientX, e.clientY];
  }

  function onMouseUp() {
    clickCoords = null;
    mouseCoords = null;
    document.body.style.cursor = 'initial';
    setUserSelect(document.body, 'initial');
    holdingMouse = false;
  }
</script>

<section class:preview={!isPrototype}>
	<div class="bg">
		{#if clickCoords}
			<div
				{style}
				class="radial-menu-wrapper"
				transition:scale={{ start: 0.9, duration: 150, easing: sineInOut }}>
				<div class="ring" data-has-selected={selected !== null} />
				<ul class="radial-menu">
					{#each menuItems.slice(0, menuItems.length) as item, i}
						<li class="item" style={getItemStyle(i)} data-selected={selected === i}>
							<i class={`ti ti-${item.icon}`} />
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
  section {
		position: relative;
    background-color: var(--color-background);
		background: url('/images/radial-menu.webp') no-repeat center center;
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    margin: 0 auto;

		&.preview {
			position: relative;
			width: 100%;
			height: 90%;
			border-radius: 20px;
			overflow: hidden;
			box-shadow: var(--shadow-lg);
		}
		.bg {
			--size-num: 300;
			--size: toRem(var(--size-num));
			--ring-size-num: var(--size-num) + 32;
			--ring-size: toRem(var(--ring-size-num));
			--gap-size: toRem(var(--ring-size-num) - 24);
			--innerSize: calc(0.5 * var(--size));


			width: 100%;
			height: 100%;
			background: radial-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%);
		}
  }
</style>