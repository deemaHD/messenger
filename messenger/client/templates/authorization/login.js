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
    'click #login-button': function(e,t){
        var email = t.find('#login-email').value,
            password = t.find('#login-password').value;

        Meteor.loginWithPassword(email, password, function(err){
          console.log(err);
        });
    },
    'click #register-btn': function(e,t){
        var email = t.find('#email').value, // change to hash
            username = t.find('#username').value,
            password = t.find('#password').value,
            location = t.find('#location').value;

        Accounts.createUser({username:username,password:password,email:email, profile: {location: location}}, function(err){
          console.log(err);
        });
    }
});

Template.login.helpers({
  locations: function() {
      return Locations.find();
  }
});