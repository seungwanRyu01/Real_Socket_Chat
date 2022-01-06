require('moment-timezone');
const moment = require('moment');
moment.tz.setDefault("Asia/Seoul"); 

function formatMessage( username, text ) {
    return {
        username,
        text,
        time: moment().format('hh:mm a')
    };
};

module.exports = formatMessage;