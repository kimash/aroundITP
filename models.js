// export Schemas to web.js
module.exports.configureSchema = function(Schema, mongoose) {
    
    // Comment - is an embedded document for BlogPost
    Comments = new Schema({
      name      : String
    , text      : String
    , date      : { type: Date, default: Date.now }
    });
    
    // BlogPost - 
    var BlogPost = new Schema({
      title     : String
    , urlslug   : String
    , content   : String
    , date      : { type: Date, default: Date.now }
    , comments  : [Comments]
    , author      : {
        name : String
        , email  : String
      }
    });
    
    // Tweet
    var Tweet = new Schema({
      from_user	: String
    , from_user_name	: String
    , date      : { type: Date, default: Date.now }
    , text	: String
    });

    // add schemas to Mongoose
    mongoose.model('BlogPost', BlogPost);
    mongoose.model('Comment', Comments);
	mongoose.model('Tweet', Tweet);
};