/**
 * Created by pooja on 22/10/16.
 */

'use strict';

var express = require('express');
var controller = require('./chat.controller.js');
var router = express.Router();

router.get('/', controller.getMessages);
router.post('/', controller.addMessage);

module.exports = router;






