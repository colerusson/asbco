const { loginService } = require('../services/user-service.js');


//example how to call login backend
loginService("dahlia_girl", "dahlia#pass", () => {
    console.log("Login success");
}, () => {
    console.log("Login fail");
})