Meteor.subscribe('weekinfo');

Template.meal.helpers({
  meal: ()=>{
    return WeekInfo.findOne();
  },
  updateWeekInfoId: function() {
    return WeekInfo.findOne()._id;
  }
});
