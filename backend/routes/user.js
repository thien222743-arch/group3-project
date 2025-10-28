const express = require('express');
const router = express.Router();
// Đảm bảo bạn require đúng đường dẫn
const userController = require('../controllers/userController'); 

// Các route API
router.get('/', userController.getAllUsers); // <-- SỬA LẠI TÊN HÀM
router.post('/', userController.createUser);

// --- TẠM THỜI VÔ HIỆU HÓA NHỮNG HÀM CHƯA VIẾT ---
// router.put('/:id', userController.updateUser);
// router.delete('/:id', userController.deleteUser);

module.exports = router;