import env from "../../config/env.js";
import AuthService from "./auth.service.js";
import { app_config } from "../../constant/app.constant.js";
import UnAuthorize from "../../shared/error/unAuthorize.error.js";

export default class AuthController {
  constructor() {
    this.userService = new AuthService();
  }

  // async getMe() {
  //   throw new UnAuthorize("User is not Authorized");
  // } 

  async GoogleCallback(req, res) {
    let { accessToken, refreshToken } = await this.userService.CreateUser(
      req.user,
    );

    res.cookie("refreshToken", refreshToken, app_config.cookie.refreshToken);

    res.cookie("accessToken", accessToken, app_config.cookie.accessToken);

    res.redirect(env.REDIRECT_URL);
  }
}
