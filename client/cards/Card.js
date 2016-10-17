Template.Connection.events({
  'click .fa-trash': function() {
    Meteor.call('deleteConnection', this._id);
  }
});

