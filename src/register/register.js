const { registerService } = require("../services/user-service.js");

/*
example of registering user:

await registerService(
  "Cosmo",
  "Cougar",
  "cosmo123",
  "password",
  "profile_pic",        <- if this is empty, a default profile pic will be used
  () => {
    console.log("User registered successfully");
  },
  () => {
    console.log("User already exists");
  }
);
*/
