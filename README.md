###Notes on Twitter Bootstrap and Iron Scaffolding
1. Migrating existing functionality to Iron Scaffold: Making structure more understandable,
sustainable and extensible.
2. Using Twitter Bootstrap to prototype the UI and to suggest that any deviation
from it, as a standard of reference that serves the purpose of User Affordance
should be justified. There should be good reason to deviate from an established benchmark.

###Deployment to staging server
TBA. I will provide the URL here.

###GKM Prototype Roadmap
Reverse engineering project from files received from client. First step was to analyze what I have: The application that I received did NOT work, beyond a very basic level. It has a fairly unorthodox file structure. And there was little in the way of comments, nor project map, and the readme said as much. The coding style seems inappropriate for Meteor.js

Next of course, is to implement the changes the client wants to see. This should not mask the underlying problems with the application.

Third step, which is seen here, is to build out a new scaffold using Iron-Meteor and migrate the working modules over to the new application manually. This will not only help me to understand what the preceding developers were trying to achieve, but should offer clear benefits.

Standard structures offer fewer surprises.

Easier for other developers to understand.

Testable, more DRY and better performance.

Single Page Applications should be full-page, mobile-first, responsive and scrollable. ROUTING should correspond to "pages" in the UI. These may be constructed dynamically according to parameters (requests, user permissions, etc.). Because they are being assembled on-the-fly, it makes sense that routes reflect VIEWS of the MVC pattern and not the MODEL, as the previous developer seems to have preferred. Here is a first pass.


BLOG is central meeting place or main?

CALENDAR of events should belong to the main

PROFILES have photo, posts and video collections

MUSIC PLAYER is so central to the application that even though it is in musicians profiles, it should be featured more prominently in the main

Hopefully the previous developers got the sub-pub right, oAuth, outlining user permissions, admin.

There are some areas such as access to the client machine's camera that will be discontinued because of security risk and other obvious reasons, until the app is stable.
