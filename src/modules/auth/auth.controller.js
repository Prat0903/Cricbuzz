export default class AuthController {
  constructor() {}

  async googleCallback(req, res) {
    console.log(req.user);
    res.json({
      data: req.user,
    });
  }
}
