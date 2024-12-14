import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());


app.get('/', (req, res) => {
    res.send('Welcome welcome');
})

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// })


export default app;