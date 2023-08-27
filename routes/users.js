  var express = require('express');
const{add_user,all_user,update_user,delete_user,single_user,search_user,filter_user,limitskip_user} = require('../controller/usercontroller');
var router = express.Router();

router.post('/add_user',add_user);
router.get('/all_user',all_user);
router.post('/update_user/:id',update_user);
router.get('/delete_user/:id',delete_user);
router.get('/single_user/:id',single_user);
router.get('/search_user',search_user);
router.get('/filter_user',filter_user);
router.get('/limitskip_user',limitskip_user);
  

module.exports = router;
