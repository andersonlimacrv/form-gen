
/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./config/schema.js",
    out: "./drizzle",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://form-gen_db_owner:uEhKJ2wxcvr4@ep-aged-dawn-a5juf75v.us-east-2.aws.neon.tech/form-gen_db?sslmode=require',
    }
};