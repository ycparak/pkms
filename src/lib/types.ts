export type Category = 'projects' | 'craft' | 'writing';

export type Project = {
	title: string;
	date: string;
	project: string;
	hasLink: boolean | null;
	description: string;
	isDraft: boolean;
	isPublishable: boolean;
	link?: string | null | undefined;
	linkTitle?: string | null | undefined;
	previewImage?: string | null | undefined;
	previewVideo?: string | null | undefined;
	previewComponent?: string | null | undefined;
};
