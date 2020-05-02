const path = require('path')
const express = require("express")
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000
//express paths
console.log(__dirname)
console.log(path.join(__dirname,'../public'))
const viewsPath = path.join(__dirname,'../Templates/views')
const partialsPath = path.join(__dirname,'../Templates/partials')
const staticPath =  path.join(__dirname,'../public')

//setup handlebars
app.set('view engine','hbs')
hbs.registerPartials(partialsPath)
app.use(express.static(staticPath))
app.set('views',viewsPath)

//set pages
app.get('',(req, res)=>{
    res.render('index',{
        title:'weather app',
        name:'N1hil'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'gbt rbg',
        name:'N1hil'
    })
})
app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({error:'you must provide search code'})
    }
    console.log(req.query.search)
    res.send({
        products:[]
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.location){
        return res.send({error:'you must provide a location'})
    }
    res.send({
        forecast:"snowing",
        location: "Philadelphia",
        adress:req.query.location})
})

app.get('/help/*',(reg,res)=>{
    res.render('not_found',{
        page_name:'help page'
    })
})
app.get('*',(reg,res)=>{
    res.render('not_found',{
        page_name:'page',
        title:'Not Found',
        name:'N1hil'
    })
})



app.listen(port,()=>{
    console.log('server is up on port ' + port)
})