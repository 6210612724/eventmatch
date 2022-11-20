var express = require('express')
var cors = require('cors')
var app = express()

// import models
const product = require("./models/product")
const location = require("./models/location")
const activity = require("./models/activity")
const user = require("./models/user")


// Mongoose
const mongoose = require("mongoose");
const dbName = "allData"
// ถ้าไม่เลือก database name มันจะสร้าง database "test" ให้อัตโนมัติ
const url = `mongodb://123456:102030@ac-8cirrld-shard-00-00.wknopaa.mongodb.net:27017,ac-8cirrld-shard-00-01.wknopaa.mongodb.net:27017,ac-8cirrld-shard-00-02.wknopaa.mongodb.net:27017/${dbName}?ssl=true&replicaSet=atlas-l9gxf6-shard-0&authSource=admin&retryWrites=true&w=majority`
// ใน mongodb atlas ให้เลือก Driver Node.js ที่ Version "2.2.12 or later"

// jswebtoken
var jwt = require('jsonwebtoken');
var secret = 'SteveJobsHaha'

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



async function add_data() {
  for (let i = 0; i <= 10; i++) {
    await product.findOneAndUpdate({ productId: i }, { productId: i, productName: `Product${i}`, productPrice: i * 100 }, { upsert: true })

    const location_data = new location({
      locationId: i,
      locationName: `location ${i}`,
      lon: 5,
      lat: 200,
    })

    await location_data.save()

    // const Product_data = new Product({ productId: i, productName: `Product${i}`, productPrice: i*10 })
    // await Product_data.save()
  }

}

async function findAll_data(collection) {
  console.log("finding data",)
  let data
  switch (collection) {
    case "location":
      data = await location.find({})
      break
    case "product":
      data = await product.find({})
      break
    case "activity":
      data = await activity.find({})
      break
    case "user":
      data = await user.find({})
      break
    default:
      return { error: "wrong path" }



  }

  return data

}



//ใช้ cors เพราะว่าทำให้ส่งข้อมูลผ่านเซิฟเวอร์คนละ domain ได้
app.use(cors())

app.get('/products/:id', function (req, res, next) {
  // res.json({ msg: 'This is CORS-enabled for all origins!', data: req.params.id })
  res.send({ msg: 'This is CORS-enabled for all origins!', data: req.params.id })
})

app.get('/', (req, res) => {
  res.send("this is node js index page")
})

app.get('/insert/activity', (req, res) => {
  let activity_data = new activity(req.query)
  activity_data.save()
  console.log(JSON.stringify(req.query))
})

app.get('/insert/register', (req, res) => {
  let register_data = new user(req.query)
  register_data.save()
  console.log(JSON.stringify(req.query))
})

app.get('/login', async (req, res) => {
  // let login_data = new user(req.query)
  let username = req.query.username
  let password = req.query.password
  let check_login = await user.findOne({username:username,password:password})

  if(check_login != null){ 

    var token = jwt.sign({ username: username }, secret);
    // res.json({status:'ok',message:'login success',token})
    console.log(token)
  }else{
    check_login = "Wrong Username or Password..."
  }
  
  console.log(check_login)
  
  // console.log(JSON.stringify(req.query))
})






app.get('/add', (req, res) => {
  add_data()
  res.send("add data page")
})

app.get('/reset', async (req, res) => {
  product.remove().exec()
  location.remove().exec()
  activity.remove().exec()
  user.remove().exec()

  res.send("deleted all data")
})

app.get('/find/:collection', async (req, res) => {
  var data = await findAll_data(req.params.collection)


  res.json(data)
  // res.status(400)
})

app.listen(port = 4000, function () {
  console.log(`CORS-enabled web server listening on port ${port}`)
  console.log(`http://localhost:${port}`)

})