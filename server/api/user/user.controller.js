/**
 * Created by pooja on 22/10/16.
 */

'use strict';

var UserService = require('./user.service');

/**
 *Save user
 * @param req
 * @param res
 */

exports.createUser = function (req, res) {
    UserService.createUser(req.body, function (err, user) {
        if (err) {
            console.log(err);
        }
        else {
            return res.status(200).json(user);
        }
    })
};

/**
 * Get user
 */

exports.getUser = function (req, res) {
    var id = req.query.id;
    UserService.getUser(id, function (err, user) {
        if (err) {
            console.log(err);
        }
        else {
            return res.status(200).json(user);
        }
    })
};
