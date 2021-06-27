const moment = require('moment')
const api = require('lambda-api')({version:'v1.0', base:''})
const axios = require('axios')

// CORS Middleware
api.use((req,res,next)=>{
    res.cors()
    next()
})

// //Error handling middleware
api.use((err,req,res,next)=>{
    res.cors()
    next()
})

// // Build API Routes

api.register(require('./src/routes.js'))

exports.handler = async (event,context) => {

//     context.callbackWaitsForEmptyEventLoop = false;

    return api.run(event, context)


};
