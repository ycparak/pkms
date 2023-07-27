<script lang="ts">
	export let link = '';
	export let linkTitle = '';
	export let linkExternal = '_self';
</script>

<div class="item">
  <h5 class="date"><slot name="date"></slot></h5>
  <p class="content">
    <a href={link} target={linkExternal}>{linkTitle}</a><br>
    <slot name="description"></slot>
  </p>
</div>

<style lang="scss">
  .item {
		display: flex;
		flex-direction: row;
		width: 100%;
		grid-column: body-start;
		.date {
			min-width: functions.toRem(112px);
			color: var(--color-text-light);
		}
		a {
			font-weight: 500;
			color: var(--color-text-dark);
			text-decoration: none;
			text-decoration: underline;
			text-decoration-color: var(--color-line);
		}
	}
</style>