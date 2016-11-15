Template.sidebar.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('weekinfo');
  });
});
