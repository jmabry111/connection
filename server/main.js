import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if(Meteor.users.find().count() < 1) {
    var users = [
      {email: 'jason@mymabry.com', roles: ['admin']}
    ];

    _.each(users, function(user) {
      var id = Accounts.createUser({
        email: user.email,
        password: "password"
      });
      Meteor.users.update(
        {_id: id},
        { $set: {'emails.0.verified' : false}}
      );
      Roles.addUsersToRoles(id, user.roles);
    });
  }
});
