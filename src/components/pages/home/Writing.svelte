<script lang="ts">
	import { TimelineItem } from '$components';
  import type { Post } from '$lib/types';

  export let posts: Post[];

  const getYear = (date : string) => {
		const d = new Date(date);
		return d.getFullYear();
	}
</script>

<h3>Writing</h3>
{#each posts as post}
	<TimelineItem link={`/${post.slug}`} linkTitle={post.title}>
		<svelte:fragment slot="date">{getYear(post.date)}</svelte:fragment>
		<svelte:fragment slot="description">{post.description}</svelte:fragment>
	</TimelineItem>
{/each}
<div class="spacer-md"></div>