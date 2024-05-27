import type { Config } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config({
	path: '.env.local',
});

export default {
	schema: './config/schema.js',
	out: './drizzle',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.NEXT_PUBLIC_DATABASE_URL,
	},
} satisfies Config;
