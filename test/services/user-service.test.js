const UserService = require("../../src/services/user-service");

describe("UserService", () => {
  let userService;

  beforeAll(() => {
    userService = new UserService();
  });

  describe("getUsers", () => {
    it("should return all users", async () => {
      const users = await userService.getUsers();
      expect(users).toHaveLength(3);
    });
  });

  describe("getUserById", () => {
    it("should return a user by id", async () => {
      const user = await userService.getUserById(1);
      expect(user).toHaveProperty("id", 1);
    });
  });
});
