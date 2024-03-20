const { writePostService } = require('../services/post-service.js');

writePostService("dahlia_girl", "post Title", "my little post i like tea", () => {
    console.log("Posted");
}, () => {
    console.log("Not posted");
});