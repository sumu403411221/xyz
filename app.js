var express     =require("express");
var app         =express();
var bodyParser  =require("body-parser");
var request = require("request");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
	var url = "https://api.wazirx.com/api/v2/tickers";
	request(url,function(error,response,body){
		if(!error && response.statusCode==200){
			var data = JSON.parse(body);
			var keys = Object.keys(data);
			res.render("index.ejs",{data:data,keys:keys});
			
		}
	})
})

app.listen(process.env.PORT || 3000,function(){
	console.log("server started");
})