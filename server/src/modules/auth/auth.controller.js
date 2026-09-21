import env from "../../config/env.js";
import AuthService from "./auth.service.js";
import { app_config } from "../../constant/app.constant.js";
import buildSuccessResponse from "../../shared/utils/buildSuccessResponse.js";

export default class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  async getRefreshAccessToken(req, res) {
    let { accessToken } = await this.authService.RefreshAccessToken(
      req.cookies.refreshToken,
    );

    res.cookie("accessToken", accessToken, app_config().cookie.accessToken);

    return buildSuccessResponse(res);
  }

  async getMe(req, res) {
    buildSuccessResponse(res, "User verified", 200, req.user);
  }

  async GoogleCallback(req, res) {
    let { accessToken, refreshToken } = await this.authService.CreateUser(
      req.user,
    );

    res.cookie("refreshToken", refreshToken, app_config().cookie.refreshToken);

    res.cookie("accessToken", accessToken, app_config().cookie.accessToken);

    res.redirect(env.REDIRECT_URL);
  }
}
