import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const prismaAdapter = new PrismaPg({ 
    connectionString: connectionString 
});

const prismaClient = new PrismaClient({ 
    adapter: prismaAdapter,
});

export { 
    prismaClient 
};