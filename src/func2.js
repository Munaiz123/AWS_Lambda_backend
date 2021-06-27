
const axios = require('axios')

module.exports.work = async (req,res) =>{

    // let image = await axios.post(`img:https://robohash.org/${req.params.friends}`)


    return res.status(200).json({
        body:`My friend,${req.params.friend}, is ${req.params.age}`,
        img:`https://robohash.org/${req.params.friend}${req.params.age}`


    })
}
