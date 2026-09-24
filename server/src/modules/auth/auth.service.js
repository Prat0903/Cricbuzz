import UserRepo from "../../repository/user.repository.js";
import jwt from "jsonwebtoken";
import env from "../../config/env.js";
import { app_config } from "../../constant/app.constant.js";
import NotFound from "../../shared/error/notFound.error.js";

export default class AuthService {
  constructor() {
    this.userRepo = new UserRepo();
  }

  async RefreshAccessToken(refreshToken) {
    if (!refreshToken) throw new NotFound("Refresh token not found");

    let payload = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET);

    let accessToken = jwt.sign(payload, env.JWT_ACCESS_SECRET);

    return { accessToken };
  }

  async CreateUser(user) {
    let isUserExist = await this.userRepo.findByEmail(user.emails[0].value);

    let result = isUserExist;

    if (!isUserExist) {
      let _user = await this.userRepo.create({
        email: user.emails[0].value,
        name: user.displayName,
        picture: user.photos[0].value,
      });

      result = _user;
    }

    let payloadData = {
      id: result._id,
      email: user.emails[0].value,
      name: user.displayName,
      role: result.role,
      picture: user.photos[0].value,
    };

    let refreshToken = jwt.sign(
      payloadData,
      env.JWT_REFRESH_SECRET,
      app_config().jwt.refreshToken,
    );

    let accessToken = jwt.sign(
      payloadData,
      env.JWT_ACCESS_SECRET,
      app_config().jwt.accessToken,
    );

    return { refreshToken, accessToken };
  }
}
