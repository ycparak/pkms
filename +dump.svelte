<script lang="ts">
  import type { Writable } from 'svelte/store'
	import { getContext } from "svelte";

  // let screenWidth = getContext<Context>('screenWidth')
  type Context = Writable<number>
  let screenWidth = getContext<Context>('screenWidth')
</script>

<style lang="scss">
</style>