export default {
	schema: "./src/lib/server/db/schema.js",  // Path to schema
	out: "./drizzle/migrations",  // Where to store migrations
	dialect: "sqlite",  // Use 'sqlite' as the dialect
	dbCredentials: {
	  url: "local.db",  // Ensure this is the correct SQLite database file
	},
  };
  