const path = require('path');
const router = require('express').Router();


//set up GET route to serve index.html
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
//set up the get route to serve animals.html
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/animals.html'))
})

//set up GET route to serve up the zookeepers file
router.get('/zookeeper', (req,res) =>{
res.sendFile(path.join(__dirname,'../../public/zookeepers.html'))
});
module.exports = router;