import express from 'express';
import webController from "./api/web/controller.js";
import apiUserController from "./api/user/controller.js";
import apiFeedController from "./api/feed/controller.js";
import fileController from "./api/file/controller.js";
import logging from "./middleware/logging.js";
import jwtVerify from "./middleware/jwtVerify.js";
import multer from 'multer';
const upload = multer({dest: 'uploads/'});

const router = express.Router();

router.get('/', webController.home);
router.get('/page/:page', webController.page);

router.use(logging);

router.post('/api/upload', upload.single('file'), fileController.upload);
router.post('/api/download', fileController.download);

router.get('/sitemap', webController.sitemap);

router.post('/api/user/register', apiUserController.register);
router.post('/api/user/login', apiUserController.login);

router.get('/api/user/:id', apiUserController.userinfo);

router.get('/api/feed', jwtVerify, apiFeedController.index);
router.post('/api/feed', jwtVerify, apiFeedController.store);
router.get('/api/feed/:id', jwtVerify, apiFeedController.show);
router.post('/api/feed/:id', jwtVerify, apiFeedController.update);
router.post('/api/feed/:id/delete', jwtVerify, apiFeedController.destroy);

export default router;