import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './src/dbcofig/dbConfig.js'
dotenv.config()

const app = express()

const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

connectDB()

import FormRouter from './src/router/FormRouter.js'
app.use("api/v1/form", FormRouter)

//global error handing 

app.use("/", (req, res)=>{
    const error = {
        message: "You dont have promission "
    }
})

app.listen(PORT, (error)=>{
    error
    ? console.log(error)
    :console.log(`server is running at http://localhost:${PORT}`)
})