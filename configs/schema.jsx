import { json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

// Define the CourseList table structure
export const CourseList = pgTable('courseList', {
    id: serial('id').primaryKey(),         // Auto-incrementing ID
    courseId: varchar('courseId').notNull(), // Unique course ID
    name: varchar('name').notNull(),        // Course name
    category: varchar('category').notNull(), // Course category
    level: varchar('level').notNull(),       // Course level
   incudeVideo:varchar('includeVideo').notNull().default('yes'),
    courseOutput: json('courseOutput').notNull(), // JSON format course output
    createdBy: varchar('createdBy').notNull(),    // User email
    userName: varchar('userName'),                // User name
    userProfileImage: varchar('userProfileImage') // User profile image URL
});
