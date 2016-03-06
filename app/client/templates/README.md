Readme for TEMPLATES
Templates represent "pages" in the application.

Template routes should be named according to their function.
The total list of functions need to identified in schema, e.g.,
-audio player
-gallery
-countdown calendar
-ticketing
-chat / "facebook"
-merch

How is this to be organized? What is the "center" of the application?
The Main Purpose? Structure Templates simply.

How are the user-side and admin UI to be reflected in the Templates?

LAYOUTS
Abstract the layouts to be applied to templates. DRY and in one place.

CONTROLLERS
Each Template may have its own controller and ROUTE.

### Notes on Twitter Bootstrap and Iron Scaffolding
1. Migrating existing functionality to Iron Scaffold: Making structure more understandable,
sustainable and extensible.
2. Using Twitter Bootstrap to prototype the UI and to suggest that any deviation
from it, as a standard of reference that serves the purpose of User Affordance
should be justified. There should be good reason to deviate from an established benchmark.
