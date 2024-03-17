import crypto from 'crypto';

const key1 = crypto.randomBytes(256).toString('base64');
console.table({key1});