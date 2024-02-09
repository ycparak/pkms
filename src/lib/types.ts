export type Category = 'projects' | 'craft' | 'writing';

export type Post = {
	title: string;
	date: string;
	project: string | null;
	hasLink: boolean | null;
	link: string | null;
	linkTitle: string | null;
	previewImage: string | null;
	previewVideo: string | null;
	hasPreviewComponent: boolean | null;
	description: string | null;
	isDraft: boolean | false;
	isPublishable: boolean | true;
	category: Category;
	path: string;
	slug: string;
};
