export type IconDefinition = {
	family: IconFamily;
	fill: boolean;
	stroke: string;
	strokeWidth: number;
	strokeLinecap: 'round';
	strokeLinejoin: 'round';
	tags: IconTag[];
};

export type IconFamily = 'font-awesome' | 'feather-icons';

export type IconTag = {
	tag: string;
	props: {
		d?: string;
		points?: string;
		x?: string;
		y?: string;
		width?: string;
		height?: string;
		r?: string;
		cx?: string;
		cy?: string;
		x1?: string;
		x2?: string;
		y1?: string;
		y2?: string;
		rx?: string;
		ry?: string;
	};
};

export type IconNames =
	| 'fiGithub'
	| 'fiLinkedin'
	| 'fiGlobe'
	| 'fiExternalLink'
	| 'fiDatabase'
	| 'fiMail'
	| 'fiFile'
	| 'fiArrowRight'
	| 'fiLink'
	| 'fiMenu';

export const icons: Record<IconNames, IconDefinition> = {
	fiGithub: {
		family: 'feather-icons',
		fill: false,
		stroke: 'currentColor',
		strokeWidth: 2,
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
		tags: [
			{
				tag: 'path',
				props: {
					d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'
				}
			}
		]
	},
	fiDatabase: {
		family: 'feather-icons',
		fill: false,
		stroke: 'currentColor',
		strokeWidth: 2,
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
		tags: [
			{
				tag: 'ellipse',
				props: { cx: '12', cy: '15', rx: '9', ry: '3' }
			},
			{
				tag: 'path',
				props: { d: 'M21 12c0 1.66-4 3-9 3s-9-1.34-9-3' }
			},
			{ tag: 'path', props: { d: 'M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5' } }
		]
	},
	fiArrowRight: {
		family: 'feather-icons',
		fill: false,
		stroke: 'currentColor',
		strokeWidth: 2,
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
		tags: [
			{ tag: 'line', props: { x1: '5', y1: '12', x2: '19', y2: '12' } },
			{ tag: 'polyline', props: { points: '12 5 19 12 12 19' } }
		]
	},
	fiFile: {
		family: 'feather-icons',
		fill: false,
		stroke: 'currentColor',
		strokeWidth: 2,
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
		tags: [
			{
				tag: 'path',
				props: { d: 'M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z' }
			},
			{ tag: 'polyline', props: { points: '13 2 13 9 20 9' } }
		]
	},
	fiGlobe: {
		family: 'feather-icons',
		fill: false,
		stroke: 'currentColor',
		strokeWidth: 2,
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
		tags: [
			{
				tag: 'circle',
				props: { cx: '12', cy: '12', r: '10' }
			},
			{ tag: 'line', props: { x1: '2', y1: '12', x2: '22', y2: '12' } },
			{
				tag: 'path',
				props: {
					d: 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'
				}
			}
		]
	},
	fiExternalLink: {
		family: 'feather-icons',
		fill: false,
		stroke: 'currentColor',
		strokeWidth: 2,
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
		tags: [
			{
				tag: 'path',
				props: { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' }
			},
			{
				tag: 'polyline',
				props: { points: '15 3 21 3 21 9' }
			},
			{ tag: 'line', props: { x1: '10', y1: '14', x2: '21', y2: '3' } }
		]
	},
	fiLinkedin: {
		family: 'feather-icons',
		fill: false,
		stroke: 'currentColor',
		strokeWidth: 2,
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
		tags: [
			{
				tag: 'path',
				props: {
					d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'
				}
			},
			{ tag: 'rect', props: { x: '2', y: '9', width: '4', height: '12' } },
			{ tag: 'circle', props: { cx: '4', cy: '4', r: '2' } }
		]
	},
	fiMail: {
		family: 'feather-icons',
		fill: false,
		stroke: 'currentColor',
		strokeWidth: 2,
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
		tags: [
			{
				tag: 'path',
				props: { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }
			},
			{ tag: 'polyline', props: { points: '22,6 12,13 2,6' } }
		]
	},
	fiLink: {
		family: 'feather-icons',
		fill: false,
		stroke: 'currentColor',
		strokeWidth: 2,
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
		tags: [
			{ tag: 'path', props: { d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' } },
			{ tag: 'path', props: { d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' } }
		]
	},
	fiMenu: {
		family: 'feather-icons',
		fill: false,
		stroke: 'currentColor',
		strokeWidth: 2,
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
		tags: [
			{ tag: 'line', props: { x1: '3', y1: '12', x2: '21', y2: '12' } },
			{ tag: 'line', props: { x1: '3', y1: '6', x2: '21', y2: '6' } },
			{ tag: 'line', props: { x1: '3', y1: '18', x2: '21', y2: '18' } }
		]
	}
};

const {
	fiGithub,
	fiArrowRight,
	fiDatabase,
	fiExternalLink,
	fiFile,
	fiGlobe,
	fiLink,
	fiLinkedin,
	fiMail,
	fiMenu
} = icons;

export {
	fiGithub,
	fiArrowRight,
	fiDatabase,
	fiExternalLink,
	fiFile,
	fiGlobe,
	fiLink,
	fiLinkedin,
	fiMail,
	fiMenu
};
