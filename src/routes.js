const {compute} = require('./func')
const {work} = require("./func2")



module.exports =  (api,opts) =>{

    api.get('/:friend/:age', work)
    api.get('/:friends', compute)

}
