const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

router.post('/', userService.createUser);
router.put('/:id', userService.updateUser);
router.delete('/:id', userService.deleteUser);
router.get('/', userService.listUsers);
router.get('/:id', userService.getUserById);

module.exports = router;
