import { fiGithub, fiGlobe } from './components/icons/icons';
import type { Project } from './types';

export const projects: Project[] = [
	{
		id: 'heidelife-dk',
		title: 'Heidelife.dk',
		description: '',
		tags: ['Website', 'Design'],
		thumbnail: '',
		links: [
			{
				icon: fiGlobe,
				url: 'http://heidelife.dk/'
			},
			{
				icon: fiGithub,
				url: 'https://github.com/karstenpedersen/heidelife'
			}
		]
	}
];
