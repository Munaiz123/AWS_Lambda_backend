console.log('FROM ONE!')

module.exports.compute = (req,res) =>{

    return res.status(200).json({
        body:"FROM FUNC1",
        msg:`Hello, ${req.params.friends}`,
        body:`https://robohash.org/${req.params.friends}`
    })
}
