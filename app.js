const 
  express = require('express'),
  app = express(),
  MongoClient = require('mongodb').MongoClient;

app.set('view engine', 'pug');
app.use(express.static(__dirname + "/client"));






 
app.get("/", function(req, res){
  res.render('main');
});



app.listen(process.env.PORT || 3000, () => {
  console.log("Server running, port 3000...")
})

