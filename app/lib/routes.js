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


Router.route('community', {
  name: 'community',
  controller: 'CommunityController',
  where: 'client'
});

Router.route('countdown', {
  name: 'countdown',
  controller: 'CountdownController',
  where: 'client'
});

Router.route('tickets', {
  name: 'tickets',
  controller: 'TicketsController',
  where: 'client'
});

Router.route('chat', {
  name: 'chat',
  controller: 'ChatController',
  where: 'client'
});

Router.route('kickstarter', {
  name: 'kickstarter',
  controller: 'KickstarterController',
  where: 'client'
});

Router.route('blog', {
  name: 'blog',
  controller: 'BlogController',
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

Router.route('diary', {
  name: 'diary',
  controller: 'DiaryController',
  where: 'client'
});