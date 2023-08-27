var express = require('express');
const{cart_add,cart_update,cart_delete,cart_show,cart_show_single} = require('../controller/cartcontroller');
var router = express.Router();


router.get('/cart_add/:id',cart_add);
router.get('/cart_update/:id',cart_update);
router.get('/cart_delete/:id',cart_delete);
router.get('/cart_show',cart_show);
router.get('/cart_show_single/:id',cart_show_single);


module.exports = router;
