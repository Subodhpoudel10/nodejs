const express = require('express')  //adding express to our project

const app = express()

//Alternative
// const app = require('express')()
app.set("view engine", "ejs")

app.get("/",(req, res)=>{
    // res.send("<div><h1>Hello Its me Subodh Poudel a well done Programmer <p>You can hire me as a your freelance programmer</p></h1></div>")  //It make our backend litter not clean and dynamic

    const person = {
        name:"Subodh Poudel",
        age: 21,
        nationality: "Nepali"
    }
    const name ="Subodh Poudel"
    res.render("home.ejs",{unique : name, person : person })
})
app.get("/about",(req, res)=>{
    res.render("about")
})

app.get("/contact",(req, res)=>{
    res.send("Contact us")
})

app.get("/blog",(req, res)=>{
    res.send("Read our Blogs")
})

app.get("/service",(req, res)=>{
    res.send("Our Services")
})




app.listen(3000,()=>{
    console.log("Nodejs server has started at port 3000")  //making function for our port number.
})

