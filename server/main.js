import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if(Meteor.users.find().count() < 1) {
    var users = [
      {email: 'jason@mymabry.com', roles: ['admin']},
      {email: 'office@stonemcc.comcastbiz.net', roles: ['admin']}
    ];

    _.each(users, function(user) {
      var id = Accounts.createUser({
        email: user.email,
        password: "Stone@1234"
      });

      if (user.roles.length > 0) {
        Roles.addUsersToRoles(id, user.roles);
      }
    });
  }
  if(WeekInfo.find().count() < 1) {
    WeekInfo.insert({isMeal: true, currentMeal: "Food"});
  }
});
