CloudBot
=======

A Bot script which is used for [Plug.dj](http://plug.dj/communities/)

I don't mind you guys using this script just long as it doesn't get me into trouble due to copyright.

Permission to change anything on this script, You can always contact the author at
[PlugStation](http://chillout-lounge.webs.com/)
If there happen to be a bug or problem with the bot you can report issue [HERE](https://github.com/DJ-Neon05/Cloudbot/issues). I'll work on it ASAP! Thanks :)

##### CloudBot version: 1.7
##### Updated: June 29, 2015

You can customize this bot script once you fork it.
How to function it? scroll down [HERE](https://github.com/DJ-Neon05/Cloudbot/blob/master/README.md#installing-bot)


Features
--------
- Standalone web/socket.io server [suggestions]
- Optional SSL support for socket.io and the account API
- Synchronized playback from the following sources:
  - YouTube (individual videos + playlists) 
  - Soundcloud
  - Raw video/audio files (via JWPlayer)
- Embedding of the following sources:
  - Custom `<iframe>` and `<object>` embeds
- Channel customization
  - HTML Message of the Day
  - JavaScript
    - Give's out bot current script's link.
  - Permissions
    - Tiered ranks (Bot's Admin > Co-Host > Moderator > Leader > Member > Guest > Anonymous)
  - Chat filters (based on regular expressions)
  - Lock/unlock playlist to allow pre-addition by next dj (configurable with permissions)
- Save/load playlists per user account
- Polls
- Voteskip (can be disabled by a channel moderator)
- Auto-AFK status (can be configured per-channel)
- Leader
  - Grants control of playback to a user (Allows user to be back on waitlist) [N/A]
  - Can also be used to grant temporary mod-like powers to a user [N/A]
- Channel state saves/loads on restart 
- Account management
  - Profile avatar and text [N/A]
- Moderation
  - Mute users [N/A]
  - Ban users by name [N/A]
- Administration
  - Log viewer [N/A]
  - Global bans[N/A]
  - Stats (usercount, channelcount, RAM usage) [N/A]

[note] [N/A] defines bot doesn't have this features yet.
---
## Installing Bot
Copy and paste this code to your bookmarks bar and rename it to whatever you like.
```Javascript
javascript:(function(){$.getScript('https://cdn.rawgit.com/DJ-Neon05/Cloudbot/master/Packet/Cloudbot.js');}());
```
You can function your own bot script after forking this script.
```JavaScript
javascript:(function(){$.getScript('[YOUR BOT RAW URL]');}());
```
