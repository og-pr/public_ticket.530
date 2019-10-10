React-Native Monorepo: SimpleLanding
=================
"SimpleLanding" is sample code of a landing page, in a monorepo.

The use case is to embed a single app such as a game like ```Little Shooter``` ([demo](http://bobylito.me/littleshooter2/)|[code](https://github.com/bobylito/littleshooter2))
or ```Dodgy``` ([demo](https://brandonstilson.com/dodgygame/)|[code](https://github.com/bbstilson/react-dodgy-game)) in it. For example: the repo user would refactor any of the above 
games and add mobile specific code, as needed.


As reminder, this monorepo is an example for how to share code between different platforms (Web, Android, & iOS). 
The landing page for web is built and the repo user can use [ticket.520](https://github.com/og-pr/public_ticket.520) or [ticket.522](https://github.com/og-pr/public_ticket.522) to help create the mobile apps. 
The key to code sharing is React-Native's [Platform-specific extensions](https://facebook.github.io/react-native/docs/platform-specific-code.html#platform-specific-extensions). The extensions are ```.native.js``` , 
```.ios.js``` or ```.android.js``` and when used, the relevant platform file is compiled.

The main benefit of any monorepo is to share application logic. Another benefit is 
the rendering of individual components unique to each platform. For this repo, 
development is webapp first AND then mobile.

Installation
============

* Get the repo
* From root directory, do ```yarn```
* Change root/android/local.properties as needed 
* From root/ios directory, do ```pod install``` (if needed)

**Required:** React-Native working per [Getting Started](https://facebook.github.io/react-native/docs/getting-started). If using React-Native ^0.60 , make sure    
you review the [blog post](https://facebook.github.io/react-native/blog/2019/07/03/version-60) & use the [upgrade guide](https://react-native-community.github.io/upgrade-helper/?from=0.59.8&to=0.60.4). As notes in those links, update these files
* Change root/android/build.gradle as needed 
* Change root/android/app/build.gradle as needed 
* Change root/android/gradle.properties as needed
* etc

Run
===

For each platform, from the root directory, do

### Web
* ```node_modules/.bin/webpack -p --progress```
* ```node_modules/.bin/webpack-dev-server --content-base public/ --config ./webpack.config.js --port 3001 --inline --hot --colors```
* Manually open a browser to localhost:3001 to see webapp 
* Inspect browser window = open console to see shared code working on button click

### Android
* ```react-native run-android -- --clear-cache```

### iOS
* ```react-native run-ios``` or open ```ios/SimpleLanding.xcodeproj``` with Xcode

Demo & Animated GIFs
===========
* [Live Demo](https://t-530-react.web.app/) at [Firebase Hosting](https://firebase.google.com/docs/hosting)
* [Google PageSpeed Analysis](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ft-530-react.web.app%2F&tab=mobile)

![Animated GIF - Landing Page iOS](https://github.com/og-pr/public_ticket.530/blob/master/SimpleLanding/_docs/ezgif-720_ios.gif)
![Animated GIF - landing Page Android](https://github.com/og-pr/public_ticket.530/blob/master/SimpleLanding/_docs/ezgif-720_android.gif)
![Animated GIF - Landing Page Desktop](https://github.com/og-pr/public_ticket.530/blob/master/SimpleLanding/_docs/ezgif-720_web.gif)

Notes - Development
===========
* [Forms](https://flaviocopes.com/react-forms/) left as exercise to repo user
* To save on final bundle/file size, 1 device used from [HTML5 Mockups](https://github.com/pixelsign/html5-device-mockups)
* To save on final bundle/file size, [individual SVGs](https://github.com/FortAwesome/Font-Awesome/tree/master/svgs/solid) used instead of [FontAwesome React](https://github.com/FortAwesome/react-fontawesome)

Notes - Miscellaneous 
=====
* Lerna or Yarn Workspaces is not used ; there is only 1 ```node_modules``` folder.
* Landing pages may not need a monorepo; this is true if mobile apps are *not* needed. 

Inspiration
===========
* [Start Bootstrap - New Age theme](https://startbootstrap.com/themes/new-age/)
* [How to convert any webpage to React JS](https://medium.com/javascript-in-plain-english/how-to-convert-any-web-page-to-reactjs-9740f1ba15db)
* [How to create a portfolio website using React.js](https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/) 
* [Build a Landing Page in React Native](https://alligator.io/react/react-native-flexbox/) using flexbox
* I [replicated](https://medium.com/@gabriel_gamil/wow-i-replicated-a-bootstrap-4-free-web-template-theme-with-reactjs-59650683c99c) a [Bootstrap](https://getbootstrap.com/) free web template theme with React.js
