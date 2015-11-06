Meteor.publish('messages', function() {
    return Messages.find();
});

Meteor.publish('locations', function() {
    return Locations.find();
});