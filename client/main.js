Template.registerHelper('formatDate', function(createdAt) {
    return createdAt.toLocaleDateString();
});

AutoForm.addHooks(['insertCardForm'], {
  onSuccess: function(operation, result, template) {
    FlashMessages.sendSuccess('Thank you for connecting with SMCC!');
    FlowRouter.go("/");
  }
});
