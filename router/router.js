require('dotenv').config();
const express = require('express');
const router = express.Router();
const { getAllUsersFromDB, handleUpadeUserById, getUserFromId, handleDeleteUser, handlenewUser } = require('../controller/controller');

const port = process.env.PORT || 8000;

router.get('/',(req,res)=>{
    return res.status(200).end(`go to homepage to see all users! \n http://localhost:${port}/home`);
})


router.get('/home', getAllUsersFromDB);
router.get('/home/:id', getUserFromId);
router.post('/home/add', handlenewUser);
router.patch('/home/update/:id', handleUpadeUserById)
router.delete('/home/delete/:id',handleDeleteUser )


module.exports = router;
