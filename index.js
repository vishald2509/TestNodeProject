const express = require('express');
const port = 5000;
const app = express();
const path = require("path");
const routes = require('./route');
app.use('/', routes);
app.use(express.static(path.join(__dirname, 'public')));

// Require static assets from public folder
app.use(express.static(path.join(__dirname, 'public')));
// Set view engine as EJS
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, ''));

app.get('/testToken',(req,res)=>{
    res.json({message: "success listening..."});
});
app.listen(port, ()=>console.log(`Now Listening on port ${port}`))

async function myFunction() {
    return "";
}

let test_abc = ()=>{
    return '';
};

