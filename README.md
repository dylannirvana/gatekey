###GKM Prototype Roadmap
Reverse engineering project from files received from client. First step was to analyze what I have: The application that I received did NOT work, beyond a very basic level. It has a fairly unorthodox file structure. And there was little in the way of comments, nor project map, and the readme said as much. The coding style seems inappropriate for Meteor.js

Second step, which is seen here, is to build out a new scaffold using Iron-Meteor and migrate the working modules over to the new application manually. This will not only help me to understand what the preceding developers were trying to achieve, but should offer clear benefits.
###Standard structures offer fewer surprises
###Easier for other developers to understand
###Testable, more DRY and better performance

Third, windows will be full-page, mobile-first, responsive and scrollable. That way, we have a decent UI to drop everything into.

Fourth, ROUTING corresponds to UI's "pages" in a Single Page Application. These may be constructed dynamically according to parameters (requests, user permissions, etc.). Because they are being assembled on-the-fly, it makes sense that routes reflect VIEWS of the MVC pattern and not the MODEL, as the previous developer seems to have preferred. Here is a first pass.

###BLOG is central meeting place
###CALENDAR of events
###PROFILES
###MUSIC PLAYER

The fifth stage would be to get the sub-pub right, oAuth, outlining user permissions, admin.

There are some areas such as access to the client machine's camera that will be discontinued because of security risk and other obvious reasons.
