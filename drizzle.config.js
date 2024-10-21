require('dotenv').config(); 

const { defineConfig } = require("drizzle-kit");

module.exports = defineConfig({
  schema: "./configs/schema.jsx", // Ensure the path to the schema is correct
  out: "./drizzle",
  dialect: "postgresql",  // This specifies the PostgreSQL dialect
  dbCredentials: {
    url: 'postgresql://neondb_owner:P2jDm5HXQVfn@ep-bold-king-a504m80s.us-east-2.aws.neon.tech/ai_course_gen?sslmode=require'
  },
});
