Template.registerHelper('formatDate', function(createdAt) {
    //return createdAt.toLocaleDateString();
    return moment(createdAt).day(-0).format("MM/DD/YYYY");
});

AutoForm.addHooks(['insertCardForm'], {
  onSuccess: function(operation, result, template) {
    FlashMessages.sendSuccess('Thank you for connecting with SMCC!');
    FlowRouter.go("/");
  }
});
