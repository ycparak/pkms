let tabWidths = [];
let tabWidthRunningSum = [];

let navOffsets = [];
let tabs = [];

let rebound;
let springSystem = new rebound.SpringSystem();
let mainSpring = springSystem.createSpring();

let slides = [];
let downIndex = 0;
let endValue = 0;
let viewportWidth = document.getElementById('wrapper').innerWidth();
let viewportHeight = document.querySelectorAll('#slides li').innerHeight();
let nav;
let imageWidths = [1172, 968, 2400, 800, 2600, 968, 968, 2400, 2400];
let imageHeights = [2077, 1864, 1536, 1220, 2600, 1864, 1864, 1536, 1536];

let downSpring = springSystem.createSpring();

let lastX = 0;
let panVelocity = 0;
let isDragging = false;
let shouldStartDetectingGesture = true;
let isCurrentlyDetectingGesture = false;
let endOfDetectionTimer;
let restartDetectionTimer;

document.ready(function () {
	// Nav
	let totalNavWidth = calculateTabWidths();
	nav = document.getElementById('nav');
	document.getElementById('nav').width(totalNavWidth);
	let navElements = document.querySelectorAll('#nav li');

	// Nav offsets
	navElements.each(function (i, val) {
		navOffsets[i] = navOffsetForIndex(i);
		tabs[i] = val; // set tabs array with nav li elements
	});

	setupMainSpring();
	setupPanSupport();
	setupTabPressedStates();
	setupArrowKeys();

	document.querySelectorAll('#slides li').each(function (i, val) {
		val.style['webkitTransform'] = 'translate3d(' + viewportWidth * i + 'px, 0, 0)';
		val.style['MozTransform'] = 'translate3d(' + viewportWidth * i + 'px, 0, 0)';
		slides[i] = val;
	});

	selectTabIndex(0, false);

	let down = [];

	navElements.each(function (i, val) {
		val.click(function () {
			selectTabIndex(i, true);
		});

		val.mousedown(function () {
			down[i] = true;
			pressDownOnTabIndex(i);
		});

		val.mouseup(function () {
			down[i] = false;
			releaseDownOnTabIndex(i);
		});

		val.mouseleave(function () {
			if (down[i] === true) releaseDownOnTabIndex(i);
		});

		val.mouseenter(function () {
			if (down[i] === true) pressDownOnTabIndex(i);
		});

		val.addEventListener(
			'touchstart',
			function (e) {
				down[i] = true;
				pressDownOnTabIndex(i);
			},
			false
		);

		val.addEventListener(
			'touchend',
			function (e) {
				down[i] = false;
				releaseDownOnTabIndex(i);
			},
			false
		);

		val.addEventListener(
			'touchcancel',
			function (e) {
				down[i] = false;
				releaseDownOnTabIndex(i);
			},
			false
		);
	});

	document.getElementById('wrapper').mouseup(function () {
		down = [];
	});
});

// Sets the total nav width
// Sets the tabWidths array
// Sets the tabWidthRunningSum array (cumulative sum of tabWidths)
let calculateTabWidths = function () {
	let totalWidth = 0;
	document.querySelectorAll('#nav li').each(function (i, val) {
		tabWidths[i] = val.innerWidth();
		tabWidthRunningSum[i] = tabWidths[i];
		if (i > 0) {
			tabWidthRunningSum[i] = tabWidthRunningSum[i] + tabWidthRunningSum[i - 1];
		}
		totalWidth += tabWidths[i];
	});
	return totalWidth;
};

// Sets the navOffsets array
let navOffsetForIndex = function (i) {
	if (i > 0) {
		return (tabWidthRunningSum[i - 1] + tabWidths[i] / 2.0) * -1;
	} else {
		return (tabWidths[i] / 2.0) * -1;
	}
};

// Sets the mainSpring (Nav translation, slide translation, slide scale, slide opacity, tab opacity)
let setupMainSpring = function () {
	mainSpring.setSpringConfig(rebound.SpringConfig.fromQcTensionAndFriction(4.5, 5.7));

	mainSpring.addListener({
		onSpringUpdate: function (spring) {
			let progress = spring.getCurrentValue();

			let xTranslation = transitionForProgressInSteps(progress, navOffsets);

			if (Math.abs(spring.getVelocity()) < 0.05 && window.devicePixelRatio < 1.1)
				xTranslation = Math.floor(xTranslation);

			nav.style['webkitTransform'] = 'translate3d(' + xTranslation + 'px, 0, 0)';
			nav.style['MozTransform'] = 'translate3d(' + xTranslation + 'px, 0, 0)';

			document.querySelectorAll('#slides li').each(function (i, val) {
				let slideProgress = 1 - Math.abs(progress - i);

				if (slideProgress > 0) {
					let x = i * viewportWidth - progress * viewportWidth;

					let easeOutSlideProgress = slideProgress < 1 ? slideProgress * (2 - slideProgress) : 1;
					let scale = transitionForProgressInRange(easeOutSlideProgress, 0.45, 1.0);

					val.style['webkitTransform'] = 'translate3d(' + x + 'px, 0, 0) scale(' + scale + ')';
					val.style['MozTransform'] = 'translate3d(' + x + 'px, 0, 0) scale(' + scale + ')';
				}

				val.style['opacity'] = slideProgress > 0 ? 1.0 : 0.0;

				let tabOpacity = transitionForProgressInRange(clampedProgress(slideProgress), 0.2, 1, 0);
				tabs[i].style['opacity'] = tabOpacity;
			});
		}
	});
};

let setupPanSupport = function () {
	let item = document.getElementById('slides');
	item.addEventListener(
		'touchstart',
		function (e) {
			let touch = e.touches[0];
			startDragging(touch.pageX);
		},
		false
	);

	item.addEventListener(
		'touchmove',
		function (e) {
			e.preventDefault();

			let touch = e.touches[0];
			continueDragging(touch.pageX);
		},
		false
	);

	item.addEventListener(
		'touchend',
		function (e) {
			endTrackingInputMode('drag');
		},
		false
	);

	item.addEventListener(
		'touchcancel',
		function (e) {
			endTrackingInputMode('drag');
		},
		false
	);

	item.addEventListener(
		'mousedown',
		function (e) {
			startDragging(e.clientX);
		},
		false
	);

	item.addEventListener(
		'mousemove',
		function (e) {
			if (isDragging) continueDragging(e.clientX);
		},
		false
	);

	item.addEventListener(
		'mouseup',
		function (e) {
			endTrackingInputMode('drag');
		},
		false
	);

	item.addEventListener(
		'mouseleave',
		function (e) {
			if (isDragging) endTrackingInputMode('drag');
		},
		false
	);

	window.addEventListener(
		'wheel',
		function (e) {
			scrollWithVelocity(e.wheelDeltaX);
		},
		false
	);
};

let scrollWithVelocity = function (velocity) {
	let slip = 0.1;
	let dampenedVelocity = velocity * slip;

	let previousVelocity = panVelocity;
	panVelocity = dampenedVelocity;

	let changeInVelocity = Math.abs(previousVelocity / slip - velocity);
	let velocityDidSignificantlyChange = changeInVelocity > 300;

	if (velocityDidSignificantlyChange && Math.abs(previousVelocity) > 0.001) {
		console.log('new swipe');
	}

	if (shouldStartDetectingGesture) {
		shouldStartDetectingGesture = false;
		isCurrentlyDetectingGesture = true;

		endOfDetectionTimer = setTimeout(function () {
			isCurrentlyDetectingGesture = false;
			endTrackingInputMode('desktop-scroll');

			restartDetectionTimer = setTimeout(function () {
				shouldStartDetectingGesture = true;
			}, 1000);
		}, 150);
	}

	if (isCurrentlyDetectingGesture) {
		continueTrackingWithDelta(dampenedVelocity);
	}
};

let startDragging = function (x) {
	lastX = x;
	isDragging = true;
	viewportWidth = document.getElementById('wrapper').innerWidth();
	mainSpring.setAtRest();
};

let continueDragging = function (x) {
	panVelocity = x - lastX;
	lastX = x;

	continueTrackingWithDelta(panVelocity);
};

let continueTrackingWithDelta = function (delta) {
	panVelocity = delta;

	let progress = progressForValueInRange(delta, 0, -viewportWidth);

	let currentValue = mainSpring.getCurrentValue();

	if (currentValue + progress < 0 || currentValue + progress > tabs.length - 1) progress *= 0.5;

	mainSpring.setCurrentValue(currentValue + progress);
	mainSpring.setAtRest();
};

let endTrackingInputMode = function (inputMode) {
	let currentPosition = mainSpring.getCurrentValue();
	let startPosition = endValue;

	let positionDelta = currentPosition - startPosition;
	let swipingTowardsCurrentPage =
		(positionDelta > 0 && panVelocity > 0) || (positionDelta < 0 && panVelocity < 0);
	let passedVelocityTolerance = Math.abs(panVelocity) > 3;
	let passedDistanceTolerance = Math.abs(positionDelta) > 0.3;

	if (inputMode == 'desktop-scroll') {
		passedDistanceTolerance = true;
	}

	let shouldAdvance =
		(passedDistanceTolerance || passedVelocityTolerance) && !swipingTowardsCurrentPage;
	let directionIsForward = panVelocity <= 0;

	if (shouldAdvance) {
		let targetIndex;

		if (currentPosition == startPosition) {
			targetIndex = directionIsForward ? currentPosition + 1 : currentPosition - 1;
		} else {
			targetIndex = directionIsForward ? Math.ceil(currentPosition) : Math.floor(currentPosition);
		}

		selectTabIndex(targetIndex, true);
	} else {
		selectTabIndex(startPosition, true);
	}

	let normalizedVelocity = progressForValueInRange(panVelocity, 0, -viewportWidth);
	mainSpring.setVelocity(normalizedVelocity * 30);
	panVelocity = 0;
	isDragging = false;
};

let setupTabPressedStates = function () {
	downSpring.setSpringConfig(rebound.SpringConfig.fromQcTensionAndFriction(100, 5.5));

	downSpring.addListener({
		onSpringUpdate: function (spring) {
			let progress = spring.getCurrentValue();
			let scale = transitionForProgressInRange(progress, 1.0, 0.92);
			tabs[downIndex].style['webkitTransform'] = 'scale(' + scale + ')';
			tabs[downIndex].style['MozTransform'] = 'scale(' + scale + ')';
		}
	});
};

let pressDownOnTabIndex = function (index) {
	downIndex = index;

	document.querySelectorAll('#nav li').each(function (i, val) {
		if (i === index) {
			downSpring.setEndValue(1);
		}
	});
};

let releaseDownOnTabIndex = function (index) {
	document.querySelectorAll('#nav li').each(function (i, val) {
		if (i === index) {
			downSpring.setEndValue(0);
		}
	});
};

let selectTabIndex = function (i, animated) {
	if (i < 0) i = 0;
	else if (i > tabs.length - 1) i = tabs.length - 1;

	if (animated) {
		viewportWidth = document.getElementById('wrapper').innerWidth();
		endValue = i;
		mainSpring.setEndValue(i);
	} else {
		mainSpring.setCurrentValue(i);
	}
};

let calculateContentScaleForIndex = function (i) {
	let contentWidth = imageWidths[i];
	let contentHeight = imageHeights[i];

	let scale =
		viewportWidth / viewportHeight > contentWidth / contentHeight
			? viewportHeight / contentHeight
			: viewportWidth / contentWidth;
	return scale;
};

let setupArrowKeys = function () {
	let initialPress = true;
	let isRubberbanding = false;

	document.keydown(function (e) {
		let currentIndex = endValue;
		let positionTolerance = 0.001;
		let maxRubberbandDistance = 0.03;

		if (e.keyCode == 37) {
			let inRubberbandableRegion = mainSpring.getCurrentValue() < positionTolerance;

			if (inRubberbandableRegion && initialPress) {
				isRubberbanding = true;
				mainSpring.setEndValue(mainSpring.getCurrentValue() - maxRubberbandDistance);
			} else if (!inRubberbandableRegion) {
				isRubberbanding = false;
				selectTabIndex(currentIndex - 1, true);
			}
		} else if (e.keyCode == 39) {
			let inRubberbandableRegion =
				mainSpring.getCurrentValue() > tabs.length - 1 - positionTolerance;

			if (inRubberbandableRegion && initialPress) {
				isRubberbanding = true;
				mainSpring.setEndValue(mainSpring.getCurrentValue() + maxRubberbandDistance);
			} else if (!inRubberbandableRegion) {
				isRubberbanding = false;
				selectTabIndex(currentIndex + 1, true);
			}
		}

		initialPress = false;
	});

	document.keyup(function (e) {
		let currentIndex = endValue;

		if (e.keyCode == 37 && isRubberbanding) {
			selectTabIndex(currentIndex - 1, true);
		} else if (e.keyCode == 39 && isRubberbanding) {
			selectTabIndex(currentIndex + 1, true);
		}

		isRubberBanding = false;
		initialPress = true;
	});
};

let progressForValueInRange = function (value, startValue, endValue) {
	return (value - startValue) / (endValue - startValue);
};

let transitionForProgressInRange = function (progress, startValue, endValue) {
	return startValue + progress * (endValue - startValue);
};

let clampedProgress = function (progress) {
	if (progress < 0) progress = 0;
	else if (progress > 1) progress = 1;

	return progress;
};

let transitionForProgressInSteps = function (progress, steps) {
	let transition = -1;

	if (steps.length < 2) {
		return transition;
	}

	if (progress < 0) {
		transition = transitionForProgressInRange(progress, steps[0], steps[1]);
	} else if (progress > steps.length - 1) {
		normalizedProgress = progressForValueInRange(
			progress,
			Math.floor(progress),
			Math.floor(progress) + 1
		);
		normalizedProgress = normalizedProgress + 1;
		transition = transitionForProgressInRange(
			normalizedProgress,
			steps[steps.length - 2],
			steps[steps.length - 1]
		);
	} else if (progress == steps.length - 1 || progress == 0) {
		transition = steps[progress];
	} else {
		normalizedProgress = progressForValueInRange(
			progress,
			Math.floor(progress),
			Math.floor(progress) + 1
		);
		transition = transitionForProgressInRange(
			normalizedProgress,
			steps[Math.floor(progress)],
			steps[Math.floor(progress) + 1]
		);
	}

	return transition;
};
