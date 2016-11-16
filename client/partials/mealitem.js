Meteor.subscribe('weekinfo');

Template.mealitem.helpers({
  mealitem: ()=>{
    return WeekInfo.findOne();
  }
});
