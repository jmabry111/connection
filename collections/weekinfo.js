WeekInfo = new Mongo.Collection('weekinfo');

WeekInfoSchema = new SimpleSchema({
  isMeal: {
    type: Boolean,
    label: "Is there a meal this week?",
    optional: true
  },
  currentMeal: {
    type: String,
    label: "This week's meal",
    optional: true
  }
});

WeekInfo.attachSchema(WeekInfoSchema);
