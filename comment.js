var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/resume');

var commentSchema = mongoose.Schema({
  Name: {type:String},
  Email: {type:String},
  Phoneno:Number,
  Comments:{type:String}  
});


var comment = mongoose.model('comment', commentSchema,'comment');

module.exports=comment;