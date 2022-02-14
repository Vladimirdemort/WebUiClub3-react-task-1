import express from 'express'

const PORT = 5000;

const app = express();

app.get('/', (req , res) => {
    res.status(200).json ('Server Work!' + PORT)
})


app.listen(PORT, () => console.log('Get starded'));