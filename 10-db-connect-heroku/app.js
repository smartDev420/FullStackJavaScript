var util = require('util')
var url = require('url')
var client = require ('mongodb').MongoClient

// Script that will work on Heroku with MongoLab

var dbConnUrl = process.env.MONGOLAB_URI ||
  'mongodb://127.0.0.1:27017/test'


console.log('db server: ', dbConnUrl)

client.connect(dbConnUrl, {}, function(error, db) {
	console.log('error: ', error)
	db.listCollections().toArray(function(err, collections) {
    console.log('error: ', error)
		console.log('collections: ', collections)
    db.close()
	})
})
