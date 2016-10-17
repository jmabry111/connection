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
