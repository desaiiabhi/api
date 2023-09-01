var express = require('express');
const{pd_insert,pd_show,pd_update,pd_delete,pd_id_search,pd_nm_search,pd_limit_skip,pd_category,category} = require('../controller/productcontroller');
var router = express.Router();

router.post('/pinsert',pd_insert);
router.get('/pshow',pd_show);
router.post('/pupdate',pd_update);
router.get('/pdelete',pd_delete);
router.get('/psearch/:id',pd_id_search);
router.get('/pnmsearch',pd_nm_search);
router.get('/plimitskip',pd_limit_skip);
router.get('/pdcategory',pd_category);
router.get('/category',category);


module.exports = router;
