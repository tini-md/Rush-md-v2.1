const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "xyFGXAQb#EbmUcljACC2CIlX1qB0e4iT9_0N5PWmS3dyefrFoWF8",
ALIVE_IMG : process.env.ALIVE_IMG || "https://telegra.ph/file/e1fd8689e69a7baa4920d.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "hi",    
};
