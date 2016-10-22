/**
 * Created by pooja on 22/10/16.
 */

'use strict';

var express = require('express');
var controller = require('./user.controller.js');
var router = express.Router();

router.get('/', controller.getUser);
router.post('/', controller.createUser);

module.exports = router;