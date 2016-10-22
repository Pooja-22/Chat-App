/**
 * Created by pooja on 22/10/16.
 */


'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    userName: {
        type : String
    }
});

module.exports = mongoose.model('User', UserSchema);