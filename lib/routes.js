Accounts.onLogin(function() {
  FlowRouter.go('card');
});
Accounts.onLogout(function() {
  FlowRouter.go('home');
});

FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()) {
    FlowRouter.go('home');
  }
}]);

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout', {main: 'NewConnectionCard'});
  }
});

FlowRouter.route('/card', {
  name: 'card',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Cards'});
  }
});
