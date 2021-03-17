const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port =process.env.PORT || 3000;
const staPath = path.join(__dirname,"../public");
const staticPath = path.join(__dirname,"../templets/views");
const partialPath = path.join(__dirname,"../templets/partial");

app.set("view engine", "hbs");
app.set("views", staticPath)
hbs.registerPartials(partialPath);
app.use(express.static(staPath));
app.get('/', (req,res)=>{
    res.render("index");
});
app.get("/about", (req,res)=>{
    res.render("about.hbs");
});
app.get("/weather", (req,res)=>{
    res.render("weather");
});
app.get("*", (req,res)=>{
    res.render("404err",{
        errorMsg:'OPS!!!....Page Not Found'
    })
})

app.listen(port, ()=>{
    console.log(`Please listn on ${port}`)
})