
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import router from './Routes/Routes';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000; 

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); 
app.use('/Menu', router);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));



async function run() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test', {
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
}

run();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
