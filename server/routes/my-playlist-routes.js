var Songs = require('../models/song')
var router = require('express').Router()

// GET all songs
router.get('/api/songs', (req, res, next) => {
    Songs.find({})
        .then(songs => {
            res.send(songs)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.post('/api/songs', (req, res, next) => {
    // req.body.userId = req.session.userId
    Songs.create(req.body)
    .then(song => {
        var song = {
            data: song,
            message: "Successfully added song"
        }
        res.send(song)
    })
    .catch(err => {
        res.status(400).send({ Error: err })
    })
})

router.put('/api/songs/:songId', (req, res, next) => {
    Songs.findByIdAndUpdate(req.params.songId, req.body)
    .then(song => {
        var song = {
            data: song, 
            message: "Succesfully Updated Song"
        }
        res.send(song)
    })
    .catch(err => {
        res.status(400).send({ Error: err})
    })
})

router.delete('/api/songs/:songId', (req, res, next) => {
    Songs.findById(req.params.songId, req.body)
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