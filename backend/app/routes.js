import express from 'express';
import userController from './controllers/userController';
import loginController from './controllers/loginController';

const router = express.Router();

router.post('/login', loginController.login);
router.post('/token', loginController.refreshToken);
router.delete('/logout', loginController.logout);

router.use(loginController.authenticateToken);

router.post('/user', userController.createUser);
router.get('/users', userController.getAll);

module.exports = router;
