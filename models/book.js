const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  category: { type:String,required:true},
  publishedYear: { type: Date, required: true },
},
{ timestamps: true }
)
module.exports = mongoose.model('books', Book)