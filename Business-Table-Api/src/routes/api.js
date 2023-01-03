const express =require('express');
const ProductsController = require('../controllers/ProductsController');

const router = express.Router();



//This is HomePage
router.get('/', function(req,res){
    res.end('This is HomePage')
});





router.get("/ProductList/:pageNo/:perPage/:searchKeyword?",ProductsController.ProductList);





module.exports=router;

