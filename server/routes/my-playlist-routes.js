var Songs = require('../models/song')
var router = require('express').Router()

// GET all songs
router.get('/songs', (req, res, next) => {
    Songs.find({})
        .then(songs => {
            res.send(songs)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.put('/songs/:songId', (req, res, next) => {
    // req.body.userId = req.session.userId
    Songs.update(req.body)
    .then(song => {
        res.send(song)
    })
    .catch(err => {
        res.status(400).send({ Error: err })
    })
})

router.delete('/songs/:songId', (req, res, next) => {
    Songs.findById(req.params.songId)
        .then(song => {
            // if (!(song.userId.toString() == req.session.uid.toString())) {
            //     return
            // }
            song.remove()
            res.send({ message: 'Song successfully deleted from your playlist.' })
        })
        .catch(err => {
            res.status(400).send({ Error: "Cannot delete song." })
        })
})



module.exports = router