CloudBot
=======

A Bot script which is used for [Plug.dj](http://plug.dj/communities/)

I don't mind you guys using this script just long as nothing is to be changed on it.

Permission to change anything on this script, You can always contact the author at
[PlugStation](http://chillout-lounge.webs.com/)
If there happen to be a bug or problem with the bot you can report issue [HERE](https://github.com/DJ-Neon05/Cloudbot/issues). I'll work on it ASAP! Thanks :)

CloudBot commands can be found [HERE](http://chillout-lounge.webs.com/cloudbot)

##### CloudBot version: 1.0
##### Updated: Jun 25/2015

You can customize this bot script once you fork it.
How to function it? scroll down [HERE]()

---
## What can this bot do? ##

####- Admins of the bot can also use the moderators commands
      Helpful for moderating the room.
      While using `.commands` you can also instruct bot to show it's commands to other users. By simply Mentioning the user.
--
####- Interval announcements

- If you have a facebook group link you would like to share, or any message you would like to regularly announce, the bot can be configured to say a certain message every X number of songs.
    - You can add your own announcement keyword [HERE](https://github.com/DJ-Neon05/Fun-Bot/blob/master/Bot/Fun.js#L79) 

--
###- Greets the Joiners
- If a user joins the lobby. Bot can randomly send out greeting message to that user.
- Random keywords for greetings
`example`

```
#plugbot: Welcome @USER 
#Plugbot: Hey there @USER
#Plugbot: Glad you came by @USER
```

--
###- Helps put up link
- Usually random users can't have the opportunity to link out URLs into chat.
- Issue fix. bot can now help none staff users to link out random URLs
- An example is given below `example 1`

`example 1`
```
#Neon: [Hidden URL]
#Neon: Can you guys see the link?
#Tools: Can't see nothing
#Neon: .linkin www.YouTube.com/fQpgHvAYGNY
#Plugbot: https://www.YouTube.com/fQpgHvAYGNY
#Tools: There it is!
```


---
## Installing Bot
Copy and paste this code to your bookmarks bar and rename it to whatever you like.
```Javascript
javascript:(function(){$.getScript('');}());
```
You can function your own bot script after forking this script.
```JavaScript
javascript:(function(){$.getScript('[YOUR BOT RAW URL]');}());
```
