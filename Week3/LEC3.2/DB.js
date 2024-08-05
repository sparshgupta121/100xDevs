const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sparsh121:KRq6PxAffYsUxUt5@cluster0.lvze7me.mongodb.net/userapp-new')

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));