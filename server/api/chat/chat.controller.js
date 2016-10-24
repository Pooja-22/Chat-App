/**
 * Created by pooja on 22/10/16.
 */

'use strict';

import {addMessage, getMessages} from './chat.service'

/**
 *Save Chat
 * @param req
 * @param res
 */

exports.addMessage = function (req, res) {
    addMessage(req.body, function (err, chat) {
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
    getMessages(function (err, chat) {
        if (err) {
            console.log(err);
        }
        else {
            return res.status(200).json(chat);
        }
    })
};



