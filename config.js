const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "OM9UyIxI#SwZK4pBD1FdDRvMijvTz72eZCWv1rCfOc8M5ihQzscU",
ALIVE_IMG : process.env.ALIVE_IMG || "https://telegra.ph/file/e1fd8689e69a7baa4920d.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "hi",    
};
