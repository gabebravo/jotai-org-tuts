import { atomWithStorage } from 'jotai/utils';

// arg1 = key, arg2 = default value
export const theme = atomWithStorage('theme', 'light');
