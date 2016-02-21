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