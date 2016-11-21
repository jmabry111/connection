Schema = {};

Schema.User = new SimpleSchema({
  emails: {
    type: Array
  },
  "emails.$": {
    type: Object
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean,
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  profile: {
    type: Schema.UserProfile,
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true,
    autoform: {
      afFieldInput: {
        class: 'services'
      }
    }
  },
  roles: {
    type: Array,
    optional: true
  },
  'roles.$': {
    type: String
  },
  heartbeat: {
    type: Date,
    optional: true,
    autoform: {
      type: "hidden"
    }
  }
});

Meteor.users.attachSchema(Schema.User);

Meteor.users.allow({
  insert: function() {
    return false;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return false;
  }
});
