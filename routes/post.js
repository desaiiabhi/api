var express = require('express');
var router = express.Router();

const{add_post,update_post,delete_post,show_post,single_post,search_post,limit_skip_post} = require('../controller/postcontroller');

router.post('/add_post',add_post);
router.post('/update_post/:id',update_post);
router.get('/delete_post/:id',delete_post);
router.get('/show_post',show_post);
router.get('/single_post/:id',single_post);
router.get('/search_post',search_post);
router.get('/limit_skip_post',limit_skip_post);

module.exports = router;