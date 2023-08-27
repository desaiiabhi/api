var express = require('express');
const{cat_insert,cat_show,cat_update,cat_delete} = require('../controller/catcontroller');
var router = express.Router();

router.post('/cinsert',cat_insert);
router.get('/cview',cat_show);
router.post('/cupdate',cat_update);
router.get('/cdelete',cat_delete);

module.exports = router;
