/*
 Copyright (c) 2013-2017 by Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL
 
 THIS AREA IS ONLY FOR TESTING BOT 
 
* @Author:    Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL (Member. on Plug.dj)
*
*/
 

var logged = []; // Running Stats
var cloudBot = []; // Bot's name
var API = []; // Listener
var version = "1.0"; // Bot's Version

// API for pluggins
API.on(API.USER_JOIN, userjoin);

// function UI to UN
function getUser(username) {
        var users = API.getUsers();
        for (var i = 0; i < users.length; i++)
            if (users[i].username == username)
                return users[i];
        return false;
    };

// function auto join msg
function userjoin(user){
    var JoinMsg = ["@user, Has joined our lobby!","Hello there @user, welcome to our lobby!"]; // Join Messages
    var r = Math.floor(Math.random() * JoinMsg.length); // Applying to JoinMsg
    API.sendChat(JoinMsg[r].replace("user", user.un)); // Auto-fills/replacements for user
};

// Messages sending to current chat
API.on(API.CHAT, function(data){
        var msg = data.message;
        var msgid = data.cid;
        var user = data.un;
        var userid = data.uid;
        if (userid == API.getUser().id){
                logged.unshift(msgid);
                console.log(msg + " (" + msgid + ")");
        };
});

API.on(API.CHAT, function (data) { // Chat Function #0
        if (data.message.indexOf('.','!') === 0) { // Current command point 
            var msg = data.message, from = data.un, fromID = data.unID;
            var id = data.unID;
            var msg = data.message;
            var userfrom = data.un;
            var command = msg.substring(1).split(' ');
           
        if (typeof command[2] != "undefined") {
            for (var i = 2; i < command.length; i++) {
                    command[1] = command[1] + ' ' + command[i];
                }
            }
        switch (command[0].toLowerCase()) {
                    // case will allow you to make a appliance with commands for bot
                    case "command":
                    case "commands":
                            API.sendChat("@" + data.un + " My commands can be found here: http://goo.gl/hJ8WJk");
                        };
                        break;
                        
                    case "test":
                        if (API.getUsers(data.un, Funbot.admins)) {
                            API.sendChat("@" + data.un + " Test Successful");
                        } else {
                            API.sendChat("This command requires Admins only!");
                        }
                        break;
        }});
