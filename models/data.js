var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;
 
var productSchema = new Schema({
    id: ObjectId,
    productID: {type: Number, default: 1},
    categoryID: {type: Number, default: null},
    catalogueID: {type: Number, default: null},
    productName: {type: String, default: null},  
    productShortDesc: {type: String, default: null},
    productLongDesc: {type: String, default: null},
    productPrice:{type:String,default:null},
    productTax: {type: String, default: null},
    productLimit: {type: String, default: null},
    isActive: {type: String, default: null},
    Lang: {type: String, default: null},
    productImage: {type: String, default: null},
    quantity:{type:String,default:null},
    productSKU: {type: String, default: null}
});
 
module.exports = mongoose.model('product', productSchema);