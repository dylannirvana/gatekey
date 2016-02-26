Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('calendar', {
  name: 'calendar',
  controller: 'CalendarController',
  where: 'client'
});

Router.route('playlist', {
  name: 'playlist',
  controller: 'PlaylistController',
  where: 'client'
});

Router.route('profiles', {
  name: 'profiles',
  controller: 'ProfilesController',
  where: 'client'
});

Router.route('blog', {
  name: 'blog',
  controller: 'BlogController',
  where: 'client'
});
