const { Router } = require('express');
const Shose = require('./models');
const cors = require('cors');

const router = Router();
router.use(cors());