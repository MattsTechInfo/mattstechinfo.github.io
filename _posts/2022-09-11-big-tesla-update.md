---
title: Big update for older Tesla's just dropped! (2022.8.10.5)
date: 2022-09-11 16:14 +01:00
category: [Electric-vehicles]
tags: [sustainable-housing,energy,electric-vehicles,tesla,home-automation]
image:
  path: /assets/img/posts/headers/tesla.png
---
For the full release notes, please see the table of contents to the right or scroll down.

![Tesla Charging Amps](/assets/img/posts/big-tesla-update/app-overview.png){: style="max-height: 450px" .right}My Tesla Model S was one of the first to arrive in Europe in 2013 and is now almost 9 years of age. I bought it as a used car (if only I was rich, I could buy a new one) about 2,5 years ago and since that time there have been two, maybe three small updates. The fact that the car still receives updates and improvements after all this time is awesome, but they are quite rare and usually don't really add functionality.

Yesterday, I got a notification in the app, an update was available. As always I schedule the update and when it's done I usually see what changed when I get into the car for the first time. This time, it was different! When I got the notification that the update was finished I soon noticed new entries in my Tesla app and there it was! Some of the most anticipated features people have been asking about for years and never thought we'd get: Remote scheduled charging/departure settings and remote charging control for the max amps. This is big! Thanks Tesla!

There are also major changes to some other things, like the UI, button configurations and driver profiles. This is one big feature rich update.

## Why is this big?
As you know, I'm into home automation and sustainable housing. Consuming electricity is something that should be in full control and I like to do that automatically based on formula's wherever possible. Before I can do things like that, I need an endpoint to talk to and set specific limits for different kinds of things. 

This endpoint was never available through any API for the older Tesla vehicles and impossible to configure. This means that whenever you plugged in the charger for the Tesla and wanted it to, for example, follow the power production of your solar, you would be in the car adjusting the maximum amps the Tesla could charge manually. 

Another big home automation example is the Scheduled Departure setting. There is one time option to set, 9:00h for example, at which the Tesla would be ready to drive with the configured state of charge (SoC). Again, this was only configurable from inside the car. Now, having that added to the app means the API endpoints have been created and we can (probably) start setting this through automation and make it, again an example, automatically follow the work schedule.

All in all, this opens up a lot of possibilities and you can find people requesting this way back in 2016 and probably even before that. Stay tuned for a post when I try to set up a project or my own custom home automation to control all this automatically from my servers.

![Tesla Charging Amps](/assets/img/posts/big-tesla-update/app-charge-amps.png){: style="max-height: 300px" .normal}![Tesla Scheduled Departure](/assets/img/posts/big-tesla-update/app-departure.png){: style="max-height: 300px" .normal}![Tesla Scheduled Charging](/assets/img/posts/big-tesla-update/app-charge.png){: style="max-height: 300px" .normal}

## Apart from that, what else?
### UI Change
So, the first thing I noticed when I got into the car: The UI changed. Now this is obviously very much down to preference, but I like the adjustments to the font. The font looks a bit more modern, is easy on the eyes and even when not directly looking at the characters used I can easily distinguish similar looking numbers and letters from eachother. The overall UI also got a little update, the car menu looks a bit more sleek and easier on the eyes if you ask me. It also looks like Spotify got an update as it seems more responsive and overall things seem less laggy on screen.

### New icons and customizable bar
There are also some new icons and "bar" which can be configured to your taste. The new setup certainly makes it look less cluttered but I'm not a fan of the random colors, I prefer my icons unified and to nicely blend in with the theme. For me, it now looks like the icons are out of place and came from some Emoji wielding Twitter wizard shouting "Look how fun and happy all these different colored icons are!!". I guess we'll have to live with it for now.
![Tesla UI Bar](/assets/img/posts/big-tesla-update/bar-design.png)

### Supercharging menu tips
Within the Charging menu, there is now a link to "Supercharging Tips" which I don't remember was ever there before, tapping the link shows the following on-screen. Which is quite interesting for people that usually don't do a lot of research into what car they are driving. Easy tips people!
![Tesla Supercharge tips](/assets/img/posts/big-tesla-update/supercharge-tips.png)

![Tesla Supercharge tips](/assets/img/posts/big-tesla-update/app-charge-stats.png){: style="max-height: 450px" .right}
### Mobile app charge stats
The Tesla app now also has a new menu called "Charge Stats" which gives an overview of where and how much you've charged the last 31 days. I feel like this menu is still quite "beta" as it seems very confused. It shows my currency in British Pounds, while I'm Dutch and use Euro's; At the same time I can only choose a "County" in the USA for location. So I'm not quite sure what's happening here, but at least I have a nice quick overview of charges from the app and a gimmicky "what I would-coulda-shoulda saved on petrol". <br />
In the screenshot you'll see the last bits of our vaction trip to Italy, we drove about 1400km back to The Netherlands in one go using the Supercharger network which took us around 20 hours due to bad traffic.

## Release notes 2022.8.10.5
Since a lot of people are currently asking for release notes and they aren't published, please find mine below, copied from the car's infotainment screen (for the 2013 Tesla Model S)

### Minor Fixes
This release contains minor bug fixes and improvements.

### Cold Weather Improvements (1)
When you navigate to a Supercharger, improved battery preconditioning delivers a faster charge.

### Language Support
Your touchscreen is now available in over 20 languages. To switch your language setting, tap Controls > Display > Language > Touchscreen.

### Mobile App Improvements
You can now adjust Charge Current, Scheduled Departure or Scheduled Charging at your car's current location from the Tesla app.<br />
Note: This functionality requires mobile app version 4.1.0.

### Cold Weather Improvements (2)
You can now enable front defrost and maintain your climate settings when clearing ice and snow. As usual, tap the fan icon and select Keep Climate On when parked.

### Driver Profiles
Each Driver Profile will now have its own individual Work and Home address. To update, select your profile, tap Navigation and long press either Work or Home.

### Customizable App Launcher
Drag and drop your favorite apps to any position along the bottom menu bar for easy access. To customize your menu bar, hold any icon and then drag to reorder. To adjust climate controls such as heated seats and defrost, tap on the temperature or swipe up from the bottom of the screen. For charging controls tap Controls > Charging.

### Cold Weather Improvements (3)
You can now precondition the cabin from the Tesla app when your battery is at a lower state of charge. Simply turn on climate from your Tesla app and override the previous setting by tapping "Yes" on the confirmation pop-up window. <br />
Note: To protect your car's battery, climate will remain unavailable under extreme low charge scenarios. This feature requires the Tesla mobile app version 4.4.0 or later.

### Dark mode
You can now change to a dark themed display. Tap Controls > Display > Appearance and select Dark.

### Hide Map Details
Simplify your navigation app and hide map details by tapping the pin button on the map.

### Active Phone Calls
Active phone calls will now be displayed in the status bar at the top of the touchscreen. You can answer, hang up or swap calls from the card anytime. Swipe up to dismiss and tap phone icon on the status bar to display again.

## Conclusion
I hope this gives you some extra information regarding this update and that I can do lots of follow-ups explaining how to use these new feautres in home automation. Let me know what you think in the comments or just join our [Discord for realtime chat ⧉](https://discord.gg/v8Bwbnb3xe){:target="_blank"}{:rel="noopener noreferrer"}! All feedback and tips are welcome, please do tell. You can contact me through the comments section, GitHub discussions or directly on GitHub. If you find any errors please open up an issue using this link [create an issue ⧉](https://github.com/MattsTechInfo/mattstechinfo.github.io/issues){:target="_blank"}{:rel="noopener noreferrer"} and I will have a look!