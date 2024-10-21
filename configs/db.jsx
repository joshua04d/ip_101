import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Use environment variable for database URL
const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql); // Create the database connection
