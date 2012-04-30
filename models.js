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
    , created_at      : String
    , text	: String
    });
    
    // Yelp
    var Yelp = new Schema({
      name : String,
      address : String,
      display_phone : String,
      rating : String,
      url : String,
      review_count : String,
      is_closed : Boolean
    });

    // add schemas to Mongoose
    mongoose.model('BlogPost', BlogPost);
    mongoose.model('Comment', Comments);
	mongoose.model('Tweet', Tweet);
	mongoose.model('Yelp', Yelp);
};