import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const DATABASE_URL='postgresql://neondb_owner:P2jDm5HXQVfn@ep-bold-king-a504m80s.us-east-2.aws.neon.tech/ai_course_gen?sslmode=require';

const sql = neon(DATABASE_URL);
export const db = drizzle(sql);
