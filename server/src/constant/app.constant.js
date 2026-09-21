import env from "../config/env.js";

export default {
  PORT: 3000,
  MONGO_URL: "mongodb://localhost:27017",
  NODE_ENV: "development",
  LOGGER_LEVEL: "info",
  RATELIMIT_WINDOWMS: 15 * 60 * 1000,
  RATELIMIT: 100,
};

export let app_config = () => {
  return {
    jwt: {
      refreshToken: {
        expiresIn: env.NODE_ENV === "production" ? "30D" : "1H",
      },
      accessToken: {
        expiresIn: env.NODE_ENV === "production" ? "1H" : "15S",
      },
    },
    cookie: {
      refreshToken: {
        httpOnly: true,
        secure: env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge:
          env.NODE_ENV === "production"
            ? 30 * 24 * 60 * 60 * 1000
            : 60 * 60 * 1000,
      },
      accessToken: {
        httpOnly: false,
        secure: env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: env.NODE_ENV === "production" ? 60 * 60 * 1000 : 15 * 1000,
      },
    },
  };
};
