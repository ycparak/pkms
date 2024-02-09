<script lang="ts">
	import * as config from '$lib/config'

	export let data

	const categories = ['writing']
  const posts = data.posts.filter((post) => categories.includes(post.category));
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
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		gap: var(--size-7);
	}

	.post {
		max-inline-size: var(--size-content-3);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}
</style>
