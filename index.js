const express = require("express")
const bodyParser = require("body-parser")
const fetch = require("node-fetch")
const port = 8080

const app = new express()
app.use(require("body-parser").json())

app.get("/accreditamento", (req, res) => {
  res.json({nome: "Lorenzo", cognome: "Giavarini"})
})

app.post("/somma-dispari", (req, res) =>{
  const dispari = req.body.numbers.filter(e => e%2)
  const sum = dispari.reduce((somma, num) => {
    somma += num
    return somma
  })
  res.json({sum: sum})
})

app.post("/somma-dispari2", (req, res) =>{
  const gigio = req.body.numbers
  let somma = 0, count = 0
  gigio.forEach( i =>  {
    if (i%2===1) {somma+=i}})
  res.json({sum: somma})
})

app.put('/lista-parole-a', (req, res) => {
  const parole = req.body.words
  let somma = 0, parola = ""
  console.log(req.body)
  parole.forEach( i =>  {
    if (i.length>3) {
      somma+=1 
      parola+=i+" "
    }
    
  }
    )
  const alorap = parola.slice(0, -1)
  res.json({count: somma, words: alorap})
})

app.post("/comments", (req, res) =>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${req.body.id}/comments`)
  .then(response => response.json())
  .then(data =>{
    console.log(data[0].body)
    function WordCount(str) {
      return str.split(" ").length;
    }
    p = WordCount(data[0].body)
    res.json({count: p + 3})
  })
})

app.listen(port, () => console.log("App listening at port:", port))
