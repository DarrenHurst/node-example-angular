//mongoose hook up
var mongoose = require('mongoose');

var product = require('../models/data.js');

exports.init = function(app){

 
  app.get('/getProductsByCategoryID',this.getProductsByCategoryID);
  app.get('/getProductByID',this.getProductByID);
}

//list of catalogue.. 
exports.getProductsByCategoryID = function(req, res) {
  var url = require('url');
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
 
   
    var catid = query.categoryID;
    var clog = query.catalogueID;

    

    product.find().where("categoryID").equals(catid).where("catalogueID").equals(clog).exec(function(err,products){
    if(err){
        res.send('{"status":"'+err+'"}');//error 
      }
    
    res.send(products);//res
    
    });
}
//list of catalogue.. 
exports.getProductByID = function(req, res) {
  var url = require('url');
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
    
    //var patt = new RegExp('^' +query.q,"i");
    //console.log(patt);
   
    var prodid = query.productID;



    product.find().where("productID").equals(prodid).exec(function(err,product){
    if(err){
        res.send('{"status":"'+err+'"}');//error 
      }
    
   
    console.log(product,query.productID);
    res.send(product);//res
    
    });
}
