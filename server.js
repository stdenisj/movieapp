// Import needed packages
const express = require('express')
const app = express()

// import routers from controllers/
const { movieRouter } = require('./controllers/movies.js')


//  * Register middleware...

// parse the body of the HTTP requests from a URL encoded string 
app.use(express.urlencoded({extended: true}))

// parse the body of the HTTP requests from a JSON string  
app.use(express.json())

// use the `./client/build` directory to host static resources such as css and
// image files 
app.use(express.static(`${__dirname}/client/build`))


// add router for the application to use. The first argument is a prefix to all
// the paths defined in the router.

app.use('/api/movies', movieRouter)

//add catch all route to serve up the built react app for any request not made to
// /api/... routes.
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

// Set the port the server is to run on
// NOTE: keep these lines at the bottom of the file 

const PORT = process.env.PORT || 3001

// Start the server

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
