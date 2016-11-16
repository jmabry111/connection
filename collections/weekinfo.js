WeekInfo = new Mongo.Collection('weekinfo');

WeekInfoSchema = new SimpleSchema({
  isMeal: {
    type: Boolean,
    label: "Is there a meal this week?"
  },
  currentMeal: {
    type: String,
    label: "This week's meal"
  }
});

WeekInfo.attachSchema(WeekInfoSchema);
