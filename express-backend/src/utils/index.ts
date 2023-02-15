import crypto from 'crypto';

// UUID format: "xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx", where x is one of [0-9, af] M is one of [1-5] and N is [8, 9, a or b].
export const randomUUID: string = crypto.randomUUID({ disableEntropyCache: true });