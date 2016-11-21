Meteor.subscribe('allUsers');

Template.users.helpers({
  allUsers(){ return Meteor.users.find({}); },
  email(){ return this.emails[0].address; }
});
