import express from 'express';
import mongoose from 'mongoose';
const cors = require ('cors');
// const express = require('express')

// app.use(cors());
const PORT = 5000;
const mongooseUrl = 'mongodb+srv://user:user@cluster0.vg2v9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const app = express()
app.use('/catalog', require('./'));
app.use(cors({ origin: '*' }));


// app.get('/', (req , res) => {
//     console.log(req.body);
//     res.status(200).json ('Server Work!') 
// })

async function startApp () {
    try {
      await mongoose.connect(mongooseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
app.listen(PORT, () => console.log(`Get starded ${PORT}`)); 

} catch (e) {
    console.log('Server error', e.message);
    process.exit(1);
  }
}
startApp();