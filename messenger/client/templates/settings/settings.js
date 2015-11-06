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
    'click .submitSettings': function () {
        var options = {
            email: $('#inputEmail').val(),
            username: $('#inputName').val(),
            location: $('#location').val()
        };
        
        Meteor.users.update( Meteor.userId(), { $set: {
            'emails.0.address': options.email,
            'username': options.username,
            'profile.location': options.location
        }} );
    },
    'click .submitPassword': function () {
        var options = {
            oldPassword: $('#inputOldPassword').val(),
            newPassword: $('#inputPassword').val()
        };
        
        if (options.oldPassword && options.newPassword) {
            Accounts.changePassword(options.oldPassword, options.newPassword);    
        }
    },
    'click .settingsBtn': function () {
        $('.userSettings').removeClass('hiden');
        $('.password').addClass('hiden');
        $('.passwordBtn').removeClass('active');
        $('.settingsBtn').addClass('active');
    },
    'click .passwordBtn': function () {
        $('.password').removeClass('hiden');
        $('.userSettings').addClass('hiden');
        $('.settingsBtn').removeClass('active');
        $('.passwordBtn').addClass('active');
    }
});