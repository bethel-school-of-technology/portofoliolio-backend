var aboutMe = require('About/Me');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'About Me' });
  });
  
  module.exports = router;