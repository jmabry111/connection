Template.NewConnectionCard.events({
  'click .fa-close' : function() {
    Session.set('newRecipe', false);
  },
  'change .checked' : ()=> {
    var m = document.getElementsByClassName('checked');
    if (m.meal.checked)
      document.getElementById('mealCount').className="show",
      Session.set('mealTime', true);
    else
      document.getElementById('mealCount').className="noshow",
      Session.set('mealTime', false);
  }
});

Template.NewConnectionCard.rendered = function(){
  var noMeal = document.getElementById('no');
  var wed = document.getElementById('wednesday');
  if (noMeal){
    wed.style.display="none";
  }
}

Template.NewConnectionCard.helpers({
  services: ()=> {
    return [
      {label: "9:00", value: "9:00"},
      {label: "10:30", value: "10:30"}
    ];
  },
  membership: ()=> {
    return [
      {label: "1st time guest", value: "1st time guest"},
      {label: "2nd time guest", value: "2nd time guest"},
      {label: "Periodic attender", value: "Periodic attender"},
      {label: "Regular attender", value: "Regular attender"},
      {label: "Member", value: "Member"}
    ];
  },
  age: ()=> {
    return [
      {label: "Elementary", value: "Elementary"},
      {label: "Teen", value: "Teen"},
      {label: "Adult", value: "Adult"}
    ];
  },
  contact: ()=> {
    return [
      {label: "Becoming a Follower of Christ", value: "Becoming a Follower of Christ"},
      {label: "Church Membership", value: "Church Membership"},
      {label: "I'd like a visit from the minister", value: "I'd like a visit from the minister"},
      {label: "Serving at SMCC", value: "Serving at SMCC"},
      {label: "Other", value: "Other"}
    ];
}
});
