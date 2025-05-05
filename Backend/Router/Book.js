const router = require('express').Router()

const {insertBook , deleteById , updateById} = require('../Controller/book')

router.post('/Books' , insertBook)

router.put('/Books/:id' , updateById)

router.delete('/Books/:id' , deleteById)


module.exports = router