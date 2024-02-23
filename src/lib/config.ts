import { dev } from '$app/environment';

export const title = 'Yusuf Parak';
export const description = 'Product Designer and Software Engineer';
export const url = dev ? 'http://localhost:5173' : 'https://ycparak.com';

export const menuSizes = {
	default: {
		width: 182,
		height: 30
	},
	craft: {
		'view prototype': {
			width: 222,
			height: 30
		},
		'view live site': {
			width: 207,
			height: 30
		},
		'view case study': {
			width: 228,
			height: 30
		}
	},
	craftExpanded: {
		width: 400,
		height: 30
	},
	about: {
		width: 400,
		height: 400
	}
};
