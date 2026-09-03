import dotenv from "dotenv";
dotenv.config();
import z from "zod";
import appConstant from "../constant/app.constant.js";

let envSchema = z.object({
  PORT: z.coerce.number().default(appConstant.PORT),
  MONGO_URL: z.string().default(appConstant.MONGO_URL),
  NODE_ENV: z.string().default(appConstant.NODE_ENV),
  LOGGER_LEVEL: z.string().default(appConstant.LOGGER_LEVEL),
});

let parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.log("Check your env's");
}

export default parsedEnv.data;
