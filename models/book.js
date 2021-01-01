const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = new Schema({
  user: {type:mongoose.Schema.Types.ObjectId,ref:'users'},
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  category: { type:String,required:true},
  publishedYear: { type: String, required: true },
  imgUrl: {type:String, required:true}
},
{ timestamps: true }
)
module.exports = mongoose.model('books', Book)