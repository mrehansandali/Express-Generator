var express = require("express");
var router = express.Router();
const productModel = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.cookie("age", 23)
  res.render("index", { title: "Rehan Sandali" });
});

router.get("/read", function(req,res){
  console.log(req.cookies)
  res.send("check clg")
})

module.exports = router;
