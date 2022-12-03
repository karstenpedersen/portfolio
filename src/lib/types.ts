export type Project = {
	id: string;
	type: string;
	title: string;
	description: string;
	tags: string[];
	thumbnail: string;
	links: Link[];
};

export type Link = {
	iconName: string;
	url: string;
};
