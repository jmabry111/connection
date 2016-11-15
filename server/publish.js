Meteor.publish('connections', function(){
  return Connections.find({});
});

Meteor.publish(null, function(){
  return Meteor.roles.find({});
});
