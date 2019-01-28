var express = require('express');
var router = express.Router();
var Comment = require('../models/comments');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/addComment', function(req, res, next) {
            comment = new Comment(req.body); // new Comment object 
            comment.save(function (err, savedComment) { // Save function of th actual comment 

                if (err) // error handling 
                    throw err;
                res.json({
                    "id": savedComment._id 
                });
            });
});

router.get('/getComments', function(req, res, next)
{
    Comment.find({}, function (err, comments) {

        if (err)
            res.send(err);
        res.json(comments);
    });
});


module.exports = router;
