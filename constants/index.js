// src/constants/index.js

import path from 'node:path';

export const SWAGGER_PATH = path.join(process.cwd(), 'docs', 'swagger.json');
export const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

export const FIFTEEN_MINUTES = 15 * 60 * 1000;
export const ONE_DAY = 24 * 60 * 60 * 1000;
