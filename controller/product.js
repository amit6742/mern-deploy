const fs = require("fs");
const model = require("../models/product");
const Product = model.Product;
// mvc model-views-controller
exports.createProduct = (req, res) => {
  const product = new Product(req.body);
  
  product.save((err, doc) => {
    console.log({ err, doc });
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json(doc);
    }
  });
};
exports.getAllProduct = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.getIdProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
};

exports.updatePut = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body,{new:true});
    res.status(201).json(doc);
  } catch (error) {
   res.status(400).json(error)
  }
};
exports.updatePatch = async(req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body,{new:true});
    res.status(201).json(doc);
  } catch (error) {
   res.status(400).json(error)
  }
};
exports.deleteProduct = async(req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndDelete({ _id: id });
    res.status(201).json(doc);
  } catch (error) {
   res.status(400).json(error)
  }
};
