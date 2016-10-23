/**
 * Created by pooja on 22/10/16.
 */

'use strict';

var User = require('./user.model');

/**
 *Save User
 * @param data
 * @param callback
 */

exports.createUser = function (data, callback) {
    User.findOne(data, function (err, user) {
        if (user) {
            callback("user already exists")
        }
        else {
            User.create(data, function (err, user) {
                if (err) {
                    callback(err)
                }
                else {
                    callback(err, user)
                }
            })
        }
    })
};

/**
 * Get user
 */

exports.getUser = function (data, callback) {
    User.findOne(data, function (err, user) {
        if (err) {
            callback(err)
        }
        else {
            callback(err, user)
        }
    })
};