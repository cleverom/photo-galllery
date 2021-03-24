import express from 'express';
import imageRouter from './routes/image-routes.mjs';


const app = express();
app.use('/', imageRouter)

app.listen('3000', () => {
    console.log('app listening on port 3000...')
})