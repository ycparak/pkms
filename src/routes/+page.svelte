<script lang="ts">
  import * as config from '$lib/config'
	import { TimelineItem } from '$components'
  export let data;
  let posts = data?.posts;

	const getYear = (date : string) => {
		const d = new Date(date);
		return d.getFullYear();
	}
</script>


<svelte:head>
	<title>{config.title}</title>
	<meta name="twitter:title" content="{config.title}" />
	<meta name="twitter:description" content="{config.description}" />
	<meta name="Description" content="{config.description}" />
</svelte:head>

<p>The broad through line of my work is an attempt to balance my love for designing, building and tinkering on novel computing interfaces, with my equally strong desire to build software (or software–adjacent) businesses.</p>
<p>Currently I’m closer to tinker mode, transiently iterating on projects and experiments centred around answering the question — “how can we use advancements in hardware, software and interface design to build native–like (and more useful) applications.”</p>
<p>Previously, I created Pinched.io, a sourcing tool built on top of Twitter’s social graph. Before that, I was a design engineer at Thinkst where I worked on Canary, a tool used by security teams in detecting network attackers. In university, I studied Computer Science after a brief stint as an architecture student.</p>
<aside class="callout">
	Welcome to my corner of the internet. This site is a work-in-progress; slightly faded links are drafts, and unclickable links are placeholders for future content. Enjoy :)
</aside>
<div class="spacer-md"></div>
<h3>Writing</h3>
{#each posts as post}
	<TimelineItem link={`/${post.slug}`} linkTitle={post.title} linkExternal={'_self'}>
		<svelte:fragment slot="date">{getYear(post.date)}</svelte:fragment>
		<svelte:fragment slot="description">{post.description}</svelte:fragment>
	</TimelineItem>
{/each}
<style lang="scss">
</style>