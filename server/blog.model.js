const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  heading: String,
  text: String,
 

});
const blogModel = mongoose.model("blogSchema" , blogSchema);

module.exports = blogModel;
