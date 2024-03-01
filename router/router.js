const express = require('express');
const router = express.Router();
const { getAllUsersFromDB, handleUpadeUserById, getUserFromId, handleDeleteUser, handlenewUser } = require('../controller/controller');

router.get('/home', getAllUsersFromDB);
router.get('/home/:id', getUserFromId);
router.post('/home/add', handlenewUser);
router.patch('/home/update/:id', handleUpadeUserById)
router.delete('/home/delete/:id',handleDeleteUser )


module.exports = router;
