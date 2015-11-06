Template.login.events({
    'click .loginBtn': function () {
        $('.login').removeClass('hiden');
        $('.registration').addClass('hiden');
        $('.registrBtn').removeClass('active');
        $('.loginBtn').addClass('active');
    },
    'click .registrBtn': function () {
        $('.registration').removeClass('hiden');
        $('.login').addClass('hiden');
        $('.loginBtn').removeClass('active');
        $('.registrBtn').addClass('active');
    },
    'click #login-button': function (e) {
        var email = $('#login-email').val(),
            password = $('#login-password').val();

        Meteor.loginWithPassword(email, password, function(err){
            if (err) console.log(err);
        });
    },
    'click #register-btn': function (e) {
        var options = {
            email: $('#email').val(),
            username: $('#username').val(),
            password: $('#password').val(),
            location: $('#location').val()    
        };

        Accounts.createUser({ 
            username: options.username, 
            password: options.password, 
            email: options.email, 
            profile: {location: options.location}
        }, function (err) {
          if (err) console.log(err);
        });
    }
});

Template.login.helpers({
    locations: function () {
        return Locations.find();
    }
});