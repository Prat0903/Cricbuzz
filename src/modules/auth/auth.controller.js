import AuthService from "./auth.service.js";

export default class AuthController {
  constructor() {
    this.userService = new AuthService();
  }

  async GoogleCallback(req, res) {
    console.log(req.user);
    return res.json({
      data: req.user,
    });
  }
}
