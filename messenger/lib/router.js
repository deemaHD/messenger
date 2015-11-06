Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('messages'); }
});

Router.map(function() {
    this.route('msgList', {path: '/'});
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
        Router.go('msgList');
    } else {
        this.next();
    }
};

Router.onBeforeAction('loading');

Router.onBeforeAction(mustBeSignedIn, {except: ['login']});
Router.onBeforeAction(goHome, {only: ['/', 'login']});