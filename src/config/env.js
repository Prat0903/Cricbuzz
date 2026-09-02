import dotenv from "dotenv";
dotenv.config();
import z from "zod";

let envSchema = z.object({
  PORT: z.coerce.number(),
  MONGO_URL: z.string(),
  NODE_ENV: z.string(),
});

let parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.log("Check your env's");
}

export default parsedEnv.data;
