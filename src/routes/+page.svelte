<script lang="ts">
  import * as config from '$lib/config'
	import { About, Writing, Craft, Projects } from '$components'

  export let data;
  let posts = data?.posts;
</script>

<svelte:head>
	<title>{config.title}</title>
	<meta name="twitter:title" content="{config.title}" />
	<meta name="twitter:description" content="{config.description}" />
	<meta name="Description" content="{config.description}" />
</svelte:head>

<div class="grid">
	<About />
	<Writing posts={posts} />
	<Craft />
	<Projects />
</div>