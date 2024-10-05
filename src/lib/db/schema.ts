import { pgEnum, pgTable, serial, text, timestamp} from 'drizzle-orm/pg-core'

export const userSystemEnum = pgEnum('user_system_enum', ['system', 'user'])

export const chats = pgTable("chats", {
	id: serial('id').primaryKey(),
	userId: serial('user_id').notNull(),
	pdfName : text('pdfName').notNull(),
	pdfUrl : text('pdfUrl').notNull(),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	fileKey: text('file_key').notNull(),
})

export const messages = pgTable("messages", {
	id: serial('id').primaryKey(),
	chatId: serial('chat_id').notNull().references(()=>chats.id),
	content: text('content').notNull(),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	role : userSystemEnum('role').notNull(),
})

