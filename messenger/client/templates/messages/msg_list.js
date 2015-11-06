Template.msgList.helpers({
    messages: function() {
        return Messages.find({location: Meteor.user().profile.location});
    }
});

Template.msgList.rendered = function () {
    $('.posts').animate({
        scrollTop: $('.posts').get(0).scrollHeight}, 500);   
};