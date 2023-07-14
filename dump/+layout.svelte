<div class="fixed bottom-0 z-10 flex items-center justify-between w-full h-16 border-t border-silver-100 bg-silver-50 md:flex-col md:w-16 md:h-full md:border-r md:border-t-">
	<!-- Back button -->
	<div></div>
	<!-- Nav -->
	<nav class="flex items-center justify-between md:justify-center md:gap-6 md:flex-col">
		<!-- For loop iterating through config.mainLinks -->
		{#each config.mainLinks as link}
			<a
				href="{link.path}"
				class="text-xl leading-none text-silver-900">
				<i class="{link.icon}"></i>
			</a>
		{/each}
	</nav>
	<!-- Controls -->
	<div></div>
</div>
<div class="relative bg-silver-50 md:ml-16">
	<slot />
</div>