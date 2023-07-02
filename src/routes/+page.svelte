<script>
	import { About, Essays, Design, Projects, Now } from "$components";
</script>

<svelte:head>
	<title>Yusuf Parak • @ycparak</title>

	<meta name="twitter:title" content="Yusuf Parak" />
	<meta name="twitter:description" content="@ycparak • design engineer, building pinched.io, alumnus pioneer.app" />
	<meta name="Description" content="Crafting great software. Design engineer, building pinched.io, alumnus at pioneer.app" />
</svelte:head>

<div id="page">
	<h2 class="subtitle">Design engineer, building Pinched.io</h2>
	<section class="about">
		<About />
	</section>
	<section class="essays timeline">
		<h2>Essays</h2>
		<Essays />
	</section>
	<section class="design">
		<h2>Design &amp; Craft</h2>
		<Design />
	</section>
	<section class="projects timeline">
		<h2>Projects</h2>
		<Projects />
	</section>
	<section class="now">
		<h2>Now</h2>
		<Now />
	</section>
</div>

<style lang="scss">
	.subtitle { 
		padding: 32px 24px 120px 120px;
		color: var(--text-muted);
		margin-bottom: 0;
	}
	.about, .timeline, .now {
		padding: 0 24px 0 120px;
		max-width: 620px;
		margin-bottom: 80px;
	}

	.design {
		margin-bottom: 86px;
		h2 {
			margin-left: 120px;
		}
	}
</style>