const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
app.set('view engine', 'hbs');
const publicDirectoryPath = path.join(__dirname,'../public');
const partialsPath = path.join(__dirname, '../templates/partials')
const viewsPath = path.join(__dirname,'../templates/views');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectoryPath))
app.get('',(req, res) =>{
    res.render('index', {
        name: 'Sreenath P N',
        age : 26
    })
});

app.get('/help',(req, res)=>{
    res.render('help', {
        helpText: 'For help contact us!'
    })
});

app.get('/help/*', (req, res)=>{
    res.render('notfound',{
        message: 'help Not found'
    })
})

app.get('*', (req, res)=>{
    res.render('notfound',{
        message: 'Not found'
    })
})

app.listen(3000,(data)=>{
    console.log("Server running successfully!!")
})