'use strict';

import express from 'express';
import {getMessages, addMessage} from './chat.controller'
let router = express.Router();

router.get('/', getMessages);
router.post('/', addMessage);

module.exports = router;






