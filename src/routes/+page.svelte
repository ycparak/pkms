<script>
	import "@fontsource/newsreader/400-italic.css";
</script>

<svelte:head>
	<title>Yusuf Parak • @ycparak</title>

	<meta name="twitter:title" content="Yusuf Parak" />
	<meta name="twitter:description" content="@ycparak • design engineer, building pinched.io, alumnus pioneer.app" />
	<meta name="Description" content="Crafting great software. Design engineer, building pinched.io, alumnus at pioneer.app" />
</svelte:head>

<div id="page">
	<section class="hero">
		<h1>Yusuf Parak, <br /> design engineer <br /> building pinched.</h1>
		<div class="nav-links">
			<a class="external-link" target="_blank" href="mailto:yusuf@ycparak.com">Email</a>
			<a class="external-link" target="_blank" href="https://twitter.com/ycparak">Twitter</a>
			<a class="external-link" target="_blank" href="https://github.com/ycparak">Github</a>
			<a class="external-link" target="_blank" href="https://pinched.io">Pinched.io</a>
		</div>
	</section>
	<section class="about">
		<p>The broad through line of my work is designing software that makes people feel a sense of awe. Currently I’m building <a target="_blank" href="https://pinched.io">Pinched.io</a>, a sourcing tool that helps cool folks find their next hire, sales lead, or founder to invest in (we’re backed by Pioneer). Before that I was a design engineer at <a target="_blank" href="https://blog.thinkst.com/2020/08/something-fresh.html">Thinkst Canary</a>. Before that I studied CS. Before that I dropped out of an architecture degree. Before that I was a deeply unmotivated student that only loved one subject — art. If I have to connect the dots going backward, taking art class is probably the thing that got me into the game.</p>
	</section>
	<section class="projects">
		<h2>Projects</h2>
		<div class="project">
			<div class="date">2022–Now</div>
			<div class="content">
				<h3><a class="external-link" target="_blank" href="https://pinched.io">Pinched.io</a></h3>
				<p>Network based sourcing tool for finding your next hire, sales lead, or founder to invest in, starting with Twitter.</p>
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
				<h3><a class="external-link" target="_blank" href="https://twitter.com/ycparak/status/1299506072160546816">Personal Knowledge Management System</a></h3>
				<p>PKMS inspired by Roam Research and Andy Matuschak’s note taking system. Served as my own CRM, notes app and task manager.</p>
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
		<p>Currently learning and exploring Svelte, DuckDB, LLM’s, interaction design, typography, local-first software and performance.</p>
		<p>Trying to build awe-inspiring software by mastering design & engineering. Most of my learning is done on the job by building side projects, chief of which is <a target="_blank" href="https://pinched.io">Pinched.io</a>.</p>
		<p>I’ll be traveling to SF sometime between May and July, I’ll be there for a month and will then spend a couple weeks exploring the rest of the west coast (from Seattle to San Diego). If you’re reading this and you’ll also be in town, I’d love to link, DM me!</p>
	</section>
	<footer>
		© 2023 &middot; Code open sourced <a class="external-link" target="_blank" href="https://github.com/ycparak">here</a>
	</footer>
</div>

<style lang="scss">
	h1 {
		font-family: 'Newsreader', serif;
		font-style: italic;
		font-weight: 400;
		font-size: 36px;
		line-height: 46px;
		color: var(--text-header);
	}
	h3 {
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
		margin-bottom: 20px;
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
		margin-top: 160px;
		margin-bottom: 80px;
		h2 { 
			color: var(--text-muted);
			margin-bottom: 0;
		}
		.nav-links {
			margin-top: 20px;
			a {
				color: var(--text-muted);
				font-size: 14px;
				font-weight: 550;
				line-height: 1;
				text-decoration: none;
				margin-right: 10px;
				&::after {
					font-size: 10px;
					color: var(--text);
				}
				&:hover {
					color: var(--text);
				}
			}
		}
	}
	.about, .projects, .now {
		margin-bottom: 68px;
		max-width: 480px;
	}

	.project {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin-bottom: 8px;

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

		@media (max-width: 556px) {
			flex-direction: column;
			.date {
				font-size: 13px;
				font-weight: 650;
				margin-bottom: 4px;
			}
		}
	}

	footer {
		margin-bottom: 160px;
		font-size: 14px;
		font-weight: 550;
		line-height: 1;
		color: var(--text-muted);
		a {
			color: var(--text-muted);
			font-size: 14px;
			font-weight: 550;
			line-height: 1;
			text-decoration: underline;
			margin-right: 10px;
			&::after {
				font-size: 10px;
				color: var(--text);
			}
			&:hover {
				color: var(--text);
			}
		}
	}
</style>