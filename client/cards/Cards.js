Template.Cards.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('connections');
  });
});

Template.Cards.helpers({
  connections: ()=>{
    return Connections.find({});
  }
});

