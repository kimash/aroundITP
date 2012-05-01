# AroundITP

AroundITP is a web resource for students at NYU ITP.

-----------------------

Live site: [http://arounditp.herokuapp.com/](http://arounditp.herokuapp.com/)

### Dependencies

package.json:

	{
    "name": "express_w_mongodb",
    "version": "0.0.1",
    "engines": {
        "node": "0.6.10",
        "npm": "1.1.1"
    },
    "dependencies": {
        "express": "2.5.6",
        "ejs": "latest",
        "mongoose": "2.5.6",
        "request": "2.9.153",
        "twit": "0.1.3",
        "yelp":	"0.1.1"
    	}
	}
	
Be sure to install the Node modules above via Terminal, e.g.:
	
	npm install twit
	
The Twit module requires Twitter API keys, and the Yelp module requires Yelp API keys. Sign up  as a developer on those sites for access to those features. Include keys in your .env file.
Your .env file should be included in your .gitignore file.

Heroku add-ons: MONGOLAB

### Routes

*   GET '/' - main route, links to other major routes

*   GET '/discuss' - forum page with thread list

*   GET '/entry/:urlslug' - retrieves a thread by its urlslug

*   GET '/entryById/:postId' - retrieves a thread by its unique id

*   POST '/comment' - posts a comment to a thread

*   GET '/new-entry' - form to create a new thread

*   POST '/new-entry' - posts a new thread to site and db

*   GET '/recent' - lists recent threads

*   GET '/update/:postId' - form to update a given thread

*   POST '/update' - posts update to a thread

*   GET '/data/allposts' - returns data in json format

*   GET '/jsontest' - test of remote json data

*   GET '/itptweets' - returns most recent tweets about ITP

*   GET '/localtweets' - returns most recent tweets in the vicinity of ITP

*   GET '/food' - returns 20 closest Yelp results for food

*   GET '/drink' - returns 20 closest Yelp results for bars

### Running the code

Start the Node server in Terminal (from within the directory):
	foreman start

Otherwise, run after pushing to Heroku.
	git add .
	git commit -am "commit details"
	git push heroku master
