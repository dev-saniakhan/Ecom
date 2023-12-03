// import  express  from "express"
// import dotenv from "dotenv"
// import morgan from "morgan"
// import connectDB from "./config/db.js"
// import authRout from "./routes/authRout.js"
// import cors from "cors"


// const app=express()
// app.use(cors())
// app.use(morgan('dev'))
// app.use(express.json())
// dotenv.config()
// connectDB()
// app.use('/api/v1/auth',authRout)
// app.get("/",(req,res)=>{
//     res.send({name:"hello this is get req"})
// })

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);



// })
// Your main server file
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRout from './routes/authRout.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
dotenv.config();
connectDB();

// Use the authRout for the specified path
app.use('/api/v1/auth', authRout);

app.get('/', (req, res) => {
    res.send({ name: "hello this is get req" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

