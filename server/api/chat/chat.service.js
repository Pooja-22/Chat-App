/**
 * Created by pooja on 22/10/16.
 */

'use strict';

let Chat = require('./chat.model');

/**
 *Save Message
 * @param data
 * @param callback
 */

exports.addMessage = function (data, callback) {
    Chat.create(data, callback)
};

/**
 * Get all chat messages
 */

exports.getMessages = function (callback) {
    Chat.find({}, callback)
};


