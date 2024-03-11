import type { Project, ProjectMeta } from '$lib/types';
import { dev } from '$app/environment';

export async function load() {
	const projects = await getProjects();
	return { projects };
}

async function getProjects() {
	let projects: Project[] = [];

	const srcPaths = import.meta.glob('/src/content/projects/*.md', { eager: true });

	for (const srcPath in srcPaths) {
		const file = srcPaths[srcPath] as Project;
		const slug = srcPath.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			// Set metadata
			const metadata = file.metadata as Omit<ProjectMeta, 'slug'>;
			const meta = { ...metadata, slug: '' } as ProjectMeta;
			if (meta.link && !meta.linkIsExternal) meta.slug = slug;

			// Set projects
			const post = { default: file.default, meta };
			if (post.meta.isDraft && !dev) continue;
			else projects.push(post);
		}
	}

	// Sort posts by date
	projects = projects.sort(
		(first, second) => new Date(second.meta.date).getTime() - new Date(first.meta.date).getTime()
	);

	return projects;
}
