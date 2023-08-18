import { atom } from 'jotai';

export const counterState = atom(0);

counterState.debugLabel = 'Count';
