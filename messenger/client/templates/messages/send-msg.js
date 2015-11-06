Template.sendMsg.events({
    'click .sendMsg': function(e) {
        e.preventDefault();

        var message = {
            message: $('.message').val(),
            author: Meteor.user().username,
            location: Meteor.user().profile.location
        };

        Messages.insert(message);
        
        $('.message').val('');
        $('.posts').animate({
            scrollTop: $('.posts').get(0).scrollHeight}, 1000);     
        }
});