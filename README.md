###Notes on Iron Scaffolding and Twitter Bootstrap
1. Migrating existing functionality to Iron Scaffold: Making structure more understandable,
sustainable and extensible.
2. Using Twitter Bootstrap to prototype the UI and to suggest that any deviation
from it, as a standard of reference that serves the purpose of User Affordance
should be justified. There should be good reason to deviate from an established benchmark.

###Notes on Responsive SPA functionality
Single Page Applications, which are the high standard, typically employ
1. Full Page design. Each "page" or scene occupies the full screen and adjusts to changes in screen size. This is essential for mobile-first development.
2. Animated Scrolling is required.

###Notes on Refactoring old code to modern format
So, I have created the new Iron scaffold. Next, I am making sure it has the requisite characteristic of a top tier web property: Vertical Single Page Application, proper page routing, scroll navigation, and also probably the most important aspect, that it is a real-time application. (Otherwise, why do it in Meteor? Just use some old hat).

Right now, I am trying to clean up and get all the old functionality to work in the new scaffold.

My goal is to put everything into an Object Oriented, MVC Model View Controller pattern, making the UI very easy to change without screwing everything else up. This client has a lot of ideas and it is important to work in an Agile, not a waterfall workflow. 

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
