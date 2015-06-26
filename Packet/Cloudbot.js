/*
 Copyright (c) 2013-2017 by Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL
 
 Permission to use this software for any purpose without fee is hereby granted, provided
 that the above copyright notice and this permission notice appear in all copies.
 
 Permission to copy and/or edit this software or parts of it for any purpose is permitted,
 provided that the following points are followed.
 - The above copyright notice and this permission notice appear in all copies
 - Within two (2) days after modification is proven working, any modifications are send back
   to the original authors to be inspected with the goal of inclusion in the official software
 - Any edited version are only test versions and not permitted to be run as a final product
 - Any edited version aren't to be distributed
 - Any edited version have the prerelease version set to something that can be distinguished
   from a version used in the original software
 
 
 TERMS OF REPRODUCTION USE
 
 Failure to follow these terms will result in me getting very angry at you
 and having your software tweaked or removed if possible. Either way, you're
 still an idiot for not following such a basic rule.
 THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHORS DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE
 INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHORS
 BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER
 RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 
 * @Author:    Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL (Member. on Plug.dj)
 *
 */


//                                              ====== CloudBot SCRIPT  ======

if(window.location.hostname === "plug.dj"){

var logged = true; // Main soource that runs the bot
var cloudBot = API.getUser().username; // Bot's name
var version = "1.0";    // Bot's Version
var API = API;          // functions APIs
var joined = new Date().getTime(); // Date and Time
var announcementTick = 60/*sec*/* 10/*minute*/; // length of bot annoucement.
var lastAnnouncement = 0;

var cloudAdmins = ["3852632"];  // Bot's Admins ID
var announcements = [""];   // Random announcements

window.setInterval(sendAnnouncement, 1000 * announcementTick);  // This is not to be changed
    
    API.on(API.CHAT, commands);
    API.on(API.USER_JOIN, userJoin);
    
    function reply(msg) { // replace sendChat to reply
        setTimeout(function () {
        API.sendChat(msg);
        }, 150); // delay messages
    }
    
    /*function activate(){
	//Re-activates the bot
	reply(cloudBot+" Reactivated");
	return logged = true;
    }*/
    
    function stop(){
	//stops the bot
	reply(cloudBot+" Now killing myself");
	API.off(API.CHAT);
    /*setTimeout(function () {
    API.on(API.CHAT, commands);
        }, 450);*/
	return logged = false;
    }
    
    function sendAnnouncement() {   // Recalls when bot randomly announce in chat
        if (lastAnnouncement++ >= announcements.length - 1) {
            lastAnnouncement = 0;
        }
        reply(announcements[lastAnnouncement]);
    }
    
    function getUserID(username) {
        var users = API.getUsers();
        for (var i = 0; i < users.length; i++)
            if (users[i].username == username)
                return users[i];
        return false;
    }
    
    function userJoin(data){
        var joinMsg = ["@user has joined!", "welcome, @user!", "Hey there, @user!", "Glad you came by, @user"];
        var join = Math.floor(Math.random() * joinMsg.length);
        reply(joinMsg[join].replace("user", data.un.username));
    }
    
    API.on(API.CHAT, function (data) { // Chat Function #1, Users and Mod can use.
        if (data.message.indexOf('.') === 0) {
            var msg = data.message, from = '@'+data.un, fromid = data.uid;
            var command = msg.substring(1).split(' ');  // 
            if (command[0].toLowerCase == API.moderateDeleteChat(data.cid)) // deletes commands by sender
        if (typeof command[2] != "undefined") {
            for (var i = 2; i < command.length; i++) {
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            switch (command[0].toLowerCase()) {
               
                case "command":
                case "commands":
                    var link = ' '+"http://chillout-lounge.webs.com/cloudbot";
                    reply(from+" My commands can be found here:"+link);
                    break;  // main commands list, can also be provided with link
                    
                case "rules":
                case "rules":
                    reply(from+" My rules has not been set yet! :(");
                    break;  // current room's rules.
                    
                case "theme":
                case "theme":
                    reply(from+" My themes settings has not been set yet! :(");
                    break;  // Theme information
                    
                case "add":
                    API.moderateAddDJ(fromid);
                    break;  // add current sender to dj
                    
                case "remove":
                    API.moderateRemoveDJ(fromid);
                    break;  // remove the current sender from dj
                    
                case "votes":
                    reply("Users vote:  :+1: "+ API.getScore().positive + " | :-1: " + API.getScore().negative + " | :purple_heart: " + API.getScore().grabs);
                    break; // recalls current votes in lobby
                    
                case "link":  // non-staff users in-use for linking websites
                    if (typeof command[1] == "undefined") {
                    reply(from + " Put a link starting off from www.");
                    } else if (command[1].toLowerCase().indexOf("plug.dj") === -1 && command[1].toLowerCase().indexOf("bug.dj") === -1 && command[1].toLowerCase().indexOf("porn") === -1 && command[1].toLowerCase().indexOf("sex") === -1) {
                    reply("["+from+"] http://"+ command[1]);
                    } else {
                    var IdiotMsg = ["Dude wtf is wrong with you? @idiot, Search that up yourself!", "Sorry i cannot search that up! @idiot", "@idiot You think i'd be that stupid enough to search that up?", "What are you an idiot? @idiot"];
                    var r = Math.floor(Math.random() * IdiotMsg.length);
                    reply(IdiotMsg[r].replace("idiot", from));
                    }
                    break;
                    
                case "define":
                    if (typeof command[1] == "undefined") {
                        reply(from+" Define what?!");
                    } else if (command[1].toLowerCase().indexOf("xxx") === -1 && command[1].toLowerCase().indexOf("porn") === -1 && command[1].toLowerCase().indexOf("sex") === -1) {
                        reply(from+" http://www.urbandictionary.com/define.php?term=" + command[1]);
                    } else {
                    var idiotMsg = ["Dude, wtf is wrong with you? Search that up yourself.", "What do i look like a porn bot?", "What are you an idiot?"];
                        reply(from+" "+ idiotMsg[Math.floor(Math.random() * idiotMsg.length)]);
                    }
                    break;
                
                /*    
                
                FUN COMMANDS COMMING SOON! :p
                
                case "":
                
                break;
                
                */
                }
            }
        });

    API.on(API.CHAT, function (data) { // Chat Function #2 , Staff members and admins can use.
        if (data.message.indexOf('.') === 0) {
            var msg = data.message, from = '@'+data.un, fromid = data.uid;
            var command = msg.substring(1).split(' ');
            if (typeof command[2] != "undefined") {
                for (var i = 2; i < command.length; i++) {
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            if (API.getUser().role <= 2,3,4,5 || API.getUsers(from, cloudAdmins)) {
                switch (command[0].toLowerCase()) {
                    
                case "test":
                    reply(from+" Test is complete bot is running fine.");
                    break;  // recalls bot status
                
                case "mystatus":
                    var say = "";
                    var userid = API.getUser();
                    say = say + "Username: "+from;
                    say = say + " | voted: "+ userid.vote;
                    say = say + " | level: "+ userid.level;
                    say = say + " | grab: "+ userid.grab;
                    say = say + " | language: "+ userid.language;
                    say = say + " | Waitlist: "+ API.getWaitListPosition(userid);
                    reply(say);
                    break;
                    
                case "skip":
                    API.moderateForceSkip();
                //  reply("Awww man, my staff don't like this music. :(");
                    break;
                    
                case "say":
                    reply(command[1]);
                    break;  // commands bot to repeat your words.
                    
                case "woot":
                    $('#woot').click();
                //  reply("One woot coming up!");
                    break;
                    
                case "meh":
                    document.getElementById("meh").click();
                //  reply("Awww man, my staff don't like this music. :(");
                    break;
                    
                case "grab":
                case "snag":
                    var addsong = ["[user] I am now grabbing current song.", "[user] This song is now mine! :blush:", "[user] Now adding this current music video..."];
                    var ar = Math.floor(Math.random() * addsong.length);
                        reply(addsong[ar].replace("user", from));
                    $(".icon-grab").click();
                    $($(".grab").children(".menu").children().children()[0]).mousedown();
                    break; // You can customize bot's grabbing files
                    
                case "join":
                    var joindj = ["[user] Time to spin a track! :speaker:", "[user] Seems like i'm up!", "[user] Now joinning the booth"];
                    var jr = Math.floor(Math.random() * joindj.length);
                    reply(joindj[jr].replace("user", from));
                    setTimeout(function () {
                    API.djJoin();
                    }, 100);
                    break;  // Allows bot to join dj booth
                    
                case "leave":
                    var leavedj = ["[user] Now leaving the dj booth...", "[user] Kicking me off :(", "[user] http://i.imgur.com/2vH8zXx.gif"];
                    var lr = Math.floor(Math.random() * leavedj.length);
                    reply(leavedj[lr].replace("user", from));
                    setTimeout(function () {
                    API.djLeave();
                    }, 100);
                    break;  // Allows bot to leave Dj booth
                    
                case "ping":
                    reply(from+" Pong!");
                    break;  // Pong call
                    
                case "pong":
                    reply(from+" Ping!");
                    break;  // ping call
                    
                case "marco":
                    reply(from+" Polo!");
                    break;  // Polo call
                    
                case "unlock":
                    API.moderateLockWaitList(false);
                    break; 
                    // Lock & UnLock DJ booth
                case "lock":
                    API.moderateLockWaitList(true);
                    break;
                    
                case "version":
                    reply("cloudBot version "+version);
                    break;  //  Recalls bot version on chat
                    
                case "status":
                    var response = "";
                    var currentTime = new Date().getTime();
                    var minutes = Math.floor((currentTime - joined) / 60000);
                    var hours = 0;
                    while (minutes > 60) {
                        minutes = minutes - 60;
                        hours++;
                    }   // bot's status, this will be changed soon.
                        hours == 0 ? 
                        response = "Running for " + minutes + "m " : 
                        response = "Running for " + hours + "h " + minutes + "m" ;
                        response = response + " | Name: " + cloudBot;
                        response = response + " | version: " + version;
                        response = response + " | Language: " + API.getUser().language;
                        response = response + " | Level: " + API.getUser().level;
                        response = response + " | Grab: " + API.getUser().grab;
                        response = response + " | role: " + API.getUser().role;
                        response = response + " | votes: " + API.getUser().vote;
                        response = response + " | Current Waitlist: " + API.getWaitList().length;
                    reply(response);
                    break;
                
            }}
            else{
                reply(from+" You need to be a staff to say this command!");
            }   // recalls when a non-staff uses staff commands on bot
        }
    });
    
    API.on(API.CHAT, function (data) { // Chat Function #3, Staff+ can use.
        if (data.message.split(' ')[0] === '.set') {
            var msg = data.message,
                from = '@'+data.un,
                roleIndex = { 'none': 0, 'rdj': 1, 'bouncer': 2, 'manager': 3, 'cohost': 4 };
            if (API.getUser().role <= 2,3,4,5 || API.getUsers(from, cloudAdmins)) {
                var roleCode = roleIndex[msg.split(' ')[1]] || null,
                    targetUser = getUserID(msg.split('@')[1].trim());
                if (getUserID(from).role >= (roleCode-1) && roleCode && targetUser)
                    API.moderateSetRole(targetUser.id, roleCode);
            }else{
                reply(from+" This command cannot be made!");
            }  
        }
    });
    
    function commands(data) { // Chat Function #4, Staff managers and Admins only.
        if (data.message.indexOf('.') === 0) {
            var msg = data.message, user = '@'+data.un, userID = data.uid;
            var command = msg.substring(1).split(' ');
            if (typeof command[2] != "undefined") {
                for (var i = 2; i < command.length; i++) {
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            if (API.getUser().role <= 5 || API.getUsers(userID, cloudAdmins)) {
                switch (command[0].toLowerCase()) {
                    
                /*case "reload":
                    activate();
                setTimeout(function () {
                    API.on(API.CHAT);
                    }, 450);
                    break;*/
                case "die":
                    stop();
                    break;
            }}
            else{
                reply(user+" You need to be a Manager+ to say this command!");
            }   // recalls when a non-staff uses staff commands on bot
        }
    }
    
    // You can change these settings.
    (function(){$('body').css('background-image', 'url( http://i.imgur.com/M0Op8Cg.jpg)');$('#playback .background').hide();$('#playback-container').css('border', '5px solid #4D4D4D');}());  
    reply(cloudBot+" version "+version+" is now running!"); // sends chat when bot is active
    console.log("cloudBot version "+version);   // friendly message on terminal
    
}else{
	alert("This script only functions at http://plug.dj/"); // this is not to be changed
}