var _ = require('lodash');
var dog = require('../models/dog_model');

module.exports = function(app) {

    app.post('/dog', function (req, res) {
        var newdog = new dog(req.body);
        newdog.save(function(err) {
            if (err) {
                res.json({info: 'error during dog create', error: err})
            }
            res.json({info: 'dog created successfully'});
        })
    });

    app.get('/dog', function (req, res) {
        dog.find(function(err, dogs) {
            if (err) {
                res.json({info: 'error during find dogs', error:err});
            }
            setTimeout(function() {
                res.json({info: 'dogs found successfully', data: dogs});
            },10000);
        });
    });

    app.get('/dog/:id', function (req, res) {
        dog.findById(req.params.id, function (err, dogs) {
            if(err) 
            {
                res.json({info: 'error during find dogs', error:err});
            }
            if (dog) {
                res.json({info: 'dog found successfully', data:dogs});
            }
            else 
            {
                res.json({info: 'dog not found'});
            }
        })
    });

    app.put('/dog/:id', function(req,res) {
        dog.findById(req.params.id, function (err, dog) {
            if(err) 
            {
                res.json({info: 'error during find dogs', error:err});
            }
            if (dog) {
                res.json({info: 'dog found successfully', data:dog});
            }
            else 
            {
                res.json({info: 'dog not found'});
            }

        });
    });

    app.delete('/dog/:id', function(req, res) {
        _.remove(_dogs, function(dog) {
            return dog.name === req.params.id
        });
        res.json({info: 'dog removed successfully'});
    })
}