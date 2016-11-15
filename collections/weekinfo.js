WeekInfo = new Meteor.Collection('weekinfo');

WeekInfoSchema = new SimpleSchema({
  isMeal: {
    type: Boolean,
    label: "Any meal this week?"
  },
  currentMeal: {
    type: String,
    label: "This week's meal"
  }
});

WeekInfo.attachSchema(WeekInfoSchema);
