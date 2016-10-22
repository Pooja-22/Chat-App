/**
 * Created by pooja on 22/10/16.
 */

'use strict';

var ChatService = require('./chat.service');

/**
 *Save Chat
 * @param req
 * @param res
 */

exports.addMessage = function (req, res) {
    ChatService.addMessage(req.body, function (err, chat) {
        if (err) {
            console.log(err);
        }
        else {
            return res.status(200).json(chat);
        }
    })
};

/**
 * Get all courses
 */

exports.getMessages = function (req, res) {
    ChatService.getMessages(function (err, chat) {
        if (err) {
            console.log(err);
        }
        else {
            return res.status(200).json(chat);
        }
    })
};



