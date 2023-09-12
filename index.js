import express from 'express';

const app = express();
const port = 3000;



app.get('/', (req, res) => {
    res.send('Website is up and running...')
})

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
})