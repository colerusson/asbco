const { loginService } = require('../services/user-service.js');


//example how to call backend
loginService("daisy2", "pdaisy", () => {
    console.log("Login success");
}, () => {
    console.log("Login fail");
})