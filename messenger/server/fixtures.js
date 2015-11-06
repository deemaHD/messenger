if (Posts.find().count() === 0) {
    Posts.insert({
      message: 'Introducing Telescope'
    });

    Posts.insert({
      message: 'Meteor'
    });
}

if (Locations.find().count() === 0) {
    Locations.insert({
      name: 'Ukraine'
    });

    Locations.insert({
      name: 'Poland'
    });

    Locations.insert({
      name: 'Bulgaria'
    });
}