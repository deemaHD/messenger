Template.sendMsg.events({
    'click .sendMsg': function(e) {
        e.preventDefault();

        var post = {
            message: $('.message').val(),
            author: Meteor.user().username,
            location: Meteor.user().profile.location
        };

        post._id = Posts.insert(post);
        
        $('.message').val('');
        $('.posts').animate({
            scrollTop: $('.posts').get(0).scrollHeight}, 1000);     
        }
});