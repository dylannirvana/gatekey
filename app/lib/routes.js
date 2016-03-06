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

Router.route('hotblog', {
  name: 'hotblog',
  controller: 'HotblogController',
  where: 'client'
});

Router.route('chitchat', {
  name: 'chitchat',
  controller: 'ChitchatController',
  where: 'client'
});

Router.route('countdown', {
  name: 'countdown',
  controller: 'CountdownController',
  where: 'client'
});
