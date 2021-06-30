const router = require('express').Router()
const fetch = require('node-fetch')

router.get('/id_data', (req, res) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((response) => res.json({response}))
})

router.get('/id_data/:id', (req, res) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}/comments`)
    .then((response) => response.json())
    .then((response) => res.json({response}))
})



module.exports = router