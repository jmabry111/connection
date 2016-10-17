Connections = new Meteor.Collection('connections');

Connections.allow({

});

ConnectionSchema = new SimpleSchema({
  service: {
    type: String,
    label: "Service"
  },
  name: {
    type: String,
    label: "Name",
    autoform: {
      afFieldInput: {
        class: 'wide'
      }
    }
  },
  street: {
    type: String,
    label: "Street",
    optional: true,
    autoform: {
      afFieldInput: {
        class: 'wide'
      }
    }
  },
  city: {
    type: String,
    label: "City",
    optional: true,
    autoform: {
      afFieldInput: {
        class: 'medium'
      }
    }
  },
  state: {
    type: String,
    label: "State",
    autoform: {
      afFieldInput: {
        class: 'small'
      }
    }
  },
  zip: {
    type: String,
    label: "Zip Code",
    optional: true,
    autoform: {
      afFieldInput: {
        class: 'small'
      }
    }
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "Email",
    optional: true,
    autoform: {
      afFieldInput: {
        class: 'medium'
      }
    }
  },
  phone: {
    type: String,
    label: "Phone",
    autoform: {
      afFieldInput: {
        class: 'medium'
      }
    }
  },
  text: {
    type: Boolean,
    label: "Text messaging?"
  },
  membership_status: {
    type: String,
    label: "I am a:"
  },
  age_range: {
    type: String,
    label: "Age Group",
    optional: true,
  },
  meal: {
    type: Boolean,
    label: "Will you attend our Wednesday night meal?",
    autoform: {
      afFieldInput: {
        class: 'checked'
      }
    }
  },
  num_kids: {
    type: Number,
    label: "Age 3 & under",
    optional: true,
    autoform: {
      afFieldInput: {
        class: 'small'
      }
    }
  },
  num_youth: {
    type: Number,
    label: "Ages 4 - 12",
    optional: true,
    autoform: {
      afFieldInput: {
        class: 'small'
      }
    }
  },
  num_adult: {
    type: Number,
    label: "Age 13 & up",
    optional: true,
    autoform: {
      afFieldInput: {
        class: 'small'
      }
    }
  },
  prayers: {
    type: String,
    label: "Comments or Prayer Requests",
    optional: true,
    autoform: {
      afFieldInput: {
        class: 'wide'
      }
    }
  },
  contact_me: {
    type: String,
    label: "Please contact me about",
    optional: true,
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date()
    },
    autoform: {
      type: "hidden"
    }
  }
});

Meteor.methods({
  deleteConnection: function(id) {
    Connections.remove(id);
  }
});

Connections.attachSchema(ConnectionSchema);
