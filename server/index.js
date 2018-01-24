var express = require('express')
var server = express()
var bp = require('body-parser')
var DBConnect = require('./config/mlab/mlab-config')
var myPlaylistRoutes = require('./routes/my-playlist-routes')
// var sessions = require('./auth/sessions')
var cors = require('cors')
var port = 3000

//Middleware
server.use(cors({}))
server.use(bp.json())
server.use(bp.urlencoded({extended: true}))
server.use(express.static(__dirname + '/../public/dist'))
// server.use(sessions)


//route variables

// var userRoutes = require('./auth/auth')
// var viewContentRoutes = require('./server/routes/view-content-routes')
// var manageContentRoutes = require('./server/routes/manage-content-routes')



///register routes
server.use(myPlaylistRoutes)
// server.use(userRoutes)
// server.use(viewContentRoutes)
// server.use(Authenticate)
// server.use(manageContentRoutes)

// function Authenticate(req,res,next){
//     if(!req.session.uid){
//         return res.status(401).send({error: 'You must login to comment or post.'})
//     }
//     next()
// }

server.listen(process.env.PORT || port, () => {
    console.log('Server running on: ', port)
})









//routes

//getMyTunes (GET)

//addSongToList(POST)

//updateRank (PUT)

//deleteTrack(DELETE)

