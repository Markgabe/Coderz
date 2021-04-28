import express from 'express';
import loginController from './controllers/loginController';

const router = express.Router();

router.post('/login', loginController.login);
router.post('/token', loginController.refreshTokenFunction);
router.delete('/logout', loginController.logout);

router.use(loginController.authenticateToken);

module.exports = router;
