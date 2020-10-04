var uploadResume = require('Upload/Resume');
var router = express.Router();

router.get('/uploadResume/:id', function(req, res, next) {
  //get object that matches the id
  let uploadResume = users.uploadResume.find(peep => {
    return peep.id === parseInt(req.params.id);
  });
  res.render('index', { title: 'Express' });
});