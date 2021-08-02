//import s
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/image', express.static(__dirname + 'public/image'))




app.get('', (req,res) => {
    res.sendFile(__dirname + '/views/index.html')
})
//listen on port 8080

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });