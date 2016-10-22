/**
 * Created by pooja on 22/10/16.
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChatSchema = new Schema({
    text: {
        type : String
    },
    from : {
        type : String
    },
    time: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Chat', ChatSchema);



