var express = require('express')
var router = express.Router()
var UserModal = require('./user')


router.get('/post',function(req,res,next){
    res.render('Write');
});

router.get('/reviews',function(req,res,next){
UserModal.find()
.then(function(data){
    res.render('read',{data});
})
});
router.get('/submit', function(req,res,next){
    UserModal.create({
        gamename: req.body.gamename,
        review: req.body.review
    })
    .then(function(a){
        res.send(a)
    })
});

router.get('/update/:id', function(req,res){
    res.render('update',{id: req.params.id})
})

router.get('/update/:id', function(req,res){
let updated = {
    gamename : req.body.gamename,
    review : req.body.review
}
})
UserModal.findOneAndUpdate({_id:req.params.id},{'$set': updated},{require:true})
.then(function(updatedData){
    res.redirect('/reviews')
})

UserModal.findOneandDelete({_id:req.params.id})
.then(function(a){
    res.redirect('/reviews')
})

router.get('/delete/:id', function(req,res){
    UserModal.findOneandDelete({_id:req.params.id})
.then(function(a){
    res.redirect('/reviews')
})
})