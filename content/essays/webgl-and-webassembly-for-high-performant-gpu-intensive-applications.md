---
depth: 2
title: WebGL and WebAssembly for high performant GPU intensive applications
abstract: "One of the recent and larger technological advancements in the world of browser based software has been the rise of WebGl and WebAssembly. These technologies allow you to cut past the browser and talk directly to the hardware. Meaning you can now build browser based GPU intensive applications and have them work pretty well."
collection: Note
---
One of the recent and larger technological advancements in the world of browser based software has been the rise of <inter-link href="webgl">WebGL</inter-link> and <inter-link href="webassembly">WebAssembly</inter-link>. These technologies allow you to cut past the browser and talk directly to the hardware. Meaning you can now (I say now but this has been possible for a few years) build browser based GPU intensive applications and have them work pretty well.

One example of a company using this stack is <inter-link href="figma"></inter-link>. They've adopted this as their core stack to create an impressive design interface tool. Prior to Figma, it seemed crazy to think you would do anything close to designing applications in a browser. Figma’s CTO Evan Wallace explained this in a blog post 4 days after their launch (December 3, 2015):

> This lack of general primitives on the web is [starting to change](https://extensiblewebmanifesto.org/) and now there are technologies like WebGL and asm.js that let developers cut past the browser and talk directly to the hardware. It’s this advancement that’s finally made high-performance web-based graphics applications practical. Developers no longer need to wait for the exact features they need to be added to the web, they can build those features themselves!

Since then, WebAssembly was released, and the Figma team promptly [moved from asm.js to WebAssembly](https://www.figma.com/blog/webassembly-cut-figmas-load-time-by-3x/). Which incidentally improved their load time by 3x.

---

Links to this note:
- <inter-link href="figma">Figma</inter-link>
