
const express = require('express')
const app = express()
const port = 8000
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const {Schema} = mongoose


app.use(cors())
app.use(bodyParser.json())

const cosmeticsSchema  = new Schema({
    image: {type:String, required:true},
    name: {type:String, required:true},
    price: {type:Number, required:true}
}, {timestamps:true})


const Cosmetics = mongoose.model("cosmetics", cosmeticsSchema)


app.get("/cosmetics", (req,res)=>{
    Cosmetics.find({}, (err, doc)=>{
        if (!err) {
            res.send(doc)
        }else{
            res.status(404).json({message:err})
        }
    })
})

app.get("/cosmetics/:id", (req,res)=>{
    const {id} = req.params

    Cosmetics.findById(id, (err, doc)=>{
        if (!err) {
          if (doc) {
            res.send(doc)
          }else{
            res.status(404).json({message:"error"})
          }
        }else{
            res.status(500).json({message:err})
        }
    })
})

app.delete("/cosmetics/:id", (req,res)=>{
    const {id} = req.params

    Cosmetics.findByIdAndDelete(id, (err, doc)=>{
        if (!err) {
          if (doc) {
            res.send(doc)
          }else{
            res.status(404).json({message:"error"})
          }
        }else{
            res.status(500).json({message:err})
        }
    })
})


app.post("/cosmetics/",(req,res)=>{
    const cosmeticsarr= new Cosmetics({
        image: req.body.image,
        name: req.body.name,
        price: req.body.price
    })
    cosmeticsarr.save()
    res.send({mesage:"succesds"})
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


mongoose.connect("mongodb+srv://nahidzarbiyev:nahidzarbiyev@cluster0.hzrtup0.mongodb.net/?retryWrites=true&w=majority",(err)=>{
    if (!err) {
        app.listen(port, () => {
            console.log(`http://localhost:${port}`)
          })
          
    }
})