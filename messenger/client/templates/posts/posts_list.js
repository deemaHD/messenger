Template.postsList.helpers({
  posts: function() {
    return Posts.find({location: Meteor.user().profile.location});
  }
});

Template.postsList.rendered = function () {
    $('.posts').animate({
        scrollTop: $('.posts').get(0).scrollHeight}, 500);   
};