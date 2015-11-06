Template.header.events({
    'click .logOut': function(e) {
        Meteor.logout();
    }
});