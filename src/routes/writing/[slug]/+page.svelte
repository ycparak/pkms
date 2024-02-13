<script lang="ts">
	export let data
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<main>
	<article>
		<!-- <hgroup>
			<div class="meta">
				<h1>{data.meta.title}</h1>
				<time>July 2023</time>
			</div>
		</hgroup> -->
	
		<svelte:component this={data.content} />
		<p></p>
	</article>
</main>

<style lang="scss">
	article {
		display: grid;
		grid-template-columns: [full-start] auto [body-start] minmax(auto, 628px) [body-end] auto [full-end];
		column-gap: 4dvw;
		row-gap: functions.toRem(52px);
		padding: functions.toRem(140px) 0;
		margin: 0 auto;

		:global(p) {
			grid-column: body;
		}
	}
</style>
