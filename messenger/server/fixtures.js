if (Messages.find().count() === 0) {
    Messages.insert({
        message: 'Hello',
        location: 'Ukraine',
        author: 'user1'
    });

    Messages.insert({
        message: 'Hi',
        location: 'Ukraine',
        author: 'user2'
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