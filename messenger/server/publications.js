Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('locations', function() {
  return Locations.find();
});