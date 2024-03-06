---
title: Using getBoundingClientRect with Hosted Fonts
date: '2021-09-17'
published: true
---

When using hosted fonts, you may find that utilising `getBoundingClientRect` to get the dimensions or positioning of a text element results in incorrect values being returned. This is because the browser doesn't know the font's metrics until its been downloaded and parsed.

```tsx
useEffect(() => {
	// returns an incorrect value if the font hasn't been downloaded yet
	const x = element.current.getBoundingClientRect().x;
});
```

Save yourself the hair pulling I just went though by using by using the [`FontFaceSet ready`](https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/ready) method to check if the font has been loaded before using `getBoundingClientRect`.

```tsx
const [fontLoaded, setFontLoaded] = useState(false);

useEffect(() => {
	document.fonts.ready.then(() => {
		setFontLoaded(true);
	});
});

useEffect(() => {
	const x = element.current.getBoundingClientRect().x;
}, [fontLoaded]);
```
