Template.settings.helpers({
  locations: function() {
      return Locations.find();
  }
});

Template.settings.rendered = function () {
    var user = Meteor.user();
    
    $('#inputEmail').val(user.emails[0].address);
    $('#inputName').val(user.username);
    $('#location').val(user.profile.location);
};

Template.settings.events({
    'click .submit': function () {
        var options = {
            email: $('#inputEmail').val(),
            username: $('#inputName').val(),
            oldPassword: $('#inputOldPassword').val(),
            password: $('#inputPassword').val(),
            location: $('#location').val()
        };
        
        Meteor.users.update( Meteor.userId(), { $set: {
            'emails.0.address': options.email,
            'username': options.username,
            'profile.location': options.location
        }} );
        
        if (options.oldPassword && options.password) {
            Accounts.changePassword(options.oldPassword, options.password);    
        }
    }
});