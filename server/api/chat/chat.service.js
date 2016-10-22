/**
 * Created by pooja on 22/10/16.
 */

'use strict';

var Chat = require('./chat.model');

/**
 *Save Message
 * @param data
 * @param callback
 */

exports.addMessage = function (data, callback) {
    Chat.create(data, function (err, chat) {
        if (err) {
            callback(err)
        }
        else {
            callback(err, chat)
        }
    })
};

/**
 * Get all chat messages
 */

exports.getMessages = function (callback) {
    Chat.find({}, function (err, chat) {
        if (err) {
            callback(err)
        }
        else {
            callback(err, chat)
        }
    })
};


