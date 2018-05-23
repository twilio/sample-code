
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

var startDate = new Date();
startDate.setDate(startDate.getDate() - 14); // today minus 14 days

client.messages.list( { dateSentAfter: startDate } ).then
(function(msglist){
    
    console.log("present list in default order - newest to oldest");
    msglist.forEach( function(msg){ 
        console.log( msg.dateSent);
    });

    msglist.reverse();

    console.log("present list in reverse order - oldest to newest");
    msglist.forEach( function(msg){ 
        console.log( msg.dateSent);
    });
});
