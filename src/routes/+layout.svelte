<script lang="ts">
  import '$styles/main.scss'
  import "@phosphor-icons/web/bold";
  import "@phosphor-icons/web/fill";
  import { Menu } from '$components';
	import type { LayoutData } from './$types';
  export let data: LayoutData;
</script>

<Menu path="{data.pathname}" />
<slot></slot>

<style lang="scss">
</style>