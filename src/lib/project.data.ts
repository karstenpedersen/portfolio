import type { Project } from './types';

export const projects: Project[] = [
	{
		id: 'heidelife-dk',
		type: 'Website',
		title: 'Heidelife.dk',
		description: '',
		tags: ['Website', 'Art Direction'],
		thumbnail: '/images/projects/heidelife-dk/thumbnail.png',
		links: [
			{
				iconName: 'globe',
				url: 'http://heidelife.dk/'
			},
			{
				iconName: 'github',
				url: 'https://github.com/karstenpedersen/heidelife'
			}
		]
	}
];
