const { pgTable, serial, varchar, text } = require("drizzle-orm/pg-core");

export const JsonForms = pgTable('json_forms', {
    id: serial('id').primaryKey(),
    jsonForm: text('jsonForm').notNull(),
    createBy: varchar('createBy').notNull(),
    createdAt: varchar('createdAt').notNull(),
});
