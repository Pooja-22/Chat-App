/**
 * Created by pooja on 22/10/16.
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChatSchema = new Schema({
    message: {
        type : String
    }
});

module.exports = mongoose.model('Chat', ChatSchema);



