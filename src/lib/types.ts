export type Category = 'essay' | 'note' | 'design' | 'craft';

export type Post = {
	title: string;
	date: string;
	category: Category;
	project: string | null;
	hasLink: boolean | null;
	link: string | null;
	linkTitle: string | null;
	previewImage: string | null;
	previewVideo: string | null;
	hasPreviewComponent: boolean | null;
	description: string | null;
	slug: string;
};
