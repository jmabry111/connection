Template.meal.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('weekinfo');
  });
});

Template.meal.helpers({
  meal: ()=>{
    return WeekInfo.findOne();
  },
  updateWeekInfoId: function() {
    return WeekInfo.findOne()._id;
    //return "SRS7atXkhupLFWs33";
  }
});
