var _ = require('lodash');
var Cat = require('../models/cat_model');

module.exports = function(app) {

    app.post('/cat', function (req, res) {
        var newCat = new Cat(req.body);
        newCat.save(function(err) {
            if (err) {
                res.json({info: 'error during cat create', error: err})
            }
            res.json({info: 'cat created successfully'});
        })
    });

    app.get('/cat', function (req, res) {
        Cat.find(function(err, cats) {
            if (err) {
                res.json({info: 'error during find cats', error:err});
            }
            res.json({info: 'cats found successfully', data: cats});
        });
    });

    app.get('/cat/:id', function (req, res) {
        Cat.findById(req.params.id, function (err, cats) {
            if(err) 
            {
                res.json({info: 'error during find cats', error:err});
            }
            if (cat) {
                res.json({info: 'cat found successfully', data:cats});
            }
            else 
            {
                res.json({info: 'cat not found'});
            }
        })
    });

    app.put('/cat/:id', function(req,res) {
        Cat.findById(req.params.id, function (err, cat) {
            if(err) 
            {
                res.json({info: 'error during find cats', error:err});
            }
            if (cat) {
                res.json({info: 'cat found successfully', data:cat});
            }
            else 
            {
                res.json({info: 'cat not found'});
            }

        });
    });

    app.delete('/cat/:id', function(req, res) {
        _.remove(_cats, function(cat) {
            return cat.name === req.params.id
        });
        res.json({info: 'cat removed successfully'});
    })
}