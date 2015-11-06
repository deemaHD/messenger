Template.settings.events({
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
    
    $('.settingsForm').validate({
        rules: {
            email: {
                required: true
            },
            name: {
                required: true,
                minlength: 2
            }
        },
        submitHandler: function (e) {
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
            
            $('.alertBox').html('<div class="alert alert-success">Settings changed</div>');
        }
    });
    $('.passwordForm').validate({
        rules: {
            oldPassword: {
                required: true,
                minlength: 6
            },
            newPassword: {
                required: true,
                minlength: 6
            }
        },
        submitHandler: function (e) {
            var options = {
                oldPassword: $('#inputOldPassword').val(),
                newPassword: $('#inputPassword').val()
            };

            Accounts.changePassword(options.oldPassword, options.newPassword, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    $('.alertBox').html('<div class="alert alert-success">Password changed</div>');    
                }
            });
        }
    });
};