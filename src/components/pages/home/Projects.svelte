<script lang="ts">
  import { projects } from '$lib/config'
	import { TimelineItem } from '$components';
</script>

<h3>Projects</h3>
{#each projects as project}
	<TimelineItem 
    link={project.link}
    linkTitle={project.title}
    linkBio={project.linkBio ? project.linkBio : ''}
    linkExternal={project.external ? '_blank' : '_self'}>
		<svelte:fragment slot="date">{project.date}</svelte:fragment>
		<svelte:fragment slot="description">{project.description}</svelte:fragment>
	</TimelineItem>
{/each}