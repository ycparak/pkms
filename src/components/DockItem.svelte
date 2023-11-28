<script lang="ts">
  import { interpolate } from '@popmotion/popcorn';
  import { spring } from 'svelte/motion';
  import { ButtonBase } from '$components';

  /** Block 1 */
  export let appID: string;
  export let mouseX: number | null;

  let el: HTMLImageElement;

  /** Block 2 */
  const baseWidth = 57.6;
  const distanceLimit = baseWidth * 6;
  const beyondTheDistanceLimit = distanceLimit + 1;
  const distanceInput = [
    -distanceLimit,
    -distanceLimit / 1.25,
    -distanceLimit / 2,
    0,
    distanceLimit / 2,
    distanceLimit / 1.25,
    distanceLimit,
  ];
  const widthOutput = [
    baseWidth,
    baseWidth * 1.1,
    baseWidth * 1.618,
    baseWidth * 2.618,
    baseWidth * 1.618,
    baseWidth * 1.1,
    baseWidth,
  ];

  let distance = beyondTheDistanceLimit;

  const widthPX = spring(baseWidth, {
    damping: 0.38,
    stiffness: 0.1,
  });

  // $: $widthPX = interpolate(distanceInput, widthOutput)(distance);

  let width: string;
  $: width = `${$widthPX / 16}rem`;

  /** Block 3 */
  let raf: number;

  function animate(mouseX: number | null) {
    if (el && mouseX !== null) {
      const rect = el.getBoundingClientRect();

      // get the x coordinate of the img DOMElement's center
      // the left x coordinate plus the half of the width
      const imgCenterX = rect.left + rect.width / 2;

      // difference between the x coordinate value of the mouse pointer
      // and the img center x coordinate value
      const distanceDelta = mouseX - imgCenterX;
      distance = distanceDelta;
      return;
    }

    distance = beyondTheDistanceLimit;
  }

  $: raf = requestAnimationFrame(() => animate(mouseX));
</script>

<div>
  <ButtonBase>
    <img bind:this="{el}" src="/dock/{appID}.png" alt="" style="width: {width};" />
  </ButtonBase>
</div>