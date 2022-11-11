import type { IconDefinition } from './components/icons/icons';

export type Project = {
	id: string;
	title: string;
	description: string;
	tags: string[];
	thumbnail: string;
	links: Link[];
};

export type Link = {
	icon: IconDefinition;
	url: string;
};
