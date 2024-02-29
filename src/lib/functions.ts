/** Dispatch event on click outside of node */
export function clickOutside(element: HTMLElement, callbackFunction: () => void) {
	function onClick(event: MouseEvent) {
		if (!element.contains(event.target as Node)) {
			callbackFunction();
		}
	}

	document.body.addEventListener('click', onClick);

	return {
		update(newCallbackFunction: () => void) {
			callbackFunction = newCallbackFunction;
		},
		destroy() {
			document.body.removeEventListener('click', onClick);
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
