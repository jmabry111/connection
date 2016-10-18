Template.registerHelper('formatDate', function(createdAt) {
    return createdAt.toLocaleDateString();
});
