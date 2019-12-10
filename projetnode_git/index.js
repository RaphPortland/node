const path = require('path')

const express = require('express')
const app = express();

var db = require('./db');

db.put('key 1', 'value 1');    
db.put('key 2', 'value 2');


app.use(express.static(path.join(__dirname, 'public')))

app.set('views', __dirname + "/views")
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home.ejs', {})

  db.get('key 1', function(err, value) {    
  if (err) {  
    return handleError(err);  
  }  
  console.log('value:', value);  
});

})

app.post('/hihi', function(request, response){
    //console.log(request.body.username);
    //console.log(request.body.userprenom);
    console.log("coucou");

});

app.get('/crea', (req, res) => {
  res.render('signup.ejs', {})


})

app.get('/dash', (req, res) => {
  res.render('dash.ejs', {})
})




app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});


