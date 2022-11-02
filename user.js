var UserModal = require('./user');
var req,res 
UserModal.create({
    gamename: req.body.gamename,
    review: req.body.review
})
.then(function(a){
    res.send(a)
})

