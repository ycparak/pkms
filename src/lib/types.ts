export type WritingCategory = 'essay' | 'note';

export type Writing = {
	title: string;
	date: string;
	slug: string;
	isDraft: boolean;
};

export type ProjectMeta = {
	title: string;
	date: string;
	project: string;
	description: string;
	link?: string | null | undefined;
	linkTitle?: string | null | undefined;
	linkIsExternal?: boolean | null;
	codeLink?: string | null | undefined;
	slug: string;
	isDraft: boolean;
};

export type Project = {
	default: any;
	meta: ProjectMeta;
};
