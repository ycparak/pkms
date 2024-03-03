import { writable } from 'svelte/store';
import type { Project } from './types';

export const runAnimation = writable(false);

export const mousePos = writable({ x: 0, y: 0 });

export const projectSlide = writable({} as Project);
