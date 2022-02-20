var recipes = require('../recipes.json');
var router = require('express').Router();

adr = '/recipes/step/:id'

router.get(adr, function(req, res, next) {
    try{
        const id = req.params.id
        const elapsedTime = req.query.elapsedTime
        const i = parseInt(id)-1
        if (recipes[i].timers.length-1 < elapsedTime){
            res.send({index: 0});
        }else
        res.send({index:recipes[i].timers[elapsedTime]});
    }catch(err){
        res.status(400).send("NOT_FOUND")
    }
  });
module.exports = router;

