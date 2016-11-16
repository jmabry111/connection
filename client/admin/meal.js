Meteor.subscribe('weekinfo');

Template.meal.helpers({
  meal: ()=>{
    return WeekInfo.findOne();
  }
});
