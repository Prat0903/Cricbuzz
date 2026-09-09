export default class AuthController {
  constructor() {}

  async googleCallback(req, res) {
    console.log(req.user);
    return res.json({
      data: req.user,
    });
  }
}
