export default {
  PORT: 3000,
  MONGO_URL: "mongodb://localhost:27017",
  NODE_ENV: "development",
  LOGGER_LEVEL: "info",
  RATELIMIT_WINDOWMS: 15 * 60 * 1000,
  RATELIMIT: 100,
};

export let app_config = {
  jwt: {
    refrreshToken: {
      expiresIn: "30D",
    },
    accessToken: {
      expiresIn: "1H",
    },
  },
  cookie: {
    refreshToken: {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    },
    accessToken: {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000,
    },
  },
};
