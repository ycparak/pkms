export type WritingCategory = 'essay' | 'note';

export type Writing = {
	title: string;
	date: string;
	slug: string;
	isDraft: boolean;
};

export type Project = {
	title: string;
	date: string;
	project: string;
	description: string;
	collaborators: string[];
	isDraft: boolean;
	isPublishable: boolean;
	link?: string | null | undefined;
	linkTitle?: string | null | undefined;
	linkIsExternal?: boolean | null;
	previewImage?: string | null | undefined;
	previewVideo?: string | null | undefined;
	previewComponent?: string | null | undefined;
	imageWidth?: number | null | undefined;
	imageHeight?: number | null | undefined;
	slug: string;
	codeLink: string | null | undefined;
};
