/** Dispatch event on click outside of node */
export function clickOutside(element: HTMLElement, callbackFunction: () => void) {
	function onClick(event: MouseEvent) {
		if (!element.contains(event.target as Node)) {
			callbackFunction();
		}
	}

	document.body.addEventListener('mousedown', onClick);

	return {
		update(newCallbackFunction: () => void) {
			callbackFunction = newCallbackFunction;
		},
		destroy() {
			document.body.removeEventListener('mousedown', onClick);
		}
	};
}

export function normalizeAngle(angle: number): number {
	const remainder = angle % 360;
	return remainder < 0 ? remainder + 360 : remainder;
}

// Given two angles in degrees, returns the smallest angle between them.
// It also accounts for direction.
export function getAngleDifference(angle1: number, angle2: number): number {
	const clockwiseDiff = normalizeAngle(angle2 - angle1);
	const counterClockwiseDiff = 360 - clockwiseDiff;
	return clockwiseDiff < counterClockwiseDiff ? clockwiseDiff : -counterClockwiseDiff;
}

export function round(value: number, precision: number): number {
	const multiplier = Math.pow(10, precision || 0);
	return Math.round(value * multiplier) / multiplier;
}

export function setUserSelect(element: HTMLElement, value: string) {
	element.style.userSelect = value;
	element.style.webkitUserSelect = value;
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	element.style.webkitTouchCallout = value;
}

export function foo() {
	// Get all aside links that don’t have class .reverse-link
	const asideLinks = document.querySelectorAll('.aside-link:not(.reverse-link)');

	// Add event listener to each aside link
	asideLinks.forEach((link) => {
		link.addEventListener('mouseenter', (e) => {
			const id = (e?.target as HTMLElement)?.getAttribute('href')?.replace('#', '');
			const target = document.getElementById(id || '');
			target?.classList.add('active');

			const current = (e?.target as HTMLElement)?.closest('p');
			const sentences = current?.innerText.split(/(?<=[.!?])/g);
			const indexOfLink = sentences?.findIndex((sentence) => sentence.includes(id || ''));
			const sentence = sentences && indexOfLink && sentences[indexOfLink - 1];

			if (sentence && current) {
				current.innerHTML = current.innerHTML.replace(
					sentence,
					`<span class="active">${sentence}</span>`
				);
			}
		});

		link.addEventListener('mouseleave', (e) => {
			console.log('hello world');
			const id = (e?.target as HTMLElement)?.getAttribute('href')?.replace('#', '');
			const target = document.getElementById(id || '');
			target?.classList.remove('active');

			const current = (e?.target as HTMLElement)?.closest('p');
			const sentences = current?.innerText.split(/(?<=[.!?])/g);
			const indexOfLink = sentences?.findIndex((sentence) => sentence.includes(id || ''));
			const sentence = sentences && indexOfLink && sentences[indexOfLink - 1];

			if (sentence && current) {
				current.innerHTML = current.innerHTML.replace(
					`<span class="active">${sentence}</span>`,
					sentence
				);
			}
		});
	});
}
