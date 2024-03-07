
const express = require("express");
const productController = require('../controller/product');
const router = express.Router();

//  create post /products  
                                            //  C R U D
router
.post("/", productController.createProduct)
// get products by id
.get("/", productController.getAllProduct)
.get("/:id", productController.getIdProduct)     

// update  products by id
.put("/:id", productController.updatePut)

// update  products by patch method not overwrites
.patch("/:id", productController.updatePatch)

// delete  products
.delete("/:id", productController.deleteProduct)

exports.router = router