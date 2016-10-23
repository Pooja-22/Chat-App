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
        id : {
            type : String
        },
        name: {
            type : String
        }
    },
    time: {type: Date, default: new Date()}
});

module.exports = mongoose.model('Chat', ChatSchema);



