<svelte:head>
	<title>Yusuf Parak • @ycparak</title>

	<meta name="twitter:title" content="Yusuf Parak" />
	<meta name="twitter:description" content="@ycparak • design engineer, building pinched.io, alumnus pioneer.app" />
	<meta name="Description" content="Crafting great software. Design engineer, building pinched.io, alumnus at pioneer.app" />
</svelte:head>

<div id="page">
	<section class="hero">
		<h2>Design engineer, building Pinched.io</h2>
	</section>
	<section class="about">
		<h2>About</h2>
		<p>Crafting interfaces. Is that if you want to rely on donations you either have to set your expectations very low or you have to constantly remind people that they can—and should—throw a dollar or two towards projects they care about. But, from my point of view, that's exhausting. Constantly bothering people to ask for support is a pain, which is why I removed the link to my Donorbox from the site. It was pointless to have it there and the vast majority of the people will never consider donating unless presented with an annoying modal or popup.</p>
	</section>
	<section class="projects">
		<h2>Projects</h2>
		<div class="project">
			<div class="date">2022–Now</div>
			<div class="content">
				<h3><a class="external-link" target="_blank" href="https://pinched.io">Co-founder at Pinched.io</a></h3>
				<p>Network based sourcing tool for finding your next hire, sales lead, or founder to invest in (backed by Pioneer).</p>
			</div>
		</div>
		<div class="project">
			<div class="date">2023–Now</div>
			<div class="content">
				<h3>Svbmit</h3>
				<p>Low-level UI component library for <a target="_blank" href="https://kit.svelte.dev/">Sveltekit</a>, with a focus on accessibility and DX, à la <a target="_blank" href="https://www.radix-ui.com/">Radix UI</a> for Svelte. Used in production for Pinched.io.</p>
			</div>
		</div>
		<div class="project">
			<div class="date">2020</div>
			<div class="content">
				<h3><a class="external-link" target="_blank" href="https://twitter.com/ycparak/status/1299506072160546816">PKMS</a></h3>
				<p>PKMS inspired by Roam Research and Andy Matuschak’s note taking system.</p>
			</div>
		</div>
		<div class="project">
			<div class="date">2018–2021</div>
			<div class="content">
				<h3><a class="external-link" target="_blank" href="https://blog.thinkst.com/2020/08/something-fresh.html">Design Engineer at Thinkst Canary</a></h3>
				<p>Worked on redesigning and rebuilding the frontend UI. Canary is widely used by security teams to detect internal network breaches.</p>
			</div>
		</div>
	</section>
	<section class="now">
		<h2>Now</h2>
		<p>Constantly bothering people to ask for support is a pain, which is why I removed the link to my Donorbox from the site. It was pointless to have it there and the vast majority of the people will never consider donating unless presented with an annoying modal or popup.</p>
	</section>
</div>

<style lang="scss">
	h1, h3 {
		font-size: 16px;
		font-weight: 550;
		line-height: 1;
		margin: 0;
		padding: 0;
		color: var(--text-header);
		margin-bottom: 4px;
		a {
			color: inherit;
			text-decoration: underline;
			text-decoration-color: var(--line-underline);
			&::after {
				color: var(--text-header);
				font-size: 12px;
			}
		}
	}
	h2 {
		font-size: 16px;
		font-weight: 550;
		line-height: 1;
		margin: 0;
		padding: 0;
		color: var(--text-header);
		margin-bottom: 28px;
	}

	p {
		font-size: 16px;
		font-weight: 450;
		line-height: var(--line-height-base);
		max-width: 480px;
		a {
			color: inherit;
			text-decoration: underline;
			text-decoration-color: var(--line-underline);
			&::after {
				color: var(--text-header);
				font-size: 12px;
				opacity: 1;
				transform: rotate(-45deg) translateY(-4px) translateX(4px);
			}
		}
	}

	.hero {
		padding: 32px 24px 0 120px;
		margin-bottom: 120px;
		h2 { 
			color: var(--text-muted);
			margin-bottom: 0;
		}
	}
	.about, .projects, .now {
		padding: 0 24px 0 120px;
		margin-bottom: 80px;
		max-width: 624px;
	}

	.project {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin-bottom: 28px;
		&:last-of-type {
			margin-bottom: 0;
		}
		.date {
			min-width: 140px;
			font-size: 16px;
			line-height: var(--line-height-base);
			font-weight: 550;
			color: var(--text-muted);
		}
		.content {
			h3 {
				line-height: var(--line-height-base);
				margin: 0;
				padding: 0;
			}
			width: 100%;
		}
	}
</style>