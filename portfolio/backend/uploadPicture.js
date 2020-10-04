var uploadPicture = require('Upload/Picture');
var router = express.Router();

router.get('/uploadPicture/:id', function(req, res, next) {
  //get object that matches the id
  let uploadPicture = users.uploadPicture.find(peep => {
    return peep.id === parseInt(req.params.id);
  });
  res.render('index', { title: 'Express' });
});