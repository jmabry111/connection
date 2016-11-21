Template.user.helpers({
  updateUserId: function() {
    return this._id;
  },
  email(){ return this.emails[0].address; }
});
