import "dotenv/config";
import { 
    defineConfig, 
    env 
} from "prisma/config";

const prismaConfig = defineConfig({
    schema: "./libraries/prisma/schema.prisma",
    migrations: {
        path: "./libraries/prisma/migrations",
    },
    datasource: {
        url: env("DATABASE_URL"),
    },
});

export default prismaConfig;
