Meteor.publish('connections', function(){
  return Connections.find({});
});

Meteor.publish('weekinfo', function(){
  return WeekInfo.find({});
});

Meteor.publish(null, function(){
  return Meteor.roles.find({});
});

Meteor.publish('allUsers', function(){
  return Meteor.users.find({});
});
