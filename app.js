
const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000


require('./db/sequlizeSetup')


app
    .use(morgan('dev'))
    .use(express.json())
    .use(cookieParser())

const coworkingRouter = require('./Routes/coworkingRoutes')
const userRouter = require('./Routes/userRoutes')
const reviewRouter = require('./Routes/reviewRoutes')



app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})


app.use('/api/coworkings', coworkingRouter)
app.use('/api/users', userRouter)
app.use('/api/reviews', reviewRouter)


app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
})


// console.log(coworkingsData[5])
// app.use((req, res, next) => {
//     const now = new Date()
//     console.log(`${now.getHours()}h ${now.getMinutes()}min${now.getSeconds()}s`)

//     next()
// })



// app.get('/api/users/:id', (req, res) => {
//     res.json({ message: `Hello Utilisateur n° ${req.params.id}` })
// })
// app.get('/api/admins/:adm', (req, res) => {
//     res.json({ message: `Hello administrateur ${req.params.adm}` })
// })
// app.get('/api/comments/:id', (req, res) => {
//     res.json({ message: `Hello commentair ${req.params.id}` })
// })

// app.get('/api/coworkings/:id', (req, res) => {
//     const result = coworkingsData.find((el) => {
//         return el.id === parseInt(req.params.id)
//     })


//     const msg = result ? (`Nom de  coworking n°${result.id}:${result.name}`) : (`le coworking  n°${req.params.id}  n'exite pas`)
//     res.json({ massage: msg })

//     try {
//         res.send(`Nom de  coworking n°${result.id}:${result.name}`)
//     } catch (error) {
//         res.send(`le coworking  n°${req.params.id}  n'exite pas`)
//     }

// })
// app.get('/api/coworkings', (req, res) => {
//     res.json({ message: `il y a ${coworkingsData.length} coworkings`, data: coworkingsData })

// })
// app.post("/api/coworkings", (req, res) => {
//     const newCoworking = req.body
//     const newId = (coworkingsData[coworkingsData.length - 1].id + 1)
//     newCoworking.id = newId

//     newCoworking.created = new Date()
//     coworkingsData.push(newCoworking)
//     res.json({ massage: 'Route de création de coworking', data: newCoworking })

// })
// app.put("/api/coworkings/:id", (req, res) => {
//     const result = coworkingsData.find((el) => {
//         return el.id === parseInt(req.params.id)
//     })
//     result.superficy = req.body.superficy

//     res.json({ massage: 'this is an update', data: result })

// })
// app.delete("/api/coworkings/:id", (req, res) => {

//     req.json({ massage: "delete coworking " })
// })





