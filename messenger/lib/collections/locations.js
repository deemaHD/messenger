Locations = new Mongo.Collection('locations');

Locations.allow({
    insert: function () { return false },
    remove: function () { return false },
    update: function () { return false }
});