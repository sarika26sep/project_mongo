const mongoose =require('mongoose');

const { Schema } = mongoose;

const user = new Schema({
  email:  String, // String is shorthand for {type: String}
  password: String,
  body:   String,
  address: [{ state: String, tal: Date ,district:String}],
  date: { type: Date, default: Date.now },
  status: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
});

const User = mongoose.model('User', user);
module.export=User;