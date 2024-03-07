<script lang="ts">
	import * as config from '$lib/config'

	export let data
  const posts = data.posts;
</script>

<svelte:head>
	<title>Writing | {config.title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each posts as post}
			<li class="post">
				<a href="/writing/{post.slug}" class="title">{post.title}</a>
				<p class="date">{post.date}</p>
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	section {
		display: grid;
		min-height: 100dvh;
		place-items: center;
	}
	.posts {
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>
