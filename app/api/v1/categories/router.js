const express = require('express');
const router = express();
const { create, getall, find, update, destroy } = require('./controller');


router.post('/categories', create);
router.get('/categories', getall);
router.get('/categories/:id', find);
router.put('/categories/:id', update);
router.delete('/categories/:id', destroy);

module.exports = router;