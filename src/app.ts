import express from "express";
import path from "path";
import Routes from "./Routes/Routes"

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
});
