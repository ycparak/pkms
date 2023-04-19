<div class="item">
  <div class="date"><slot name="date"></slot></div>
  <div class="content">
    <h3><slot name="header"></slot></h3>
    <p><slot name="description"></slot></p>
  </div>
</div>

<style lang="scss">
  .item {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin-bottom: 24px;
		.date {
			min-width: 132px;
			font-size: 18px;
			line-height: var(--line-height-base);
			font-weight: 500;
			color: var(--text-muted);
		}
		.content {
			h3 {
				line-height: var(--line-height-base);
				margin: 0;
				padding: 0;
			}
			p {
				margin: 0;
			}
		}
	}
</style>