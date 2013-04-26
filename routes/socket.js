/*
 * Serve content over a socket
 */
var mongoose = require('mongoose');

var product = require('../models/data.js');

module.exports = function (socket) {
  socket.emit('send:name', {
    name: 'Hi Klick'
  });
  var that = this;

 
  setInterval(function () {
  	getProducts();
    socket.emit('send:time', {
      time: (new Date()).toString()
    });
  }, 1000); // emit the event every 1000 ms 

  function getProducts(){
  	
  	product.find().where("categoryID").equals(3).exec(function(err,products){
    if(err){
        return;
      }
    
    
    var htmlstr = ""
    for (var i = 0; i < products.length; i++) {
    	htmlstr = htmlstr +products[i].productName+"/";
    };
 

    socket.emit('send:product',{
  	product:products
    });
    
    });
  }
};
