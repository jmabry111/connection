Connections = new Meteor.Collection('connections');

ConnectionSchema = new SimpleSchema({
  time: {
    type: String,
    label: "Service time"
  },
  family: {
    type: String,
    label: "Name"
  },
  street: {
    type: String,
    label: "Street"
  },
  city: {
    type: String,
    label: "City"
  },
  state: {
    type: String,
    label: "State"
  },
  zip: {
    type: String,
    label: "Zip Code"
  },
  email: {
    type: String,
    label: "Email"
  },
  phone: {
    type: String,
    label: "Phone"
  },
  text: {
    type: Boolean,
    label: "Text messaging?"
  },
  membership_status: {
    type: String,
    label: "Status"
  },
  age_range: {
    type: String,
    label: "Age Group"
  },
  meal: {
    type: Boolean,
    label: "Wed night meal?"
  },
  num_kids: {
    type: Number,
    label: "Age 3 & under"
  },
  num_youth: {
    type: Number,
    label: "Ages 4&mdash;12"
  },
  num_adult: {
    type: Number,
    label: "Age 13 & up"
  },
  contact_me: {
    type: String,
    label: "Please contact me about"
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date()
    }
  }
});
