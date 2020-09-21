var express = require('express');
var router = express.Router();
const models = require('../models');

/*get all items */

router.get('/', (req, res) =>{
   models.users.findAll({}).then(users =>{
     res.json (users);
   })
} )

/* get single item */
router.get('/id', (req, res) =>{

  let id = parseInt(req.params.id);

  models.users.
  findOne({
    where: {
      Userid: UserId
    }
  })
  .then(users => {
    res.json(users)
   
    });
  });

/* create item */

router.post('/create', (req, res) =>{
  let users = req.body;

  models.users.findOrCreate({
    where: {
      
      FirstName: users.FirstName,
      LastName: users.LastName,
      Username: users.Username,
      Password: users.Password,
      Email: users.Email,
    }
  })
  .spread(function(result, created) {
    if (created) {
      res.json('created');
    } else {
      res.json('This user already exists!');
    }
  });
})

/*update item */
router.put('/id', (req, res) =>{

  let Userid = parseInt(req.params.Userid);
  let users = req.body.users

  models.users.
  update(users, {where: { Userid: UserId } })
    .then(result => res.json(updated))
    .catch(err => {
      res.status(400);
      res.json("There was a problem updating the user.  Please check the user information.");
    });
});
   
/*delete item */
router.delete("/users/:Userid", function (req, res, next) {
  let UserId = parseInt(req.params.id);
  models.users
    .destroy({
      where: { Userid: UserId }
    })
    .then(result => res.json('deleted'))
    .catch(err => { 
      res.status(400); 
      res.json("There was a problem deleting the user. Please make sure you are specifying the correct id."); 
    }
);
});


module.exports = router;
