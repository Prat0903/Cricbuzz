import dotenv from "dotenv";
dotenv.config();
import z from "zod";
import appConstant from "../constant/app.constant.js";

let envSchema = z.object({
  PORT: z.coerce.number().default(appConstant.PORT),
  MONGO_URL: z.string().default(appConstant.MONGO_URL),
  NODE_ENV: z.string().default(appConstant.NODE_ENV),
  LOGGER_LEVEL: z.string().default(appConstant.LOGGER_LEVEL),
  CORS_ORIGIN: z.string(),
  RATELIMIT_WINDOWMS: z.coerce.number().default(appConstant.RATELIMIT_WINDOWMS),
  RATELIMIT: z.coerce.number().default(appConstant.RATELIMIT),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GOOGLE_CALLBACK_URL: z.string(),
  JWT_SECRET: z.string(),
});

let parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.log("Check your env's");
}

export default parsedEnv.data;
