var express = require('express');
var router = express.Router();

/*GET Search team matches*/
router.get('/', function(req, res, next) {
    var db = req.db;
    var collection = db.get('matchesinfo');
    var search = req.query.search;
    //console.log(search);
    collection.find({ $or: [{team1:{$regex : "(?i).*"+search+".*"}},{team2:{$regex : "(?i).*"+search+".*"}}]},{},function(e,docs){
        //console.log(docs);
        res.render('matchlist', {
            "matchlist" : docs
        });
    });
});


/* GET Matchlist page. */
router.get(['/seasons/:number','/seasons'], function(req, res) {
    var db = req.db;
    var collection = db.get('matchesinfo');
    var season = req.params.number;
    //console.log(season);
    if(season == undefined) season=2008;
    collection.find({season:parseInt(season)},{},function(e,docs){
        res.render('matchlist', {
            "matchlist" : docs
        });
    });
});

/* GET  Individual Match page. */
router.get('/match/:number', function(req, res) {
    var db = req.db;
    var collection = db.get('matchesinfo');
    var number = req.params.number;
    //console.log(req.params);
    collection.find({id:parseInt(number)},{},function(e,docs){
        //console.log(docs);
        res.render('matchdetails', {
            "match" : docs[0]
        });
    });
});

module.exports = router;
