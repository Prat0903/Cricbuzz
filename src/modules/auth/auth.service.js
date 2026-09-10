import UserRepo from "../../repository/user.repository.js";

export default class AuthService {
  constructor() {
    this.userRepo = new UserRepo();
  } 

  async CreateUser(user) {
    await this.userRepo.create(user);
  }
}
