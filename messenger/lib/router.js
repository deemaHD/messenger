Router.configure({
    layoutTemplate: 'layout', // default route
    loadingTemplate: 'loading', // template for loading
    waitOn: function() { return Meteor.subscribe('posts'); } // subscribes for cllection
});

Router.map(function() {
    this.route('postsList', {path: '/'});     // path for 'postList' template
    this.route('settings', {path: '/settings'});
    this.route('login', {path: '/login'});
});

var mustBeSignedIn = function() {
    if (!(Meteor.user() || Meteor.loggingIn())) {
        Router.go('login');
    } else {
        this.next();
    }
};

var goHome = function() {
    if (Meteor.user()) {
        Router.go('postsList');
    } else {
        this.next();
    }
};

Router.onBeforeAction('loading'); // show loading defore all actions

Router.onBeforeAction(mustBeSignedIn, {except: ['login']});
Router.onBeforeAction(goHome, {only: ['/', 'login']});