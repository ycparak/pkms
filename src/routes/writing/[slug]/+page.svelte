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
		<hgroup>
			<div class="meta">
				<h1>{data.meta.title}</h1>
				<time>July 2023</time>
			</div>
		</hgroup>
	
		<div class="prose">
			<svelte:component this={data.content} />
		</div>
	</article>
</main>

<style lang="scss">
	article {
		position: relative;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		padding: functions.toRem(128px) functions.toRem(24px);
		max-width: functions.toRem(640px);
	}

	hgroup {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: nowrap;
		margin-bottom: functions.toRem(32px);

		.meta {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: stretch;
			flex-wrap: nowrap;
			gap: 8px;
		}
	}

	.prose {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;
		flex-wrap: nowrap;
		gap: functions.toRem(24px);
	}
</style>
